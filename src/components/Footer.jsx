import React from 'react'
import Logo from "../assets/logo-dark.png"

const Footer = () => {
  return (
    <div id="footer" className='bg-[#ff7f50] border-t shadow-inner shadow-black border-[#000000]'>
        {/* Container */}
        <div className='max-w-[1000px] min-w-[320px] flex border-black mx-auto px-4 h-full w-full justify-center'>
            <div className='flex gap-4 pt-2 pb-2 text-[.7rem] sm:text-sm justify-center'>
                <p className='font-semibold pt-1'>Copyright &copy; 2024. </p>
                <a href='home' className='focus:outline-none pb-0'>
                    <img src={Logo} alt='Logo' className='rounded-lg shadow-lg w-[2rem] sm:w-[3rem] shadow-black hover:shadow-none focus:shadow-none'/>
                </a>
                <p className='font-semibold pt-1'>All Rights Reserved.</p>
            </div>                       
        </div>       
    </div>
  )
}

export default Footer