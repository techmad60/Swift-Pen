///Importing components
import { montsy } from "@/fonts/fonts";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={`${montsy.className} bg-white grid`}>
      <Header/>
      <Main />
      <Footer/>
    </div> 
  );
}
