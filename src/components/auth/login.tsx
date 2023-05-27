import React, { useRef, useState } from "react";
import ConnectIcon from "../../assets/connect-logo-black.svg";
import userData from "../../data/users.json";
import { useNavigate } from "react-router";
interface User {
  email: string;
  password: string;
  name: string;
  avatarUrl: string;
}

interface LoginFormValues {
  email: string;
  password: string;
}
export const Login = () => {
  const passRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formValues: LoginFormValues = {
      email: e.currentTarget.email.value,
      password: passRef.current.value,
    };
    const userCurrent = userData.find(
      (user: User) => user.email === formValues.email
    );
    if (userCurrent && userCurrent.password === formValues.password) {
      console.log("success");

      localStorage.setItem("user", JSON.stringify(userCurrent));
    } else {
      console.log("fail");
    }
  };
  console.log("cc");
  return (
    <div className="w-full bg-[#0e1f33] min-h-screen">
      <div className="container mx-auto relative min-h-screen">
        <div className="rounded-lg mx-auto overflow-hidden absolute bg-white py-16 text-black px-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[30rem] h-auto">
          <div className="grid lg:grid-cols-12 ">
            <div className="lg:col-span-12 ">
              <div className="w-full text-center flex flex-col items-center gap-3">
                <div className="w-full px-24">
                  <img
                    className="max-w-full "
                    src={ConnectIcon}
                    alt="connect"
                  />
                </div>
                <div>
                  <p className="text-xl text-gray-700 font-light">
                    Login to check your email!!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 ">
            <div className="lg:col-span-12 ">
              <form className="" onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-12 ">
                    <div className="">
                      <label className="block text-xl mb-2 " htmlFor="email">
                        Email
                      </label>
                      <select
                        className="w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md false"
                        id="email"
                        name="email"
                      >
                        <option value="">------Choose an email</option>
                        {userData.map((user: User) => {
                          return (
                            <option value={user.email}>{user.email}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="lg:col-span-12 ">
                    <div className="">
                      <label className="block text-xl mb-2 " htmlFor="password">
                        Password
                      </label>
                      <input
                        className="w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md  false"
                        id="password"
                        name="password"
                        type="password"
                        ref={passRef}
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-12 mt-3">
                    <button
                      className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
                               bg-[#152943] text-white hover:bg-gray-400 false w-full bg-darkblue-800"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
