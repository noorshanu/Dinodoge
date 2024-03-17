import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full pb-8 ">
      <div className="container-wrapper mt-8 ">
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="mt-8 flex items-center justify-center gap-2">
            <img
              src="/images/logo.png"
              className="max-w-[4rem] w-full rounded-full"
              alt=""
            />

            <p className=" text-2xl font-groot-one">Groot</p>
          </div>

          <div className="mt-8  flex justify-center flex-col sm:flex-row items-center space-x-6">
            <div>
              <p className="font-groot-one">
                Copyright 2024 GROOT. All Rights Reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
              <a target="_blank" href="https://twitter.com/SushiiCatt5">
                <FaTwitter fill="#4D2E7B" />
              </a>
              <a target="_blank" href="https://t.me/sushicatso">
                <FaTelegram fill="#4D2E7B" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
