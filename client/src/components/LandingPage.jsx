import { motion } from "motion/react"
import { useState, useRef, useEffect } from "react"
import portPhoto from '../assets/portfolioPhoto2.png'
import SocialBox from "./SocialBox"

const LandingPage = () => {
    const [shouldPause, setShouldPause] = useState(false)
    const src = '/namegif.mp4'
    const width = 450
    const height = 450
    const videoRef = useRef()

    useEffect(() => {
        if (shouldPause) {
            videoRef.current.pause()
        }
        else {
            videoRef.current.play()
        }
    }, [shouldPause])


    return (
        <div className="relative overflow-hidden h-screen w-screen hover:cursor-default">
            <motion.div
                animate={{
                    opacity: 100,
                    transition: { duration: 1.5 }
                }}

                initial={{
                    opacity: 0
                }}

                className='bg-[#cacaca]  h-screen w-screen'
            > </motion.div>

            <motion.div
                initial={{
                    translateY: -1000,
                    translateX: "120vw"
                }}

                animate={{
                    translateY: -1000,
                    translateX: "35vw",
                    transition: { duration: 1.5 }
                }}

                className="absolute rotate-10 h-[200%] w-[75%] bg-gradient-to-b from-[#24252E] to-[#0D0E17]"
            >
                <img
                    src={portPhoto}
                    alt="My photo"
                    className="relative top-[250px] left-[75px] w-150 h-150 object-cover transform rotate-[-6deg]"
                />

            </motion.div>

            <motion.div
                animate={{
                    opacity: 50,
                    transition: {
                        duration: 2,
                        delay: 1
                    }
                }}

                initial={{
                    opacity: 0
                }}
                className="absolute top-[-100px] left-[50px]"
            >
                <video
                    ref={videoRef}
                    width={width}
                    height={height}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="opacity-60"
                >
                    <source src={src} type="video/mp4" />
                    Your browser doesn't support video playback.
                </video>
            </motion.div>

            <motion.div
                animate={{
                    opacity: 100,
                    transition: {
                        duration: 1,
                        delay: .5
                    }
                }}

                initial={{
                    opacity: 0
                }}

                onHoverStart={() => setShouldPause(true)}
                onHoverEnd={() => setShouldPause(false)}

                className="absolute top-[175px] left-[60px] text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1d2781] to-[#15182e]"
            >
                Parth Sarathi Yadav
            </motion.div>

            <motion.div
                animate={{
                    opacity: 100,
                    transition: {
                        duration: 1,
                        delay: .5
                    }
                }}

                initial={{
                    opacity: 0
                }}

                className="absolute top-[210px] left-[510px] text-[20px] text-black/50"
            >
                Fullstack Developer
            </motion.div>

            <motion.div
                animate={{
                    opacity: 100,
                    transition: {
                        duration: 1,
                        delay: .5
                    }
                }}

                initial={{
                    opacity: 0
                }}
                className="absolute top-[350px] left-[60px]"
            >
                <SocialBox />
            </motion.div>

        </div>
    )
}

export default LandingPage