module.exports = {
    description: 'Mobicash API documentation',
    themeConfig: {
        logo: '/images/mobicashlogo.png',
        searchPlaceholder: 'Search...',
        smoothScroll: true,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Mobidoc', link: '/mobidoc/'},
            {text: 'About', link: '/about/'}
        ],
        sidebar: {
            '/mobidoc/' : [
                '',
                'authentication',
                'backend'
            ]
        }
    }
}
