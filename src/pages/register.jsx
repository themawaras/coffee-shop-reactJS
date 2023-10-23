/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../https/register";

function register() {
  const navigate = useNavigate();
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [pwdCorrect, setPwdCorrection] = useState(false);
  const [isFailedRegister, setRegisterFailed] = useState(false);
  const [isSuccessRegister, setRegisterSuccess] = useState(false);
  const setShowSuccessModal = () => {};
  const handleFirstPwdChange = () => {};
  const handleSecondPwdChange = () => {};
  const setShowFailedModal = () => {};
  const showPwdHandler = () => {
    setIsPwdShown((state) => !state);
  };
  const [msg, setMsg] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(firstPassword, secondPassword);
    if (firstPassword !== secondPassword) return setPwdCorrection(true);
    setPwdCorrection(false);
    const body = {
      full_name: e.target.user_name.value,
      email: e.target.user_email.value,
      password: firstPassword,
    };
    registerUser(body)
      .then((res) => {
        // console.log(res);
        setMsg(res.data.msg);
      })
      .catch((err) => {
        // console.log(err.response.data.msg);
        setMsg(err.response.data.msg);
      });
  };

  return (
    <>
      <div className="flex flex-1 h-screen">
        <div className="hidden md:block">
          <img className="bg-cover" src="img/register-img.webp" alt="register-img" />
        </div>
        <div className="flex-2 w-full justify-center h-max flex-col px-3 md:px-20 desk:pr-def pt-5">
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-1">
            <div className="flex gap-2 items-center mb-4">
              <img src="img/coffee-shop-logo.svg" alt="coffee-shop-logo" />
            </div>
            <p className="text-xl">Register</p>
            <p className="text-sm">Fill out the form correctly</p>
            <p className="text-sm">Full Name</p>
            <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
              <ion-icon name="person-outline"></ion-icon>
              <input type="text" placeholder="Enter your Full Name" name="user_name" className="flex-1 outline-none" />
            </div>
            <p className="text-sm">Email</p>
            <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="text" placeholder="Enter your Email" name="user_email" className="flex-1 outline-none" />
            </div>
            <p className="text-sm">Password</p>
            <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
              <ion-icon name="bag-outline"></ion-icon>
              <input type={isPwdShown ? "text" : "password"} placeholder="Enter your password" name="pwd_one" className="flex-1 outline-none" onChange={handleFirstPwdChange} />
              <div onClick={showPwdHandler}>
                <ion-icon name="eye-off-outline"></ion-icon>
              </div>
            </div>
            <p className="text-sm">Confirm Password</p>
            <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
              <ion-icon name="bag-outline"></ion-icon>
              <input type={isPwdShown ? "text" : "password"} placeholder="Enter your password" name="pwdTwo" className="flex-1 outline-none" onChange={handleSecondPwdChange} />
              <div onClick={showPwdHandler}>
                <ion-icon name="eye-off-outline"></ion-icon>
              </div>
            </div>
            <p className={`${pwdCorrect ? "block" : "hidden"} text-sm text-red-600`}>`Password doesnt match</p>
            <div className="">
              <button type="submit" className="w-full bg-primary p-3 flex items-center justify-center rounded-lg outline-none mt-2">
                Register
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <p className="text-sm flex justify-center gap-2">Have An Account?</p>
              <p className="text-sm text-primary cursor-pointer">Login</p>
            </div>
            <p className="flex justify-center">or</p>
            <div className="flex gap-4">
              <div className="cursor-pointer flex-1 h-10 w-10 border-2 border-solid border-order rounded-lg flex justify-center items-center gap-2">
                <img src="img/facebook-btn.svg" alt="facebook" />
                <p className="hidden mobile:block">Facebook</p>
              </div>
              <div className="cursor-pointer flex-1 h-10 w-10 border-2 border-solid border-order rounded-lg flex justify-center items-center gap-2">
                <img src="img/google-btn.svg" alt="google" />
                <p className="hidden mobile:block">Google</p>
              </div>
            </div>
          </form>
        </div>
        <div className={`${isFailedRegister ? "block" : "hidden"} fixed inset-0 flex items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`} id="modalsError">
          <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center">
            <p className="text-red-700">{msg}</p>
            <div className="flex justify-end items-center gap-4 text-black">
              <button className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl" id="closeModalBtn" onClick={setShowFailedModal}>
                Ok
              </button>
            </div>
          </div>
        </div>
        <div className={`${isSuccessRegister ? "block" : "hidden"} fixed inset-0 flex items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`} id="modalsSuccess">
          <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center">
            <p className="text-black">{msg}</p>
            <div className="flex justify-end items-center gap-4 text-black">
              <button className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl" id="closeModalBtn" onClick={setShowSuccessModal}>
                cancel
              </button>
              <button className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl" id="closeModalBtn" onClick={() => navigate("/login")}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default register;
