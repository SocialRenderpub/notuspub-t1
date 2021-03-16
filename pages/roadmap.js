import React from "react";
import Link from "next/link";


// components

import Navbar from "components/Navbars/IndexNavbarAuth.js";
import Footer from "components/Footers/Footer.js";

import Hubspot from "components/Custom/hubspot"
// import { bold } from "*.jpg";


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
            >
              
            </svg>
            
          </div>
        </div>

        

        

        <section className="pt-20 pb-10">
          <div className="container mx-auto px-4 ">
            <div className="flex flex-wrap justify-center text-center my-8">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Roadmap</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  We are working on exciting new products to bring you the best. 
                  Now, lets walkthrough our upcoming releases !
                </p>
              </div>
            </div>


            <div className="items-center my-6">
              <div className="w-full md: px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-star text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Renderpub Walks (Web VR Platform)
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Create and publish unlimited virtual reality walks from RenderPub Studio to the webVR cloud platform. Walks are interactive web presentations that are fully navigable through pre-rendered panoramic hotspots and can be viewed on any device with a modern web browser.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                You can easily share walks, embed them on your own web pages or flaunt a ton of them on your profile. With a host of collaboration tools to boot, multiple stake holders can simultaneously interact on a single walk, immensely boosting the efficiency of your design communication and iteration process.
                </p>
                
              </div>

              
            </div>

            <div className="items-center my-6">
              <div className="w-full md: px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-star text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Renderpub Stitch
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Stitch is a light weight desktop application designed to integrate seamlessly into your existing modelling and rendering workflow.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                With Stitch, you have the flexibility of using any rendering software of your choice to render panoramas and publish walks in 4 simple steps.
                <ol>
                  <br></br>
                  <li className="font-semibold">
                    1. Import Model
                  </li>
                  <li className="font-semibold" >
                    2. Place hotspots to generate camera coordinates.
                  </li>
                  <li className="font-semibold">
                    3. Render panoramas from generated coordinates.
                  </li>
                  <li className="font-semibold">
                    4. Upload to cloud
                  </li>
                </ol>
                </p>
                
              </div>

              
            </div>

            <div className="items-center my-6">
              <div className="w-full md: px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-star text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Terrain generator
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Procedurally generate terrain variations by controlling parameters like noise, scale, elevation etc. Also, create terrains by importing synthetically created or real world heightmaps as images.
                </p>
                
                
              </div>

              
            </div>

            <div className="items-center my-6">
              <div className="w-full md: px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-star text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Ocean System
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Highly customizable ocean simulation with advanced water surface effects like waves, foam and smooth transitioning from calm to stormy ocean conditions.
                </p>
                
                
              </div>

              
            </div>

            <div className="items-center my-6">
              <div className="w-full md: px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-star text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Importers
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Support for importing a wider array of common 3D file formats making RenderPub Studio more interoperable with other softwares.


                </p>
               
                
              </div>

              
            </div>

            <div className="items-center my-6">
              <div className="w-full md: px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-star text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  New shaders
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Shell based Fur Shader capable of rendering in real time with optimized physics. Iridescence Shader for beautiful color gradation as the angle of observation or light incidence changes.
                </p>
                
                
              </div>

              
            </div>

            <div className="items-center my-6">
              <div className="w-full md: px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-star text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Animation and Fx
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Add movement to your scene with an entourage of animated 3D characters, vehicles and particle system based effects like falling leaves, birds, water fountains, fire and more.
                </p>
                
                
              </div>

              
            </div>

            <div className="items-center my-6">
              <div className="w-full md: px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-star text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  New library content
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Additional render ready assets, materials, FX and optimized vegetation models all hand picked and curated to enhance the convenience of assembling scenes.
                </p>
                
                
              </div>

              
            </div>

            <div className="flex flex-wrap items-center my-6 ">
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
         </div>
        </section>
        
      <Hubspot/>
        
        

        


        
        
        
        
      </main>
      <Footer />
    </>
  );
}
