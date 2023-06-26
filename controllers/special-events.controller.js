/** @format */

const specialEventsModel = require("../models/special-event.model");

exports.index = (req, res) => {
	res.json(specialEventsModel);
};
