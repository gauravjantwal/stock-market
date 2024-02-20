import React, { useState } from "react";
import Login from "./login";
import Signup from "./signup";

function Userlogin() {
  // if IsLoginPage, it will reneder login page else signup page
  const [IsLoginPage, setLoginPage] = useState(true);
  if (IsLoginPage) {
    return <Login setLoginPage={setLoginPage}></Login>;
  }

  return <Signup setLoginPage={setLoginPage}></Signup>;
}

export default Userlogin;
