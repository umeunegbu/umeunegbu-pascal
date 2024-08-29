import React from 'react'
import Umeunegbupascal from "../assets/umeunegbu-pascal-gui.PNG"
import Konvivpdc from "../assets/konviv-pdc-gui.PNG"
import Konvivglobal from "../assets/konviv-global-gui.PNG"
import Treasuregarden from "../assets/treasure-garden-gui.PNG"

const Projects = () => {
  return (
    <div id="projects" className='bg-[#ff7f50] pt-20'>
        {/* Container */}
        <div className='max-w-[1000px] min-w-[320px] text-center sm:text-start flex flex-col mx-auto pb-[14rem] px-4 h-full w-full justify-center '>
            <h1 className='text-2xl font-bold'>Projects</h1>
            <p className='text-xs md:text-[.9rem] rounded-lg shadow-lg shadow-black hover:shadow-none  focus:shadow-none mb-6 px-4 py-4  min-h-[5rem]'>
                I have developed a diverse range of websites that demonstrate my expertise in Front-End Development. My Portfolio includes:<br/>

                <strong>*Real Estate Website for Konviv Property Development Company Ltd: </strong> a sleek and user-friendly platform showcasing the properties and projects of a prominent Property Development Company; built with HTML, CSS, JavaScript and Bootstrap.

                <strong> *Business Website for Konviv Global Inc: </strong> a dynamic business website designed for a General Merchandise Company, highlighting their services and product offerings; built with HTML, CSS, JavaScript and Bootstrap.

                <strong> *Real Estate Website for Treasure Garden Investment Ltd: </strong> a comprehensive Real Estate Website for a Real Estate Company, featuring property listings and a clean, professional design that enhances user interaction and engagement; built with HTML, CSS, JavaScript and Bootstrap.

                <strong> *Portfolio Website for Umeunegbu Pascal: </strong> a personal portfolio showcasing my skills as a Web and Front-End Developer. This website serves as a testament to my design capabilities and technical proficiency, featuring my projects, skills, and contact information in a visually appealing layout; built with React, Vite and Tailwind.
            </p>

            <div className='w-full grid grid-cols sm:grid-cols-2 gap-4 text-center mx-auto'>

                <div style= {{backgroundImage: `url(${Konvivpdc})`}} className='min-w-[360px] sm:min-w-[300px] max-w-[460px] shadow-lg shadow-black hover:shadow-none focus:shadow-none group container rounded-lg flex justify-center items-center mx-auto content-div'>
                    <div>
                        {/* <span className='text-xl font-extrabold text-[#000] mx-auto  px-4'> 
                            Konviv Homes' Real Estate Website
                        </span>*/}

                        <div  className='pt-8 text-center'>
                            <a href="https://www.konvivpdc.com" target='_blank' rel="noreferrer" className='focus:outline-none'>
                                <button className='focus:outline-none text-center hover:bg-transparent  focus:bg-transparent shadow-inner shadow-black hover:text-black  focus:text-black hover:border-[#000]  focus:border-[#000] hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50]  text-black  py-2 px-4 mx-2 my-4'>Visit Site</button>
                            </a>

                            <a href="https://github.com/umeunegbu/konviv-pdc.git" target='_blank' rel="noreferrer" className='focus:outline-none'>
                                <button className='focus:outline-none text-center hover:bg-transparent  focus:bg-transparent hover:text-black  focus:text-black shadow-inner shadow-black hover:border-[#000]  focus:border-[#000] hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50]  text-[#000] py-2 px-4 mx-2 my-4'>Source Code</button>
                            </a>

                        </div>                    

                    </div>
                </div>

                <div style= {{backgroundImage: `url(${Konvivglobal})`}} className='min-w-[360px] sm:min-w-[300px] max-w-[460px] shadow-lg shadow-black hover:shadow-none  focus:shadow-none group container rounded-lg flex justify-center items-center mx-auto content-div'>
                    <div>
                        {/* <span className='text-xl font-extrabold text-[#ff7f50] mx-auto px-4'>
                            Konviv Global's Business Website
                        </span>*/}

                        <div  className='pt-8 text-center'>
                            <a href="https://konvivglobal.netlify.app" target='_blank' rel="noreferrer" className='focus:outline-none'>
                                <button className='focus:outline-none text-center hover:bg-transparent  focus:bg-transparent shadow-inner shadow-black hover:text-[#ff7f50]  focus:text-[#ff7f50] hover:border-[#ff7f50]  focus:border-[#ff7f50] hover:border-2  focus:border-2  rounded-[20px] font-extrabold bg-[#ff7f50] py-2 px-4 mx-2 my-4'>Visit Site</button>
                            </a>

                            <a href="https://github.com/umeunegbu/konviv-global.git" target='_blank' rel="noreferrer" className='focus:outline-none'>
                                <button className='focus:outline-none text-center hover:bg-transparent  focus:bg-transparent shadow-inner shadow-black hover:text-[#ff7f50]  focus:text-[#ff7f50] hover:border-[#ff7f50]  focus:border-[#ff7f50] hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50] py-2 px-4 mx-2 my-4'>Source Code</button>
                            </a>

                        </div>                    

                    </div>
                </div>

                <div style= {{backgroundImage: `url(${Treasuregarden})`}} className='min-w-[360px] sm:min-w-[300px] max-w-[460px] shadow-lg shadow-black hover:shadow-none  focus:shadow-none group container rounded-lg flex justify-center items-center mx-auto content-div'>
                    <div>
                        {/* <span className='text-xl font-extrabold text-[#fff] mx-auto  px-4'> 
                            Treasure Garden's Real Estate Website
                        </span>*/}

                        <div  className='pt-8 text-center'>
                            <a href="https://treasuregardeninvestment.netlify.app" target='_blank' rel="noreferrer" className='focus:outline-none'>
                                <button className='focus:outline-none text-center  hover:bg-transparent   focus:bg-transparent hover:text-[#ff7f50]  focus:text-[#ff7f50] hover:border-[#ff7f50]  focus:border-[#ff7f50] shadow-black shadow-inner hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50] py-2 px-4 mx-2 my-4'>Visit Site</button>
                            </a>

                            <a href="https://github.com/umeunegbu/treasure-garden.git" target='_blank' rel="noreferrer" className='focus:outline-none'>
                                <button className='focus:outline-none text-center hover:bg-transparent  focus:bg-transparent hover:text-[#ff7f50]  focus:text-[#ff7f50] hover:border-[#ff7f50]  focus:border-[#ff7f50] shadow-black shadow-inner hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50] py-2 px-4 mx-2 my-4'>Source Code</button>
                            </a>

                        </div>                    

                    </div>
                </div>

                <div style= {{backgroundImage: `url(${Umeunegbupascal})`}} className='min-w-[360px] border border-black sm:min-w-[300px] max-w-[460px] shadow-lg shadow-black hover:shadow-none focus:shadow-none group container rounded-lg flex justify-center items-center mx-auto content-div'>
                    <div>
                        {/* <span className='text-xl font-extrabold text-[#000] mx-auto px-4'> 
                            My Portfolio Website
                        </span>*/}

                        <div  className='pt-8 text-center'>
                            <a href="https://umeunegbupascal.netlify.app" target='_blank' rel="noreferrer" className='focus:outline-none'>
                                <button className='focus:outline-none text-center  hover:bg-transparent  focus:bg-transparent hover:text-[#000]  focus:text-[#000] hover:border-[#000]  focus:border-[#000] hover:border-2  focus:border-2 rounded-[20px] font-extrabold shadow-black shadow-inner bg-[#ff7f50] text-[#000] py-2 px-4 mx-2 my-4'>Visit Site</button>
                            </a>

                            <a href="https://github.com/umeunegbu/umeunegbu-pascal.git" target='_blank' rel="noreferrer" className='focus:outline-none'>
                                <button className='focus:outline-none text-center hover:bg-transparent  focus:bg-transparent hover:text-[#000]  focus:text-[#000] hover:border-[#000]  focus:border-[#000] hover:border-2  focus:border-2 rounded-[20px] font-extrabold shadow-black shadow-inner bg-[#ff7f50] text-[#000] py-2 px-4 mx-2 my-4'>Source Code</button>
                            </a>

                        </div>                    

                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Projects