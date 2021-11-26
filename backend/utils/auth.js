const jwt = require("jsonwebtoken");
const secret = "buildabot";

module.exports = {
  authMiddleware: ({ req }) => {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: "2h" });
      req.user = data;
    } catch (error) {
      console.log("invalid token");
    }

    return req;
  },

  signToken: ({ username, email, _id }) => {
    return jwt.sign(
      {
        data: { username, email, _id },
      },
      secret,
      { expiresIn: "2h" }
    );
  },
};
