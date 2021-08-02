const mainIdentity = require('../controller/mainIdentityController');
//routehere
module.exports = (app) => {
    app.route('/mainIdentity')
        .get(mainIdentity.getMainIdentity)
        .post(mainIdentity.insertMainIdentity);

    app.route('/mainIdentity/:NIK')
        .put(mainIdentity.updateMainIdentity)
        .delete(mainIdentity.deleteMainIdentity)
        .get(mainIdentity.getMainIdentityByNIK);

    app.route('/dokumenPendudukWithMainIdentity')
        .get(mainIdentity.getDokumenPendudukWithMainIdentity);
    app.route('/lembagaKepolisianWithMainIdentity')
        .get(mainIdentity.getLembagaKepolisianWithMainIdentity);
    app.route('/lembagaKeuanganWithMainIdentity')
        .get(mainIdentity.getLembagaKeuanganWithMainIdentity);
    app.route('/lembagaMedisWithMainIdentity')
        .get(mainIdentity.getLembagaMedisWithMainIdentity);
    app.route('/lembagaPendidikanWithMainIdentity')
        .get(mainIdentity.getLembagaPendidikanWithMainIdentity);
}