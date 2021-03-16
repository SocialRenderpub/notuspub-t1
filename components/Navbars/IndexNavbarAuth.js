import React from "react";
import Link from "next/link";
// components
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../header.module.css'


import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {

  const [ session, loading ] = useSession()

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href="/"
              >
                <img 
                alt='logo'
                src={require("assets/img/brand/Rstudio.png")}
                width={150}
                
                >
             </img>
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
                >
                  <i className="text-gray-500 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/landing"
                >
                  Landing
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/features"
                >
                  Features
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/gallery"
                >
                  Showcase
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/"
                >
                  Community
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/download"
                >
                  Download
                </a>
              </li>
              
              

              
              

              <li className="flex items-center">
              
                {!session && <>
            <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn("cognito")
                }}
              >
                <button
                  className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   Sign In
                </button>
              </a>
          </>}
            
            
            
            
            
            
            {session && <>
            
             <a
                 href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut({callbackUrl:'https://renderpub-notus-auth.vercel.app/signout'})
                }}
              >
                <button
                  className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  {/* <i className="fas fa-user "></i> */}
                  <i>
                  {session.user.image && <span style={{backgroundImage: `url(${session.user.image})` }} className={styles.avatar}/>}
                  </i> 
                    
                    Sign Out
                </button>
              </a>
              {/* <a
                href={'https://3nextauth.auth.ap-south-1.amazoncognito.com/logout?client_id=6lbt221p33u3ib6r0agl0gpmbf&logout_uri=http://localhost:3000/signout'}
                className={styles.button}
              >
                Sign out
              </a> */}
          </>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
