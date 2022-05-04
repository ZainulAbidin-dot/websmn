const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:5500',
];

const corsOptions = {
  origin: (reqOrigin, callback) => {
    if (allowedOrigins.includes(reqOrigin) || !reqOrigin) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

module.exports = corsOptions;