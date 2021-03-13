import React from "react";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import { ReactCompareSlider,  ReactCompareSliderHandle, ReactCompareSliderImage } from 'react-compare-slider';


export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-screen">

        <ReactCompareSlider
         handle={
          <ReactCompareSliderHandle
            buttonStyle={{
             
              display:"none"
            }}
          />
        }
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
        borderRadius:".25rem"
      }}
      
    />

          
        
        
        </section>
        
      </main>
      <Footer />
    </>
  );
}
