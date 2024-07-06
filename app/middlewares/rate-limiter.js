const { rateLimit } = require("express-rate-limit");

const rateLimiter = rateLimit({
  legacyHeaders: true,
  limit: process.env.COMMON_RATE_LIMIT_MAX_REQUESTS,
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  windowMs: 15 * 60 * process.env.COMMON_RATE_LIMIT_WINDOW_MS,
  keyGenerator: (req) => req.ip,
});

module.exports = rateLimiter;
