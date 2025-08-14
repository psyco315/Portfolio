import React from 'react'
import { motion } from 'framer-motion'
import projectImg from '../assets/scrollbarIcons/projects.png'
import landingImg from '../assets/scrollbarIcons/landing.png'
import aboutImg from '../assets/scrollbarIcons/about.png'
import dragImg from '../assets/scrollbarIcons/drag.png'

const CustomScrollbar = ({ pageNo, scrollRef }) => {
    const buttons = [landingImg, projectImg, aboutImg];

    const handleClick = (index) => {
        if (!scrollRef.current) return;
        const sectionHeight = window.innerHeight;
        scrollRef.current.scrollTo({
            top: index * sectionHeight,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            drag="y" // 🔹 enables vertical drag
            dragConstraints={{ top: -200, bottom: 200 }} // adjust to limit movement
            dragElastic={0.1} // makes drag feel tighter
            dragMomentum={false} // stops it from flying after release
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className='absolute top-1/2 -translate-y-1/2 right-6 select-none' // select-none avoids accidental text selection
        >
            {/* Handle */}
            <div className='flex justify-center p-1 bg-[#a0a0a0] rounded-tr rounded-tl hover:cursor-grab active:cursor-grabbing'>
                <img
                    src={dragImg}
                    alt=""
                    className='h-[30px] rotate-90'
                    draggable={false} // 🚫 prevents default image drag
                />
            </div>

            {/* Buttons */}
            <motion.div
                className="grid grid-rows-3 w-[60px] p-1 gap-1 bg-[#cacaca] rounded-br rounded-bl"
            >
                {buttons.map((img, index) => {
                    const isActive = index === pageNo;
                    return (
                        <motion.button
                            key={index}
                            onClick={() => handleClick(index)}
                            className="relative px-2 py-2 rounded overflow-hidden hover:cursor-pointer"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gray-500 z-0"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: isActive ? 1 : 0 }}
                                transition={{ duration: 0.1, ease: "easeInOut" }}
                                style={{ transformOrigin: "center" }}
                            />
                            <img src={img} alt="" className="relative z-10" />
                        </motion.button>
                    );
                })}
            </motion.div>
        </motion.div>

    );
};


export default CustomScrollbar
