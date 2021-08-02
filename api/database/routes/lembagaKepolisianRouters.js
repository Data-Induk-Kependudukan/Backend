const lembagaKepolisian = require('../controller/lembagaKepolisianController');

module.exports = (app) => {
    app.route('/lembagaKepolisian')
        .get(lembagaKepolisian.getLembagaKepolisian)
        .post(lembagaKepolisian.insertLembagaKepolisian);

    app.route('/lembagaKepolisian/:NIK')
        .put(lembagaKepolisian.updateLembagaKepolisian)
        .get(lembagaKepolisian.getLembagaKepolisianByNIK);

    app.route('/lembagaKepolisian/:NIK')
        .delete(lembagaKepolisian.deleteLembagaKepolisian)
}