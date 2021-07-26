// const userRoute = require('./database/routes/userRoutes');
// const productRoute = require('./database/routes/productRoutes');
// const adminRoute = require('./database/routes/adminRoutes');

// module.exports = (app) => {
//   userRoute(app);
//   productRoute(app);
//   adminRoute(app);
// }

const mainIdentityRoute = require('./database/routes/mainIdentityRoutes');

module.exports = (app) => {
  mainIdentityRoute(app);
}