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
               <h2 className='text-sm md:text-xl h-1'>I'm a seasoned <span className='font-bold'>Programmer, Fullstack Developer & Automation Engineer</span>.</h2><br/>
            </div>
            
            <div className='rounded-lg shadow-lg shadow-black hover:shadow-none  focus:shadow-none mb-6 px-4 py-4  min-h-[5rem]'>
                <p className='text-xs md:text-[.9rem] text-center sm:text-start'>
                   I am a multifaceted technology professional with a proven track record of driving innovation and delivering exceptional results for diverse clients. My core expertise lies in architecting and implementing automated solutions, designing custom plugins, and streamlining complex processes such as order fulfillment and data integration to significantly boost operational efficiency and accuracy. As an Automation Engineer for The PurchaseHub, a leading US-based book seller, I have successfully developed and deployed automated systems that enhance business performance and reliability. 
                   <br/><br/>
                   In addition to my automation skills, I am an accomplished Fullstack Developer, adept at managing, optimizing, and elevating the digital presence and functionality for clients across various industries. My experience spans organizations such as Konviv Property Development Company Ltd, Konviv Global Inc, and Treasure Garden Investment Ltd, where I have led projects from conception to deployment, consistently delivering robust and scalable technology solutions.
                   <br/><br/>
                   Beyond technical execution, I am a dedicated Content Creator and Author, passionate about transforming complex concepts into accessible knowledge for the tech community. My commitment to leveraging technology as a strategic asset, whether through coding, building automated systems, managing web infrastructure, or sharing insights, underscores my dedication to excellence, innovation, and delivering tangible results that advance business objectives and foster growth.                   
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