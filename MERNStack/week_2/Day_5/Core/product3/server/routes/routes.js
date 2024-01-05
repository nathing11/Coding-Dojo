const CountryController= require ("../controllers/manager.controllers");

module.exports=app =>{
    app.get("/api/manager", CountryController.findAllmanger);
    app.post("/api/manager",CountryController.createNewmanger);
    app.get("/api/manager/:id", CountryController.findOnemanger);
    app.patch("/api/manager/:id",CountryController.updateExisitingmanger);
    app.delete("/api/manager/:id",CountryController.deleteOnemanger)
}