import { useRef, useEffect, useState, Suspense  } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Object3D } from 'three';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { motion, AnimatePresence } from 'motion/react'

import eye2Img from '../assets/eye2.svg'
import backImg from '../assets/back2.png'

useGLTF.preload('/models/mainModel.glb');
useGLTF.preload('/models/stars.glb');
import { MainModel, Skybox } from './Models';

function LightWithHelper({ targetPosition = [0, -0.5, -0.75] }) {
    const lightRef = useRef();
    const { scene } = useThree();

    // Attach helper for spotlight
    // useHelper(lightRef, THREE.SpotLightHelper, 'cyan');

    useEffect(() => {
        if (lightRef.current) {
            const target = new THREE.Object3D();
            target.position.set(...targetPosition);
            lightRef.current.target = target;
            scene.add(target);
        }
    }, [scene, targetPosition]);

    return (
        <spotLight
            ref={lightRef}
            position={[0, 0.65, -0.25]} // spotlight position
            intensity={4}               // brightness
            angle={Math.PI / 5}          // cone angle
            penumbra={0.3}               // softness at edge
            decay={2}                    // light falloff
            distance={5}                 // how far light reaches
            castShadow
            color="white"
        />
    );
}




function CameraController({ targetPosition }) {
    const { camera } = useThree()
    const lookAtRef = useRef(new THREE.Vector3()) // Store current lookAt target

    useFrame(() => {
        // Smooth camera movement
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetPosition[0], 0.02)
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetPosition[1], 0.02)
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetPosition[2], 0.02)

        // Smooth lookAt target movement
        lookAtRef.current.x = THREE.MathUtils.lerp(lookAtRef.current.x, targetPosition[3], 0.02)
        lookAtRef.current.y = THREE.MathUtils.lerp(lookAtRef.current.y, targetPosition[4], 0.02)
        lookAtRef.current.z = THREE.MathUtils.lerp(lookAtRef.current.z, targetPosition[5], 0.02)

        camera.lookAt(lookAtRef.current)
    })

    return null
}

const Canvas3D = () => {
    const [camTarget, setCamTarget] = useState([0, 0, 1, 0, 0, 0])
    const target = useRef(new Object3D());
    const [currState, setCurrState] = useState('back')

    const handleBack = () => {
        console.log('curr state before:', currState)
        if (currState !== 'table') {
            setCamTarget([0, 0, -.1, 0, -.25, -.5]);
            setCurrState('table')
        }
        else {
            setCurrState('back')
            setCamTarget([0, 0, 1, 0, 0, 0]);
        }
        console.log('curr state after:', currState)
    }

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 0, 1], fov: 50 }}
                style={{ background: '#000000' }}>
                <Skybox />

                <LightWithHelper target={target.current} />
                <ambientLight intensity={.2} />
                <pointLight
                    position={[-9, 5.2, -23.3]}
                    intensity={10}
                    distance={10}
                    decay={0}
                    color={'#ffffff'}
                    castShadow
                />

                <Suspense fallback={null}>
                    <MainModel />
                </Suspense>

                <CameraController targetPosition={camTarget} />
            </Canvas>

            <AnimatePresence>
                {currState !== 'back' && (
                    <motion.button
                        className='text-white absolute top-[30px] left-[30px] z-10 w-20 hover:cursor-pointer hover:scale-105 transition-transform duration-100 ease-in-out'
                        onClick={() => {
                            setCamTarget([0, 0, 1, 0, 0, 0]);
                            handleBack()
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }} // fade-out
                    >
                        <img src={backImg} alt="" style={{
                            pointerEvents: "visiblePainted",
                            transition: "filter 0.2s ease-in-out"
                        }}
                            onMouseEnter={(e) =>
                                e.target.style.filter = "drop-shadow(0 0 4px yellow)"
                            }
                            onMouseLeave={(e) => e.target.style.filter = "none"} />
                    </motion.button>
                )}
            </AnimatePresence>


            <AnimatePresence>
                {currState === 'back' && (
                    <motion.button
                        key="eye-button"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                        style={{ background: "none", border: "none", padding: 0 }}
                        onClick={() => {
                            setCamTarget([0, 0, -.1, 0, -.25, -.5]);
                            setCurrState('table');
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    >
                        <svg
                            width="400"
                            height="200"
                            viewBox="0 0 400 200"
                            className="transition-transform duration-100 ease-in-out hover:scale-105 hover:cursor-pointer"
                            style={{ pointerEvents: "none" }}
                        >
                            <image
                                href={eye2Img}
                                width="400"
                                height="200"
                                style={{
                                    pointerEvents: "visiblePainted",
                                    transition: "filter 0.2s ease-in-out"
                                }}
                                onMouseEnter={(e) =>
                                    e.target.style.filter = "drop-shadow(0 0 4px yellow)"
                                }
                                onMouseLeave={(e) => e.target.style.filter = "none"}
                            />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>


            <AnimatePresence>
                {currState === 'table' && (
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 z-10 flex gap-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <button
                            className="text-white w-max px-8 py-6 border-4 border-black rounded-2xl bg-black/60 text-3xl hover:cursor-pointer hover:scale-102 hover:bg-black/80 transition-transform duration-100 ease-in-out"
                            onClick={() => {
                                setCamTarget([-.35, -0.05, -.5, -.35, -.32, -.65]);
                                setCurrState('paper');
                            }}
                        >
                            Move to Academics
                        </button>

                        <button
                            className="text-white w-max px-8 py-6 border-4 border-black rounded-2xl bg-black/60 text-3xl hover:cursor-pointer hover:scale-102 hover:bg-black/80 transition-transform duration-100 ease-in-out"
                            onClick={() => {
                                setCamTarget([.04, -.21, -.43, .04, -.32, -.48]);
                                setCurrState('card');
                            }}
                        >
                            Move to About Me
                        </button>

                        <button
                            className="text-white w-max px-8 py-6 border-4 border-black rounded-2xl bg-black/60 text-3xl hover:cursor-pointer hover:scale-102 hover:bg-black/80 transition-transform duration-100 ease-in-out"
                            onClick={() => {
                                setCamTarget([.12, -.21, -.42, .4, -.25, -.65]);
                                setCurrState('money');
                            }}
                        >
                            Move to Proficiency
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {currState === 'money' && (
                    <motion.div
                        className='absolute bottom-30 left-1/2 -translate-x-1/2 z-10 flex gap-50'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: .3, delay: .3 } }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className='relative left-10 px-4 py-2 bg-black/70 text-white border-2 rounded border-black text-2xl'>
                            Java
                        </div>
                        <div className='relative left-10 px-4 py-2 bg-black/70 text-white border-2 rounded border-black text-2xl'>
                            Python
                        </div>
                        <div className='relative right-10 px-4 py-2 bg-black/70 text-white border-2 rounded border-black text-2xl'>
                            C++
                        </div>
                        <div className='relative right-24 px-4 py-2 bg-black/70 text-white border-2 rounded border-black text-2xl'>
                            JavaScript
                        </div>
                        <div className='relative right-32 px-4 py-2 bg-black/70 text-white border-2 rounded border-black text-2xl'>
                            C
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    );
};

export default Canvas3D;


