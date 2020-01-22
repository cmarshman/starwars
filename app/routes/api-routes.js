// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../models/character.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {
      Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then((result) => {
        return res.json(result);
      });
    }
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using the ORM here to run our searches)
      Character.findAll()
      .then((result) => {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var character = req.body;

    const routeName = character.name.replace(/\s+/g, '').toLowerCase();

    Character.create({
      routeName: routeName,
      name: character.name,
      role: character.role,
      side: character.side,
      age: character.age,
      forcePoints: character.forcePoints,
    });

    res.status(204).end();
  });
};
