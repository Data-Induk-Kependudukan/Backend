const lembagaMedis = require('../controller/lembagaMedisController');

module.exports = (app) => {
    app.route('/lembagaMedis')
        .get(lembagaMedis.getLembagaMedis)
        .post(lembagaMedis.insertLembagaMedis);

    app.route('/lembagaMedis/:NIK')
        .put(lembagaMedis.updateLembagaMedis)
        .get(lembagaMedis.getLembagaMedisByNIK);

    app.route('/lembagaMedis/:NIK')
        .delete(lembagaMedis.deleteLembagaMedis)
}