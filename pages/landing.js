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
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl text-center">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300 text-center">
                    This is a simple example of a Landing Page you can build
                    using Notus NextJS. It features multiple CSS components
                    based on the Tailwind CSS design system.
                  </p>
                  
                </div>
              </div>
            </div>
           </div>
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
          <div class="absolute  " style={{ bottom:"5vh" , left:"5vh"}}>

                  <a href="" class="-20 bg-gray-200 rounded-full font-bold text-black px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">
                  <i className="fas fa-user-friends text-xl"></i>

                    <button> &nbsp; Sign up for early access </button>
                  </a>
                 
          </div>
          
        </div>

        <section className="pb-20 bg-gray-300 pt-20">
          <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center pb-20">Create and Publish spectacular renders in real-time within minutes</h2>
            <div className="flex flex-wrap">
              
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto px-4 my-32">
            <div className="flex flex-wrap justify-center text-center ">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Realtime Ray Tracing</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                Achieve cinematic quality visuals in no time with NVIDIA’s RTX GPU accelerated ray tracing or fallback to the impressive bounce lighting system in the absence of RTX hardware. 
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

            <div className="flex flex-wrap-reverse items-center  ">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Foliage
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Spawn highly optimized foliage and 3D grass on the terrain with control over clustering, and randomness to create natural looking meadows.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                All foliage types automatically align with the terrain normal direction and also react to wind speed, strength and direction adding to the realism of your scene.v
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

        <section className="relative py-20 ">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden "
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap ">
              <div className="w-full md:w-6/12 ml-auto mr-auto  px-4">
                <img
                  alt="..."
                  className="max-w-full mb-6 rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1533139143976-30918502365b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-3xl  font-semibold">Mass Placement</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap-reverse items-center mt-24 ">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Physically Based Materials
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Spawn highly optimized foliage and 3D grass on the terrain with control over clustering, and randomness to create natural looking meadows.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                All foliage types automatically align with the terrain normal direction and also react to wind speed, strength and direction adding to the realism of your scene.v
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

        {/* <section className="pt-20 pb-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center ">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
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
        </section> */}
        
        <section className="pt-20 pb-10">
          <div className="container mx-auto px-4 ">
            <div className="flex flex-wrap justify-center text-center my-8">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Showcase</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>


            <div className="flex flex-wrap items-center my-6">
              
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-lg"
                  />
                  
                </div>
              </div>

              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-lg"
                  />
                  
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center my-6 ">
               <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-lg"
                  />
                  
                </div>
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
            <div className="flex flex-wrap items-center  my-6">
             <div className="w-full md:w-6/12 px-4 mr-auto ml-auto ">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-lg"
                  />
                  
                </div>
              </div>

              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto ">
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
        

        <section className="pb-20 bg-gray-300 ">
          
        <div className="container mx-auto px-4 py-20">
        

            <div className="flex flex-wrap justify-center text-center ">
              
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Roadmap</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
             <div className="w-full  md:w-full  ml-auto mr-auto  px-4">
             <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg h-52"
                  src="https://images.unsplash.com/photo-1533139143976-30918502365b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                />
             
              <div className="flex flex-wrap my-4">
                <div className="w-1/2 px-4 text-center">
                <h2 className="text-4xl font-semibold text-center">Roadmap</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>

                
                </div>
                <div className="w-1/2 px-4 text-center">
                <h2 className="text-4xl font-semibold text-center">Roadmap</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
                
                </div>
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
