module.exports = {
    staticFileGlobs: [
        'public/**.js',
        'public/index.html'
    ],
    stripPrefix: 'public/',
    runtimeCaching: [{
        urlPattern: "/express/style/path/(.*)",
        handler: 'networkFirst'
    }]
};