const lembagaKeuangan = require('../controller/lembagaKeuanganController');

module.exports = (app) => {
    app.route('/lembagaKeuangan')
        .get(lembagaKeuangan.getLembagaKeuangan)
        .post(lembagaKeuangan.insertLembagaKeuangan);

    app.route('/lembagaKeuangan/:NIK')
        .put(lembagaKeuangan.updateLembagaKeuangan)
        .get(lembagaKeuangan.getLembagaKeuanganByNIK);

    app.route('/lembagaKeuangan/:NIK')
        .delete(lembagaKeuangan.deleteLembagaKeuangan)
}