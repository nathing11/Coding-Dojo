const Auther = require ("../models/auther.model");


// READ ALL
module.exports.findAllauther = (req, res) => {
    Auther.find()
    .then((countries) => {
        res.json(countries);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID

module.exports.findOneauther = (req, res) => {
    Auther.findOne({ _id: req.params.id })
    .then((oneCountry) => {
        res.json(oneCountry);
    })
    .catch((err) => res.json(err));
};
// CREATE

module.exports.createNewauther = (req, res) => {
    Auther.create(req.body)
    .then((newlyCreatedCountry) => {
        res.json(newlyCreatedCountry);
    })
    .catch((err) => res.status(400).json(err));
};

// UPDATE

module.exports.updateExisitinauther = (req, res) => {
    Auther.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
    })
    .then((updatedCountry) => {
        res.json(updatedCountry);
    })
    .catch((err) => res.status(400).json(err));
};

// DELETE
module.exports.deleteOneather = (req, res) => {
    Auther.deleteOne({ _id: req.params.id })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => res.json(err));
};
