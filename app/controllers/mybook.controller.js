const db = require("../models");
const Mybook = db.mybooks;
const Op = db.Sequelize.Op;

// Create and Save a new Mybook
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Mybook
  const mybook = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Mybook in the database
  Mybook.create(mybook)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mybook."
      });
    });

};

// Retrieve all Mybooks from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Mybook.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving mybooks."
      });
    });

};

// Find a single Mybook with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Mybook.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Mybook with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Mybook with id=" + id
      });
    });

};

// Update a Mybook by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Mybook.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Mybook was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Mybook with id=${id}. Maybe Mybook was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Mybook with id=" + id
      });
    });

};

// Delete a Mybook with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Mybook.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Mybook was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Mybook with id=${id}. Maybe Mybook was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Mybook with id=" + id
      });
    });

};

// Delete all Mybooks from the database.
exports.deleteAll = (req, res) => {
  Mybook.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Mybooks were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all mybooks."
      });
    });

};

// Find all published Mybooks
exports.findAllPublished = (req, res) => {
  Mybook.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving mybooks."
      });
    });

};