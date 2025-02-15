import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate(); // ✅ Add navigation after login

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password, // ✅ Remove unnecessary fields
      };

      const response = await axios.post("http://localhost:4000/user/login", userInfo, {
        withCredentials: true, // ✅ Important for sending cookies (JWT)
      });

      if (response.data) {
        alert("Login Successful"); // ✅ Corrected message
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
        navigate("/chat"); // ✅ Redirect to the chat page after login
      }
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data.error);
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-white px-6 py-2 rounded-md bg-white space-y-3 w-94"
      >
        <h1 className="text-2xl text-center text-green-600 font-bold">Login</h1>
        <br />

        {/** Email Form */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
        </label>
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

        {/********* Password Input *********/}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            className="grow"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
        </label>
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

        {/****** Buttons ******/}
        <div className="flex justify-between">
          <p>
            New User?{" "}
            <Link to="/signup" className="text-blue-500 underline cursor-pointer ml-2">
              Signup
            </Link>
          </p>
          <input
            type="submit"
            value="Login"
            className="text-white bg-green-500 px-4 py-2 rounded-lg cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
