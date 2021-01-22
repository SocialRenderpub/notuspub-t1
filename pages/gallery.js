import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative mt-10 flex content-center items-center justify-center ">
          
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
              
            </svg>
            
          </div>
        </div>

        

        

        <section className="pt-20 pb-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center ">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Showcase</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
             <div className="w-full h-4/6 md:w-full h-4/6 ml-auto mr-auto  px-4">
             <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1500&q=80"
                      style={{ filter: "grayscale(1)" }}
                      alt="one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1500&q=80"
                      alt="two"
                    />
                  }
                  style={{
                    display: "flex",
                    margin:"10px",
                    position: "relative",
                    backgroundPosition:"center , center",
                    backgroundSize:"cover",
                    boxShadow:"0px 10px 25px 0px rgba(0, 0, 0, 0.3)",
                    borderRadius:".25rem",
                    height:"80%"
                  
                  }}
              />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center ">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                
              </div>

              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-lg"
                  />
                  
                </div>
              </div>
            </div>
          
        </section>
        

        <section className="-pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center ">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Showcase</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="container px-4 mx-auto space-y-6">
            <div className="flex flex-wrap sm:grid">
                <div className="w-1/2 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1533139143976-30918502365b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                />
                </div>
                <div className="w-1/2 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1533139143976-30918502365b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                />
                </div>
              </div>
              <div className="flex flex-wrap my-6">
                <div className=" w-1/2 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1533139143976-30918502365b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                />
                </div>
                <div className="w-1/2 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1533139143976-30918502365b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                />
                </div>
              </div>
              
              <div className="flex flex-wrap my-6">
                <div className="w-1/2 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1533139143976-30918502365b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                />
                </div>
                <div className="w-1/2 px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1533139143976-30918502365b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                />
                </div>
              </div>
            </div>
          </div>
        </section>
        

        


        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto  lg: lg:pb-64">
            
            
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want us to keep you updated ?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Please provide us your email to get early access.
                    </p>
                    

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
