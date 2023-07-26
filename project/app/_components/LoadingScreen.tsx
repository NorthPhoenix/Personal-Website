"use client";

import Logo from "./design/Logo";
import { motion } from "framer-motion";

const LoadingScreen = () => {
    return (
        <div className='fixed z-[500] inset-0 overflow-hidden bg-gray-100'>
            <motion.div
                className='h-full w-full bg-nier-700'
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.7 }}>
                <Logo className='absolute top-1/2 left-1/2 z-30 h-1/6 -translate-x-1/2 -translate-y-1/2 fill-nier-300 brightness-75' />
                <div
                    id='line-grid'
                    className='absolute z-20 h-full w-full bg-transparent bg-lines-inverted bg-120 bg-repeat'
                />
                <div
                    id='wave'
                    className='relative -left-[50px] z-10 h-[200vh] w-28 origin-center animate-wave bg-wave  '
                />
            </motion.div>
        </div>
    );
};

export default LoadingScreen;
