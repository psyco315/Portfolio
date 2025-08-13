import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({ isOpen, onClose, project }) {
    if (!project) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            className="bg-[#0D0E17] text-white max-w-2xl w-full rounded-lg p-6 overflow-hidden shadow-lg"
                        >
                            <Dialog.Title className="text-xl font-bold mb-2">{project.title}</Dialog.Title>
                            <p className="text-sm text-gray-300 mb-4">{project.description}</p>

                            <div className="mb-4 flex flex-wrap gap-2 text-sm text-purple-300">
                                {project.stack.map((tech, i) => (
                                    <span key={i} className="bg-purple-900/30 px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>

                            {/* Image slider */}
                            <div className="flex gap-4 overflow-x-scroll items-start scrollbar scrollbar-thumb-purple-700 scrollbar-track-[#0D0E17]">
                                {project.imageList.map((img, i) => (
                                    <img
                                        src={img}
                                        alt={`slide-${i}`}
                                        className="h-100 w-auto rounded flex-shrink-0"
                                    />
                                ))}
                            </div>


                            <button
                                onClick={onClose}
                                className="mt-4 px-4 py-2 bg-purple-700 hover:bg-purple-800 rounded text-white"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    )
}
