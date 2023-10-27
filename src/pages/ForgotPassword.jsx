/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

function resetpassword() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <div className="hidden lg:block">
        <img src="/img/forgot-pwd-page.webp" alt="side-image" className="h-screen" />
      </div>
      <form className="flex-1 flex justify-center flex-col gap-y-5 px-2 md:px-10 xl:pr-def py-9">
        <div className="flex gap-2 items-center mb-4">
          <div className="flex gap-2 items-center mb-4">
            <img src="img/coffee-shop-logo.svg" alt="coffee-shop-logo" />
          </div>
        </div>
        <p className="text-xl text-brown">Fill out the form correctly</p>
        <p className="text-sm text-brown">We will send new password to your email</p>
        <p className="text-sm">Email</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" placeholder="Enter your Email" name="user_email" className="flex-1 outline-none" />
        </div>
        <div className="">
          <button type="submit" className="w-full bg-primary p-3 flex items-center justify-center rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default resetpassword;
