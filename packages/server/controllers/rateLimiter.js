const redisClient = require("../redis");

module.exports.rateLimiter =
  (secondsLimit, limitAmount) => async (req, res, next) => {
    const ip = req.connection.remoteAddress;
    const [response] = await redisClient
      .multi()
      .incr(ip)
      .expire(ip, secondsLimit)
      .exec();

    if (response[1] > limitAmount)
      res.json({
        loggedIn: false,
        status: "Please try again later!!",
      });
    else next();
  };
