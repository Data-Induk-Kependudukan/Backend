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
    
    app.route('/dokumenPendudukWithMainIdentity/:NIK')
        .get(mainIdentity.getDokumenPendudukWithMainIdentityByNIK);
    
    app.route('/lembagaKepolisianWithMainIdentity/:NIK')
        .get(mainIdentity.getLembagaKepolisianWithMainIdentityByNIK);
    
    app.route('/lembagaKeuanganWithMainIdentity/:NIK')
        .get(mainIdentity.getLembagaKeuanganWithMainIdentityByNIK);
    
    app.route('/lembagaMedisWithMainIdentity/:NIK')
        .get(mainIdentity.getLembagaMedisWithMainIdentityByNIK);
    
    app.route('/lembagaPendidikanWithMainIdentity/:NIK')
        .get(mainIdentity.getLembagaPendidikanWithMainIdentityByNIK);
}