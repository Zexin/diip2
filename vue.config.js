module.exports = {
    publicPath: './',
    outputDir: 'web',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'DiiP Group | Digital Impression Industry Partners'
                return args
            })
    }
}