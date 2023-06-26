/** @format */

const personModel = require("../models/person.model");

exports.index = (req, res) => {
	res.json(personModel);
};
