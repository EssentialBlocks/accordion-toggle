const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const plugins = defaultConfig.plugins.filter(
	(plugin) =>
		plugin.constructor.name != "MiniCssExtractPlugin" &&
		plugin.constructor.name != "CleanWebpackPlugin"
);

let allEntries = {
	dist: "./src/index.js",
	"dist/frontend": "./blocks/accordion-toggle/src/frontend.js",
	// window.eb_frontend icon helpers, written to dist/frontend.js (not frontend/index.js).
	"frontend-helpers": {
		import: "./src/frontend-helpers.js",
		filename: "dist/frontend.js",
		library: { name: "eb_frontend", type: "window" },
	},
};

const config = {
	...defaultConfig,
	entry: allEntries,
	output: {
		path: path.resolve(__dirname),
		filename: "[name]/index.js",
	},
	plugins: [
		...plugins,
		new MiniCSSExtractPlugin({
			filename: "dist/style.css",
		}),
	],
};

module.exports = config;
