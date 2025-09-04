import { useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard.jsx'
import { motion, useInView } from 'motion/react'

import TaskImg from '../assets/TaskProject/TaskManager.png'
import ExpImg from '../assets/ExpProject/ExpTracker.png'
import GameImg from '../assets/GameProject/Game.png'
import Game2Img from '../assets/Game2Project/Game2.png'
import fadeBg from '../assets/fadeBg.png'
import bgImage from '../assets/bgImage.png'
import portImage from '../assets/PortProject/Portfolio.png'
import bookStopImg from '../assets/BookStop/bookStop.png'

import taskImg1 from '../assets/TaskProject/1.png'
import taskImg2 from '../assets/TaskProject/2.png'
import taskImg3 from '../assets/TaskProject/3.png'
import taskImg4 from '../assets/TaskProject/4.png'

import gameImg1 from '../assets/GameProject/1.png'
import gameImg2 from '../assets/GameProject/2.png'
import gameImg3 from '../assets/GameProject/3.png'
import gameImg4 from '../assets/GameProject/4.png'

import expImg1 from '../assets/ExpProject/1.png'
import expImg2 from '../assets/ExpProject/2.png'
import expImg3 from '../assets/ExpProject/3.png'

import bookStopImg1 from '../assets/BookStop/1.png'
import bookStopImg2 from '../assets/BookStop/2.png'
import bookStopImg3 from '../assets/BookStop/3.png'
import bookStopImg4 from '../assets/BookStop/4.png'
import bookStopImg5 from '../assets/BookStop/5.png'

import game2Img1 from '../assets/Game2Project/1.png'

const projects = [
    {
        title: 'BookStop',
        description: 'A book-log website that can be used to track a vast library of books',
        stack: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB", "TailwindCSS", "JWT" , "Framer Motion", "Google Books API", "Open-Library API"],
        thumbnail: bookStopImg,
        link: 'https://booklog-client.vercel.app/',
        imageList: [bookStopImg1, bookStopImg2, bookStopImg3, bookStopImg4, bookStopImg5],
    },
    {
        title: 'Portfolio Website',
        description: 'My portfolio, showcasing my experience and projects',
        stack: ["ReactJS", "TailwindCSS", 'React 3 Fiber', 'Three.JS', "Framer Motion", 'Blender'],
        thumbnail: portImage,
        link: 'https://portfolio-wine-one-87.vercel.app/',
        imageList: [],
    },
    {
        title: 'Task Manager',
        description: 'An app to assign & manage tasks in an admin-user model',
        stack: ["ReactJS", "ExpressJS", "Node.js", "MongoDB", "TailwindCSS", "JWT", "Cloudinary", "Multer"],
        thumbnail: TaskImg,
        link: 'https://task-management-system-88gq.onrender.com/',
        imageList: [ taskImg1, taskImg2, taskImg3, taskImg4 ],
    },
    {
        title: 'Expense Manager',
        description: 'An app to calculate the share of each person in a group expense',
        stack: ["ReactJS", "ExpressJS", "Node.js", "MongoDB", "TailwindCSS"],
        thumbnail: ExpImg,
        link: '',
        imageList: [ expImg1, expImg2, expImg3 ],
    },
    {
        title: '2D Platformer Game',
        description: 'A simple side-scroller 2D platformer game',
        stack: ["Godot Engine"],
        thumbnail: Game2Img,
        link: '',
        imageList: [ game2Img1 ],
    },
    {
        title: 'Retro Game',
        description: 'Browser-based 2D space-shooter game',
        stack: ["HTML", "CSS", "VanillaJS"],
        thumbnail: GameImg,
        link: '',
        imageList: [ gameImg1, gameImg2, gameImg3, gameImg4 ],
    },
]

const ProjectPage = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return; // ✅ Safety check

        const handleWheel = (e) => {
            const { scrollTop, scrollHeight, clientHeight } = el;
            const atTop = scrollTop === 0;
            const atBottom = scrollTop + clientHeight === scrollHeight;

            const scrollingUp = e.deltaY < 0;
            const scrollingDown = e.deltaY > 0;

            if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
                e.preventDefault(); // 👈 prevent page scroll
            }
        };

        el.addEventListener('wheel', handleWheel, { passive: false });

        return () => el.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div
            className='snap-start h-screen w-screen p-10 hover:cursor-default'
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <motion.div
                initial={{}}
                animate={{}}

                className='text-white text-3xl pb-12 pl-20'
            >
                <span className='text-[#C778DD] mr-[2px] font-bold text-3xl'>/</span>
                <span>my_projects</span>
            </motion.div>

            <div className="relative max-w-[1200px] h-[600px] mx-auto px-10">
                {/* Scrollable content */}
                <motion.div className="w-max mx-auto h-full overflow-auto overscroll-contain pr-4 scrollbar scrollbar-thumb-purple-700 scrollbar-track-[#0D0E17]">
                    <motion.div
                        initial={{}}
                        animate={{}}
                        className="grid grid-cols-3 gap-x-6 gap-y-6"
                    >
                        {projects.map((project, index) => (
                            <ProjectCard key={index} index={index} project={project} />
                        ))}

                    </motion.div>

                    <div className='h-5 w-max'></div>
                </motion.div>

                <div style={{ backgroundImage: `url(${fadeBg})` }} className="h-14 w-full absolute bottom-[-2px] left-0 pointer-events-none" />

            </div>


        </div>
    )
}

export default ProjectPage