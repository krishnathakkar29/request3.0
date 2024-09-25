import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Canvas, extend } from "@react-three/fiber";
import {
  useGLTF,
  Text,
  PerspectiveCamera,
  useAnimations,
  OrbitControls,
  SpotLight,
  Preload,
  Html,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { PlaneGeometry } from "three";
import { Sidebar } from "lucide-react";
import AllScoresContext from "@/context/AllScoresContext";
import { all } from "axios";
import Load from "../components/Load.jsx";
import LoadHome from "@/components/LoadHome.jsx";
import { useLocation } from "react-router-dom";

// import { rect } from 'three'; // Assuming Rect is from 'three'

// Extend React Three Fiber to recognize `Rect`
// extend({ rect });
// function Rect() {
//   return (
//     <mesh>
//       {/* PlaneGeometry creates a rectangle-like plane, set width and height */}
//       <planeGeometry args={[2, 1]} />
//       <meshStandardMaterial color="orange" />
//     </mesh>
//   );
// }

const IronManModel = () => {
  const { scene, animations } = useGLTF("/assets/ironman_idle.glb");

  const { ref, actions, names } = useAnimations(animations);

  useEffect(() => {
    actions[names[0]].play();
  }, []);

  const [loading, setLoading] = useState(true);

  const { allScores, setAllScores } = useContext(AllScoresContext);
  useEffect(() => {
    if (allScores["home"]) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [allScores]);

  return (
    <>
      <mesh ref={ref}>
        <primitive
          object={scene}
          scale={5}
          rotation={[0, 0, 0]}
          position={[0, 0, 7.6]}
          // castShadow
        />
      </mesh>
      <Text
        position={[-0.1, 4.3, 6.6]} // Exact surface of the model
        fontSize={0.3}
        anchorX="center"
        anchorY="middle"
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#00B5FF"
          emissive="#00B5FF"
          emissiveIntensity={10}
        />
        Tony's Techies
      </Text>
      {loading ? (
        <Text
          position={[-0.1, 3.4, 6.6]} // Exact surface of the model
          fontSize={0.2}
          anchorX="center"
          anchorY="middle"
          rotation={[0, 0, 0]}
        >
          <meshStandardMaterial
            color="#00B5FF"
            emissive="#00B5FF"
            emissiveIntensity={10}
          />
          Suiting up the armour..
        </Text>
      ) : (
        <Text
          position={[-0.1, 3.4, 6.6]} // Exact surface of the model
          fontSize={1.5}
          anchorX="center"
          anchorY="middle"
          rotation={[0, 0, 0]}
        >
          <meshStandardMaterial
            color="#00B5FF"
            emissive="#00B5FF"
            emissiveIntensity={10}
          />
          {allScores["home"][1]["score"]}
        </Text>
      )}
    </>
  );
};

const Test = () => {
  const { nodes, scene } = useGLTF("/assets/bruh.glb");
  nodes.avengerlogo.position.y = 20;
  console.log("nodes", nodes.avengerlogo.position.y);
  // useEffect(() => {
  //   // Enable shadow casting for all meshes in the scene
  //   scene.traverse((child) => {
  //     if (child.isMesh) {
  //       child.castShadow = true;
  //       child.receiveShadow = true;
  //     }
  //   });
  // }, [scene]);
  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};
const ThorModel = () => {
  const { nodes, scene, animations } = useGLTF("/assets/thor_cape.glb");
  const { ref, actions, names } = useAnimations(animations);
  console.log("thor", names);
  useEffect(() => {
    actions[names[5]].play();
    actions[names[6]].play();
  }, []);

  const [loading, setLoading] = useState(true);

  const { allScores, setAllScores } = useContext(AllScoresContext);
  useEffect(() => {
    if (allScores["home"]) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [allScores]);

  return (
    <>
      <mesh ref={ref}>
        <primitive
          object={scene}
          scale={5}
          rotation={[0, Math.PI, 0]}
          position={[-12, -4.4, -10]}
          // castShadow
        />
      </mesh>
      <Text
        position={[-0.2, 4.4, -6.6]} // Exact surface of the model
        fontSize={0.3}
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI, 0]}
      >
        <meshStandardMaterial
          color="#00B5FF"
          emissive="#00B5FF"
          emissiveIntensity={10}
        />
        Odinson's Olympians
      </Text>
      {loading ? (
        <Text
          position={[-0.2, 3.5, -6.6]} // Exact surface of the model
          fontSize={0.2}
          anchorX="center"
          anchorY="middle"
          rotation={[0, Math.PI, 0]}
        >
          <meshStandardMaterial
            color="#00B5FF"
            emissive="#00B5FF"
            emissiveIntensity={10}
          />
          Summoning the Thunder..
        </Text>
      ) : (
        <Text
          position={[-0.2, 3.5, -6.6]} // Exact surface of the model
          fontSize={1.5}
          anchorX="center"
          anchorY="middle"
          rotation={[0, Math.PI, 0]}
        >
          <meshStandardMaterial
            color="#00B5FF"
            emissive="#00B5FF"
            emissiveIntensity={10}
          />
          {allScores["home"][3]["score"]}
        </Text>
      )}
    </>
  );
};

const SpiderModel = () => {
  const { nodes, scene, animations } = useGLTF(" /assets/spider_idle.glb");

  const { ref, actions, names } = useAnimations(animations);
  console.log("names", names);
  useEffect(() => {
    actions[names[2]].play();
  }, []);

  const [loading, setLoading] = useState(true);

  const { allScores, setAllScores } = useContext(AllScoresContext);
  useEffect(() => {
    if (allScores["home"]) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [allScores]);

  return (
    <>
      <mesh ref={ref}>
        <primitive
          object={scene}
          scale={5}
          rotation={[0, -Math.PI / 2, 0]}
          position={[-6.2, 1.2, 3]}
          // castShadow
        />
      </mesh>
      <Text
        position={[-6.65, 4.4, 0.6]} // Exact surface of the model
        fontSize={0.3}
        anchorX="center"
        anchorY="middle"
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshStandardMaterial
          color="#00B5FF"
          emissive="#00B5FF"
          emissiveIntensity={10}
        />
        Spidey's Squad
      </Text>
      {loading ? (
        <Text
          position={[-6.65, 3.5, 0.6]} // Exact surface of the model
          fontSize={0.2}
          anchorX="center"
          anchorY="middle"
          rotation={[0, -Math.PI / 2, 0]}
        >
          <meshStandardMaterial
            color="#00B5FF"
            emissive="#00B5FF"
            emissiveIntensity={10}
          />
          Activating Spider Senses...
        </Text>
      ) : (
        <Text
          position={[-6.65, 3.5, 0.6]} // Exact surface of the model
          fontSize={1.5}
          anchorX="center"
          anchorY="middle"
          rotation={[0, -Math.PI / 2, 0]}
        >
          <meshStandardMaterial
            color="#00B5FF"
            emissive="#00B5FF"
            emissiveIntensity={10}
          />
          {allScores["home"][0]["score"]}
        </Text>
      )}
    </>
  );
};

const CaptainModel = () => {
  // Load the .gltf or .glb model (replace with your model's path)
  const { nodes, scene, animations } = useGLTF("/assets/Captain/captain.gltf");

  const { ref, actions, names } = useAnimations(animations);

  console.log("captain", names);

  useEffect(() => {
    actions[names[1]].play();
    actions[names[6]].play();
  }, []);

  // Place the text exactly at the surface of the model's front face
  const textPositionZ = 0;
  const textPositionZ1 = 0.9; // Exact front surface of the model

  const [loading, setLoading] = useState(true);

  const { allScores, setAllScores } = useContext(AllScoresContext);
  useEffect(() => {
    if (allScores["home"]) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [allScores]);

  return (
    <>
      <mesh ref={ref}>
        <primitive
          object={scene}
          scale={5}
          rotation={[0, Math.PI / 2, 0]}
          position={[9.027, 0, 0]}
          // castShadow
        />
      </mesh>
      <Text
        position={[6.6, 4.3, -0.5]} // Exact surface of the model
        fontSize={0.3}
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshStandardMaterial
          color="#00B5FF"
          emissive="#00B5FF"
          emissiveIntensity={10}
        />
        Cap's Crusaders
      </Text>
      {loading ? (
        <Text
          position={[6.65, 3.5, -0.5]} // Exact surface of the model
          fontSize={0.3}
          anchorX="center"
          anchorY="middle"
          rotation={[0, Math.PI / 2, 0]}
        >
          <meshStandardMaterial
            color="#00B5FF"
            emissive="#00B5FF"
            emissiveIntensity={10}
          />
          {/* 200 */}
          Jarvis is Loading...
          {/* 9999 */}
        </Text>
      ) : (
        <>
          <Text
            position={[6.65, 3.5, -0.5]} // Exact surface of the model
            fontSize={1.5}
            anchorX="center"
            anchorY="middle"
            rotation={[0, Math.PI / 2, 0]}
          >
            <meshStandardMaterial
              color="#00B5FF"
              emissive="#00B5FF"
              emissiveIntensity={10}
            />
            {/* 200 */}
            {allScores["home"][2]["score"]}
            {/* 9999 */}
          </Text>
        </>
      )}
    </>
  );
};

function App() {
  const { allScores, setAllScores } = useContext(AllScoresContext);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (allScores["home"]) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [allScores]);

  const location = useLocation();

  useEffect(() => {
    // Set loading to true when the component mounts or location changes
    setLoading(true);

    // Simulate loading time (replace with your actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [location]);

  return (
    <div className="h-screen w-[100vw - 256px] ">
      <>
        {loading ? (
          <Load />
        ) : (
          <Canvas shadows className="bg-black">
            <Suspense
              fallback={
                <Html>
                  <LoadHome />
                </Html>
              }
            >
              {/* Add lights and camera */}
              {/* <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />
      Render the rectangle
      <Rect /> */}
              {/* <Sidebar /> */}
              <PerspectiveCamera
                makeDefault
                rotation={[0, 89.49, 0]}
                position={[20, 3.48, 0]}
              />

              <pointLight
                position={[-27.56, 25.33, 20.582]}
                color="#ABECFF"
                intensity={10000}
                decay={2.1}
                // castShadow
                // shadow-mapSize={[512, 512]}
              />
              <pointLight
                position={[22.926, 25.441, 30.069]}
                color="#ABECFF"
                intensity={5000}
                decay={2}
              />
              <pointLight
                position={[12.963, 24.397, -31.89]}
                color="#ABECFF"
                intensity={5000}
                decay={2}
              />

              <CaptainModel />

              <SpiderModel />
              <IronManModel />
              <ThorModel />
              <Test />
              {/* <mesh
          receiveShadow
          position={[0, -0.1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[100, 100]} />
          <shadowMaterial attach="material" opacity={0.5} />
        </mesh> */}
              {/* <fogExp2 attach="fog" color="#14616C" density={0.005} /> */}
              <EffectComposer>
                <Bloom
                  intensity={0.1}
                  luminanceThreshold={0.5}
                  mipmapBlur={false}
                />
              </EffectComposer>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2.11}
                minPolarAngle={Math.PI / 3}
                // target={}
              />
            </Suspense>
            <Preload all />
          </Canvas>
        )}
      </>
    </div>
    // </Suspense>
  );
}

export default App;
