import React from 'react';
import { motion } from 'framer-motion';
import { GoStarFill } from "react-icons/go";

const TestimonialCard = (props) => {
    const { image, name, profession, Review } = props;

    return (
        <motion.div
            className='TestimonialCard'
            initial={{ opacity: 0, y: 50 }} // Card slides up and fades in
            whileInView={{ opacity: 1, y: 0 }} // Animation on entering viewport
            viewport={{ once: true }} // Ensures animation happens only once
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {/* Image Animation */}
            <motion.div
                className='TestimonialCardImageDiv'
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <img src={image} alt={name} />
            </motion.div>

            {/* Name Animation */}
            <motion.div
                className='TestimonialCardNameDiv'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {name}
            </motion.div>

            {/* Profession Animation */}
            <motion.div
                className='TestimonialCardJobDiv'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                {profession}
            </motion.div>

            {/* Review Animation */}
            <motion.div
                className='TestimonialCardReviewDiv'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                {Review}
            </motion.div>

            {/* Stars Animation */}
            <motion.div
                className='TestimonialCardStars'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
            >
                <div><GoStarFill /></div>
                <div><GoStarFill /></div>
                <div><GoStarFill /></div>
                <div><GoStarFill /></div>
                <div><GoStarFill /></div>
            </motion.div>
        </motion.div>
    );
}

export default TestimonialCard;
