module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bb193b615ad7fe76058a4c1bb3a14754'),
  },
});
