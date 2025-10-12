import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Login into your account
        </h1>

        {/* Form */}
        <form className="space-y-4">
          <p className="text-gray-600 text-sm text-center">
            Please fill this form to login
          </p>
          <hr className="my-4" />

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
             
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="psw" className="block font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="psw"
              name="psw"
              placeholder="Enter password"
              required
        
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <hr className="my-4" />

          {/* Terms */}
          <p className="text-sm text-gray-600 text-center">
            By logging in you agree to our{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Terms & Privacy
            </a>
          </p>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?
              <Link to="/register" className="text-blue-600 font-semibold hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login