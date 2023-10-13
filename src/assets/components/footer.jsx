import react from "react";

function footer() {
  return (
    <footer class="pt-[67px] pb-8 h-[371px] bg-[#F8F8F8] flex justify-between px-def place-content-between">
      <section class="flex-column justify-between">
        <div class="">
          <img class="" src="/assets/img/coffee-shop-logo.svg" alt="coffe-shop-logo" />
        </div>
        <div>
          <p class="w-[340px] text-[16px]">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
        </div>
        <div class="">
          <p class="text-slate-300">©2020CoffeeStore</p>
        </div>
      </section>
      <section class="">
        <div>
          <h3 class="font-semibold">Product</h3>
        </div>
        <div class="text-slate-500">
          <p>Our Product</p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Countries</p>
          <p>Blog</p>
        </div>
      </section>
      <section class="">
        <div>
          <h3 class="font-semibold">Engage</h3>
        </div>
        <div class="text-slate-500">
          <p>Partner</p>
          <p>FAQ</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </section>
      <section class="">
        <div>
          <h3 class="font-semibold">Social Media</h3>
        </div>
        <div class="flex">
          <img class="" src="/assets/img/Facebook.png" href="#" alt="facebook-icon" />
          <img class="" src="/assets/img/Twitter.png" href="#" alt="facebook-icon" />
          <img class="" src="/assets/img/Instagram.png" href="#" alt="facebook-icon" />
        </div>
      </section>
    </footer>
  );
}
