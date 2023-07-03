import {Canvas} from "@react-three/fiber";
import * as THREE from "three";
import {Scene} from "./scene";

function App() {

  return (
    <>
        <div className="flex flex-row h-full min-h-screen">
            <div className="w-1/3 bg-gray-50 p-4">
                <h2 className="font-semibold text-sm uppercase">Paste G-Code to Interpret</h2>
                <textarea className="w-full h-full  font-mono" cols={80}/>
            </div>
            <div className="w-2/3 bg-gradient-to-b from-blue-50">
                <Canvas shadows camera={{position: [0, 0, 5], fov: 60}}>
                    <Scene />
                </Canvas>
            </div>
        </div>
    </>
  )
}

export default App
