import Image from "next/image";
import { montsy, merri, changa } from "@/fonts/fonts";

export default function Home() {
  return (
    <div className={`${montsy.className} bg-white flex flex-col`}>
      <header className="py-4 px-6">
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
        <section className="flex flex-col justify-center items-center text-center py-8">
          <p className={`${montsy.className} text-xs text-h2-color`}>We make things easy</p>

          <div className="py-4" >
            <Image 
            src={"/images/hero.svg"}
            width={295.6}
            height={279}
            alt="Hero Image"
            />
          </div>
          
          <h1 className={`${merri.className} text-sm text-h1-color`}>Quit the Hunt</h1>

          <p className="text-h2-color text-xs px-16  py-4">Searching for the perfect freelancer can be overwhelming. Let us simplify things</p>

          <button className="bg-btn-one-color text-white text-xs p-3 w-3/4 rounded-md">Try a demo</button>

          <button className="bg-btn-two-color text-white text-xs p-3 w-3/4 rounded-md mt-2">Get started</button>
        </section>

        <section className="flex flex-col bg-btn-two-color py-4 rounded-md mt-16 px-6">
          <div className="py-4 flex flex-col justify-center items-center">
            <p className="text-text-color-two text-xs">About Swiftpen</p>
            <h2 className={`${merri.className} text-text-color-two text-center text-lg mt-8`}>About Us</h2>
            <div className="pt-6">
              <Image 
              src={"/images/founder.svg"}
              width={276}
              height={348.28}
              alt="Hero Image"
              className=""
              />
            </div>
            <p className="text-xs px-8 text-center text-text-color-two"><span className={`${changa.className} text-3xl leading-none`}>&quot;</span>At Swift Pen, we simplify the freelancing process, ensuring you get reliable, high-quality services in ghostwriting, book editing, cover design, and more. With our dedicated administrator, Mr Raphael, we match your project with the best freelancer from our talented pool, guaranteeing timely delivery, exceptional quality, and budget-friendly solutions. Trust Swift Pen to bring your project to life.</p>
            
            <button className="text-xs text-text-color-three border-b border-text-color-three pb-2 mt-8">Read more</button>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center py-8 px-6 bg-dot-pattern">
          <h2 className="text-h2-color tracking-[0.4em] text-xs pt-4">Our Services</h2>
          <p className="text-text-color-five">Experience the difference</p>
          <div className="py-4 px-6 flex flex-col self-center space-y-12">
            <div className="flex items-center gap-4 mt-4">
              <Image 
                src={"/images/bullet.svg"}
                width={12}
                height={12}
                alt="Hero Image"
              />
              <p className="text-text-color-four">Ghost Writing</p>
            </div>
            <div className="flex items-center gap-4">
              <Image 
                src={"/images/bullet.svg"}
                width={12}
                height={12}
                alt="Hero Image"
              />
              <p className="text-text-color-four">Book cover Design</p>
            </div>
            <div className="flex items-center gap-4">
              <Image 
                src={"/images/bullet.svg"}
                width={12}
                height={12}
                alt="Hero Image"
              />
              <p className="text-text-color-four">Book Editing</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-20 ">
            <h2 className="text-h2-color tracking-[0.4em] text-xs pt-4">Our Crafts</h2>
            <p className="text-text-color-five">View some of our crafts</p>
            <div className="flex space-x-4 overflow-x-scroll my-8 scroll-smooth">
              <Image 
                src={"/images/sample1.svg"}
                width={259}
                height={326}
                className="rounded-md"
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
            <div className="text-h2-color">
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
      <footer className="px-6 py-8 grid">
        <section className="flex flex-col">
          <h2 className="text-btn-one-color tracking-[0.2em] text-lg font-medium pt-4">Our Services</h2>
            <div className="flex flex-col space-y-6 ">
              <div className="flex items-center gap-4 mt-4">
                <Image 
                  src={"/images/bullet-brown.svg"}
                  width={20}
                  height={20}
                  alt="Hero Image"
                />
                <p className="text-btn-one-color">Ghost Writing</p>
              </div>
              <div className="flex items-center gap-4">
                <Image 
                  src={"/images/bullet-brown.svg"}
                  width={20}
                  height={20}
                  alt="Hero Image"
                />
                <p className="text-btn-one-color">Book cover Design</p>
              </div>
              <div className="flex items-center gap-4">
                <Image 
                  src={"/images/bullet-brown.svg"}
                  width={20}
                  height={20}
                  alt="Hero Image"
                />
                <p className="text-btn-one-color">Book Editing</p>
              </div>
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="text-btn-one-color tracking-[0.2em] text-lg font-medium pt-4">Contact Us</h2>
            <div className="flex flex-col space-y-6 ">
              <div className="flex items-center gap-4 mt-4">
                <Image 
                  src={"/images/location.svg"}
                  width={24}
                  height={24}
                  alt="Hero Image"
                />
                <p className="text-btn-one-color">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              </div>
              <div className="flex items-center gap-4">
                <Image 
                  src={"/images/phone.svg"}
                  width={20}
                  height={20}
                  alt="Hero Image"
                />
                <p className="text-btn-one-color">(684) 555-0102</p>
              </div>
              <div className="flex items-center gap-4">
                <Image 
                  src={"/images/mail.svg"}
                  width={20}
                  height={20}
                  alt="Hero Image"
                />
                <p className="text-btn-one-color">alma.lawson@example.com</p>
              </div>
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="text-btn-one-color tracking-[0.2em] text-lg font-medium pt-4">Follow Us</h2>
            <div className="flex flex-col space-y-6 ">
              <div className="flex items-center gap-4 mt-4">
                <Image 
                  src={"/images/instagram.svg"}
                  width={24}
                  height={24}
                  alt="Hero Image"
                />
                <p className="text-btn-one-color">Instagram</p>
              </div>
              <div className="flex items-center gap-4">
                <Image 
                  src={"/images/facebook.svg"}
                  width={16}
                  height={16}
                  alt="Hero Image"
                />
                <p className="text-btn-one-color">Facebook</p>
              </div>
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="text-btn-one-color tracking-[0.2em] text-lg font-medium pt-4">Get our App on</h2>
            <div className="flex flex-col space-y-6 ">
              <div className="flex items-center gap-4 mt-4">
                <Image 
                  src={"/images/playstore.svg"}
                  width={24}
                  height={24}
                  alt="Hero Image"
                />
                <p className="text-btn-one-color">Playstore</p>
              </div>
              <div className="flex items-center gap-4">
                <Image 
                  src={"/images/appstore.svg"}
                  width={20}
                  height={20}
                  alt="Hero Image"
                />
                <p className="text-btn-one-color">Appstore</p>
              </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
