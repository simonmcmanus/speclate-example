
module.exports = {
    options: {
        outputDir: '/docs',
        files: [
            'style.css',
            'client/router-compiled.js'
        ]
    },
    '/': {
        page: 'home',
        spec: {
            title: 'Home',
            'a.home': {
                className: 'active'
            }
        }
    },
    '/contact.html': {
        page: 'contact',
        spec: {
            title: 'Contact',
            'a.contact': {
                className: 'active'
            }
        }
    },
    '/about.html': {
        page: 'about',
        spec: {
            title: 'About',
            'a.about': {
                className: 'active'
            }
        }

    }
};