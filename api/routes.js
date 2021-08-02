// const userRoute = require('./database/routes/userRoutes');
// const productRoute = require('./database/routes/productRoutes');
// const adminRoute = require('./database/routes/adminRoutes');

// module.exports = (app) => {
//   userRoute(app);
//   productRoute(app);
//   adminRoute(app);
// }

const mainIdentityRoute = require('./database/routes/mainIdentityRoutes');
const dokumenPendudukRoute = require('./database/routes/dokumenPendudukRoutes');
const lembagaKepolisianRoute = require('./database/routes/lembagaKepolisianRouters');
const lembagaKeuanganRoute = require('./database/routes/lembagaKeuanganRouters');
const lembagaMedisRoute = require('./database/routes/lembagaMedisRouters');
const lembagaPendidikanRoute = require('./database/routes/lembagaPendidikanRoutes');

module.exports = (app) => {
  mainIdentityRoute(app);
  dokumenPendudukRoute(app);
  lembagaKepolisianRoute(app);
  lembagaKeuanganRoute(app);
  lembagaMedisRoute(app);
  lembagaPendidikanRoute(app);
}