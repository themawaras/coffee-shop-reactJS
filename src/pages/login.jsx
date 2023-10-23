import React from "react";
import { useState } from "react";
import { useUserContext } from "../contexts/context";
import { useNavigate } from "react-router-dom";

import { login } from "../https/login";

function loginUser() {
  const navigate = useNavigate();
  const [isPwdShown, setIsPwdShown] = useState(false);
  const showPwdHandler = () => {
    setIsPwdShown((state) => !state);
  };
  const [isPwdWrong, setIsPwdWrong] = useState(false);
  const setShowPwdWrongModal = () => {};
  const [msg, setMsg] = useState("");
  const { changeUser } = useUserContext();
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.user_email.value,
      password: e.target.pwd.value,
    };
    login(body)
      .then((res) => {
        //   console.log(res.data);
        changeUser({ isUserAvailable: true, userInfo: res.data.data.name });
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        setMsg(err.response.data.msg);
      });
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="hidden md:block">
          <img src="img/Rectangle 289-login.jpg" alt="image" className="h-screen" />
        </div>
        <form onSubmit={submitHandler} className="flex-1 flex justify-center flex-col gap-y-5 px-2 md:px-10 desk:pr-def py-9">
          <div className="flex gap-2 items-center mb-4">
            <img src="/img/coffee-shop-logo.png" alt="login-img" />
          </div>
          <p className="text-xl">Login</p>
          <p className="text-sm">Fill out the form correctly</p>
          <p className="text-sm">Email</p>
          <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="text" placeholder="Enter your Email" name="user_email" className="flex-1 outline-none" />
          </div>
          <p className="text-sm">Password</p>
          <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
            <ion-icon name="bag-outline"></ion-icon>
            <input type={isPwdShown ? "text" : "password"} placeholder="Enter your password" name="pwd" className="flex-1 outline-none" />
            <div onClick={showPwdHandler}>
              <ion-icon name="eye-off-outline"></ion-icon>
            </div>
          </div>
          <div className="flex">
            <p className="flex-1 hidden text-red-600">Incorrect Password</p>
            <p onClick={() => navigate("/resetpassword")} className="flex-1 flex justify-end text-primary text-sm">
              Lupa password?
            </p>
          </div>
          <div className="">
            <button type="submit" className="w-full bg-primary p-3 flex items-center justify-center rounded-lg">
              Log In
            </button>
          </div>
          <div className="flex gap-2 justify-center">
            <p className="text-sm flex justify-center gap-2">Not Have An Account?</p>
            <p className="text-sm text-primary cursor-pointer" onClick={() => navigate("/register")}>
              Register
            </p>
          </div>
          <p className="flex justify-center">or</p>
          <div className="flex gap-4">
            <div className="cursor-pointer flex-1 h-10 w-10 border-2 border-solid border-order rounded-lg flex justify-center items-center gap-2">
              <img src="/img/bx_bxl-facebook-circle.png" alt="facebook" />
              <p className="hidden mobile:block">Facebook</p>
            </div>
            <div className="cursor-pointer flex-1 h-10 w-10 border-2 border-solipagesd border-order rounded-lg flex justify-center items-center gap-2">
              <img src="/img/flat-color-icons_google.png" alt="google" />
              <p className="hidden mobile:block">Google</p>
            </div>
          </div>
        </form>
      </div>
      <div className={`${isPwdWrong ? "block" : "hidden"} fixed inset-0 flex items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`} id="myModals">
        <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center">
          <p className="text-red-700">{msg}</p>
          <div className="flex justify-end items-center gap-4 text-black">
            <button className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl" id="closeModalBtn" onClick={setShowPwdWrongModal}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default loginUser;
