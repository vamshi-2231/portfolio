import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v7wiaht', 'template_uzpp4ek', e.target, 'vamshimamindla1779@gmail.com')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    // <!-- Contact section -->
    <div data-aos="zoom-in-down" className="bg-gradient-to-b from-slate-900 to-violet-900" id="contact">
      <h1
        className="text-xl xl:text-3xl font-bold text-center lg:text-left lg:ml-60 text-gray-200 border-b-4 border-b-pink-400 w-48 mx-auto my-10">
        Get in Touch
      </h1>
      <div
        className="flex flex-col md:flex-row justify-center items-center  lg:mx-52">
        <div className="bg-slate-800 text-slate-100 lg:mr-10 w-[90%] lg:w-[45%] flex flex-col h-[480px] text-2xl drop-shadow-2xl border-2 border-b-sky-600 lg:border-none p-6 justify-center items-center rounded-lg">
          <p className="mx-auto text-lg font-semibold">Contact Information</p>

          <div className="my-6 flex flex-col">
            <div className="my-4 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-md" />
              <label className="ml-2">Address:</label>
              <span className="text-sky-500 hover:text-teal-700 ml-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
                Telangana, India
              </span>
            </div>

            <div className="my-4 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="fa-md" />
              <label className="ml-2">Email:</label>
              <a href="mailto:vamshimamindla1779@gmail.com" className="text-sky-500 hover:text-teal-700 ml-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
                vamshimamindla1779@gmail.com
              </a>
            </div>
          </div>

          <div className="mx-auto mt-auto flex flex-wrap justify-center">
            <a
              href="https://github.com/vamc2231"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 xl:m-4"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl hover:scale-125 duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vamshi-mamindla-9113aa1b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 xl:m-4"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-3xl hover:scale-125 duration-300 text-sky-700"
              />
            </a>
            <a
              href="https://www.instagram.com/vamshi_goud2231/"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 xl:m-4"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-3xl hover:scale-125 duration-300 text-red500"
              />
            </a>
          </div>
        </div>

        <div
          className="bg-slate-800 w-[90%] lg:w-[60%] h-[480px] lg:my-10 flex justify-center items-center drop-shadow-2xl rounded-lg"
        >
          <form onSubmit={sendEmail}>
            <div className="flex flex-col mx-auto justify-center items-center">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                required
                className="h-10 rounded-sm placeholder:text-slate-800 block focus:shadow-lg focus:shadow-blue-400 w-[300px] md:w-[550px] py-2 focus:outline-none focus:ring-border-gray-900 ring-1 ring-slate-400 px-4 focus:ring-1 focus:ring-slate-800 sm:text-sm my-3"
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                required
                className="h-10 rounded-sm placeholder:text-slate-800 block focus:shadow-lg focus:shadow-blue-400 w-[300px] md:w-[550px] py-2 focus:outline-none focus:ring-border-gray-900 ring-1 ring-slate-400 px-4 focus:ring-1 focus:ring-slate-800 sm:text-sm my-3"
              />

              <textarea
                name="message"
                rows="10"
                // aria-setsize="fixed"
                id="message"
                required
                className="h-52 rounded-sm placeholder:text-slate-800 block focus:shadow-lg focus:shadow-blue-400 w-[300px] md:w-[550px] py-2 focus:outline-none focus:ring-border-gray-900 ring-1 ring-slate-400 px-4 focus:ring-1 focus:ring-slate-800 sm:text-sm my-3"
                placeholder="Enter Your Message"
              ></textarea>

              <div className="mx-auto">
                <input
                  type="submit"
                  value="Send"
                  className="rounded-full text-2xl bg-white shadow-lg shadow-white/60 text-slate-900 w-[200px] lg:w-40 h-10 mx-auto my-6 cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}