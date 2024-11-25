import React from "react";
import Vinna from "../assets/Vinna.png";
import GoogleLogo from "../assets/Google__logo.webp";
function Login() {
  return (
    <>
      <div className="w-full h-screen bg-slate-400 flex justify-center items-center">
        <div className="w-1/2 h-3/4 bg-slate-500 flex rounded">
          <div className="w-1/2 h-full bg-[#F7F7F5] rounded">
            <div className="w-full h-auto mt-7 border-0 border-sky-500 ">
              <div className="w-full h-auto border-0 border-sky-500 flex justify-center">
                <img src={Vinna} className="w-1/3" />
              </div>
              <div className="w-full h-auto border-0 border-sky-500 flex justify-center text-gray-700">
                <p className="clear-left">A music🎧 streaming world!</p>
              </div>
            </div>
            <div className="w-full h-4/5 border-0 border-red-500 ">
              <div className="w-full h-auto border-0 px-5 mt-5 border-sky-500 flex justify-start text-gray-700">
                <h1 className="text-5xl"> Sign In </h1>
              </div>
              <div className="w-full h-auto border-0 px-5 mt-5 border-sky-500 flex justify-start text-gray-700">
                <p>Email</p>
              </div>
              <div className="w-full h-auto border-0 px-5 border-sky-500 flex justify-start text-gray-700">
                <input type="text" className="w-4/5 p-2 shadow-md outline-0 font-mono text-lg rounded-sm" />
              </div>
              <div className="w-full h-auto border-0 px-5 border-sky-500 flex justify-start text-gray-700">
                <p>Password</p>
              </div>
              <div className="w-full h-auto border-0 px-5 border-sky-500 flex justify-start text-gray-700">
                <input type="password" className="w-4/5 p-2 shadow-md outline-0 font-mono text-lg rounded-sm"/>
              </div>
              <div className="w-full h-auto border-0 px-20 border-sky-500 flex justify-end text-gray-700">
                <p className="cursor-pointer">Forget password?</p>
              </div>
              <div className="w-full h-auto border-0 px-5 my-5  border-sky-500 flex justify-start ">
                <button className="w-4/5 p-2 shadow-md outline-0 font-mono text-lg rounded-sm bg-[#ff4646] text-white">Submit</button>
              </div>
              <div className="w-full h-auto border-0 px-5 my-4 border-sky-500 flex justify-center text-gray-700">
                <p>Or Sign in with</p>
              </div>
              <div className="w-3/4 mx-12 h-auto border-0 px-5 cursor-pointer bg-white py-2 rounded-3xl border-sky-500 flex justify-center text-gray-700">
                <img src={GoogleLogo} className="w-5 h-5 " />{" "}
                <p className="px-5">Continue with Google</p>
              </div>
              <div className="w-full h-auto border-0 px-5 my-4 border-sky-500 flex justify-center text-gray-700">
                <p>Don't have an account? - <b className="cursor-pointer">Sign Up</b></p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full rounded bg-[url('./assets/loginImg2.webp')] bg-clip-border bg-cover"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
