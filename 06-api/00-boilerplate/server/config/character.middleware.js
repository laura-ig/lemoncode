const characterMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      image: '/thumbnails/new-character.jpg',
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/results') {
    characterMiddleware(req, res, next);
  } else {
    next();
  }
};
