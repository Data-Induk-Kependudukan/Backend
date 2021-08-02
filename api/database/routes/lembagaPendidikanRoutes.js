const lembagaPendidikan = require('../controller/lembagaPendidikanController');

module.exports = (app) => {
    app.route('/lembagaPendidikan')
        .get(lembagaPendidikan.getLembagaPendidikan)
        .post(lembagaPendidikan.insertLembagaPendidikan);

    app.route('/lembagaPendidikan/:NIK')
        .put(lembagaPendidikan.updateLembagaPendidikan)
        .get(lembagaPendidikan.getLembagaPendidikanByNIK);

    app.route('/lembagaPendidikan/:NIK')
        .delete(lembagaPendidikan.deleteLembagaPendidikan)
}