import React, { useRef, useMemo, useState, useCallback } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { 
    OrbitControls, 
    PerspectiveCamera, 
    MeshReflectorMaterial, 
    Float, 
    Text,
    ContactShadows,
    Environment,
    Points,
    PointMaterial
} from '@react-three/drei';
import * as THREE from 'three';

// Import textures
import marbleTexture from '../assets/three/marble.png';
import woodTexture from '../assets/three/wood.png';
import floorTexture from '../assets/three/floor.png';

const MaterialShowcase = ({ mouse }) => {
    const marbleMap = useLoader(THREE.TextureLoader, marbleTexture);
    const woodMap = useLoader(THREE.TextureLoader, woodTexture);
    const floorMap = useLoader(THREE.TextureLoader, floorTexture);

    const group = useRef();
    const { width } = useThree((state) => state.viewport);
    const isMobile = width < 5;

    useFrame((state) => {
        if (!group.current) return;
        
        // Gentle Parallax based on mouse
        const x = (mouse.current[0] * state.viewport.width) / 100;
        const y = (mouse.current[1] * state.viewport.height) / 100;
        
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, x * 0.5, 0.1);
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -y * 0.5, 0.1);
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.1, 0.1);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, y * 0.1, 0.1);
    });

    return (
        <group ref={group}>
            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
                <planeGeometry args={[50, 50]} />
                <MeshReflectorMaterial
                    blur={[200, 80]}
                    resolution={512}
                    mixBlur={1}
                    mixStrength={30}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#F4F3F1"
                    metalness={0.2}
                    map={floorMap}
                />
            </mesh>

            {/* Plinths & Objects */}
            
            {/* 1. Marble Sample */}
            <group position={[isMobile ? -1.5 : -2.5, -1, isMobile ? -6 : -5]}>
                <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
                    <boxGeometry args={[isMobile ? 1 : 1.5, 1, isMobile ? 1 : 1.5]} />
                    <meshStandardMaterial color="#E5E5E5" roughness={0.3} metalness={0.8} />
                </mesh>
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <mesh position={[0, 1.2, 0]} castShadow>
                        <sphereGeometry args={[isMobile ? 0.4 : 0.6, 64, 64]} />
                        <meshStandardMaterial map={marbleMap} roughness={0.1} metalness={0.2} />
                    </mesh>
                </Float>
                <pointLight position={[0, 2, 0]} intensity={4} color="#9F7730" />
            </group>

            {/* 2. Wood Sample */}
            <group position={[0, -1, isMobile ? -9 : -8]}>
                <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
                    <boxGeometry args={[isMobile ? 1.5 : 2, 1, isMobile ? 1.5 : 2]} />
                    <meshStandardMaterial color="#D1D1D1" roughness={0.5} />
                </mesh>
                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={[0, 1.5, 0]} castShadow rotation={[0, Math.PI / 4, 0]}>
                        <boxGeometry args={[isMobile ? 0.6 : 0.8, isMobile ? 1 : 1.2, isMobile ? 0.6 : 0.8]} />
                        <meshStandardMaterial map={woodMap} roughness={0.4} />
                    </mesh>
                </Float>
                <pointLight position={[0, 2.5, 0]} intensity={2} color="#F4F3F1" />
            </group>

            {/* 3. Brass Sample */}
            <group position={[isMobile ? 1.5 : 2.5, -1, isMobile ? -6 : -5]}>
                <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
                    <boxGeometry args={[isMobile ? 1 : 1.5, 1, isMobile ? 1 : 1.5]} />
                    <meshStandardMaterial color="#E5E5E5" roughness={0.3} metalness={0.8} />
                </mesh>
                <Float speed={3} rotationIntensity={3} floatIntensity={2}>
                    <mesh position={[0, 1.2, 0]} castShadow>
                        <torusGeometry args={[isMobile ? 0.3 : 0.4, 0.15, 64, 128]} />
                        <meshStandardMaterial color="#9F7730" metalness={1} roughness={0.05} />
                    </mesh>
                </Float>
                <pointLight position={[0, 2, 0]} intensity={4} color="#9F7730" />
            </group>

            {/* Backdrop / Wall */}
            <mesh position={[0, 5, -15]}>
                <planeGeometry args={[100, 20]} />
                <meshStandardMaterial color="#F4F3F1" roughness={1} />
            </mesh>

            {/* Particle Dust for atmosphere */}
            <Stars />
        </group>
    );
};

const Stars = () => {
    const ref = useRef();
    const [sphere] = useMemo(() => {
        const count = 1500;
        const data = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            data[i * 3] = (Math.random() - 0.5) * 25;
            data[i * 3 + 1] = (Math.random() - 0.5) * 25;
            data[i * 3 + 2] = (Math.random() - 0.5) * 25;
        }
        return [data];
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
        
        // Pulsate particles gently
        const time = state.clock.getElapsedTime();
        ref.current.position.y = Math.sin(time * 0.2) * 0.1;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial transparent color="#9F7730" size={0.008} sizeAttenuation={true} depthWrite={false} opacity={0.6} blending={THREE.AdditiveBlending} />
            </Points>
        </group>
    );
};

const HeroThree = ({ isDark = true }) => {
    const mouse = useRef([0, 0]);
    const [contextLost, setContextLost] = useState(false);

    const handleCreated = useCallback(({ gl }) => {
        const canvas = gl.domElement;
        canvas.addEventListener('webglcontextlost', (e) => {
            e.preventDefault();
            setContextLost(true);
        });
        canvas.addEventListener('webglcontextrestored', () => {
            setContextLost(false);
        });
    }, []);

    const themeColor = isDark ? '#061D37' : '#F4F3F1';

    return (
        <div 
            className={`absolute inset-0 z-0 ${isDark ? 'bg-[#061D37]' : 'bg-[#F4F3F1]'}`}
            onMouseMove={(e) => {
                mouse.current = [
                    (e.clientX / window.innerWidth) * 2 - 1,
                    -(e.clientY / window.innerHeight) * 2 + 1
                ];
            }}
        >
            {contextLost ? (
                <div className={`absolute inset-0 flex items-center justify-center ${isDark ? 'bg-[#061D37]' : 'bg-[#F4F3F1]'}`}>
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 border-2 border-[#9F7730] rounded-full flex items-center justify-center">
                            <span className="text-[#9F7730] text-2xl">✦</span>
                        </div>
                    </div>
                </div>
            ) : (
                <Canvas shadows={{ type: THREE.PCFShadowMap }} dpr={[1, 1.5]} onCreated={handleCreated}>
                    <PerspectiveCamera makeDefault position={[0, 1, 10]} fov={35} />
                    <color attach="background" args={[themeColor]} />
                    
                    <fog attach="fog" args={[themeColor, 10, 25]} />
                    
                    <ambientLight intensity={isDark ? 0.5 : 0.8} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={isDark ? 2 : 1.5} castShadow />
                    
                    <React.Suspense fallback={null}>
                        <MaterialShowcase mouse={mouse} />
                        <Environment preset="city" />
                    </React.Suspense>
                    
                    <ContactShadows position={[0, -1.99, 0]} opacity={isDark ? 0.4 : 0.2} scale={20} blur={2.5} far={4.5} />
                </Canvas>
            )}
        </div>
    );
};

export default HeroThree;
