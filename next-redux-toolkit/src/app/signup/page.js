'use client'
import React, { Fragment, useState } from "react";
import { SignUpSchema } from "../lib/ZodSchema";
const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
        dob:"",
        IdNumber:""
        
    })
    const handleChangeData = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value
        }));
      };
      const handleSubmit =(e) =>{
        e.preventDefault();
        const validFormData=SignUpSchema.safeParse(formData)
        console.log(validFormData)

      }
  return (
    <Fragment>
      <div>
        <div className="bg-blue-600 max-w-xl py-10 mx-auto my-10 rounded-xl">
            <form  onSubmit={handleSubmit}>
          <h2 className="text-white text-3xl font-medium text-center py-3">
            user Signup
          </h2>
          <div className="p-6">
          <div className="mb-3">
              <lebel className="text-white mb-2 text-base font-medium">
                User Name
              </lebel>{" "}
              <br />
              <input
                name="username"
                value={formData.username}
                onChange={handleChangeData}
                type="text"
                placeholder="Enter username"
                className="mt-1 w-full py-2 border-none outline-none px-4 rounded-md"
              />
            </div>
            <div className="mb-3">
              <lebel className="text-white mb-2 text-base font-medium">
                Email
              </lebel>{" "}
              <br />
              <input
                name="email"
                value={formData.email}
                onChange={handleChangeData}
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
                onChange={handleChangeData}
                type="password"
                placeholder="Enter Password"
                className="mt-1 w-full py-2 border-none outline-none px-4 rounded-md"
              />
            </div>
            <div className="mb-3">
              <lebel className="text-white mb-2 text-base font-medium">
                Date of Birth
              </lebel>{" "}
              <br />
              <input
                name="dob"
                value={formData.dob}
                onChange={handleChangeData}
                type="date"
                placeholder="db"
                className="mt-1 w-full py-2 border-none outline-none px-4 rounded-md"
              />
            </div>
            <div className="mb-3">
              <lebel className="text-white mb-2 text-base font-medium">
                Id Number
              </lebel>{" "}
              <br />
              <input
                name="IdNumber"
                value={formData.IdNumber}
                onChange={handleChangeData}
                type="text"
                placeholder="Id Number"
                className="mt-1 w-full py-2 border-none outline-none px-4 rounded-md"
              />
            </div>
            <div className="mt-5">
            <button type="submit" className="py-3 rounded-md text-white w-full bg-orange-700 text-center text-lg font-medium">
                Signup
            </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUpPage;
