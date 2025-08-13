import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";

import batman from '../../assets/image.png'


const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const divStyle = {
        backgroundImage: `url(../assets/image.png)`,
        backgroundColor: '#333333',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
    };
    return (
        <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                    backgroundImage: `url(${batman})`,
                    backgroundColor: '#fff808',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="relative h-64 w-48 sm:h-80 sm:w-64 lg:h-96 lg:w-72 rounded-xl"
            >
                <div
                    style={{
                        transform: "translateZ(200px)",
                        transformStyle: "preserve-3d",

                    }}
                    className="absolute inset-3 sm:inset-4 lg:inset-5 grid place-content-center backdrop-blur-sm bg-opacity-30 rounded-xl bg-white shadow-2xl"
                >
                    <p
                        style={{
                            transform: "translateZ(100px)",
                        }}
                        className="text-center text-lg sm:text-xl lg:text-2xl font-bold px-2"
                    >
                        I AM BATMAN
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default TiltCard;