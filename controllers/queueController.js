const db = require('../models/');
const Queue = db.Queue;

exports.create = (req, res) => {
    const queue = new Queue({
        nomor: req.body.nomor,
    });

    queue.save()
    .then((result) => {
        res.send(result);
    }
    ).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Queue."
        })
    }
    );
};


exports.deleteAll = (req, res) => {
    Queue.deleteMany({})
    .then(() => {
        res.send({message: "All queue deleted successfully!"});
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting all queue."
        });
    });
};