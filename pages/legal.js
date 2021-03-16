import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/IndexNavbarAuth.js";
import Footer from "components/Footers/Footer.js";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import { SRLWrapper } from "simple-react-lightbox";

import Hubspot from "components/Custom/hubspot"



export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative mt-10 flex content-center items-center justify-center space-y-10">
          
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
            >te
              
            </svg>
            
          </div>
        </div>

        

        
        <section className="pt-20 py-20">
          <div className="container mx-auto px-4 ">
            <div className="flex flex-wrap justify-center text-center my-8">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Legal</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div> 
          </div>
          <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h2 className="text-2xl font-semibold">Terms and Conditions</h2>

                      <p className=" mt-5 mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h2 className="text-2xl font-semibold">Terms and Conditions</h2>

                      <p className=" mt-5 mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h2 className="text-2xl font-semibold">Terms and Conditions</h2>

                      <p className=" mt-5 mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h2 className="text-2xl font-semibold">Terms and Conditions</h2>

                      <p className=" mt-5 mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      
                    </div>
                  </div>
                </div>
          </section>
         
            <Hubspot/>

      </main>
      <Footer />
    </>
  );
}
