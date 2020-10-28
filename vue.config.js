module.exports = {
    devServer: {
        proxy: {
            '': {
                target: 'http://www.chenzhimeng.top:9000/',
                changeOrigin: true,
            },
        },
    },

    // publicPath: '/coLeader/',

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