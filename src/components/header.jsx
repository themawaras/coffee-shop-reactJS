/* eslint-disable no-unused-vars */
import React from "react";

function header() {
  return (
    <header>
      <nav className="h-[76px] px-def bg-black flex place-content-between font-jakarta font-normal text-white text-sm items-center fixed top-0 left-0 right-0 z-50">
        <section className="flex cursor-pointer gap-[68px]">
          <div className="flex gap-[15px] items-center">
            <img className="" src="img/coffee-nav.svg" alt="coffe-shop-logo" />
            <a className="font-sacramento text-xl w-[86px]">Coffee Shop</a>
          </div>
          <div className="border-b border-solid border-primary hover:border-solid hover:border-primary">Home</div>
          <div className="border-b border-solid border-transparent hover:border-solid hover:border-primary">Products</div>
        </section>
        <section className="flex gap-[22px] items-center">
          <span>
            <img href="#" src="img/Search.svg" alt="search" />
          </span>
          <span>
            <img href="#" src="img/ShoppingCart.svg" alt="cart" />
          </span>
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
