import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Suspense } from "react";
import { Leva, useControls } from "leva";

const Hero = () => {
    const x = useControls('HackerRoom', {
        positionX: { value: 0, min: -10, max: 10 },  // Adjust based on the camera's view
        positionY: { value: 0, min: -5, max: 5 },   // Slight vertical adjustment
        positionZ: { value: 5, min: -10, max: 10 },  // Ensure it's far enough from the camera
        rotationX: { value: 0, min: -Math.PI, max: Math.PI },
        rotationY: { value: -Math.PI / 4, min: -Math.PI, max: Math.PI },  // Adjust rotation as needed
        rotationZ: { value: 0, min: -Math.PI, max: Math.PI },
        scale: { value: 0.1, min: 0.05, max: 1 },  // Fine-tune scale if needed
    });

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Amira Boubaker <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
            </div>
            <div className="w-full h-full absolute inset-0" style={{ top: "35%", height: "100vh" }}>
                {/* Adjust the canvas size here */}
                <Leva />
                <Canvas shadows style={{ width: '100%', height: '80%', margin: '0 auto' }}>
                    <Suspense fallback={<CanvasLoader />}>
                        {/* Adjusted camera position and field of view */}
                        <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={60} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />

                        {/* Position, rotation, and scale adjustments for HackerRoom */}
                        <HackerRoom
                            position={[0.2, -4.5, 0.2]}
                            rotation={[0, -Math.PI, 0]}
                            scale={0.08} // Consolidated scale prop
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;