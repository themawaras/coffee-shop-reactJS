/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function product() {
  return (
    <>
      <Header />
      <div className="flex bg-white border-b-2 border-solid border-black sticky top-[76px] z-50">
        <div className="p-5 md:hidden w-full flex items-center gap-2">
          <div className="flex items-center gap-2 border-2 border-solid border-order p-3 flex-1 rounded-xl">
            <ion-icon name="search-outline"></ion-icon>
            <input type="text" name="" id="" placeholder="Search Product" className="outline-none w-full" />
          </div>
          <button className="bg-primary h-12 w-12 rounded-xl">
            <ion-icon name="filter-outline"></ion-icon>
          </button>
        </div>
      </div>
      <main className="px-2 md:pl-10 desk:pl-def  md:pr-10 desk:pr-def">
        <section className="flex flex-col gap-y-5 mb-10 mt-10">
          <p className="text-2xl lg:text-5xl">Today Promo</p>
          <div className="w-full overflow-scroll">
            <div className="flex w-[1600px] gap-x-5">{/* <ProductCard /> */}</div>
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-y-5">
            <p className="text-2xl lg:text-5xl">Our Product</p>
            <div className="flex gap-5 w-full"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default product;
