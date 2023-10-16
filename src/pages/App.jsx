import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
          <main>
        <section class="h-screen flex">
            <div class="w-full bg-[#141517] md:bg-[#141517] md:w-1/2">
                <div>
                    <div class="h-screen px-[50px] flex flex-col gap-8 justify-center">
                        <div class="">
                            <h1 class="text-white text-5xl">Start Your Day with Coffee and Good Meals</h1>
                        </div>
                        <div class="">
                            <p class="text-white">We provide high quality beans, good taste, and healthy meals made by
                                love
                                just
                                for you. Start your day with us fo a bigger smile!</p>
                        </div>
                        <div class=""><button
                                class="bg-primary border-transparent border py-3 px-[18px] rounded hover:border-solid hover:border-white hover:bg-[#ce8600]">Get
                                Started</button></div>
                        <div class="flex gap-8 text-white">
                            <div class=" pr-4 border-r-2 border-white">
                                <div class="">
                                    <h1 class="text-primary font-bold text-5xl">90+</h1>
                                </div>
                                <div class="staff-text">
                                    <p class="staff-desc">Staff</p>
                                </div>
                            </div>
                            <div class=" pr-4 border-r-2 border-white">
                                <div class="stores-numbers">
                                    <h1 class="text-primary font-bold text-5xl">30+</h1>
                                </div>
                                <div class="stores-text">
                                    <p class="stores-desc">Stores</p>
                                </div>
                            </div>
                            <div class=" pr-4">
                                <div class="customer-numbers">
                                    <h1 class="text-primary font-bold text-5xl">800+</h1>
                                </div>
                                <div class="customer-text">
                                    <p class="customer-desc">Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
            <div class="md:w-1/2 md:bg-[url('assets/img/Rectangle287.jpg')] md:bg-cover md:bg-center"></div>
        </section>

        <section class="relative lg:flex flex-row-reverse lg:h-1/2">
            <div class="h-1/4 w-full lg:flex-2 lg:w-1/2">
                <img src="/assets/img/Rectangle-291.jpg" alt="" class="h-1/4 w-full lg:h-1/2" />
            </div>
            <div
                class="bg-white text-black p-5 flex flex-col gap-[25px] sm:relative md:pl-10 desk:pl-def lg:flex-1 lg:justify-center">
                <p class="text-4xl font-bold">We Provide <span class="text-amber-900">Good Coffee</span> and <span
                        class="text-amber-900">Healthy
                        Meals</span></p>
                <p class="text-sm">
                    You can explore the menu that we provide with fun and have their own
                    taste and make your day better.
                </p>
                <div class="text-sm flex items-center gap-2">
                    <img src="/assets/img/green-check.png" alt="check"/>
                    <p>High quality beans</p>
                </div>
                <div class="text-sm flex items-center gap-2">
                    <img src="/assets/img/green-check.png" alt="check"/>
                    <p>Healthy meals, you can request the ingredients</p>
                </div>
                <div class="text-sm flex items-center gap-2">
                    <img src="/assets/img/green-check.png" alt="check"/>
                    <p>Chat with our staff to get better experience for ordering</p>
                </div>
                <div class="text-sm flex items-center gap-2">
                    <img src="/assets/img/green-check.png" alt="check"/>
                    <p>Free member card with a minimum purchase of IDR 200.000.</p>
                </div>
            </div>
        </section>

        <section
            class="relative md:w-100 md:h-[700px] md:mt-[50px] md:flex md:flex-col items-center gap-4 md:px-[75px]">
            <div class="">
                <h1 class="font-bold text-5xl">Here is People's <span class="text-amber-900">Favorite</span></h1>
            </div>
            <div class="border-t w-[50px] border-[10px] border-primary"></div>
            <div class="">
                <p class="">Let's choose and have a bit taste of people's favorite. It might be yours too!</p>
            </div>
            <div class="flex flex-col flex-nowrap items-center md:flex md:flex-row md:gap-6">
                <div class="w-[300px] p-[15px] shadow-md">
                    <div class="bg-cover bg-center"><img src="/assets/img/card-product-27.jpg" alt="fav-products-img"/>
                    </div>
                    <div class="px-[15px]">
                        <div class="my-[10px]">
                            <h1 class="font-bold">Hazelnut Latte</h1>
                        </div>
                        <div class="">
                            <p class="">You can explore the menu that we provide with fun and have their
                                own taste and make your day better.</p>
                        </div>
                        <div class="price">
                            <h1 class="text-primary font-bold">IDR 20.000</h1>
                        </div>
                        <div class="flex gap-1">
                            <button
                                class="w-full items-center border border-transparent bg-primary rounded-lg p-2 text-white">Buy</button><button
                                class="items-center border border-primary rounded-lg p-2"><img
                                    src="/assets/img/ShoppingCart.svg" alt="add-to-cart"/></button>
                        </div>
                    </div>
                </div>
                <div class="w-[300px] p-[15px] shadow-md">
                    <div class="bg-cover bg-center"><img src="/assets/img/card-product-27.jpg" alt="fav-products-img"/>
                    </div>
                    <div class="px-[15px]">
                        <div class="my-[10px]">
                            <h1 class="font-bold">Hazelnut Latte</h1>
                        </div>
                        <div class="">
                            <p class="">You can explore the menu that we provide with fun and have their
                                own taste and make your day better.</p>
                        </div>
                        <div class="price">
                            <h1 class="text-primary font-bold">IDR 20.000</h1>
                        </div>
                        <div class="flex gap-1">
                            <button
                                class="w-full items-center border border-transparent bg-primary rounded-lg p-2 text-white">Buy</button><button
                                class="items-center border border-primary rounded-lg p-2"><img
                                    src="/assets/img/ShoppingCart.svg" alt="add-to-cart"/></button>
                        </div>
                    </div>
                </div>
                <div class="w-[300px] p-[15px] shadow-md">
                    <div class="bg-cover bg-center"><img src="/assets/img/card-product-27.jpg" alt="fav-products-img"/>
                    </div>
                    <div class="px-[15px]">
                        <div class="my-[10px]">
                            <h1 class="font-bold">Hazelnut Latte</h1>
                        </div>
                        <div class="">
                            <p class="">You can explore the menu that we provide with fun and have their
                                own taste and make your day better.</p>
                        </div>
                        <div class="price">
                            <h1 class="text-primary font-bold">IDR 20.000</h1>
                        </div>
                        <div class="flex gap-1">
                            <button
                                class="w-full items-center border border-transparent bg-primary rounded-lg p-2 text-white">Buy</button><button
                                class="items-center border border-primary rounded-lg p-2"><img
                                    src="/assets/img/ShoppingCart.svg" alt="add-to-cart"/></button>
                        </div>
                    </div>
                </div>
                <div class="w-[300px] p-[15px] shadow-md">
                    <div class="bg-cover bg-center"><img src="/assets/img/card-product-27.jpg" alt="fav-products-img"/>
                    </div>
                    <div class="px-[15px]">
                        <div class="my-[10px]">
                            <h1 class="font-bold">Hazelnut Latte</h1>
                        </div>
                        <div class="">
                            <p class="">You can explore the menu that we provide with fun and have their
                                own taste and make your day better.</p>
                        </div>
                        <div class="price">
                            <h1 class="text-primary font-bold">IDR 20.000</h1>
                        </div>
                        <div class="flex gap-1">
                            <button
                                class="w-full items-center border border-transparent bg-primary rounded-lg p-2 text-white">Buy</button><button
                                class="items-center border border-primary rounded-lg p-2"><img
                                    src="/assets/img/ShoppingCart.svg" alt="add-to-cart"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="flex flex-col p-def h-full">
            <div class="px-[75px] flex flex-col gap-6 items-center">
                <div class="">
                    <h1 class="font-bold text-5xl text-center"><span class="text-amber-900">Visit Our Store</span> in
                        the Spot on
                        the
                        Map
                        Below</h1>
                </div>
                <div class="border-t w-[50px] border-[10px] border-primary"></div>
                <div class="justify-center">
                    <p class="">You can explore the menu that we provide with fun and have their own
                        taste and
                        make your day better.</p>
                </div>
            </div>
            <div class="h-[586px] mt-6 bg-[url('/assets/img/Huge-Global.jpg')] bg-cover bg-full"></div>
        </section>
        <section
            class="flex flex-col justify-center flex-nowrap md:h-[583px] bg-[#141517] md:flex md:flex-row md:items-center md:p-def">
            <div class="w-full md:w-1/2 flex justify-center mt-8">
                <img
                    class="bg-[url('/assets/img/Rectangle295.webp')] w-[150px] h-[150px] bg-cover bg-center md:w-[578px] md:h-[432px]"/>
            </div>
            <div class="w-full md:w-1/2 md:pl-10 flex flex-col gap-6 items-center md:items-start px-4 mb-8">
                <div>
                    <p class="text-white text-xl">TESTIMONIAL</p>
                </div>
                <div>
                    <p class="text-5xl text-white font-semibold">Viezh Robert</p>
                    <p class="text-primary">Manager Coffee Shop</p>
                </div>
                <div>
                    <p class="text-white">"Wow.... I Am very happy to spend my whole day here. the wi-fi is good, and
                        thea coffee adn
                        meals
                        tho. I like it here!! Very recommended!!</p>
                </div>
                <div class="flex gap-6">
                    <img src="assets/img/Group 1305.png" alt="left-arrow"/><img src="assets/img/Group 1304.png"
                        alt="right-arrow"/>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default App
