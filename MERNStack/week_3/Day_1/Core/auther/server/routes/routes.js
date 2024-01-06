const CountryController= require ("../controllers/auther.controllers");

module.exports=app =>{
    app.get("/api/auther", CountryController.findAllauther);
    app.post("/api/auther",CountryController.createNewauther);
    app.get("/api/auther/:id", CountryController.findOneauther);
    app.patch("/api/auther/:id",CountryController.updateExisitinauther);
    app.delete("/api/auther/:id",CountryController.deleteOneather)
}