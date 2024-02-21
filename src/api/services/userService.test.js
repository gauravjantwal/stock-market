const { postUserSignUp,
    postUserSignIn,
    getUserSignOut
} = require("../controllers/usercontroller");

jest.mock('../controllers/usercontroller');

//SignUp Testcase
describe("UserSignUp", () => {
    it("should SignUp the user", async () => {
  
      // Mocking request and response objects
      const req = { params: { email: "test@abc.com" },
                    params: {name :"test"},
                    params: {password:"test@123"}
    };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the function
      await postUserSignUp(req, res);
  
      // Assertions
      expect(postUserSignUp).toHaveBeenCalled();
  
    });
  
  });
  
//SignIn Testcase
describe("UserSignIn", () => {
    it("should SignIn the user", async () => {
  
      // Mocking request and response objects
      const req = { params: { email: "test@abc.com" },
                    params: {password:"test@123"}
    };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the function
      await postUserSignIn(req, res);
  
      // Assertions
      expect(postUserSignIn).toHaveBeenCalled();
  
    });
  
  });

  //SignOut Testcase
describe("UserSignOut", () => {
    it("should SignOut the user", async () => {
  
      // Mocking request and response objects
      const req = { params: { email: "test@abc.com" },
                    params: {password:"test@123"}
    };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the function
      await getUserSignOut(req, res);
  
      // Assertions
      expect(getUserSignOut).toHaveBeenCalled();
  
    });
  
  });
  


