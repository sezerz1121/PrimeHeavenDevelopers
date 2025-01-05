import React from 'react';
import { motion } from 'framer-motion';

const PropetiesCard = (props) => {
    const loading = props.loading;
    console.log(loading);

    return (
        <motion.div 
            className='PropertiesCard'
            initial={{ opacity: 0, y: 50 }}  // Start off with opacity 0 and y position to slide up
            animate={loading ? { opacity: 1, y: 0 } : {}}   // Only animate when loading is true
            transition={{ 
                duration: 0.5, 
                ease: 'easeOut' 
            }}
        >
            <motion.div 
                className='PropertiesCardImage'
                initial={{ scale: 0.8 }}        // Start image with a smaller scale
                animate={loading ? { scale: 1 } : {}} // Only animate scale when loading is true
                transition={{ duration: 0.3 }} // Smooth transition for scaling
            >
                {loading ? 
                    <img src={props.image} alt="Property image" /> : 
                    <img src='../Images/Frame 148.png' alt="Placeholder image" />
                }
            </motion.div>
            
            <motion.div 
                className='PropertiesCardTitle'
                initial={{ opacity: 0 }}
                animate={loading ? { opacity: 1 } : {}}  // Only animate opacity when loading is true
                transition={{ delay: 0.3, duration: 0.5 }} // Delay to make it appear after image
            >
                Sweet Estate
            </motion.div>

            <motion.div 
                className='PropertiesCardInfo'
                initial={{ opacity: 0 }}
                animate={loading ? { opacity: 1 } : {}}  // Only animate opacity when loading is true
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                At PrimeHaven Developers, our philosophy is to create more than just homes—we build lifestyles. We believe in delivering high-quality homes.
            </motion.div>

            <motion.div 
                className='PropertiesCardPrice'
                initial={{ opacity: 0 }}
                animate={loading ? { opacity: 1 } : {}}  // Only animate opacity when loading is true
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                ₹ 24 lacs
            </motion.div>

            <motion.div 
                className='PropertiesCardButtonDiv'
                initial={{ opacity: 0 }}
                animate={loading ? { opacity: 1 } : {}}  // Only animate opacity when loading is true
                transition={{ delay: 0.9, duration: 0.5 }}
            >
                <div className='PropertiesCardButton'>Browse Properties</div>
            </motion.div>
        </motion.div>
    );
}

export default PropetiesCard;
