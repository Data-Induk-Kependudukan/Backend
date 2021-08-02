const lembagaKepolisian = require('../controller/lembagaKepolisianController');

module.exports = (app) => {
    app.route('/lembagaKepolisian')
        .get(lembagaKepolisian.getLembagaKepolisian)
        .post(lembagaKepolisian.insertLembagaKepolisian);

    app.route('/lembagaKepolisian/:NIK')
        .put(lembagaKepolisian.updateLembagaKepolisian)

    app.route('/lembagaKepolisian/:NIK')
        .delete(lembagaKepolisian.deleteLembagaKepolisian)
}