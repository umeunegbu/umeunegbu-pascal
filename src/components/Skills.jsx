import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import Tailwind from "../assets/tailwind-css.svg";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Jest from "../assets/jest-icon.svg";
import { FaWordpress } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiPhp, SiTypescript } from "react-icons/si";
import {
  SiPostgresql,
  SiWoocommerce,
  SiVisualstudiocode,
  SiPrisma,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="bg-[#ff7f50] pt-20">
      {/* Container */}
      <div className="max-w-[1000px] min-w-[320px] text-center sm:text-start flex flex-col mx-auto px-4 h-full w-full justify-center pb-[14rem] ">
        <h1 className="text-2xl font-bold">Skills</h1>
        <p className="text-xs md:text-[.9rem] rounded-lg shadow-lg shadow-black hover:shadow-none  focus:shadow-none mb-6 px-4 py-4  min-h-[5rem]">
          I possess a comprehensive tech skills stack covering frontend
          technologies such as HTML, CSS, JavaScript, TypeScript, React, Vite,
          Tailwind, Bootstrap, and jQuery, which I leverage to craft dynamic and
          visually appealing user interfaces. My backend expertise includes
          JavaScript, TypeScript, Python, Java, PHP, Node.js, and Express,
          enabling me to build robust server-side applications and RESTful APIs.
          I am highly skilled in Plugin Development and Process Automation,
          utilizing tools and frameworks to streamline workflows and enhance
          operational efficiency for clients. My proficiency extends to Database
          Management with PostgreSQL and Prisma, ensuring scalable, secure, and
          efficient data solutions for complex projects.
          <br />
          <br />
          In addition to my programming capabilities, I am adept at WordPress
          and WooCommerce development, building and integrating custom plugins,
          and optimizing CMS and e-commerce platforms to meet unique business
          requirements. I am experienced in version control with Git,
          collaborative coding on GitHub, and employ unit testing frameworks
          like Jest to ensure code reliability. My workflow is supported by a
          range of design and development tools, including Figma, Photoshop, VS
          Code, Sublime Text, Atom, Notepad++, Adobe Dreamweaver, PyCharm,
          Jupyter Notebook, Eclipse, and NetBeans. With this broad and versatile
          skill set, I am well-equipped to deliver top-notch Fullstack
          Development and Automation Engineering solutions tailored to diverse
          client needs.
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none  focus:shadow-none">
            <FaHtml5 className="w-[8rem] h-[8rem] mx-auto" alt="HTML icon" />
            <p className="mx-auto">HTML5</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <FaCss3 className="w-[8rem] h-[8rem] mx-auto" alt="CSS icon" />
            <p className="mx-auto">CSS3</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <DiJavascript
              className="w-[8rem] h-[8rem] mx-auto"
              alt="JavaScript icon"
            />
            <p className="mx-auto">JavaScript</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <FaReact className="w-[8rem] h-[8rem] mx-auto" alt="React icon" />
            <p className="mx-auto">React</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <SiVite className="w-[8rem] h-[8rem] mx-auto" alt="Vite icon" />
            <p className="mx-auto">Vite</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <img
              src={Tailwind}
              alt="Tailwind icon"
              className="mx-auto"
              style={{ width: "8rem", height: "8rem" }}
            />
            <p className="mx-auto">Tailwind</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <FaBootstrap
              className="w-[8rem] h-[8rem] mx-auto"
              alt="Bootstrap icon"
            />
            <p className="mx-auto">Bootstrap</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <DiJqueryLogo
              className="w-[8rem] h-[8rem] mx-auto"
              alt="jQuery icon"
            />
            <p className="mx-auto">jQuery</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <FaNodeJs
              className="w-[8rem] h-[8rem] mx-auto"
              alt="Node.js icon"
            />
            <p className="mx-auto">Node.js</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <SiExpress
              className="w-[8rem] h-[8rem] mx-auto"
              alt="Express icon"
            />
            <p className="mx-auto">Express</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <SiPhp className="w-[8rem] h-[8rem] mx-auto" alt="PHP icon" />
            <p className="mx-auto">PHP</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <SiTypescript
              className="w-[8rem] h-[8rem] mx-auto"
              alt="TypeScript icon"
            />
            <p className="mx-auto">TypeScript</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <img
              src={Jest}
              alt="Jest icon"
              className="mx-auto"
              style={{ width: "8rem", height: "8rem" }}
            />
            <p className="mx-auto">Jest</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <FaGit className="w-[8rem] h-[8rem] mx-auto" alt="Git icon" />
            <p className="mx-auto">Git</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <FaGithub className="w-[8rem] h-[8rem] mx-auto" alt="GitHub icon" />
            <p className="mx-auto">GitHub</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <FaPython className="w-[8rem] h-[8rem] mx-auto" alt="Python icon" />
            <p className="mx-auto">Python</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <FaJava className="w-[8rem] h-[8rem] mx-auto" alt="Java icon" />
            <p className="mx-auto">Java</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <FaFigma className="w-[8rem] h-[8rem] mx-auto" alt="Figma icon" />
            <p className="mx-auto">Figma</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <DiPhotoshop
              className="w-[8rem] h-[8rem] mx-auto"
              alt="Photoshop icon"
            />
            <p className="mx-auto">Photoshop</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <FaWordpress
              className="w-[8rem] h-[8rem] mx-auto"
              alt="WordPress icon"
            />
            <p className="mx-auto">WordPress</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <SiPostgresql
              className="w-[8rem] h-[8rem] mx-auto"
              alt="PostgreSQL icon"
            />
            <p className="mx-auto">PostgreSQL</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <SiWoocommerce
              className="w-[8rem] h-[8rem] mx-auto"
              alt="WooCommerce icon"
            />
            <p className="mx-auto">WooCommerce</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <SiVisualstudiocode
              className="w-[8rem] h-[8rem] mx-auto"
              alt="VS Code icon"
            />
            <p className="mx-auto">VS Code</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none">
            <SiPrisma className="w-[8rem] h-[8rem] mx-auto" alt="Prisma icon" />
            <p className="mx-auto">Prisma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
