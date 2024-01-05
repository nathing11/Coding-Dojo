const Country = require ("../models/manager.model");


// READ ALL
module.exports.findAllmanger = (req, res) => {
    Country.find()
    .then((countries) => {
        res.json(countries);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID

module.exports.findOnemanger = (req, res) => {
    Country.findOne({ _id: req.params.id })
    .then((oneCountry) => {
        res.json(oneCountry);
    })
    .catch((err) => res.json(err));
};
// CREATE

module.exports.createNewmanger = (req, res) => {
    Country.create(req.body)
    .then((newlyCreatedCountry) => {
        res.json(newlyCreatedCountry);
    })
    .catch((err) => res.status(400).json(err));
};

// UPDATE

module.exports.updateExisitingmanger = (req, res) => {
    Country.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
    })
    .then((updatedCountry) => {
        res.json(updatedCountry);
    })
    .catch((err) => res.status(400).json(err));
};

// DELETE
module.exports.deleteOnemanger = (req, res) => {
    Country.deleteOne({ _id: req.params.id })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => res.json(err));
};
