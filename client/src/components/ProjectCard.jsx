import { useState, useRef } from 'react';
import ProjectModal from './ProjectModal';
import { motion, useInView } from 'framer-motion';

const ProjectCard = ({
  index,
  project = {},
}) => {
  const [selectedProject, setSelectedProject] = useState(null)
  const title = project.title
  const thumbnail = project.thumbnail
  const stack = project.stack
  const link = project.link

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      className="relative w-75 h-84 bg-black/60 text-white border border-purple-500/60 rounded-md overflow-hidden font-mono"

      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 100,
        transition:{
          duration: 1,
          delay: index*0.2
        }
      }}
      viewport={{ once: true }}
    >
      {/* Image Section */}
      <div className="bg-purple-700">
        <img src={thumbnail} alt={title} className="w-full h-36 object-cover" />
      </div>

      {/* Stack Tags */}
      <div className="flex flex-wrap px-3 py-2 text-sm border-t border-b border-purple-500/60 text-gray-300">
        {stack.map((tech, i) => (
          <span key={i} className='mr-2'>
            {i !== 0 && <span className="mr-2 text-gray-500">|</span>}
            {tech}
          </span>
        ))}
      </div>


      {/* Title & Description */}
      <h2 className="px-4 pt-4 text-xl font-semibold">{title}</h2>

      {/* Live Button */}
      <div className='flex absolute bottom-4 w-full'>
        <button
          className=" inline-block mt-4 ml-4 px-4 py-1 border border-purple-500 text-purple-400 hover:bg-purple-900 hover:cursor-pointer transition duration-100 rounded"
          onClick={() => setSelectedProject(project)}
        >
          Details
        </button>
        {link.length > 0 && (<a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 ml-2 px-4 py-1 border border-[#ef58bf] text-[#ef58bf] hover:bg-[#6f3c5f] hover:cursor-pointer transition duration-100 rounded"
        >
          Link
        </a>)}
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </motion.div>
  );
};

export default ProjectCard;
