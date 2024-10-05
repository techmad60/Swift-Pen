import Image from "next/image";
import { montsy, merri, changa } from "@/fonts/fonts";
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={`${montsy.className} bg-white flex flex-col`}>
      <header className="py-4 px-6 lg:px-16">
        <div className="flex justify-between items-center">
          <Image 
          src={"/images/logo.svg"}
          width={80}
          height={19}
          alt="Logo"
          />
        
          <Image 
          src={"/images/hamBurger.svg"}
          width={4}
          height={16}
          alt="Logo"
          />
        </div>
      </header>
      <main className="">
        <section className="flex flex-col justify-center items-center text-center py-8 lg:px-16 lg:flex-row-reverse lg:text-start lg:justify-between">
        <p className={`${montsy.className} text-xs text-h2-color lg:hidden`}>We make things easy</p>
          <div className="py-4" >
            <Image 
            className="lg:w-[500px]"
            src={"/images/hero.svg"}
            width={295.6}
            height={279}
            alt="Hero Image"
           
            />
          </div>
          <div>
            <p className={`${montsy.className} text-xs text-h2-color hidden lg:flex lg:text-2xl`}>WE MAKE THINGS EASY</p>
            <h1 className={`${merri.className} text-sm text-h1-color lg:text-5xl`}>Quit the Hunt</h1>

            <p className="text-h2-color text-xs px-16 py-4 lg:px-0 lg:w-[250px]">Searching for the perfect freelancer can be overwhelming. Let us simplify things</p>
            <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:gap-4 lg:items-start">
              <button className="bg-btn-one-color text-white font-medium text-xs p-3 w-3/4 rounded-md lg:w-fit lg:p-2 lg:text-btn-two-color lg:bg-white">Try a demo</button>
              <button className="bg-btn-two-color text-white font-medium text-xs p-3 w-3/4 rounded-md lg:w-fit lg:p-2 lg:-order-1">Get started</button>
            </div>
           
          </div>
          
        </section>

        <section className="flex flex-col bg-btn-two-color py-4 rounded-md mt-16 px-6 lg:px-16">
          <div className="py-4 flex flex-col justify-center items-center lg:flex-row lg:gap-12">
            <Image 
              src={"/images/founder.svg"}
              width={276}
              height={348.28}
              alt="Hero Image"
              className="pt-6 lg:pt-0 lg:w-[500px] hidden lg:flex"
            />
            <div className="flex flex-col items-center lg:items-start lg:w-[550px]">
              {/* <p className="text-text-color-two text-xs lg:text-center lg:self-center">About Swiftpen</p>
              <h2 className={`${merri.className} text-text-color-two text-center text-lg mt-8 lg:self-center`}>About Us</h2> */}
              <div className="pt-6 lg:hidden">
                <Image 
                src={"/images/founder.svg"}
                width={276}
                height={348.28}
                alt="Hero Image"
                className=""
                />
              </div>
              <div className="text-text-color-two ">
                <p className={`${changa.className} text-4xl leading-none lg:text-8xl`}>&quot;</p>
                <p className="text-xs px-8 text-center text-text-color-two lg:text-start lg:px-0 lg:text-lg ">At Swift Pen, we simplify the freelancing process, ensuring you get reliable, high-quality services in ghostwriting, book editing, cover design, and more. With our dedicated administrator, Mr Raphael, we match your project with the best freelancer from our talented pool, guaranteeing timely delivery, exceptional quality, and budget-friendly solutions. Trust Swift Pen to bring your project to life.</p>
              </div>
              
              
              <button className="text-xs text-text-color-three border-b border-text-color-three pb-2 mt-8 lg:self-end lg:text-lg">Read more</button>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center py-8 px-6 bg-dot-pattern lg:px-16">
          <h2 className="text-h2-color tracking-[0.4em] text-xs pt-4">Our Services</h2>
          <p className="text-text-color-five lg:text-2xl">Experience the difference</p>
          <div className="py-4 px-6 flex flex-col space-y-12 w-full lg:flex-row lg:space-y-0 lg:mt-12">
            <div className="flex items-center justify-center gap-4 mt-4 w-full bg-white p-3 self-center lg:mt-0">
              <Image 
                src={"/images/bullet.svg"}
                width={12}
                height={12}
                alt="Hero Image"
              />
              <p className="flex items-center gap-4 text-text-color-four">Ghost Writing <FaArrowRight/></p>
            </div>
            <div className="flex items-center gap-4 w-full bg-white p-3 justify-center">
              <Image 
                src={"/images/bullet.svg"}
                width={12}
                height={12}
                alt="Hero Image"
              />
              <p className="flex items-center gap-4 text-text-color-four">Book Cover Design <FaArrowRight/></p>
            </div>
            <div className="flex items-center gap-4 w-full bg-white p-3 justify-center">
              <Image 
                src={"/images/bullet.svg"}
                width={12}
                height={12}
                alt="Hero Image"
              />
              <p className="flex items-center gap-4 text-text-color-four">Book Editing<FaArrowRight/></p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-20 w-full">
            <h2 className="text-h2-color tracking-[0.4em] text-xs pt-4">Our Crafts</h2>
            <p className="text-text-color-five lg:text-2xl">View some of our crafts</p>
            <div className="flex space-x-4 overflow-x-scroll my-8 scroll-smooth  w-full lg:mt-12 lg:justify-center">
              <Image 
                src={"/images/sample1.svg"}
                width={259}
                height={326}
                className="rounded-md  "
                alt="Craft one"
                
              />
              
              <Image 
                src={"/images/sample2.svg"}
                width={259}
                height={326}
                className="rounded-md"
                alt="Craft two"
              />
              <Image 
                src={"/images/sample3.svg"}
                width={259}
                height={326}
                className="rounded-md"
                alt="Craft three"
              />
            </div>
          </div>
        </section>
        <section className="bg-btn-two-color">
          <div className="flex flex-col items-center bg-curved-pattern py-12">
            <h2 className="text-text-color-two tracking-[0.4em] text-xs ">TESTIMONIALS</h2>
            <p className="text-white">What they say about us</p>
            <div className="text-h2-color flex flex-col items-center w-full lg:flex-row space-x-4 lg:justify-center bg-green-500 ">
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
                <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achievingexcellent results. </p>

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
                <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achievingexcellent results. </p>

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
                <p className="text-sm text-center">Very easy with communication. Competent in providing services. Committed to achievingexcellent results. </p>

                <hr className="mt-8 w-full border-gray-300"/>
                <p className="border-l border-green-800 text-xs mt-6 self-start pl-2">Satisfied Client</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-6 py-8 space-y-6 flex flex-col lg:px-16">
        <div className="space-y-6 lg:grid grid-cols-4 lg:gap-8  lg:space-y-0">
          <section className="flex flex-col">
            <h2 className="text-btn-one-color  text-sm font-medium pt-4">Our Services</h2>
              <div className="flex flex-col space-y-6 ">
                <div className="flex items-center gap-4 mt-4">
                  <Image 
                    src={"/images/bullet-brown.svg"}
                    width={20}
                    height={20}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Ghost Writing</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src={"/images/bullet-brown.svg"}
                    width={20}
                    height={20}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Book cover Design</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src={"/images/bullet-brown.svg"}
                    width={20}
                    height={20}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Book Editing</p>
                </div>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="text-btn-one-color  text-sm font-medium pt-4">Contact Us</h2>
              <div className="flex flex-col space-y-6 ">
                <div className="flex items-center gap-4 mt-4">
                  <Image 
                    src={"/images/location.svg"}
                    width={24}
                    height={24}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src={"/images/phone.svg"}
                    width={20}
                    height={20}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">(684) 555-0102</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src={"/images/mail.svg"}
                    width={20}
                    height={20}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">alma.lawson@example.com</p>
                </div>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="text-btn-one-color  text-sm font-medium pt-4">Follow Us</h2>
              <div className="flex flex-col space-y-6 ">
                <div className="flex items-center gap-4 mt-4">
                  <Image 
                    src={"/images/instagram.svg"}
                    width={24}
                    height={24}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Instagram</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src={"/images/facebook.svg"}
                    width={14}
                    height={14}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Facebook</p>
                </div>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="text-btn-one-color  text-sm font-medium pt-4">Get our App on</h2>
              <div className="flex flex-col space-y-4 ">
                <div className="flex items-center gap-4 mt-4">
                  <Image 
                    src={"/images/playStore.svg"}
                    width={24}
                    height={24}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Playstore</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src={"/images/appStore.svg"}
                    width={20}
                    height={20}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Appstore</p>
                </div>
            </div>
          </section>
        </div>

        <section className="flex flex-col lg:flex-row justify-between">
          <form className="flex flex-col self-center  mt-16">
            <label className="text-text-color-one">Subscribe to our Newsletter</label>
            <input type="text" placeholder="Email" className="outline-none border-b  pt-4 placeholder:text-xs"/>
            <button className="flex items-center self-end text-white p-2 gap-2 rounded-sm bg-[#786F21] mt-4">Send <span>
          <FaArrowRight /></span></button>
          </form>
          <div className="self-center mt-12">
            <Image 
              src={"/images/brownLogo.svg"}
              width={250}
              height={250}
              alt="Hero Image"
            />
            <p className="text-btn-two-color text-center text-xs mt-12">Copyright 2024 &copy; All Rights Reserved</p>
          </div>
          
        </section>
      </footer>
    </div> 
  );
}
