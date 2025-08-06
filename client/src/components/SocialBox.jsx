import React from 'react'
import emailP from '../assets/Email.png'
import gitP from '../assets/Github.png'
import resumeP from '../assets/GoogleDrive.png'
import linkP from '../assets/Linkedin.png'

const SocialBox = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <a
                href="https://www.linkedin.com/in/parth-sarathi-yadav-738b87261/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-100 hover:scale-105"
            >
                <img src={linkP} alt="LinkedIn" className="w-[150px] h-[150px]" />
            </a>

            <a
                href="https://github.com/psyco315"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-100 hover:scale-105"
            >
                <img src={gitP} alt="GitHub" className="w-[150px] h-[150px]" />
            </a>

            <a
                href="https://drive.google.com/file/d/1EPKTVHkSwz2_DR2MYjoZXSIkpY-zQsfC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-100 hover:scale-105"
            >
                <img src={resumeP} alt="Resume" className="w-[150px] h-[150px]" />
            </a>

            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=parth315sy@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-100 hover:scale-105"
            >
                <img src={emailP} alt="Email" className="w-[150px] h-[150px]" />
            </a>
        </div>


    )
}

export default SocialBox