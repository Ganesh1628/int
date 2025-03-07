import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./TrainingOptions.css";

const TrainingOptions = () => {
    const [key, setKey] = useState(0); // Force re-render to restart animation

    useEffect(() => {
        const interval = setInterval(() => {
            setKey((prevKey) => prevKey + 1); // Change key to restart animation immediately
        }, 11000); // 3s animation + 8s hold

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="training-container" key={key}> {/* Key forces full rerender */}
            {["Online Training", "Classroom Training", "Corporate Training"].map(
                (title, index) => (
                    <motion.div
                        key={title + key} // Unique key forces fresh animation
                        className="training-card"
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 1.2,
                            ease: "easeOut",
                        }}
                    >
                        {/* Header Animation */}
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 1.2 + 0.4 }}
                        >
                            {title}
                        </motion.h2>

                        {/* Divider Animation */}
                        <motion.div
                            className="divider"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.5, delay: index * 1.2 + 0.6 }}
                        ></motion.div>

                        {/* Content Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 1.2 + 0.8 }}
                        >
                            {index === 0 && (
                                <ul>
                                    <p>1 to 1 training Led by Instructor
                                        Group Training Led by Instructor
                                        Prerecorded Self paced Video Sessions and there will a session weekly with the instructor</p>
                                </ul>
                            )}
                            {index === 1 && (
                                <ul>
                                    <p>Training One to One Training Led by Instructor Group training Led by Instructor</p>
                                </ul>
                            )}
                            {index === 2 && (
                                <>
                                    <p>Are you looking to train a group of employees then our Corporate training team can help you to deliver the best training?</p>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )
            )}
        </div>
    );
};

export default TrainingOptions;
