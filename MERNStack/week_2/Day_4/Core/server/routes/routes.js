const Controllers = require('../controllers/user.controller');


module.exports = (app) => {
    app.get("/api/jokes",Controllers.findAll);
    app.post("/api/jokes",Controllers.createNew);
    app.get("/api/jokes/:id",Controllers.findOnee);
    app.patch("/api/jokes/:id", Controllers.editDoc );
    app.delete("/api/jokes/:id", Controllers.deleteOnee);
};