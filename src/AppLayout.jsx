import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";
import Partner from "./sections/Partner";
import MemeCards from "./sections/MemeCards";
import Footer from "./sections/Footer";
import RoadMap from "./sections/RoadMap";

function AppLayout() {
  return (
    <>
      <main className="  bg-main">
        <Navbar />

        <Hero />
      </main>
      <div className=" h-[100px]  py-4  mb-2 bg-[#224609] ">
        <MemeMark />
      </div>

      <div>
        <dl className="h-[50px]" />
        <Intro />
        <dl className="h-[50px]" />
        <div className=" bg-[#224609]">
        <MemeCards />
        </div>
        <div>
          <RoadMap/>
        </div>
        {/* <div>
          <Partner />
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
