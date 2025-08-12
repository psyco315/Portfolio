import { useState, useEffect } from 'react';
import * as THREE from 'three';
import GltfWorker from './gltfLoader.worker.js?worker&inline'; // adjust path to your worker file

export function useGLTFWorker(url) {
    const [scene, setScene] = useState(null);

    useEffect(() => {
        const worker = new GltfWorker();

        worker.postMessage({ url });

        worker.onmessage = (e) => {
            const { type, data, message } = e.data;

            if (type === 'success') {
                const loader = new THREE.ObjectLoader();
                const loadedScene = loader.parse(data);
                setScene(loadedScene);
                worker.terminate();
            } else if (type === 'error') {
                console.error('Worker GLTF load error:', message);
                worker.terminate();
            }
        };

        return () => worker.terminate();
    }, [url]);

    return scene;
}
