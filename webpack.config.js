const path = require('path');

module.exports =({mode}) => {
    console.log(mode);
    return {
        mode: mode,
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve('./build'),
        },
        module: {},
        plugins: [],
    };
};