const locationModel = require("../models/location.model");

exports.index = (req, res) => {
	res.json(locationModel);
};
