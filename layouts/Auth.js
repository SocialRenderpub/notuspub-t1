import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import IndexNavbarAuth from "components/Navbars/IndexNavbar.js";


export default function Auth({ children }) {
  return (
    <>
      <IndexNavbarAuth transparent />
      <main>
        <section className="mt-10 relative w-full h-full py-24 min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            
          ></div>
          {children}
          
        </section>
        <Footer  />
      </main>
    </>
  );
}
