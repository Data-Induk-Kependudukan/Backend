const dokumenPenduduk = require('../controller/dokumenPendudukController');

module.exports = (app) => {
    app.route('/dokumenPenduduk')
        .get(dokumenPenduduk.getDokumenPenduduk)
        .post(dokumenPenduduk.insertDokumenPenduduk);

    app.route('/dokumenPenduduk/:NIK')
        .put(dokumenPenduduk.updateDokumenPenduduk)

    app.route('/dokumenPenduduk/:NIK')
        .delete(dokumenPenduduk.deleteDokumenPenduduk)
}