
"use client";

import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ children, autoSlideInterval = null }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (autoSlideInterval) {
      timerRef.current = setInterval(handleNext, autoSlideInterval);
    }

      return () => clearInterval(timerRef.current);
  }, [autoSlideInterval]);

  return (
    <div className="relative w-full">
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {children}
      </div>

      <button onClick={handlePrevious} className="absolute top-1/2 left-0 mx-2 sm:mx-8 md:mx-20 hover:-translate-y-2 text-4xl md:text-5xl lg:text-6xl text-dark-0/50 dark:text-light-0/50 cursor-pointer rounded-full transition-transform duration-300">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M603.3 327.5l-246 178a7.95 7.95 0 0 0 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-0 mx-2 sm:mx-8 md:mx-20 hover:-translate-y-2 text-4xl md:text-5xl lg:text-6xl text-dark-0/50 dark:text-light-0/50 cursor-pointer rounded-full transition-transform duration-300">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
      </button>

      <div className="mb-0.5 flex justify-center items-center space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 hover:-translate-y-1 cursor-pointer rounded-full hover:outline-none hover:ring-2 hover:ring-dark-0 dark:hover:ring-light-0 ${currentIndex === index ? 'bg-dark-1 dark:bg-light-1' : 'bg-dark-1/50 dark:bg-light-1/50'} transition-transform duration-200`}
          />
        ))}
      </div>
    </div>
  );
};

const CarouselItem = ({ children }) => {
  return (
    <div className="w-full flex-shrink-0">
      {children}
    </div>
  );
};

export { Carousel, CarouselItem };
