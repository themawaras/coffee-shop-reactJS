/* eslint-disable no-unused-vars */
import React from "react";

function header() {
  return (
    <header className="">
      <nav className="h-[76px] px-def bg-black flex place-content-between font-jakarta font-normal text-white text-sm md:items-center fixed top-0 left-0 right-0 z-50">
        <section className="items-center flex cursor-pointer md:gap-[68px]">
          <div className="flex gap-[15px] items-center ml-5">
            <img className="" src="img/coffee-nav.svg" alt="coffe-shop-logo" />
            <a className="font-sacramento text-xl w-[86px] select-none">Coffee Shop</a>
          </div>
          <div className="hidden md:flex md:border-b md:border-solid md:border-primary hover:border-solid hover:border-primary duration-500">Home</div>
          <div className="hidden md:flex md:border-b md:border-solid md:border-transparent hover:border-solid hover:border-primary duration-500">Products</div>
        </section>
        <section className="mr-5 pt-3 align-top flex flex-col gap-4 top-8 md:static md:z-auto absolute md:flex md:flex-row md:gap-[22px] md:items-center">
          <div className="flex justify-end gap-7">
            <img src="img/Search.svg" alt="search" />
            <img src="img/ShoppingCart.svg" alt="cart" />
          </div>
          <button className="bg-transparent py-3 px-[18px] border rounded hover:bg-slate-100/50" href="#">
            Sign In
          </button>
          <button className="bg-primary border-transparent border py-3 px-[18px] rounded hover:border-solid hover:border-white hover:bg-[#ce8600]" href="#">
            Sign Up
          </button>
        </section>
      </nav>
    </header>
  );
}

export default header;
