import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";
import Partner from "./sections/Partner";
import MemeCards from "./sections/MemeCards";
import Footer from "./sections/Footer";

function AppLayout() {
  return (
    <>
      <main className="  bg-main">
        <Navbar />

        <Hero />
      </main>
      <div className=" h-[70px]  py-4  mb-2 bg-[#000130] ">
        <MemeMark />
      </div>

      <div>
        <dl className="h-[50px]" />
        <Intro />
        <dl className="h-[50px]" />
        <MemeCards />
        <div>
          <Partner />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
