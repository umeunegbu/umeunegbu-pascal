import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo-dark.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav(!nav);
  }

  return (
    <div
      id="navbar"
      className="fixed w-full h-[5rem] flex justify-between items-center px-4 bg-[#ff7f50] border-b shadow-lg shadow-black border-[#000000]"
    >
      {/* Logo */}
      <div>
        <a href="home" className="focus:outline-none">
          <img
            src={Logo}
            alt="Logo"
            href="#home"
            style={{ width: "5rem" }}
            className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none"
          />
        </a>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="rounded-lg shadow-lg shadow-black hover:shadow-none">
          <a href="#home" className="focus:outline-none focus:shadow-none">
            Home
          </a>
        </li>
        <li className="rounded-lg shadow-lg shadow-black hover:shadow-none">
          <a href="#skills" className="focus:outline-none focus:shadow-none">
            Skills
          </a>
        </li>
        <li className="rounded-lg shadow-lg shadow-black hover:shadow-none">
          <a href="#projects" className="focus:outline-none focus:shadow-none">
            Projects
          </a>
        </li>
        <li className="rounded-lg shadow-lg shadow-black hover:shadow-none">
          <a href="#contact" className="focus:outline-none focus:shadow-none">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        className="md:hidden z-10 rounded-md shadow-lg shadow-black hover:shadow-none focus:shadow-none p-2"
        onClick={handleClick}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-[20rem] md:hidden bg-[#ff7f50] flex flex-col items-center justify-end"
            : "hidden"
        }
      >
        <li
          className="py-4 text-center w-[98%] rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none"
          onClick={handleClick}
        >
          <a href="#home" className="focus:outline-none text-2xl ">
            Home
          </a>
        </li>
        <li
          className="py-4 text-center w-[98%] rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none"
          onClick={handleClick}
        >
          <a href="#skills" className="focus:outline-none text-2xl">
            Skills
          </a>
        </li>
        <li
          className="py-4 text-center w-[98%] rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none"
          onClick={handleClick}
        >
          <a href="#projects" className="focus:outline-none text-2xl">
            Projects
          </a>
        </li>
        <li
          className="py-4 text-center w-[98%] rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none"
          onClick={handleClick}
        >
          <a href="#contact" className="focus:outline-none text-2xl">
            Contact
          </a>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="1090px:hidden flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300">
            <a
              className="flex justify-between items-center w-full font-bold text-l focus:ml-[-5px] focus:outline-none"
              href="https://drive.google.com/file/d/1cd83i3GBLiYVaUssKmMWWl8v-xsxfMM8/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300">
            <a
              className="flex justify-between items-center w-full font-bold text-l focus:ml-[-5px] focus:outline-none"
              href="https://www.linkedin.com/in/umeunegbupascal"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300">
            <a
              className="flex justify-between items-center w-full font-bold text-l focus:ml-[-5px] focus:outline-none"
              href="https://www.github.com/umeunegbu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300">
            <a
              className="flex justify-between items-center w-full font-bold text-l focus:ml-[-5px] focus:outline-none"
              href="https://www.facebook.com/umeunegbu"
              target="_blank"
              rel="noreferrer"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300">
            <a
              className="flex justify-between items-center w-full font-bold text-l focus:ml-[-5px] focus:outline-none"
              href="https://www.x.com/umeunegbup"
              target="_blank"
              rel="noreferrer"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className="rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300">
            <a
              className="flex justify-between items-center w-full font-bold text-l focus:ml-[-5px] focus:outline-none"
              href="mailto:umeunegbupascal@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
