import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

useGLTF.preload('/models/mainModel.glb');
useGLTF.preload('/models/stars.glb');

const MainModel = ({ tableRef, delay = 1000 }) => { // delay in ms
    const [loadModel, setLoadModel] = useState(false);
    const { scene } = useGLTF('/models/mainModel.glb', { skip: !loadModel });

    useEffect(() => {
        const timer = setTimeout(() => setLoadModel(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (tableRef && scene && loadModel) {
            tableRef.current = scene;
        }
    }, [scene, tableRef, loadModel]);

    if (!loadModel) return null; // don’t render until delay

    return (
        <primitive
            object={scene}
            position={[0, -1.2, -.65]}
            rotation={[0, Math.PI / 2, 0]}
        />
    );
};

function Skybox() {
    const { scene } = useGLTF('/models/stars.glb')

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.geometry.scale(-1, 1, 1) // flip normals
                child.material.side = THREE.FrontSide
                child.castShadow = false
                child.receiveShadow = false
            }
        })
    }, [scene])

    return <primitive object={scene} scale={100} /> // scale so it surrounds camera
}


export { MainModel, Skybox }