import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Register = () => (
  <div className="h-screen bg-[rgb(193,190,255)] flex justify-center items-center">
    <div className="flex flex-row-reverse bg-white w-3/5 rounded-[10px] min-h-600 overflow-hidden">
      <div className="w-1/2 bg-register-card bg-cover bg-center p-12 flex flex-col text-white grow-1">
        <h1 className="text-7xl">Kitty Fest.</h1>
        <div className="my-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          repellendus quas obcaecati odit, distinctio, sapiente quae ducimus
          quia pariatur.
        </div>
        <span className="mb-4">Do you have an account?</span>
        <Link
          to="/login"
          className="bg-white text-rebecca-purple w-1/2 p-2.5 font-bold focus:outline-none text-center"
        >
          Login
        </Link>
      </div>
      <div className="w-1/2 p-[50px] flex flex-col space-y-11 justify-center grow-1">
        <h1 className="text-dark-gray text-4xl font-lato font-semibold">
          Register
        </h1>
        <form className="flex flex-col space-y-[30px]">
          <input
            type="text"
            placeholder="Username"
            className="py-4 px-2.5 border-b focus:outline-none border-light-gray"
          />
          <input
            type="email"
            placeholder="Email"
            className="py-4 px-2.5 border-b focus:outline-none border-light-gray"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-4 px-2.5 border-b focus:outline-none border-light-gray"
          />
          <input
            type="text"
            placeholder="Name"
            className="py-4 px-2.5 border-b focus:outline-none border-light-gray"
          />
          <button
            type="submit"
            className="bg-purple p-2.5 w-1/2 text-white font-bold hover:bg-[#7f79ec] transition-all ease-in-out duration-200 focus:outline-none"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
);

Register.propTypes = {};

export default Register;
