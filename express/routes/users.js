const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");

router.get("/", (request, response) => {
  UsersController.getAll().then(results => response.json(results));
});

router.get("/:name", (request, response) => {
  UsersController.getOne(request.params.name)
    .then(result => {
      if (!result) throw new Error("No user found");
      response.json(result);
    })
    .catch(err => response.status(404).send(err.message));
});

router.post("/default", (request, response) => {
  UsersController.createDefault().then(() => response.status(204).send());
});

router.post("/", (request, response) => {
  UsersController.createUser(request.body).then(() =>
    response.send("User created")
  );
});

router.put("/:name", (request, response) => {
  UsersController.updateUser(request.params.name, request.body).then(() =>
    response.status(204).send()
  );
});

router.delete("/:name", (request, response) => {
  UsersController.deleteUser(request.params.name).then(() =>
    response.send("User deleted")
  );
});

module.exports = router;
