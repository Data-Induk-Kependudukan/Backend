const mainIdentity = require('../controller/mainIdentityController');
//routehere
module.exports = (app) => {
    app.route('/mainIdentity')
        .get(mainIdentity.getMainIdentity)
        .post(mainIdentity.insertMainIdentity);
}