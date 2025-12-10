import React from "react";
import Purchasehub from "../assets/purchasehub.PNG";
import Umeunegbupascal from "../assets/umeunegbu-pascal-gui.PNG";
import Konvivpdc from "../assets/konviv-pdc-gui.PNG";
import Konvivglobal from "../assets/konviv-global-gui.PNG";
import Treasuregarden from "../assets/treasure-garden-gui.PNG";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#ff7f50] pt-20">
      {/* Container */}
      <div className="max-w-[1000px] min-w-[320px] text-center sm:text-start flex flex-col mx-auto pb-[14rem] px-4 h-full w-full justify-center ">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="text-xs md:text-[.9rem] rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none mb-6 px-4 py-4 min-h-[5rem]">
          I have developed a diverse range of websites and automation solutions
          that demonstrate my expertise in full stack and API development. My
          portfolio includes:
          <br />
          <br />
          <strong>
            1. WooCommerce & Lulu Print API Integrations for ThePurchaseHub:
          </strong>
          <br />
          Integrated WooCommerce with the Lulu Print API for ThePurchaseHub, a
          leading US-based book seller. Built a custom WordPress plugin that
          connects WooCommerce orders to the Lulu Print API, automating print
          job creation and streamlining order fulfillment. This solution enables
          seamless print-on-demand operations, reduces manual workload, and
          provides a maintainable integration for WooCommerce store owners.
          <br />
          <br />
          <strong>Skills:</strong> PHP · API Development · WordPress Development
          · WooCommerce · Process Automation · Debugging · Plugin Development ·
          E-Commerce
          <br />
          <br />
          <strong>
            2. WooCommerce & Lulu Shipping API Integrations for ThePurchaseHub:
          </strong>
          <br />
          Integrated WooCommerce with the Lulu Shipping API by building a custom
          WooCommerce shipping method plugin that fetches and displays live Lulu
          shipping rates at checkout. Automated the process of fetching,
          displaying, and saving shipping rates, set up a REST API endpoint to
          receive Lulu webhook notifications, and automated tracking info
          display on order details and completed order emails. Added detailed
          logging for API requests, responses, and meta updates, making the
          integration seamless and maintainable for WooCommerce store owners.
          <br />
          <br />
          <strong>Skills:</strong> PHP · API Development · WordPress Development
          · WooCommerce · Process Automation · Debugging · Plugin Development ·
          E-Commerce
          <br />
          <br />
          <strong>3. Portfolio Website for Umeunegbu Pascal:</strong>
          <br />
          Developed a personal portfolio website to showcase my skills. This
          site highlights my technical proficiency and design capabilities,
          featuring a curated selection of my projects, a detailed skills
          section, and contact information in a visually appealing layout. The
          portfolio demonstrates my commitment to modern web development
          standards and best practices.
          <br />
          <br />
          <strong>Skills:</strong> HTML5 · CSS3 · JavaScript · React · CRA ·
          Tailwind CSS · Responsive Design · UI/UX · Front-End Development
          <br />
          <br />
          <strong>
            4. Real Estate Website for Konviv Property Development Company Ltd:
          </strong>
          <br />
          Designed and developed a sleek, user-friendly platform for Konviv
          Property Development Company Ltd, showcasing their property listings
          and ongoing projects. The website features intuitive navigation,
          responsive layouts, and visually appealing interfaces to enhance user
          experience and engagement. This solution provides a professional
          online presence for the company and streamlines property exploration
          for potential clients.
          <br />
          <br />
          <strong>Skills:</strong> HTML5 · CSS3 · JavaScript · Bootstrap ·
          Responsive Design · Interactive Design · Web Development
          <br />
          <br />
          <strong>
            5. Real Estate Website for Treasure Garden Investment Ltd:
          </strong>
          <br />
          Engineered a comprehensive real estate website for Treasure Garden
          Investment Ltd, featuring detailed property listings, advanced search
          functionality, and a clean, professional design. The site is optimized
          for user interaction and engagement, making it easy for visitors to
          browse available properties and contact the company.
          <br />
          <br />
          <strong>Skills:</strong> HTML5 · CSS3 · JavaScript · Bootstrap ·
          Responsive Design · Interactive Design · Web Development
          <br />
          <br />
          <strong>6. Business Website for Konviv Global Inc:</strong>
          <br />
          Created a dynamic business website for Konviv Global Inc, a general
          merchandise company. The platform highlights their diverse services
          and product offerings through interactive sections and modern design
          elements. The website effectively communicates the company’s brand and
          facilitates customer inquiries and engagement.
          <br />
          <br />
          <strong>Skills:</strong> HTML5 · CSS3 · JavaScript · Bootstrap ·
          Responsive Design · Interactive Design · Web Development
        </p>
        <div className="w-full grid grid-cols sm:grid-cols-2 gap-4 text-center mx-auto">
          <div
            style={{ backgroundImage: `url(${Purchasehub})` }}
            className="min-w-[360px] sm:min-w-[300px] max-w-[460px] shadow-lg shadow-black hover:shadow-none focus:shadow-none group container rounded-lg flex justify-center items-center mx-auto content-div"
          >
            <div>
              {/* <span className='text-xl font-extrabold text-[#000] mx-auto  px-4'> 
                            Konviv Homes' Real Estate Website
                        </span>*/}

              <div className="pt-8 text-center">
                <a
                  href="https://www.thepurchasehub.com"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center hover:bg-transparent  focus:bg-transparent shadow-inner shadow-black hover:text-black  focus:text-black hover:border-[#000]  focus:border-[#000] hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50]  text-black  py-2 px-4 mx-2 my-4">
                    Visit Site
                  </button>
                </a>

                <a
                  href="https://github.com/umeunegbu/thepurchasehub.git"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center hover:bg-transparent  focus:bg-transparent hover:text-black  focus:text-black shadow-inner shadow-black hover:border-[#000]  focus:border-[#000] hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50]  text-[#000] py-2 px-4 mx-2 my-4">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Purchasehub})` }}
            className="min-w-[360px] sm:min-w-[300px] max-w-[460px] shadow-lg shadow-black hover:shadow-none  focus:shadow-none group container rounded-lg flex justify-center items-center mx-auto content-div"
          >
            <div>
              {/* <span className='text-xl font-extrabold text-[#ff7f50] mx-auto px-4'>
                            Konviv Global's Business Website
                        </span>*/}

              <div className="pt-8 text-center">
                <a
                  href="https://thepurchasehub.com"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center hover:bg-transparent  focus:bg-transparent shadow-inner shadow-black hover:text-[#ff7f50]  focus:text-[#ff7f50] hover:border-[#ff7f50]  focus:border-[#ff7f50] hover:border-2  focus:border-2  rounded-[20px] font-extrabold bg-[#ff7f50] py-2 px-4 mx-2 my-4">
                    Visit Site
                  </button>
                </a>

                <a
                  href="https://github.com/umeunegbu/thepurchasehub.git"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center hover:bg-transparent  focus:bg-transparent shadow-inner shadow-black hover:text-[#ff7f50]  focus:text-[#ff7f50] hover:border-[#ff7f50]  focus:border-[#ff7f50] hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50] py-2 px-4 mx-2 my-4">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Umeunegbupascal})` }}
            className="min-w-[360px] border border-black sm:min-w-[300px] max-w-[460px] shadow-lg shadow-black hover:shadow-none focus:shadow-none group container rounded-lg flex justify-center items-center mx-auto content-div"
          >
            <div>
              {/* <span className='text-xl font-extrabold text-[#000] mx-auto px-4'> 
                            My Portfolio Website
                        </span>*/}

              <div className="pt-8 text-center">
                <a
                  href="https://umeunegbupascal.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center  hover:bg-transparent  focus:bg-transparent hover:text-[#000]  focus:text-[#000] hover:border-[#000]  focus:border-[#000] hover:border-2  focus:border-2 rounded-[20px] font-extrabold shadow-black shadow-inner bg-[#ff7f50] text-[#000] py-2 px-4 mx-2 my-4">
                    Visit Site
                  </button>
                </a>

                <a
                  href="https://github.com/umeunegbu/umeunegbu-pascal.git"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center hover:bg-transparent  focus:bg-transparent hover:text-[#000]  focus:text-[#000] hover:border-[#000]  focus:border-[#000] hover:border-2  focus:border-2 rounded-[20px] font-extrabold shadow-black shadow-inner bg-[#ff7f50] text-[#000] py-2 px-4 mx-2 my-4">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Konvivpdc})` }}
            className="min-w-[360px] sm:min-w-[300px] max-w-[460px] shadow-lg shadow-black hover:shadow-none focus:shadow-none group container rounded-lg flex justify-center items-center mx-auto content-div"
          >
            <div>
              {/* <span className='text-xl font-extrabold text-[#000] mx-auto  px-4'> 
                            Konviv Homes' Real Estate Website
                        </span>*/}

              <div className="pt-8 text-center">
                <a
                  href="https://www.konvivpdc.com"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center hover:bg-transparent  focus:bg-transparent shadow-inner shadow-black hover:text-black  focus:text-black hover:border-[#000]  focus:border-[#000] hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50]  text-black  py-2 px-4 mx-2 my-4">
                    Visit Site
                  </button>
                </a>

                <a
                  href="https://github.com/umeunegbu/konviv-pdc.git"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center hover:bg-transparent  focus:bg-transparent hover:text-black  focus:text-black shadow-inner shadow-black hover:border-[#000]  focus:border-[#000] hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50]  text-[#000] py-2 px-4 mx-2 my-4">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Treasuregarden})` }}
            className="min-w-[360px] sm:min-w-[300px] max-w-[460px] shadow-lg shadow-black hover:shadow-none  focus:shadow-none group container rounded-lg flex justify-center items-center mx-auto content-div"
          >
            <div>
              {/* <span className='text-xl font-extrabold text-[#fff] mx-auto  px-4'> 
                            Treasure Garden's Real Estate Website
                        </span>*/}

              <div className="pt-8 text-center">
                <a
                  href="https://treasuregardeninvestment.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center  hover:bg-transparent   focus:bg-transparent hover:text-[#ff7f50]  focus:text-[#ff7f50] hover:border-[#ff7f50]  focus:border-[#ff7f50] shadow-black shadow-inner hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50] py-2 px-4 mx-2 my-4">
                    Visit Site
                  </button>
                </a>

                <a
                  href="https://github.com/umeunegbu/treasure-garden.git"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center hover:bg-transparent  focus:bg-transparent hover:text-[#ff7f50]  focus:text-[#ff7f50] hover:border-[#ff7f50]  focus:border-[#ff7f50] shadow-black shadow-inner hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50] py-2 px-4 mx-2 my-4">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Konvivglobal})` }}
            className="min-w-[360px] sm:min-w-[300px] max-w-[460px] shadow-lg shadow-black hover:shadow-none  focus:shadow-none group container rounded-lg flex justify-center items-center mx-auto content-div"
          >
            <div>
              {/* <span className='text-xl font-extrabold text-[#ff7f50] mx-auto px-4'>
                            Konviv Global's Business Website
                        </span>*/}

              <div className="pt-8 text-center">
                <a
                  href="https://konvivglobal.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center hover:bg-transparent  focus:bg-transparent shadow-inner shadow-black hover:text-[#ff7f50]  focus:text-[#ff7f50] hover:border-[#ff7f50]  focus:border-[#ff7f50] hover:border-2  focus:border-2  rounded-[20px] font-extrabold bg-[#ff7f50] py-2 px-4 mx-2 my-4">
                    Visit Site
                  </button>
                </a>

                <a
                  href="https://github.com/umeunegbu/konviv-global.git"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none"
                >
                  <button className="focus:outline-none text-center hover:bg-transparent  focus:bg-transparent shadow-inner shadow-black hover:text-[#ff7f50]  focus:text-[#ff7f50] hover:border-[#ff7f50]  focus:border-[#ff7f50] hover:border-2  focus:border-2 rounded-[20px] font-extrabold bg-[#ff7f50] py-2 px-4 mx-2 my-4">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
