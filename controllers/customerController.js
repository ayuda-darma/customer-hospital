const db = require('../models/');
const Customer = db.Customer;

exports.findAll = (req, res) => {
    Customer.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving customers."
        })
    });
};

exports.findOne = (req, res) => {
    Customer.findById(req.params.id)
    .then((result) => {
        if(!result) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.id
            });
        }
        res.send(result);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving customer with id " + req.params.id
        })
    });
};

module.exports.create = (req, res) => {
    const customer = new Customer({
        nik: req.body.nik,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        motherName: req.body.motherName,
        fatherName: req.body.fatherName,
        birthPlace: req.body.birthPlace,
        birthDate: req.body.birthDate,
        address: req.body.address,
        city: req.body.city,
        gender: req.body.gender,
        insurance: req.body.insurance,
        insuranceNumber: req.body.insuranceNumber,
    });

    customer.save()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Customer."
        })
    });
};

module.exports.update = (req, res) => {
    Customer.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
        if(!result) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.id
            });
        }
        res.send(result);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating customer with id " + req.params.id
        })
    });
};

module.exports.delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.id)
    .then((result) => {
        if(!result) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.id
            });
        }
        res.send({message: "Customer deleted successfully!"});
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting customer with id " + req.params.id
        })
    });
};
