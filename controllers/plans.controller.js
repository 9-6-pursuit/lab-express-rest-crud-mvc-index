/** @format */

const plansModel = require("../models/plan.model");

exports.index = (req, res) => {
	res.json(plansModel);
};
