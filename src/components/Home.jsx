import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill} from "react-icons/bs"

const Home = () => {
  return (
    <div id= "home" className='bg-[#ff7f50] w-full h-full'>
        {/* Container */}
        <div className='max-w-[1000px] min-w-[320px] flex flex-col mx-auto my-auto pt-[13.2rem] pb-0 px-4 h-full justify-center'>
            <div className='min-w-[328px] text-center sm:text-start rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none mb-6 px-4 py-2 482px:pb-6 min-h-[2rem]'>
               <h1 className='text-md md:text-xl h-1'><span className='font-bold'>Umeunegbu Pascal</span> is my name.</h1><br/>
               <h2 className='text-sm md:text-xl h-1'>I'm a seasoned <span className='font-bold'>Programmer, Web & Front-End Developer</span>.</h2><br/>
            </div>
            
            <div className='rounded-lg shadow-lg shadow-black hover:shadow-none  focus:shadow-none mb-6 px-4 py-4  min-h-[5rem]'>
                <p className='text-xs md:text-[.9rem] text-center sm:text-start'>
                   As a seasoned Web and Front-End Developer, I bring a wealth of experience and expertise to the table. With a proven track record of delivering exceptional results, I have honed my skills through hands-on projects and continuous learning. My journey in the field has been marked by successful collaborations with various companies, including Konviv Global Inc, Treasure Garden Investment Ltd, and Konviv Property Development Company Ltd. These experiences have provided me with invaluable insights into the intricacies of web development, allowing me to stay abreast of the latest trends and technologies in the ever-evolving digital landscape. <br/><br/>
                   My tenure at these esteemed organizations has not only enhanced my technical proficiency but also cultivated my ability to create engaging and user-friendly digital experiences. By leveraging my expertise in front-end development, I strive to craft visually appealing and intuitive interfaces that resonate with users. From designing responsive layouts to optimizing website performance, I am committed to delivering solutions that exceed expectations and drive tangible results. With a passion for innovation and a dedication to excellence, I am well-equipped to tackle the challenges of modern web development and contribute positively to any project or team.
                </p>

                <div>
                    <button className='py-2 m-auto sm:ml-0 px-4 my-4 flex items-center rounded-[20px] shadow-inner shadow-black font-bold hover:shadow-black focus:shadow-black hover:shadow-lg focus:shadow-lg focus:outline-none group hover:border-[#000]  focus:border-[#000] hover:text-[#000]  focus:text-[#000]'><a href='#projects' className='focus:outline-none'>View Projects</a> 
                       <span className='ml-2 group-hover:rotate-90 group-focus:rotate-90 duration-300'>
                          <HiArrowNarrowRight />
                       </span> 
                    </button>
                </div>            
            </div>

            {/* Social Icons */}
            <div className='1090px:flex hidden flex-col'>
                <ul className='-ml-5 1012px:-ml-7 1026px:-ml-9 1042px:-ml-11 1056px:-ml-12 1068px:-ml-14 1078px:-ml-16'>
                    <li className='rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300'>
                        <a className='flex justify-between items-center w-full font-bold text-l focus:ml-[-5px] focus:outline-none' href="https://drive.google.com/file/d/1cuElg1k9vbsLDFreB3WoBqZhOTAGwj5N/view?usp=sharing" target="_blank" rel="noreferrer"> 
                          Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                    <li className='rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300'>
                        <a className='flex justify-between items-center w-full font-bold text-l focus:ml-[-5px] focus:outline-none' href="https://www.linkedin.com/in/umeunegbupascal" target="_blank" rel="noreferrer"> 
                          LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300'>
                        <a className='flex justify-between items-center w-full font-bold text-l focus:ml-[-5px] focus:outline-none' href="https://www.github.com/umeunegbu" target="_blank" rel="noreferrer"> 
                          GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300'>
                        <a className='flex justify-between items-center w-full font-bold text-l focus:ml-[-5px] focus:outline-none' href="https://www.facebook.com/umeunegbu" target="_blank" rel="noreferrer"> 
                          Facebook <FaFacebook size={30}/>
                        </a>
                    </li>
                    <li className='rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300'>
                        <a className='flex justify-between items-center w-full font-bold text-l focus:ml-[-5px] focus:outline-none' href="https://www.x.com/umeunegbup" target="_blank" rel="noreferrer"> 
                          Twitter <FaTwitter size={30}/>
                        </a>
                    </li>
                    <li className='rounded-lg shadow-lg shadow-black h-[60px] w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-5px] duration-300'>
                        <a className='flex justify-between items-center w-full font-bold text-l  focus:ml-[-5px] focus:outline-none' href="mailto:umeunegbupascal@gmail.com" target="_blank" rel="noreferrer"> 
                          Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                </ul>        
            </div>
        </div>
    </div>
  )
}

export default Home