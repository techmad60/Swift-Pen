import Image from "next/image"
export default function Testimonials() {
    return (
        <section className="bg-btn-two-color">
                <div className="flex flex-col items-center bg-curved-pattern py-12">
                    <h2 className="text-text-color-two tracking-[0.4em] text-xs ">TESTIMONIALS</h2>
                    <p className="text-white lg:text-2xl">What they say about us</p>
                    <div className="text-h2-color flex flex-col items-center w-full lg:flex-row lg:space-x-4 lg:justify-center lg:max-w-7xl">
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 flex-shrink-0 ">
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
                            <p className="text-sm text-center">&quot;Very easy with communication. Competent in providing services. Committed to achieving excellent results.&quot;</p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>

                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 flex-shrink-0">
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
                            <p className="text-sm text-center">&quot;He listened to all my concerns and gave me great writing! Timely and very professional&quot;.
</p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                        <div className="bg-white items-center flex flex-col w-[259px] h-[326px] rounded-md mt-12 relative px-8 flex-shrink-0">
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
                            <p className="text-sm text-center">&quot;Fabulous again! Raphael has kept a steady track of completing work efficiently and in a timely manner. Love working with him!&quot;</p>

                            <hr className="mt-8 w-full border-gray-300"/>
                            <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}