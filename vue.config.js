module.exports = {
    devServer: {
        proxy: {
            '': {
                target: 'http://welcome.fzuhelper.w2fzu.com/welcome/',
                changeOrigin: true,
            },
        },
    },

    publicPath: './',

    // pwa: {
    //     iconPaths: {
    //         favicon32: 'favicon.ico',
    //         favicon16: 'favicon.ico',
    //         appleTouchIcon: 'favicon.ico',
    //         maskIcon: 'favicon.ico',
    //         msTileImage: 'favicon.ico'
    //     }
    // },
};