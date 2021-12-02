module.exports = app => {
  const mybooks = require("../controllers/mybook.controller.js");

  var router = require("express").Router();

  // Create a new Mybook
  router.post("/", mybooks.create);

  // Retrieve all Mybooks
  router.get("/", mybooks.findAll);

  // Retrieve all published Mybooks
  router.get("/published", mybooks.findAllPublished);

  // Retrieve a single Mybook with id
  router.get("/:id", mybooks.findOne);

  // Update a Mybook with id
  router.put("/:id", mybooks.update);

  // Delete a Mybook with id
  router.delete("/:id", mybooks.delete);

  // Delete all Mybooks
  router.delete("/", mybooks.deleteAll);

  app.use('/api/mybooks', router);
};