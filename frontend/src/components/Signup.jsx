import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useAuth } from "../context/AuthProvider.jsx";
import { Link } from "react-router-dom";

const Signup = () => {
const[authUser, setAuthUser] = useAuth()
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watch the password fields
  const password = watch("password", "");

  // Password validation function
  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  // Handle form submission
  const onSubmit = async(data) => {
    const userInfo = {
        fullname: data.fullname,
        email : data.email,
        password : data.password,
        confirmPassword : data.confirmPassword
    } 

    await axios.post("http://localhost:4000/user/signup", userInfo).then((response) => {
       
        if(response.data){
            alert("Signup Successfull")
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data))
        setAuthUser(response.data)
    })
    .catch((error)=>{
    if(error.response){
        alert("Error : " + error.response.data.error)
    }
    })
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-white px-6 py-4 rounded-md space-y-4 w-96 bg-white shadow-lg"
      >
        <h1 className="text-2xl text-center text-green-600 font-bold">
          Signup Now
        </h1>

        {/* Full Name Field */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            {...register("fullname", { required: "Full name is required" })}
            type="text"
            className="grow"
            placeholder="Full Name"
          />
        </label>
        {errors.fullname && (
          <span className="text-red-500 text-sm">{errors.fullname.message}</span>
        )}

        {/* Email Field */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="grow"
            placeholder="Email"
          />
        </label>
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        {/* Password Field */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            className="grow"
            placeholder="Password"
          />
        </label>
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password.message}</span>
        )}

        {/* Confirm Password Field */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: validatePasswordMatch,
            })}
          />
        </label>
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
        )}

        {/* Buttons */}
        <div className="flex justify-between">
          <p>
            Have an account?{" "}
            <Link to="/login" className="text-blue-500 underline cursor-pointer ml-2">
              Login
            </Link>
          </p>
          <input
            type="submit"
            value="Signup"
            className="text-white bg-green-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
