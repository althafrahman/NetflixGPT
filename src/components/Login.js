import React from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setIsSignIn] = React.useState(true);
  const toggleSignInSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <img
        className=" absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
        alt="bg"
      />
      <form className=" absolute w-1/4 px-12 py-11 bg-black flex flex-col gap-6 right-0 left-0 m-auto top-[50%]  rounded-md opacity-80 ">
        <h2 className=" text-2xl text-white">{isSignIn ? 'Sign In': 'Sign Up'}</h2>
        {!isSignIn && <input
          type="text"
          className=" rounded-sm px-3 py-2 bg-gray-950 border border-gray-500"
          placeholder="Fullname"
        />}
        <input
          type="email"
          className=" rounded-sm px-3 py-2 bg-gray-950 border border-gray-500"
          placeholder="Email"
        />
        <input
          type="password"
          className=" rounded-sm px-3 py-2 bg-gray-950 border border-gray-500"
          placeholder="Password"
        />
        <button
          type="submit"
          className=" bg-red-700 rounded-sm px-3 py-2 text-white opacity-100"
        >
          Sign In
        </button>

        <p className="text-white">
        {!isSignIn ? 'Already have an account?' : 'New to Netflix?'}&nbsp;
          <a
            className=" font-semibold cursor-pointer"
            onClick={toggleSignInSignUp}
          >
            {!isSignIn ? 'Sign In Now' : 'Sign Up Now'}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
