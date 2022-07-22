const path = require('path');
const HandlebarsPlugin = require("handlebars-webpack-plugin"); //https://www.npmjs.com/package/handlebars-webpack-plugin

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    plugins: [
        new HandlebarsPlugin({
            entry: path.join(__dirname, 'views/index.hbs'), //entrada
            output: path.join(__dirname, 'dist/index.html'), //salida en build
            data: require('./data/data.json'), // los datos que queremos pasar a la plantilla
            partials: [
                path.join(__dirname, "views/partials/*.hbs"),
            ],
        })
    ]
}