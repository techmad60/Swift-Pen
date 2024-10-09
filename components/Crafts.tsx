import Image from "next/image"
export default function Crafts() {
    return (
        <div className="flex flex-col justify-center items-center mt-20 w-full">
            <h2 className="text-h2-color tracking-[0.4em] text-xs pt-4">Our Crafts</h2>
            <p className="text-text-color-five lg:text-2xl">View some of our crafts</p>
            <div className="flex space-x-4 overflow-x-scroll my-8 scroll-smooth  w-full lg:space-x-0 lg:overflow-x-hidden lg:mt-12 lg:justify-center lg:grid lg:grid-cols-6 lg:gap-4">
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft1.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft2.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft3.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft4.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft5.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft6.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft7.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft8.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft9.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft10.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft11.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Image 
                    src={"/images/craft12.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div>
                {/* <div className="flex-shrink-0">
                    <Image 
                    src={"/images/sample3.svg"}
                    width={259}
                    height={326}
                    className="rounded-md  "
                    alt="Craft three"
                    />
                </div> */}
                
            </div>
        </div>
    )
}