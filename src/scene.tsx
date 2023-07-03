import React, {memo, useRef} from "react";
import {useThree} from "@react-three/fiber";
import {AccumulativeShadows, CameraControls, Center, Grid, RandomizedLight} from "@react-three/drei";


const Shadows = memo(() => (
    <AccumulativeShadows temporal={true} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
        <RandomizedLight amount={8} radius={4} position={[5, 5, -10]}/>
    </AccumulativeShadows>
))


function Ground() {
    const gridConfig = {
        cellSize: 0.5,
        cellThickness: 0.5,
        cellColor: '#f1f5f9',
        sectionSize: 3,
        sectionThickness: 1,
        sectionColor: '#64748b',
        fadeDistance: 30,
        fadeStrength: 0.8,
        followCamera: false,
        infiniteGrid: true
    }
    return <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
}

export const Scene = () => {
    const meshRef = useRef(null);
    const cameralControlsRef = useRef();

    const {camera} = useThree();

    return (
        <group position-y={-0.5}>
            <Center top>
                <mesh>
                    <boxGeometry args={[1, 1.5, 3]}/>
                    <meshStandardMaterial color="hotpink" transparent={true}/>
                </mesh>
            </Center>
            <Shadows></Shadows>
            <Ground></Ground>
            <CameraControls/>
            <ambientLight intensity={0.7}></ambientLight>
        </group>
    )
}