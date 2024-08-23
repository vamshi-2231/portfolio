import React from 'react'

import btech from "../img/m1.png"
import inter from "../img/m2.png"

export default function Education() {
  return (
    
// <!-- Education Section -->

<div class="py-12 text-gray-100" id="education">
  <div class="">
    <h1
      class="text-xl xl:text-3xl font-bold text-center lg:text-left lg:ml-60 text-gray-200 p-2 border-b-4 border-b-pink-400 w-48 mx-auto my-24"
    >
      Education
    </h1>
    <div class="mx-2 lg:mx-52 flex flex-col md:flex-row">
      <div
        data-aos="zoom-in-right"
        class="flex items-center p-4 mb-10 lg:mb-0 lg:mr-20"
      >
        <div
          class="inline-flex items-center justify-center h-20 w-20 lg:w-36 lg:h-36 bg-transparent mr-6 cursor-pointer"
        >
          <a href="https://www.vaagdevi.edu.in/">
            <img  src={btech} alt='Btech' />
          </a>
        </div>
        <div>
          <h3
            class="text-teal-500 text-lg lg:text-3xl font-semibold leading-tight"
          >
           BTech(CSE)
          </h3>
          <h4 class="my-2 lg:text-lg">Vaagdevi College of Engineering (Warngal,Telangana)</h4>
          <p class="my-2 lg:text-lg">2020 - 2024</p>
          {/* <!-- <p class="my-2 lg:text-lg">CGP: 7.0</p> --> */}
        </div>
      </div>
      <div data-aos="zoom-in-left" class="flex items-center p-4">
        <div
          class="inline-flex items-center justify-center h-20 w-20 lg:w-36 lg:h-36 bg-transparent mr-6 cursor-pointer"
        >
          <a href="#/">
            <img src={inter} alt='Intermediate' class="rounded-full" />
          </a>
        </div>
        <div>
          <h3
            class="text-teal-500 text-lg lg:text-3xl font-semibold leading-tight"
          >
           Intermediate(MPC)
          </h3>
          <p class="my-2 lg:text-lg">Telanga State Education Board</p>
          <p class="my-2 lg:text-lg">2018 - 2020</p>
          {/* <!-- <p class="my-2 lg:text-lg">CGP: 7.0</p> --> */}
        </div>
      </div>
    </div>
  </div>
</div>
  )
}


