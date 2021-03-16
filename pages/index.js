import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexNavbarAuth from "components/Navbars/IndexNavbarAuth.js"
import Footer from "components/Footers/Footer.js";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { SRLWrapper } from "simple-react-lightbox";
import Hubspot from "../components/Custom/hubspot";


export default function Index() {
  console.log(process.env.hubspotApiKey)
  console.log(process.env.DUMMY)

  return (
    <>
      <IndexNavbarAuth fixed />
      <section className="header relative pt-16 items-center flex max-h-860-px "style={{height:"75vh"}}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1611474494831-363035161328?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute "
            ></span>
          </div>
          
          

          
          <div className="absolute" style={{ bottom:"5vh" , left:"5vh" }}>
            <a href="" className="flex bg-gray-800 rounded-lg font-bold text-white text-center p-2 md:p-5  ">
                  <i className="fas fa-user-friends text-xl"></i>
                  <button className=""> &nbsp; Sign up for early access </button>
            </a>
          </div>

          
          
        </section>

        
      <section className="header relative py-4 items-center flex  ">
      

        <div className="container mx-auto items-center flex flex-wrap pb-20">
          <div className="w-full px-6 text-center">
            <div className=" ">
              <h2 className="font-semibold  resp-h1 text-gray-700">
                Architectural Visualization. <span style={{color:"teal"}}>Like Never Before.</span> 
              </h2>
              <p className="mt-2 text-lg leading-relaxed text-gray-600">
              Experience cutting edge real time rendering. With a vast library of physical materials, lights, props, foliage and environment templates, it is easier than ever to create ultra realistic renders.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 active:bg-gray-300 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Know more
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  className="github-star ml-1 text-white font-bold px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      
      


     
      <SRLWrapper>
      <section className="pb-16 bg-gray-200 relative pt-32 mt-16">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 "
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
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
            
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center  rounded-lg  lg:-mt-64 px-12 relative z-10">
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
          </div>
        </div>
        

        <div className="container mx-auto px-4 mt-20 ">
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

          <div className="container mx-auto px-4 -mt-6">
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


          <div className="container mx-auto px-4 mt-24">
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
     
      

      <section className="pt-12 pb-10 relative"> 
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
              
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto ">
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
            <div className="flex flex-wrap items-center my-6">
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

        <section className="pb-20  relative block bg-gray-900">
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

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white mt-5 md:mt-0">
                  Roadmap
                </h2>
                
                <p className="text-lg leading-relaxed mt-4 mb-5 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-lg"
                  />
                  
                </div>
              </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center ">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        </SRLWrapper>

        <Hubspot/>


      <Footer />
    </>
  );
}
