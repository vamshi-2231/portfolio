import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import p1 from '../img/p1.png'
import p2 from '../img/p2.png'
import p3 from '../img/p3.png'



export default function Projects() {
  return (

// <!-- Projects Section -->

<div class="my-20" id="projects">
<h1
  class="text-xl xl:text-3xl font-bold text-center lg:text-left lg:ml-60 text-gray-200 p-2 border-b-4 border-b-pink-400 w-48 mx-auto"
>
  Projects
</h1>

<div
  class="my-20 flex flex-col gap-10 justify-center items-center lg:mx-52"
>
  {/* <!-- project College Bulletin --> */}
  <div
    data-aos="zoom-in-left"
    class=" shadow-md shadow-teal-500 bg-gradient-to-b from-slate-900 to-indigo-900 rounded-lg flex flex-col drop-shadow-2xl lg:h-96 w-[90%] lg:flex-row"
  >
    <img
      src={p1} 
      alt="thehindu-clone"
      class="rounded-lg h-52 lg:h-full lg:w-1/2 hover:scale-95 duration-500"
    />

    <div class="flex flex-col justify-center max-md:m-5 lg:mx-10">
      <h1 class="text-slate-100 text-3xl my-3 font-bold">College Bulletin</h1>
      <h1 class="text-slate-100">
        Made a College Bulletin using html and css and javascript
      </h1>
      <div class="text-teal-500 flex flex-wrap my-4">
        <p class="bg-transparent ring-2 ring-teal-500 px-3 w-auto m-3">
          HTML
        </p>
        <p class="bg-transparent ring-2 ring-teal-500 px-3 w-auto m-3">
          CSS
        </p>
        <p class="bg-transparent ring-2 ring-teal-500 px-3 w-auto m-3">
          JAVASCRIPT
        </p>
        {/* <!-- <p class="bg-transparent ring-2 p-3">HTML</p> --> */}
      </div>
      <div class="flex justify-center mt-4">
        <a
          href="https://vamc2231.github.io/college_bulliton22/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-slate-400 mr-2 hover:text-slate-100"
            size="lg"
          />
        </a>
        <a
          href="https://vamc2231.github.io/college_bulliton22/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-3xl">          
          <FontAwesomeIcon
            icon={faLink}
            className="text-slate-400 mx-4 hover:text-slate-100"
          />
        </a>
      </div>
    </div>
  </div>

  {/* <!-- project The Hindu Clone --> */}

  <div
    data-aos="zoom-in-right"
    class=" shadow-md shadow-teal-500 bg-gradient-to-b from-slate-900 to-indigo-900 rounded-lg flex flex-col drop-shadow-2xl lg:h-96 w-[90%] lg:flex-row-reverse"
  >
    <img
      src={p2}
      alt="thehindu-clone"
      class="rounded-lg h-52 lg:h-full lg:w-1/2 hover:scale-95 duration-500"
    />

    <div class="flex flex-col justify-center max-md:m-5 lg:mx-10">
      <h1 class="text-slate-100 text-3xl my-3 font-bold">
        The Hindu Clone
      </h1>
      <h1 class="text-slate-100">
        Made a Hindu Epaper Clone using html and css
      </h1>
      <div class="text-teal-400 flex flex-wrap my-4">
        <p class="bg-transparent ring-2 ring-teal-400 px-3 w-auto m-3">
          HTML
        </p>
        <p class="bg-transparent ring-2 ring-teal-400 px-3 w-auto m-3">
          TAILWIND CSS
        </p>
        {/* <!-- <p class="bg-transparent ring-2 p-3">HTML</p> --> */}
      </div>
      <div class="flex justify-center mt-4">
        <a
          href="https://thehindhu-epaper-clone.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-3xl">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-slate-400 mr-2 hover:text-slate-100"
            size="lg"
          />
        </a>
        <a
          href="https://thehindhu-epaper-clone.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-3xl">
          <FontAwesomeIcon
            icon={faLink}
            className="text-slate-400 mx-4 hover:text-slate-100"
          />
        </a>
      </div>
    </div>
  </div>

  {/* <!-- project Covid report --> */}

  <div
    data-aos="zoom-in-down"
    class=" shadow-md shadow-teal-500 bg-gradient-to-b from-slate-900 to-indigo-900 rounded-lg flex flex-col drop-shadow-2xl lg:h-96 w-[90%] lg:flex-row"
  >
    <img
      src={p3}
      alt="thehindu-clone"
      class="rounded-lg h-52 lg:h-full lg:w-1/2 hover:scale-95 duration-500"
    />

    <div class="flex flex-col justify-center max-md:m-5 lg:mx-10">
      <h1 class="text-slate-100 text-3xl my-3 font-bold">Covid-19 report</h1>
      <h1 class="text-slate-100">
        Simple Covid-19 report using html, css and javascript 
      </h1>
      <div class="text-teal-400 flex flex-wrap my-4">
        <p class="bg-transparent ring-2 ring-teal-400 px-3 w-auto m-3">
          HTML
        </p>
        <p class="bg-transparent ring-2 ring-teal-400 px-3 w-auto m-3">
          CSS
        </p>
        <p class="bg-transparent ring-2 ring-teal-400 px-3 w-auto m-3">
          JAVASCRIPT
        </p>
        {/* <!-- <p class="bg-transparent ring-2 p-3">HTML</p> --> */}
      </div>
      <div class="flex justify-center mt-4">
        <a
          href="https://api-integration-with-react-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-3xl">          
          <FontAwesomeIcon
            icon={faGithub}
            className="text-slate-400 mr-2 hover:text-slate-100"
            size="lg"
          />
        </a>
        <a
          href="https://api-integration-with-react-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-3xl">
          <FontAwesomeIcon
            icon={faLink}
            className="text-slate-400 mx-4 hover:text-slate-100"
          />
        </a>
      </div>
    </div>
  </div>
</div>
</div>


  )
}




