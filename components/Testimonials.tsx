"use client";
import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
    // State to track the active slide
    const [currentIndex, setCurrentIndex] = useState(0);

    // List of slides (images in this case)
    const slides = [
        {
            img: "/images/emo1.png",
            caption: "First slide label",
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
            img: "/images/emo2.png",
            caption: "Second slide label",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "/images/emo3.png",
            caption: "Third slide label",
            description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        },
    ];

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

                <div className="relative w-full max-w-[17rem] lg:max-w-5xl overflow-hidden">
                    <div className="text-h2-color flex justify-center items-center w-full space-x-4 lg:justify-center transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {slides.map((slide, index) => (
                            <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 flex-shrink-0 ">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950  w-fit absolute -top-7" key={index}>
                                    <Image 
                                    src={slide.img}
                                    width={50}
                                    height={50}
                                    className="rounded-md"
                                    alt="Craft three"
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

{/* 
    import Image from "next/image"
export default function Testimonials() {
    return (
        <section className="bg-btn-two-color">
                <div className="flex flex-col items-center bg-curved-pattern py-12">
                    <h2 className="text-text-color-two tracking-[0.4em] text-xs ">TESTIMONIALS</h2>
                    <p className="text-white lg:text-2xl">What they say about us</p>
                    <div className="text-h2-color flex flex-col items-center w-full lg:flex-row space-x-4 lg:justify-center">
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8  ">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950  w-fit absolute -top-7">
                                <Image 
                                src={"/images/happpy.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                            </div>
                            <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/happpy.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                            </div>
                            <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/happpy.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-start">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}
    
    
    
    
    
    
    
    
    
    
    <SwiperSlide items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 justify-center bg-lime-300`}>
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950  w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo1.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 justify-center bg-lime-300`}>
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo2.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </SwiperSlide>

                        <SwiperSlide className={`${styles.swiperSlide} items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 justify-center bg-lime-300`}>
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo3.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 justify-center bg-lime-300`}>
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo4.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 justify-center bg-lime-300`}>
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo5.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 justify-center bg-lime-300`}>
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo6.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </SwiperSlide>

                        <SwiperSlide className={`${styles.swiperSlide} items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 justify-center bg-lime-300`}>
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo7.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 justify-center bg-lime-300`}>
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo8.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 justify-center bg-lime-300`}>
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo9.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 justify-center bg-lime-300`}>
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo10.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </SwiperSlide>  */}
 {/* <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo11.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo12.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo13.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo14.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo15.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo16.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo17.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div> */}
                        {/* <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo18.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo19.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo20.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo21.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo22.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo23.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[300px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo1.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 lg:w-[500px] lg:h-[400px] flex-shrink-0 swiper-slide">
                            <div className="rounded-full p-2 flex justify-center items-center bg-green-950 w-fit absolute -top-7">
                                <Image 
                                src={"/images/emo2.png"}
                                width={50}
                                height={50}
                                className="rounded-md"
                                alt="Craft three"
                                />
                            </div>
                            <hr className="mt-16 w-8 border-gray-300"/>
                            <div className="flex items-center gap-2 my-4"> 
                                <Image 
                                src={"/images/stars.svg"}
                                width={81}
                                height={16}
                                className="rounded-md"
                                alt="Craft three"
                                />
                                <p className="">5.0</p>
                            </div>
                            <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achieving excellent results. </p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div> */}