import React, { useRef } from "react";
import Header from "./Header";
import { validateLoginForm } from "../util/validate-login-form"; // Assuming you have a validation function
import { loginUser, registerUser } from "../services/login.service";
import { useNavigate } from "react-router-dom"; // Assuming you are using react-router for navigation

const Login = () => {
  const [isSignIn, setIsSignIn] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate(); // Assuming you are using react-router for navigation
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  const _handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value.trim();
    const fullnameValue = fullname.current ? fullname.current.value.trim() : '';
    const error = validateLoginForm(isSignIn, fullnameValue , emailValue, passwordValue)
    setErrorMessage(error);
    if(error) {
      return;
    }
    if (isSignIn) {
      // Handle sign-in logic
      const response = await loginUser(emailValue, passwordValue, setErrorMessage);
      navigate('/'); // Redirect to home page after successful registration
      console.log("Signing in with", response);
    } else {
      // Handle sign-up logic
      const response = await registerUser(emailValue, passwordValue)
      navigate('/'); // Redirect to home page after successful registration
      console.log("Signing up with", response);
    }
  };
  return (
    <div>
      <Header />
      <img
        className=" absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
        alt="bg"
      />
      <form onSubmit={_handleSubmit} className=" absolute w-1/4 px-12 py-11 bg-black flex flex-col gap-6 right-0 left-0 m-auto top-[20%]  rounded-md opacity-80 ">
        <h2 className=" text-2xl text-white">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        {!isSignIn && <input
          ref={fullname}
          type="text"
          className=" rounded-sm px-3 py-2 bg-gray-950 border border-gray-500 text-white"
          placeholder="Fullname"
        />}
        <input
          ref={email}
          type="email"
          className=" rounded-sm px-3 py-2 bg-gray-950 border border-gray-500 text-white"
          placeholder="Email"
        />
        <input
          ref={password}
          type="password"
          className=" rounded-sm px-3 py-2 bg-gray-950 border border-gray-500 text-white"
          placeholder="Password"
        />
        {errorMessage && <span className=" text-red-600">{errorMessage}</span>}
        <button
          type="submit"
          className=" bg-red-700 rounded-sm px-3 py-2 opacity-100 text-white"
        >
          Sign In
        </button>


        <p className="text-white">
          {!isSignIn ? 'Already have an account?' : 'New to Netflix?'}&nbsp;
          <span
            className="font-semibold cursor-pointer"
            onClick={toggleSignInSignUp}
          >
            {!isSignIn ? 'Sign In Now' : 'Sign Up Now'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
