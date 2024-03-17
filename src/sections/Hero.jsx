function Hero() {
  return (
    <section className=" pt-8  pb-[4rem]">
      <div className="container-wrapper">
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full  bg-[#851B2C] bg-opacity-70 border-2 rounded-lg p-5 shadow-lg border-[#68c513]">
              <h1 className=" font-groot-one text-2xl sm:text-4xl my-4 text-[#fff]">
                Welcome to the Groot NFT Universe! :
              </h1>

              

           

              <div className=" py-2">
                <a
                  href="https://solscan.io/token/Ft5kV9VpmNuFawoGLhbHKTsWDUKUraa43GKdQBf8zdV3"
                  target="_blank"
                  className="my-2 font-groot-one flex justify-start text-xs  text-white  sm:text-lg"
                >
                  {" "}
                  Contract : Ft5kV9VpmNuFawoGLhbHKTsWDUKUraa43GKdQBf8zdV3
                </a>
              </div>
              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
              
                <a
                  href="https://t.me/sushicatso"
                  target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-full bg-[#f3a667] shadow-lg shadow-black/40 text-black  font-bold  border-[#68c513] border-2"
                >
                  join telegram
                </a>

                <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/FJky1Wejuou2Gr9bB16tiNiWjNCBLg7crZ9s9mttE58w?t=1710608652588"
                  target="_blank"
                  className="py-2 text-base uppercase font-sushi-one px-10 rounded-full bg-[#f3a667] shadow-lg shadow-black/40 text-black  font-bold border-2 border-[#68c513]"
                >
                  DEXTOOLS
                </a>
              </div>
            </div>

            <div className=" w-full">
              <div>
                <img src="images/hero.png" alt="" className=" mx-auto floating" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
