class AppError extends Error {
  constructor(message, statusCode, ok) {
    super(message);

    this.statusCode = statusCode;
    this.ok = ok;
  }
}

module.exports = AppError;
