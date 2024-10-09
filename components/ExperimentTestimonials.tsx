"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Define the Slide interface
interface Slide {
    img: string;
    caption: string;
    description: string;
}

export default function Testimonials() {
    // State to track the active slide
    const [currentIndex, setCurrentIndex] = useState(0);
    // State for slides with the Slide type
    const [slides, setSlides] = useState<Slide[]>([]);

    // Fetch data from the JSON file
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data/testimonials.json");
            const data = await response.json();
            setSlides(data);
        };

        fetchData();
    }, []);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    return (
        <section className="bg-btn-two-color">
            <div className="flex flex-col items-center py-12">
                <h2 className="text-text-color-two tracking-[0.4em] text-xs ">TESTIMONIALS</h2>
                <p className="text-white lg:text-2xl mb-6">What they say about us</p>

                <div className="relative w-full max-w-[17rem] lg:max-w-[17rem] overflow-scroll">
                    <div className="text-h2-color flex justify-center items-center w-full space-x-4 lg:justify-center transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {slides.map((slide, index) => (
                            <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 flex-shrink-0" key={index}>
                                <div className="rounded-full p-2 flex justify-center items-center bg-green-950  w-fit absolute -top-7">
                                    <Image 
                                        src={slide.img}
                                        width={50}
                                        height={50}
                                        className="rounded-md"
                                        alt={slide.description} // Update alt text for accessibility
                                    />
                                </div>
                                <hr className="mt-16 w-8 border-gray-300"/>
                                <p className="text-sm text-center">{slide.description}</p>
                                <hr className="mt-8 w-full border-gray-300"/>
                                <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                            </div>
                        ))}
                    </div>

                    <button
                        className="absolute top-1/2 left-1 bg-gray-800 text-white p-2 rounded-full h-[2rem] w-[2rem] flex justify-center items-center"
                        onClick={prevSlide}
                    >
                        &#10094;
                    </button>
                    <button
                        className="absolute top-1/2 right-1 bg-gray-800 text-white p-2 rounded-full h-[2rem] w-[2rem] flex justify-center items-center"
                        onClick={nextSlide}
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>   
    );
}
