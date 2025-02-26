const path = require("path");
const config = require("./loadconfig");

module.exports = {
	electron: false,
	app: false,
	gsi: false,
	http: false,
	socket: false,
	win: false,

	build: () => {
		console.info("Window build step skipped.");
	},

	create: () => {
		console.info("Window creation step skipped.");
	}
};