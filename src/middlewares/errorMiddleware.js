const errorMiddleware = (err, _req, res, next) => {
  const { status, message } = err;

  if (err.status) {
    return res.status(status).json({ error: message });
  }

  return res.status(500).json({ error: err.message });
}

module.exports = {
  errorMiddleware,
};