import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/US-en-20250512-TRIFECTA-perspective_a6515802-34a4-4f19-947a-47380b934c44_large.jpg"
          alt="logo"
        />
      </div>

      <form className=" w-3/12 absolute bg-black my-36 p-12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className= "font-bold text-3xl py-4"> {isSignInForm ? "Sign In" : "Sign Up"} </h1>

        {!isSignInForm && <input 
          type="text" 
          placeholder="Full Name" 
          className="my-4 p-4 w-full bg-gray-700 " 
        />}
        <input 
          type="text" 
          placeholder="Email address" 
          className="my-4 p-4 w-full bg-gray-700 " 
        />
        
        
        <input type="password" placeholder="Password" className="my-4 p-4 w-full bg-gray-700" />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New User? Sign Up Now!" : "Already a user? Sign In!"}</p>
      </form>
    </div>
  );
};

export default Login;
