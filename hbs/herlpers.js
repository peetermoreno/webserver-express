const hbs = require('hbs');

//helpers
hbs.registerHelper('GetYear', () => {
    return new Date().getFullYear();
})