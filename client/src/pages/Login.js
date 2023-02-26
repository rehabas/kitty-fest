import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Login = () => (
  <div className="h-screen bg-[rgb(193,190,255)] flex justify-center items-center">
    <div className="flex bg-white w-3/5 rounded-[10px] min-h-600 overflow-hidden">
      <div className="w-1/2 bg-login-card bg-cover bg-center p-12 flex flex-col text-white grow-1">
        <h1 className="text-7xl">Hello World.</h1>
        <div className="my-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          repellendus quas obcaecati odit, distinctio, sapiente quae ducimus
          quia pariatur itaque doloremque, provident vero hic? Unde modi quas
          libero repudiandae lilo.
        </div>
        <span className="mb-4">Don&apos;t you have an account?</span>
        <Link
          to="/register"
          className="bg-white text-rebecca-purple w-1/2 p-2.5 font-bold focus:outline-none text-center"
        >
          Register
        </Link>
      </div>
      <div className="w-1/2 p-[50px] flex flex-col space-y-11 justify-center grow-1">
        <h1 className="text-dark-gray text-4xl font-lato font-semibold">
          Login
        </h1>
        <form className="flex flex-col space-y-[30px]">
          <input
            type="text"
            placeholder="Username"
            className="py-4 px-2.5 border-b focus:outline-none border-light-gray"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-4 px-2.5 border-b focus:outline-none border-light-gray"
          />
          <button
            type="submit"
            className="bg-purple p-2.5 w-1/2 text-white font-bold hover:bg-[#7f79ec] transition-all ease-in-out duration-200 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
);

Login.propTypes = {};

export default Login;
