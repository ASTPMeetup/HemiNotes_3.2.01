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
        var Student = new StudentModel({			facebookID : req.body.facebookID,			status : req.body.status,			notes : req.body.notes,			classmates : req.body.classmates,			email : req.body.email,			classes : req.body.classes
        });

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

            Student.facebookID = req.body.facebookID ? req.body.facebookID : Student.facebookID;			Student.status = req.body.status ? req.body.status : Student.status;			Student.notes = req.body.notes ? req.body.notes : Student.notes;			Student.classmates = req.body.classmates ? req.body.classmates : Student.classmates;			Student.email = req.body.email ? req.body.email : Student.email;			Student.classes = req.body.classes ? req.body.classes : Student.classes;			
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
