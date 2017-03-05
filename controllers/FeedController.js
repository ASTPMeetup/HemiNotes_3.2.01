var FeedModel = require('../models/FeedModel.js');

/**
 * FeedController.js
 *
 * @description :: Server-side logic for managing Feeds.
 */
module.exports = {

    /**
     * FeedController.list()
     */
    list: function (req, res) {
        FeedModel.find(function (err, Feeds) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Feed.',
                    error: err
                });
            }
            return res.json(Feeds);
        });
    },

    /**
     * FeedController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        FeedModel.findOne({_id: id}, function (err, Feed) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Feed.',
                    error: err
                });
            }
            if (!Feed) {
                return res.status(404).json({
                    message: 'No such Feed'
                });
            }
            return res.json(Feed);
        });
    },

    /**
     * FeedController.create()
     */
    create: function (req, res) {
        var Feed = new FeedModel({			status : req.body.status,			members : req.body.members,			highlights : req.body.highlights,			bookmarks : req.body.bookmarks
        });

        Feed.save(function (err, Feed) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Feed',
                    error: err
                });
            }
            return res.status(201).json(Feed);
        });
    },

    /**
     * FeedController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        FeedModel.findOne({_id: id}, function (err, Feed) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Feed',
                    error: err
                });
            }
            if (!Feed) {
                return res.status(404).json({
                    message: 'No such Feed'
                });
            }

            Feed.status = req.body.status ? req.body.status : Feed.status;			Feed.members = req.body.members ? req.body.members : Feed.members;			Feed.highlights = req.body.highlights ? req.body.highlights : Feed.highlights;			Feed.bookmarks = req.body.bookmarks ? req.body.bookmarks : Feed.bookmarks;			
            Feed.save(function (err, Feed) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Feed.',
                        error: err
                    });
                }

                return res.json(Feed);
            });
        });
    },

    /**
     * FeedController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        FeedModel.findByIdAndRemove(id, function (err, Feed) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Feed.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
