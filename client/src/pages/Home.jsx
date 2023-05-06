import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { headContainerAnimation, headTextAnimation, headContentAnimation, slideAnimation} from "../config/motion"
import state from "../store";
import { CustomButton } from "../components";


const Home = () => {
    const snap = useSnapshot(state);
    return(
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img src='./threejs.png' alt="logo" className="w-8 h-8 object-contain" />
                    </motion.header>
                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">READY, <br className="xl:block hidden"/>SET, GO!</h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Step into the fashion revolution with our cutting-edge 3D customization tool. <strong>Embrace your creativity and make a statement with your one-of-a-kind apparel.</strong>{" "} Your style, your way.
                            </p>
                            <CustomButton type="filled" title="Customize It" handleClick={() => state.intro = false} customStyles="w-fit px-4 py-2.5 font-bold text-sm "/>
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home;