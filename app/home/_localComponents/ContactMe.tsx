import React from "react";

const ContactMe = () => {
  return (
    <section className='relative bg-black text-nier-200' id='contact'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col w-full mb-12 text-center'>
          <h1 className='mb-4 text-2xl font-medium text-nier-200 sm:text-3xl '>
            Contact Me
          </h1>
          <p className='mx-auto text-base leading-relaxed lg:w-2/3'>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div className='mx-auto lg:w-1/2 md:w-2/3'>
          <div className='flex flex-wrap -m-2'>
            <div className='w-1/2 p-2'>
              <div className='relative'>
                <label
                  htmlFor='name'
                  className='text-sm leading-7 text-nier-300'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-black bg-opacity-50 border rounded outline-none text-nier-200 border-nier-400 selection:text-black selection:bg-nier-300 focus:border-nier-200 focus:bg-neutral-900 focus:ring-2 focus:ring-neutral-200'></input>
              </div>
            </div>
            <div className='w-1/2 p-2'>
              <div className='relative'>
                <label
                  htmlFor='email'
                  className='text-sm leading-7 text-nier-300'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-black bg-opacity-50 border rounded outline-none text-nier-200 border-nier-400 selection:text-black selection:bg-nier-300 focus:border-nier-200 focus:bg-neutral-900 focus:ring-2 focus:ring-neutral-200'></input>
              </div>
            </div>
            <div className='w-full p-2'>
              <div className='relative'>
                <label
                  htmlFor='message'
                  className='text-sm leading-7 text-nier-300'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  className='w-full h-32 px-3 py-1 text-base leading-6 transition-colors duration-200 ease-in-out bg-black bg-opacity-50 border rounded outline-none resize-none selection:text-black selection:bg-nier-300 text-nier-200 border-nier-400 focus:border-nier-200 focus:bg-neutral-900 focus:ring-2 focus:ring-neutral-200'></textarea>
              </div>
            </div>
            <div className='w-full p-2'>
              <button
                className='flex px-8 py-2 mx-auto text-lg transition-colors duration-100 border-0 rounded text-nier-200 bg-nier-700 focus:outline-none hover:bg-nier-300 hover:text-black'
                type='submit'>
                Send
              </button>
            </div>
            <div className='w-full p-2 pt-8 mt-8 text-center border-t border-nier-400'>
              <a className='text-nier-200'>nikita.istomin54@gmail.com</a>
              <p className='my-5 leading-normal'>
                Austin
                <br />
                TX, USA
              </p>
              <span className='inline-flex'>
                <a className='text-nier-400'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'>
                    <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                  </svg>
                </a>
                <a className='ml-4 text-nier-400'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'>
                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                  </svg>
                </a>
                <a className='ml-4 text-nier-400'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'>
                    <rect
                      width='20'
                      height='20'
                      x='2'
                      y='2'
                      rx='5'
                      ry='5'></rect>
                    <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                  </svg>
                </a>
                <a className='ml-4 text-nier-400'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'>
                    <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
