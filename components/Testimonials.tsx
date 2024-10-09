"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import styles from '../styles/Testimonials.module.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Testimonials() {
    return (
        <section className="bg-btn-two-color">
            <div className="flex flex-col items-center bg-curved-pattern bg-no-repeat bg-cover py-12">
                <h2 className="text-text-color-two tracking-[0.4em] text-xs ">TESTIMONIALS</h2>
                <p className="text-white lg:text-2xl">What they say about us</p>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    speed={0}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                    <SwiperSlide className="">
                        <Image 
                            src={"/images/hero.svg"}
                            width={400}
                            height={400}
                            alt="Hero Image"
                            />
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <Image 
                            src={"/images/founder.svg"}
                            width={400}
                            height={400}
                            alt="Hero Image"
                            />
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <Image 
                            src={"/images/hero.svg"}
                            width={400}
                            height={400}
                            alt="Hero Image"
                            />
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <Image 
                            src={"/images/founder.svg"}
                            width={400}
                            height={400}
                            alt="Hero Image"
                            />
                    </SwiperSlide>

            

                </Swiper>
            </div>
        </section>
    )
}
{/* <SwiperSlide className={`${styles.swiperSlide} items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 justify-center bg-lime-300`}>
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