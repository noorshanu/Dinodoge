import React from "react";

function MemeCards() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
      <h2 className=" text-2xl sm:text-5xl py-4 font-groot-one text-center ">
        Our Products
      </h2>

      <div className=" flex items-center gap-4 justify-between flex-col sm:flex-row">
        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl  w-[270px] h-auto sm:h-[500px]">
          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/MemesCardOne.webp" alt="" className="" />
          </div>
          <div>
            <p className="font-groot-one text-xl">Experience the Nature</p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap  justify-center items-center overflow-hidden rounded-xl  w-[270px] h-auto sm:h-[500px]">
          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/MemesCardTwo.webp" alt="" className="" />
          </div>
          <div>
            <p className="font-groot-one text-xl">Join the Sprout Revolution</p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl  w-[270px] h-auto sm:h-[500px]">
          <div className="w-[250px] h-[250px] mb-10 border-none rounded-2xl overflow-hidden ">
            <img
              src="images/MemesCardThree.webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div>
            <p className=" font-groot-one text-xl">Embrace the Groot Glory</p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl  w-[270px] h-auto sm:h-[500px]">
          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/MemesCardFour.webp" alt="" className="" />
          </div>
          <div>
            <p className=" font-groot-one text-xl ">Personalized Adventures</p>
          </div>
        </div>
        {/*         
        <img
          src="images/meme2.jpeg"
          alt=""
          className=" rounded-xl border border-[#fed403] h-[350px]"
        />
        <img
          src="images/meme3.jpeg"
          alt=""
          className=" rounded-xl border border-[#fed403] h-[350px]"
        /> */}
      </div>
    </div>
  );
}

export default MemeCards;
