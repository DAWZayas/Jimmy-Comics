exports.db = {
  host: process.env.EXPERTS_DB_URL || process.env.RETHINKDB_SERVICE_HOST || 'localhost',
  port: process.env.EXPERTS_DB_PORT || process.env.RETHINKDB_SERVICE_PORT_28015_TCP || 28015,
  db: 'expertsdb',
};

exports.server = {
  host: process.env.EXPERTS_SERVER_URL || process.env.JCS_SERVER_SERVICE_HOST || 'localhost',
  port: process.env.EXPERTS_SERVER_PORT || process.env.JCS_SERVER_PORT_8080_TCP_PORT || 8080,
};

exports.client = {
  host: process.env.EXPERTS_CLIENT_URL || process.env.JCS_CLIENT_SERVICE_HOST || 'localhost',
  port: process.env.EXPERTS_CLIENT_PORT || process.env.JCS_CLIENT_PORT_9000_TCP_PORT || 3000,
};

exports.auth = {
  passwordSalt: process.env.EXPERTS_AUTH_PASSALT ||
    'Gq0twQYeoP6YWZY7iBc!NyhVavauPHB5Q6jPU$LMzCxw@SM&y$udLVnmF0qu!%XR',
  sessionSecret: process.env.EXPERTS_AUTH_SESSECRET ||
    'RGP84d%XZ$tck7TPpQ^zn#7Q$i&duxS2K!8ZR!87!9vJ2yZe@ZFqSMIvdvv4EseS',
  jwtSecret: process.env.EXPERTS_AUTH_JWTSECRET ||
    'uaeldt!2D9iVrOv1KEH#KRuaiEdJty6rRXJij$FN&D$oYKITos14Utok6W0kt83@',
  github: {
    clientID: process.env.GITHUB_CLIENT_ID || '004c39ff535980ceac47',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || '6cb51e627d38a6694f09f36efdf9e0d831d40c62',
    callbackURL: process.env.GITHUB_CALLBACK_URL || 'http://localhost:8080/api/github/callback',
    scope: process.env.GITHUB_SCOPE || 'user:email',
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID || '827725494787-gmg60d94m2132tplcj038unom12vd3oe.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'YTEuocM1Vin9DBqT5yCPlFEB',
    callbackURL: process.env.GOOGLE_CALLBACK_URL ||
    `http://${process.env.JCS_SERVER_SERVICE_HOST}:${process.env.JCS_SERVER_PORT_8080_TCP_PORT}/api/google/callback` ||
     'http://localhost:8080/api/google/callback',
    scope: process.env.GOOGLE_SCOPE || 'profile',
  },
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID || '225189487942856',
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'fc26778dbc8f52beefd291dab92190e6',
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:8080/api/facebook/callback',
  },
};
