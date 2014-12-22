var path               = require("path");
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: {
        main:  "./frontend/app/entry.js"
    },
    output: {
        path: path.join(__dirname, 'app', 'assets', 'javascripts'),
        filename: "[name]-bundle.js",
        publicPath: "/js/"
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            { test: /\.woff$/, loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.js/,   loader: "es6-loader" }
        ]
    },
    plugins: [new BowerWebpackPlugin({
      modulesDirectories: ["bower_components"],
      manifestFiles:      "bower.json",
      includes:           /.*/,
      excludes:           []
    })]
};
