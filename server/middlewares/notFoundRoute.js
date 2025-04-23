const notFoundRoute = (req, res, next) => {
  res.status(404).json({
    statusCode: 404,
    ok: false,
    msg: "Route does not exist.",
  });
};

module.exports = notFoundRoute;
