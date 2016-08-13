
module.exports = {
    '/': {
        page: 'home',
        selectors: {
            title: 'Home',
            'a.home': {
                className: 'active'
            }
        }
    },
    '/contact.html': {
        page: 'contact',
        selectors: {
            title: 'Contact',
            'a.contact': {
                className: 'active'
            }
        }

    },
    '/about.html': {
        page: 'about',
        selectors: {
            title: 'About',
            'a.about': {
                className: 'active'
            }
        }

    }
};