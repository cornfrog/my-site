"use client"

import React, { useState, useEffect } from 'react';

export default function Carousel({ slides }: any) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(true);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveSlide(true);
            setCurrentSlide((currentSlide + 1) % slides.length);
        }, 3000);

        const transitionTimeout = setTimeout(() => {
            setActiveSlide(false);
        }, 1500); 

        return () => {
            clearTimeout(timeout)
            clearTimeout(transitionTimeout)
        };
    }, [currentSlide, slides.length]);

    return (
        <div className="carousel">
            <div className={`slide ${activeSlide ? "active" : ""}`}>
                <img src={slides[currentSlide]} alt={`Slide ${currentSlide}`} className='carousel__photo'/>
            </div>
        </div>
    );
};