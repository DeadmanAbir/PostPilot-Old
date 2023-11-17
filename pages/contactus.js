"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head';
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_apy4bwr', 'template_kslcmnj', form.current, '_B9C_DxbdKRLjicNa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="bg-[url('/signInBg.jpeg')] text-white">
           <Head>
        <title>PostPilot-ContactUs</title>
      </Head>
          <div className="pt-5 pb-8 lg:px-0 px-4 flex flex-col justify-center items-center text-center gap-11">
            <div className="flex flex-col gap-12 items-center justify-center">
              <h1 className=" text-[28px] lg:text-[52px] font-[700] leading-[52px] ">
                Contact Form
              </h1>
              <div className="flex lg:flex-row flex-col justify-center items-center gap-10">
                <div className="flex flex-col  gap-2">
                  <div>
                    <i className="fa-solid fa-location-dot text-[22px] lg:text-[32px]"></i>
                  </div>
                  <div>
                    <h1 className="text-[22px] lg:text-[32px] font-[400] leaing-[24%]">
                      Address :
                    </h1>
                    <p className="text-[16px] font-[400] leading-[20px] w-[12rem]">
                      198 West 21th Street, Suite 721 New York NY 10016
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <i className="fa-solid fa-phone text-[22px] lg:text-[32px]"></i>
                  </div>
                  <div>
                    <h1 className="text-[22px] lg:text-[32px] font-[400] leaing-[24%]">
                      Phone :
                    </h1>
                    <p className="text-[16px] font-[400] leading-[20px] w-[12rem]">
                      +1235215598
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <i className="fa-brands fa-telegram text-[22px] lg:text-[32px]"></i>
                  </div>
                  <div>
                    <h1 className="text-[22px] lg:text-[32px] font-[400] leaing-[24%]">
                      Email :
                    </h1>
                    <p className="text-[16px] font-[400] leading-[20px] w-[12rem]">
                      infi@yoursite.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form
                ref={form} onSubmit={sendEmail}
                className="flex flex-col gap-6 px-4 lg:px-12 border border-white bg-[#04091E] py-10 justify-center items-center rounded-3xl"
              >
                <h1 className="pb-8 text-[28px] lg:text-[32px] font-[400] leading-[28px]">
                  Get in touch with us
                </h1>
                <input
                  className="bg-[#0E1327] py-4 px-5 rounded-2xl w-[17rem] lg:w-[30rem] ;g:text-[16px]"
                  type="text"
                  placeholder="Name"
                  name='from_name'
                />
                <input
                  className="bg-[#0E1327] py-4 px-5 rounded-2xl w-[17rem] lg:w-[30rem] lg:text-[16px]"
                  type="email"
                  placeholder="Email"
                  name='user_email'
                />
                <input
                  className="bg-[#0E1327] py-4 px-5 rounded-2xl w-[17rem] lg:w-[30rem] lg:text-[16px]"
                  type="text"
                  placeholder="Subject"
                  name='user_subject'
                />
                <textarea
                  className="bg-[#0E1327] py-4 px-5 rounded-2xl w-[17rem] lg:w-[30rem] lg:text-[16px]"
                  type="text"
                  placeholder="message"
                  name='message'
                />
                <button className="aai-gradient-outline-btn" type='submit'>SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      );

    
  };
  
  export default Contact;
  