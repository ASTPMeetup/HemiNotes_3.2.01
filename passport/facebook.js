var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/StudentModel');
//fb.js file ignored in github push for security
var fbConfig = require('../fb.js');

module.exports = function(passport) {

    passport.use('facebook', new FacebookStrategy({
        clientID          : fbConfig.appID,
        clientSecret      : fbConfig.appSecret,
        callbackURL       : fbConfig.callbackUrl,
        passReqToCallback : true,
        profileFields     : fbConfig.callbackFields
    },

    // facebook will send back the tokens and profile
    function(accessToken, refreshToken, profile, cb, done) {
		// asynchronous
		process.nextTick(function() {

			// find the user in the database based on their facebook id
	        User.findOne({ 'id' :  cb.id }, function(err, user) {

	        	// if there is an error, stop everything and return that
	        	// ie an error connecting to the database
	            if (err)
	                return done(err);

				// if the user is found, then log them in
	            if (user) {
	                return done(null, user); // user found, return that user
	            } else {
	                // if there is no user found with that facebook id, create them
	                var newUser = new User();
                  console.log(accessToken);

					// set all of the facebook information in our user model
	                newUser.id = cb.id; // set the users facebook id
	                // newUser.access_token = accessToken; // we will save the token that facebook provides to the user
	                newUser.name  = cb.displayName;
	                newUser.photo = "https://graph.facebook.com/" +cb.id+ "/picture?type=large"; // look at the passport user profile to see how names are returned
	                newUser.email = cb.emails[0].value; // facebook can return multiple emails so we'll take the first

					// save our user to the database
                  console.log('NEWUSER***', newUser);

	                newUser.save(function(err) {
	                    if (err)
	                        throw err;

	                    // if successful, return the new user
	                    return done(null, newUser);
	                });
	            }

	        });
        });

    }));

};
