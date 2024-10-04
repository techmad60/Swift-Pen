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
          <p className={`${montsy.className} text-xs text-text-color-one`}>We make things easy</p>

          <div className="py-4" >
            <Image 
            src={"/images/hero.svg"}
            width={295.6}
            height={279}
            alt="Hero Image"
            />
          </div>
          
          <h1 className={`${merri.className} text-sm text-h1-color`}>Quit the Hunt</h1>

          <p className="text-text-color-one text-xs px-16  py-4">Searching for the perfect freelancer can be overwhelming. Let us simplify things</p>

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
        <section className="flex flex-col justify-center items-center py-8 px-6">
          <h2 className="text-text-color-one tracking-[0.4em] text-xs pt-4">Our Services</h2>
          <p className="text-text-color-five">Experience the Difference</p>
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

          <div className="flex flex-col justify-center items-center mt-20">
            <h2 className="text-text-color-one tracking-[0.4em] text-xs pt-4">Our Services</h2>
            <p className="text-text-color-five">View some of our Crafts</p>
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
      </main>
    </div>
  );
}
