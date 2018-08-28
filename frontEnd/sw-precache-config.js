module.exports = {
    staticFileGlobs: [
        'public/**.js',
        'public/index.html'
    ],
    navigateFallback: '/index.html',
    stripPrefix: 'public/',
    runtimeCaching: [{
        urlPattern: "/express/style/path/(.*)",
        handler: 'networkFirst'
    }]
};