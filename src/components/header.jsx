import React from "react";

function header() {
  return (
    <header>
      <nav class="h-[76px] px-def bg-translucent flex place-content-between font-jakarta font-normal text-white text-sm items-center fixed top-0 left-0 right-0 z-50">
        <section class="flex cursor-pointer gap-[68px]">
          <div class="flex gap-[15px] items-center">
            <img class="" src="/assets/img/coffe-main-logo.svg" alt="coffe-shop-logo" />
            <a href="#" class="font-sacramento text-xl w-[86px]">
              Coffee Shop
            </a>
          </div>
          <div class="border-b border-solid border-primary hover:border-solid hover:border-primary">Home</div>
          <div class="border-b border-solid border-transparent hover:border-solid hover:border-primary">Products</div>
        </section>
        <section class="flex gap-[22px] items-center">
          <span>
            <img href="#" src="/assets/img/Search.svg" alt="search" />
          </span>
          <span>
            <img href="#" src="/assets/img/Buy.svg" alt="buy" />
          </span>
          <button class="bg-transparent py-3 px-[18px] border rounded hover:bg-slate-100/50" href="#">
            Sign In
          </button>
          <button class="bg-primary border-transparent border py-3 px-[18px] rounded hover:border-solid hover:border-white hover:bg-[#ce8600]" href="#">
            Sign Up
          </button>
        </section>
      </nav>
    </header>
  );
}
