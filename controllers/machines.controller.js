/** @format */

const machinesModel = require("../models/machine.model");

exports.index = (req, res) => {
	res.json(machinesModel);
};
