'use client'
import React, { Fragment, useState } from "react";
import { SignInSchema } from "../lib/ZodSchema";

const LogInPage = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        
    })

    const handleChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value
      }));
    };
    const handleSubmit =(e) =>{
      e.preventDefault();
      const ValidateSchema =SignInSchema.safeParse(formData)
      console.log(ValidateSchema)
    }
  return (
    <Fragment>
      <div>
        <div className="bg-blue-600 max-w-xl py-10 mx-auto my-10 rounded-xl">
          <h2 className="text-white text-3xl font-medium text-center py-3">
            user Login
            
          </h2>
          <div className="p-6">
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <lebel className="text-white mb-2 text-base font-medium">
                Email
              </lebel>{" "}
              <br />
              <input
              name="email"
                value={formData.email}
                onChange={handleChange}
                type="text"
                placeholder="Enter Email"
                className="mt-1 w-full py-2 border-none outline-none px-4 rounded-md"
              />
            </div>
         
            <div className="mb-3">
              <lebel className="text-white mb-2 text-base font-medium">
               Password
              </lebel>{" "}
              <br />
              <input
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                type="password"
                placeholder="Enter Password"
                className="mt-1 w-full py-2 border-none outline-none px-4 rounded-md"
              />
            </div>
            <div className="mt-5">
            <button className="py-3 rounded-md text-white w-full bg-orange-700 text-center text-lg font-medium">
                Login
            </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LogInPage;
