var StudentModel = require('../models/StudentModel.js');

/**
 * StudentController.js
 *
 * @description :: Server-side logic for managing Students.
 */
module.exports = {

    /**
     * StudentController.list()
     */
    list: function (req, res) {
        StudentModel.find(function (err, Students) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Student.',
                    error: err
                });
            }
            return res.json(Students);
        });
    },

    /**
     * StudentController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        StudentModel.findOne({_id: id}, function (err, Student) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Student.',
                    error: err
                });
            }
            if (!Student) {
                return res.status(404).json({
                    message: 'No such Student'
                });
            }
            return res.json(Student);
        });
    },

    /**
     * StudentController.create()
     */
    create: function (req, res) {

        var Student = new StudentModel({          id: req.body.id,          access_token: req.body.access_token,          firstName: req.body.firstName,          lastName: req.body.lastName,          email: req.body.email        });

        Student.save(function (err, Student) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Student',
                    error: err
                });
            }
            return res.status(201).json(Student);
        });
    },

    /**
     * StudentController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        StudentModel.findOne({_id: id}, function (err, Student) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Student',
                    error: err
                });
            }
            if (!Student) {
                return res.status(404).json({
                    message: 'No such Student'
                });
            }

          Student.id = req.body.id ? req.body.id : Student.id;
          Student.access_token = req.body.access_token ? req.body.access_token : Student.access_token;
          Student.firstName = req.body.firstName ? req.body.firstName : Student.firstName;
          Student.lastName = req.body.lastName ? req.body.lastName : Student.lastName;
          Student.email = req.body.email ? req.body.email : Student.email;

            Student.save(function (err, Student) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Student.',
                        error: err
                    });
                }

                return res.json(Student);
            });
        });
    },

    /**
     * StudentController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        StudentModel.findByIdAndRemove(id, function (err, Student) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Student.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
