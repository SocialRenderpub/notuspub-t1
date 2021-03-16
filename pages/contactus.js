import React from "react";
import Link from "next/link";

//import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbarAuth.js";

import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-gray-700">
                Contact Renderpub Team
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We are available various social media platform , you can reach out to us on any of them and we will get back to you within {" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-gray-700"
                  target="_blank"
                >
                  48 hrs
                </a>
                . If you want to create a ticket for any specific issue , Please reach out to us on discord.
              </p>
              <div className="mt-12 space-y-2">
                
                <a
                  href="#twitter"
                  target="_blank"
                >
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fab fa-twitter"></i>
                </div>
                </a>
                <a
                  href="#youtube"
                  target="_blank"
                >
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fab fa-youtube"></i>
                </div>
                </a>
                <a
                  href="#facebook"
                  target="_blank"
                >
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fab fa-facebook"></i>
                </div>
                </a>
                
                <a
                  href="#discord"
                  target="_blank"
                >
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fab fa-discord"></i>
                </div>
                </a>
                <a
                  href="mailto:renderpub@gmail.com"
                  target="_blank"
                >
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-at"></i>
                </div>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src={require("assets/img/pattern_nextjs.png")}
          alt="..."
        />
      </section>

      
      

      <section className="py-20 bg-gray-700 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Tickets
              </h3>
              <p className="text-lg font-semibold leading-relaxed mt-4 mb-4 text-gray-500">
                We are available on discord to resolve any queries that you might have ,
                we have a dedicated channell where you can create a ticket for your issue and our support team willl help you resolve it. 
                  
              </p>
              {/* <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-500">
                Get it free on Github and please help us spread the news with a
                Star!
              </p> */}
              <a
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
              >
                Join discord
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-discord text-gray-800 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-gray-300 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Do you love using renderpub studio?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. Hit the buttons below to
                navigate to get the Free version.  Build a
                new render or give an old project a new look! also it would be amazing if you could leave us a review.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Write Review
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fas fa-download text-lg mr-1"></i>
                  <span>Download</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
