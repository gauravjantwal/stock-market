const userService = require("../services/userService");
const { check } = require("express-validator");

// check("name", "Name should be atleast 3 characters").isLength({ min: 3 }),
// check("email", "Email should be valid").isEmail(),
// check("password", "password should be atleast 6 characters").isLength({ min: 6 })
exports.postUserSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  await userService.userSignUp(name, email, password);

  router.post(
    "/user/signup",
    rateLimiter,
    [
      check("name", "Name should be atleast 3 characters").isLength({ min: 3 }),
      check("email", "Email should be valid").isEmail(),
      check("password", "password should be atleast 6 characters").isLength({
        min: 6,
      }),
    ],
    userService.userSignUp
  );

  router.post("/user/signin", rateLimiter, userService.userSignIn);
  router.get("/user/signout", userService.userSignOut);
  res.status(201);
  res.send();
};

exports.postUserSignIn = async (req, res) => {
  const { email, password } = req.body;

  var response = await userService.userSignIn(email, password);

  const { name, token } = response;

  //Pass token into cookie
  res.cookie("token", token, { expire: new Date() + 1 });

  return res.json({
    user: { name, email },
  });
};
