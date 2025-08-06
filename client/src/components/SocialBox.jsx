import React from 'react'
import emailP from '../assets/Email.png'
import gitP from '../assets/Github.png'
import resumeP from '../assets/GoogleDrive.png'
import linkP from '../assets/Linkedin.png'

const SocialBox = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <a href="https://www.linkedin.com/in/parth-sarathi-yadav-738b87261/" target="_blank" rel="noopener noreferrer">
                <img src={linkP} alt="LinkedIn" className="w-[150px] h-[150px]" />
            </a>

            <a href="https://github.com/psyco315" target="_blank" rel="noopener noreferrer">
                <img src={gitP} alt="GitHub" className="w-[150px] h-[150px]" />
            </a>

            <img src={resumeP} alt="Resume" className="w-[150px] h-[150px]" />

            <a href="mailto:parth2004batman@gmail.com">
                <img src={emailP} alt="Email" className="w-[150px] h-[150px]" />
            </a>

        </div>

    )
}

export default SocialBox