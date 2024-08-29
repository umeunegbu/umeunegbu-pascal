import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {HiArrowNarrowRight} from 'react-icons/hi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
    }, (error) => {
      console.error('Error sending email:', error.text);
    });
  };

  return (
    <div id="contact" className='bg-[#ff7f50]' >
      {/* Container */}
      <div className='max-w-[1000px] min-w-[320px] flex flex-col mx-auto px-4 h-full w-full justify-center pb-[14rem] '>
            <h1 className='text-2xl font-bold text-center sm:text-start'>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className='min-w-[328px] rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none mb-3 px-4 py-2  min-h-[2rem]'>
                    <label className='text-lg font-medium'>
                         Name: <input type="text" className='bg-[#ff7f50] focus:border-none focus:outline-none' name="name" value={formData.name} onChange={handleChange} />
                    </label><br />
                </div>

                <div className='min-w-[328px] rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none mb-3 px-4 py-2  min-h-[2rem]'>
                    <label className='text-lg font-medium'>
                        Email: <input type="email" className='bg-[#ff7f50] focus:border-none focus:outline-none' name="email" value={formData.email} onChange={handleChange} />
                    </label><br />
                </div>

                <div className='min-w-[328px] rounded-lg shadow-lg shadow-black hover:shadow-none focus:shadow-none mb-3 px-4 py-2  min-h-[2rem]'>
                    <label className='text-lg font-medium'>                    
                        Message: <textarea name="message" className='bg-[#ff7f50] block relative -top-7 left-[5.6rem] focus:border-none focus:outline-none' value={formData.message} onChange={handleChange} />
                    </label><br />
                </div>

                <button type='submit' className='py-2 px-4 my-4 flex items-center m-auto sm:ml-0 rounded-[20px] shadow-inner shadow-black font-bold hover:shadow-black focus:shadow-black hover:shadow-lg focus:shadow-lg focus:outline-none group hover:border-[#000]  focus:border-[#000] hover:text-[#000]  focus:text-[#000]'>Submit 
                    <span className='ml-2 group-hover:rotate-90 group-focus:rotate-90  duration-300'>
                        <HiArrowNarrowRight />
                    </span> 
                </button>
            </form>
        </div>      
    </div>
  );
};

export default Contact;
