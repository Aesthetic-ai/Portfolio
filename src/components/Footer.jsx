import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <>
        <hr />
        <footer className='py-12'>
            <div className="max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10 p">
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4'>
                    <a href="https://mail.google.com/mail/u/0/" target='_blank'>
                       <BiLogoGmail  size={25}/>
                    </a>
                    <a href="https://github.com/your-username" target='_blank'>
                    <FaGithub size={25}/>
                    </a>
                    <a href="https://www.linkedin.com/in/sriyanshu-awasthi-6b24b1290/" target='_blank'>
                    <FaLinkedin size={25}/>
                    </a>
                    <a href="https://leetcode.com/u/sri_awasthi/" target='_blank'>
                    <SiLeetcode size={25}/>
                    </a>   
                      
                    </div>
                    <div className='mt-7 border-t border-gray-700 pt-8 flex flex-col items-center'>
                        <p className='text-sm'>Designed and Developed by Sriyanshu Awasthi</p>

                    </div>
                </div>

            </div>
        </footer>
    </>
  )
}

export default Footer