
module.exports = {
    '/': {
        page: 'home',
        selectors: {
            title: 'Home',
            'a[href="./index.html"]': {
                className: 'active'
            }
        }
    },
    '/contact.html': {
        page: 'contact',
        selectors: {
            title: 'Contact',
            'a[href="./contact.html"]': {
                className: 'active'
            }
        }

    }
};