/* eslint-disable no-unused-vars */
import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main>
        <section className="h-screen flex">
          <div className="w-full bg-[#141517] md:bg-[#141517] md:w-1/2">
            <div>
              <div className="h-screen px-[50px] flex flex-col gap-8 justify-center">
                <div>
                  <h1 className="text-white text-5xl">Start Your Day with Coffee and Good Meals</h1>
                </div>
                <div>
                  <p className="text-white">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us fo a bigger smile!</p>
                </div>
                <div>
                  <button className="bg-primary border-transparent border py-3 px-[18px] rounded hover:border-solid hover:border-white hover:bg-[#ce8600]" onClick={() => navigate("/register")}>
                    Get Started
                  </button>
                </div>
                <div className="flex gap-8 text-white">
                  <div className=" pr-4 border-r-2 border-white">
                    <div>
                      <h1 className="text-primary font-bold text-5xl">90+</h1>
                    </div>
                    <div className="staff-text">
                      <p className="staff-desc">Staff</p>
                    </div>
                  </div>
                  <div className=" pr-4 border-r-2 border-white">
                    <div className="stores-numbers">
                      <h1 className="text-primary font-bold text-5xl">30+</h1>
                    </div>
                    <div className="stores-text">
                      <p className="stores-desc">Stores</p>
                    </div>
                  </div>
                  <div className=" pr-4">
                    <div className="customer-numbers">
                      <h1 className="text-primary font-bold text-5xl">800+</h1>
                    </div>
                    <div className="customer-text">
                      <p className="customer-desc">Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:bg-[url('assets/img/Rectangle287.jpg')] md:bg-cover md:bg-center"></div>
        </section>

        <section className="relative lg:flex flex-row-reverse lg:h-1/2">
          <div className="h-1/4 w-full lg:flex-2 lg:w-1/2">
            <img src="/assets/img/Rectangle-291.jpg" alt="" className="h-1/4 w-full lg:h-1/2" />
          </div>
          <div className="bg-white text-black p-5 flex flex-col gap-[25px] sm:relative md:pl-10 lg:flex-1 lg:justify-center">
            <p className="text-4xl font-bold">
              We Provide <span className="text-amber-900">Good Coffee</span> and <span className="text-amber-900">Healthy Meals</span>
            </p>
            <p className="text-sm">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
            <div className="text-sm flex items-center gap-2">
              <img src="/assets/img/green-check.png" alt="check" />
              <p>High quality beans</p>
            </div>
            <div className="text-sm flex items-center gap-2">
              <img src="/assets/img/green-check.png" alt="check" />
              <p>Healthy meals, you can request the ingredients</p>
            </div>
            <div className="text-sm flex items-center gap-2">
              <img src="/assets/img/green-check.png" alt="check" />
              <p>Chat with our staff to get better experience for ordering</p>
            </div>
            <div className="text-sm flex items-center gap-2">
              <img src="/assets/img/green-check.png" alt="check" />
              <p>Free member card with a minimum purchase of IDR 200.000.</p>
            </div>
          </div>
        </section>

        <section className="relative md:w-100 md:h-[700px] md:mt-[50px] md:flex md:flex-col items-center gap-4 md:px-[75px]">
          <div>
            <h1 className="font-bold text-5xl">
              Here is People&aposs <span className="text-amber-900">Favorite</span>
            </h1>
          </div>
          <div className="border-t w-[50px] border-[10px] border-primary"></div>
          <div>
            <p>Let&aposs choose and have a bit taste of people&aposs favorite. It might be yours too!</p>
          </div>
          <div className="flex flex-col flex-nowrap items-center md:flex md:flex-row md:gap-6">
            <div className="w-[300px] p-[15px] shadow-md">
              <div className="bg-cover bg-center">
                <img src="/assets/img/card-product-27.jpg" alt="fav-products-img" />
              </div>
              <div className="px-[15px]">
                <div className="my-[10px]">
                  <h1 className="font-bold">Hazelnut Latte</h1>
                </div>
                <div>
                  <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                </div>
                <div className="price">
                  <h1 className="text-primary font-bold">IDR 20.000</h1>
                </div>
                <div className="flex gap-1">
                  <button className="w-full items-center border border-transparent bg-primary rounded-lg p-2 text-white">Buy</button>
                  <button className="items-center border border-primary rounded-lg p-2">
                    <img src="/assets/img/ShoppingCart.svg" alt="add-to-cart" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[300px] p-[15px] shadow-md">
              <div className="bg-cover bg-center">
                <img src="/assets/img/card-product-27.jpg" alt="fav-products-img" />
              </div>
              <div className="px-[15px]">
                <div className="my-[10px]">
                  <h1 className="font-bold">Hazelnut Latte</h1>
                </div>
                <div>
                  <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                </div>
                <div className="price">
                  <h1 className="text-primary font-bold">IDR 20.000</h1>
                </div>
                <div className="flex gap-1">
                  <button className="w-full items-center border border-transparent bg-primary rounded-lg p-2 text-white">Buy</button>
                  <button className="items-center border border-primary rounded-lg p-2">
                    <img src="/assets/img/ShoppingCart.svg" alt="add-to-cart" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[300px] p-[15px] shadow-md">
              <div className="bg-cover bg-center">
                <img src="/assets/img/card-product-27.jpg" alt="fav-products-img" />
              </div>
              <div className="px-[15px]">
                <div className="my-[10px]">
                  <h1 className="font-bold">Hazelnut Latte</h1>
                </div>
                <div>
                  <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                </div>
                <div className="price">
                  <h1 className="text-primary font-bold">IDR 20.000</h1>
                </div>
                <div className="flex gap-1">
                  <button className="w-full items-center border border-transparent bg-primary rounded-lg p-2 text-white">Buy</button>
                  <button className="items-center border border-primary rounded-lg p-2">
                    <img src="/assets/img/ShoppingCart.svg" alt="add-to-cart" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[300px] p-[15px] shadow-md">
              <div className="bg-cover bg-center">
                <img src="/assets/img/card-product-27.jpg" alt="fav-products-img" />
              </div>
              <div className="px-[15px]">
                <div className="my-[10px]">
                  <h1 className="font-bold">Hazelnut Latte</h1>
                </div>
                <div>
                  <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                </div>
                <div className="price">
                  <h1 className="text-primary font-bold">IDR 20.000</h1>
                </div>
                <div className="flex gap-1">
                  <button className="w-full items-center border border-transparent bg-primary rounded-lg p-2 text-white">Buy</button>
                  <button className="items-center border border-primary rounded-lg p-2">
                    <img src="/assets/img/ShoppingCart.svg" alt="add-to-cart" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col p-def h-full">
          <div className="px-[75px] flex flex-col gap-6 items-center">
            <div>
              <h1 className="font-bold text-5xl text-center">
                <span className="text-amber-900">Visit Our Store</span> in the Spot on the Map Below
              </h1>
            </div>
            <div className="border-t w-[50px] border-[10px] border-primary"></div>
            <div className="justify-center">
              <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
            </div>
          </div>
          <div className="h-[586px] mt-6 bg-[url('/assets/img/Huge-Global.jpg')] bg-cover bg-full"></div>
        </section>
        <section className="flex flex-col justify-center flex-nowrap md:h-[583px] bg-[#141517] md:flex md:flex-row md:items-center md:p-def">
          <div className="w-full md:w-1/2 flex justify-center mt-8">
            <img className="bg-[url('/assets/img/Rectangle295.webp')] w-[150px] h-[150px] bg-cover bg-center md:w-[578px] md:h-[432px]" />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 flex flex-col gap-6 items-center md:items-start px-4 mb-8">
            <div>
              <p className="text-white text-xl">TESTIMONIAL</p>
            </div>
            <div>
              <p className="text-5xl text-white font-semibold">Viezh Robert</p>
              <p className="text-primary">Manager Coffee Shop</p>
            </div>
            <div>
              <p className="text-white">&quotWow.... I Am very happy to spend my whole day here. the wi-fi is good, and thea coffee and meals tho. I like it here!! Very recommended!!&quot</p>
            </div>
            <div className="flex gap-6">
              <img src="assets/img/Group 1305.png" alt="left-arrow" />
              <img src="assets/img/Group 1304.png" alt="right-arrow" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
