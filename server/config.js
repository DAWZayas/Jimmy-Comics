exports.db = {
  host: process.env.EXPERTS_DB_URL || 'localhost',
  port: process.env.EXPERTS_DB_PORT || 28015,
  db: 'expertsdb',
};

exports.server = {
  host: process.env.EXPERTS_SERVER_URL || 'localhost',
  port: process.env.EXPERTS_SERVER_PORT || 8080,
};

exports.client = {
  host: process.env.EXPERTS_CLIENT_URL || 'localhost',
  port: process.env.EXPERTS_CLIENT_PORT || 3000,
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
  twitter: {
    clientID: process.env.TWITTER_CONSUMER_KEY || '	GAcogGVPrsPhQynNAzRHOvAbL',
    clientSecret: process.env.TWITTER_CONSUMER_SECRET || 'T40Vk2kJZr5XEPWNh443G5eyp4dRdjU8aGOsJWn5Q01rorpAz2',
    callbackURL: process.env.TWITTER_CALLBACK_URL || 'http://localhost:8080/api/twitter/callback',
  },
};
