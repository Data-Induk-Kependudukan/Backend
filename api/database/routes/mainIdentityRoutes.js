const mainIdentity = require('../controller/mainIdentityController');
//routehere
module.exports = (app) => {
    app.route('/mainIdentity')
        .get(mainIdentity.getMainIdentity)
        .post(mainIdentity.insertMainIdentity);

    app.route('/mainIdentity/:NIK')
        .put(mainIdentity.updateMainIdentity)

    app.route('/mainIdentity/:NIK')
        .delete(mainIdentity.deleteMainIdentity)
}