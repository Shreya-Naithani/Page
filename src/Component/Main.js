import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const Main = () => {
  return (
    <div className="w-[78rem] h-screen mx-auto  bg-white rounded shadow-md ">
      <div className="bg-gradient-to-t from-yellow-100 via-yellow-100 to-white">
        <div className="flex ">
          <div className="mr-[8rem]">
            <img
              className=" ml-6 h-[40rem] w-[48rem] mt-[8rem]"
              src="/1.png"
              alt="award_img"
            />
          </div>
          <div className="flex flex-col">
            <div className="mb-5">
              <img className="h-[9rem]" src="/logo.jpg" alt="logo" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold mb-2">
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </h1>
              <div className="flex">
                &ensp;&ensp;&ensp;
                <FaCircle className="text-black mt-[9px] mr-2" size={8} />{" "}
                <p className="leading-none m-0 p-0">
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </p>
              </div>
              <div className="flex mb-4">
                &ensp;&ensp;&ensp;
                <FaCircle className="text-black mt-[9px] mr-2" size={10} />{" "}
                <p className="leading-none m-0 p-0 ">
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.{" "}
                </p>
              </div>
              <div>
                <img className="h-[27rem]" src="/2.png" alt="group_img" />
              </div>
              <div>
                <p className="leading-none m-0 p-0">
                  Government of India has awarded the{" "}
                  <span className="font-bold">
                    "National Energy Conservation Award 2018"
                  </span>
                  . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
                  received the award from Smt. Sumitra Mahajan, Speaker of Lok
                  Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 ml-8">
          <p className=" mb-5 font-medium text-sm">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-[20rem] mb-3" src="/3.png" alt="_img" />
          <p className="font-medium">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </p>
        </div>
        <hr className="border-t-2 mx-3 border-red-600 my-4" />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </p>
          <p className="mt-2 mx-10 mb-5 font-medium">
            CHEMICALS & PROCESS{" "}
            <span className="text-red-600 mb-4 font-bold">|</span> POWER{" "}
            <span className="text-red-600 font-bold">|</span> WATER & WASTE
            WATER <span className="text-red-600 font-bold">|</span> OILS & GAS{" "}
            <span className="text-red-600 font-bold">|</span> PHARMA{" "}
            <span className="text-red-600 font-bold">|</span> SUGARS &
            DISTILLERIES <span className="text-red-600 font-bold">|</span> PAPER
            & PULP <span className="text-red-600 font-bold">|</span> MARINE &
            DEFENCE <span className="text-red-600 font-bold">|</span> METAL &
            MINING <span className="text-red-600 font-bold">|</span> FOOD &
            BEVERAGE <span className="text-red-600 font-bold">|</span>{" "}
            PETROCHEMICAL & REFINERIES{" "}
            <span className="text-red-600 font-bold">|</span> SOLAR{" "}
            <span className="text-red-600 font-bold">|</span> BUILDING{" "}
            <span className="text-red-600 font-bold">|</span> HVAC{" "}
            <span className="text-red-600 font-bold">|</span> FIRE FIGHTING{" "}
            <span className="text-red-600 font-bold">|</span> AGRICULTURE &
            RESIDENTIAL
          </p>
          <div className="flex text-white items-center justify-between bg-red-600 m-1 mr-2 ml-2 h-[7rem] w-full">
            <div className="flex ml-[9rem]">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white mr-2">
                <MdPhone className="text-red-500 text-2xl" />
              </div>
              <p>Toll free 1800 200 1234</p>
            </div>
            <div className="flex ">
              <div className="w-6 h-6  mr-2 flex items-center justify-center rounded-full bg-white">
                <FaFacebookF className="text-red-500 text-2xl" />
              </div>
              <p>www.facebook.com/cripumps</p>
            </div>
            <div className="flex ">
              <FaGlobe className="mr-2 text-2xl" />

              <p className="mr-[13rem]">www.crigroups.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
