import { motion } from 'framer-motion'
import emailP from '../assets/Email.png'
import gitP from '../assets/Github.png'
import resumeP from '../assets/GoogleDrive.png'
import linkP from '../assets/Linkedin.png'

const SocialBox = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <motion.a
                href="https://www.linkedin.com/in/parth-sarathi-yadav-738b87261/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-100 hover:scale-105"

                animate={{
                    opacity: 100,
                    transition: {
                        duration: .5,
                        delay: .5
                    }
                }}

                initial={{
                    opacity: 0
                }}
            >
                <img src={linkP} alt="LinkedIn" className="w-[150px] h-[150px]" />
            </motion.a>

            <motion.a
                href="https://github.com/psyco315"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-100 hover:scale-105"

                animate={{
                    opacity: 100,
                    transition: {
                        duration: .5,
                        delay: .75
                    }
                }}

                initial={{
                    opacity: 0
                }}
            >
                <img src={gitP} alt="GitHub" className="w-[150px] h-[150px]" />
            </motion.a>

            <motion.a
                href="https://drive.google.com/file/d/12kFAuyB2T_HHdSeekTz-dCEkmTAQcmBg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-100 hover:scale-105"

                animate={{
                    opacity: 100,
                    transition: {
                        duration: .5,
                        delay: 1
                    }
                }}

                initial={{
                    opacity: 0
                }}
            >
                <img src={resumeP} alt="Resume" className="w-[150px] h-[150px]" />
            </motion.a>

            <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=parth315sy@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-100 hover:scale-105"

                animate={{
                    opacity: 100,
                    transition: {
                        duration: .5,
                        delay: 1.25
                    }
                }}

                initial={{
                    opacity: 0
                }}
            >
                <img src={emailP} alt="Email" className="w-[150px] h-[150px]" />
            </motion.a>
        </div>


    )
}

export default SocialBox
