import React, { useEffect } from 'react';
import AOS from 'aos';
import Typed from 'typed.js';
import 'aos/dist/aos.css'; // Import AOS styles

const Scripts = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });

    // Initialize Typed.js
    const options = {
      strings: [
        "student",
        "Web Developer",
        "Web Designer",
        "programmer",
      ],
      loop: true,
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 400,
    };
    const typed = new Typed('.typing', options);

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      <script
        src="https://kit.fontawesome.com/632ef732fd.js"
        crossOrigin="anonymous"
      ></script>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </>
  );
};

export default Scripts;