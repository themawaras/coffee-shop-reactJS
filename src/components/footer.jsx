/* eslint-disable no-unused-vars */
import react from "react";

function footer() {
  return (
    <footer className="pt-[67px] pb-8 h-[371px] bg-[#F8F8F8] flex justify-between px-def place-content-between">
      <section className="flex-column justify-between">
        <div className="">
          <img className="" src="/assets/img/coffee-shop-logo.svg" alt="coffe-shop-logo" />
        </div>
        <div>
          <p className="w-[340px] text-[16px]">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
        </div>
        <div className="">
          <p className="text-slate-300">©2020CoffeeStore</p>
        </div>
      </section>
      <section className="">
        <div>
          <h3 className="font-semibold">Product</h3>
        </div>
        <div className="text-slate-500">
          <p>Our Product</p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Countries</p>
          <p>Blog</p>
        </div>
      </section>
      <section className="">
        <div>
          <h3 className="font-semibold">Engage</h3>
        </div>
        <div className="text-slate-500">
          <p>Partner</p>
          <p>FAQ</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </section>
      <section className="">
        <div>
          <h3 className="font-semibold">Social Media</h3>
        </div>
        <div className="flex">
          <img className="" src="/assets/img/Facebook.png" href="#" alt="facebook-icon" />
          <img className="" src="/assets/img/Twitter.png" href="#" alt="facebook-icon" />
          <img className="" src="/assets/img/Instagram.png" href="#" alt="facebook-icon" />
        </div>
      </section>
    </footer>
  );
}

export default footer;
