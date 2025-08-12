// gltfLoader.worker.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

// Set up loader
const loader = new GLTFLoader();

// Optional: enable Draco decompression in worker too
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/'); // public/draco folder
loader.setDRACOLoader(dracoLoader);

// Listen for messages from main thread
self.onmessage = (e) => {
  const { url } = e.data;

  loader.load(
    url,
    (gltf) => {
      // We can’t send THREE objects directly (circular refs, GPU handles)
      // → Instead, send serialized scene data
      self.postMessage({
        type: 'success',
        data: gltf.scene.toJSON(), // serializable form
      });
    },
    undefined,
    (err) => {
      self.postMessage({
        type: 'error',
        message: err.message,
      });
    }
  );
};
