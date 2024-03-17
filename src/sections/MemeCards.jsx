import React from "react";
import RoadmapCards from "../components/RoadmapCards";

function MemeCards() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
     
      <h2 className="font-groot-one text-5xl my-2 text-[#ffffff] text-center font-bold relative z-30">
      Our Products
        </h2>
        <img src="images/bran.png" alt=""  className=" mx-auto h-[100px] -mt-12 relative z-10"/>

      <div className=" flex items-center gap-4 justify-between flex-col sm:flex-row">
      
        <div className=" w-full">
            <p className="font-medium font-groot-one text-xl sm:text-3xl text-white  py-2">
              Introducing Baby Groot Coin: The Rootin'-Tootin' Crypto Companion
              Inspired by the Guardian of the Galaxy!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one text-white  font-medium">
              Groot NFTs: Step into the cosmic realm with our exclusive
              collection of Groot NFTs. Each one as unique and endearing as our
              beloved Baby Groot himself!
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one  text-white font-medium">
              GrootBot: Our trusty GrootBot is here to assist you in navigating
              the crypto universe. Stay on top of market trends while grooving
              to the beats of Groot's tunes!
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one text-white font-medium">
              24/7 Galactic Community: Join our intergalactic community and
              let's grow together as we protect the galaxy and spread Groot's
              message of unity and friendship! We are Groot!
            </h1>
          </div>
       

        <div className=" max-w-xl">
          <RoadmapCards/>

        </div>
      </div>
    </div>
  );
}

export default MemeCards;
