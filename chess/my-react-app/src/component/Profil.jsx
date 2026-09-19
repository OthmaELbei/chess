import "./Profil.css";

import { CgProfile } from "react-icons/cg";
import chess from "../assets/chess-board.png";
import Header from "./header/Header";
import Profile from "./Profile";
import { MdOutlineCheckCircle } from "react-icons/md";
import CountrySelect from "./CountrySelect";
import { BiSolidChess } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";


export default function Profil() {
  return (
    <>
      <div className=" w-full min-h-screen bg-[#0a122a] text-white profile_parent">
        <div className="container mx-auto  p-4 ">
          <Header />
          <div className="grid crid">
            <div className=" flex  content-center justify-between     p-2">
              <div className=" text-[#C9A126] flex content-center ">
                <CgProfile className="m-1" />
                <h6 className="text-[15px]">profil</h6>
              </div>
              <div>
                <button className="s"> FM Verified</button>
              </div>
            </div>
            <Profile />

            <div className="inputs relative">
              <div className="flex items-center justify-between w-full mb-1.5 px-1">
                <label className="text-[#C9A126] text-xs font-medium tracking-wide">
                  Username
                </label>
                <div className="flex items-center gap-1 text-[#C9A126] text-xs">
                  <MdOutlineCheckCircle className="text-sm" />
                  <span className="font-medium text-[11px]">Available</span>
                </div>
              </div>
              <input type="text" placeholder="@ Enter username" />
              <CgProfile className="qq absolute  text-[#C9A126] text-lg cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
            <div className="inputs relative">
              <div className="flex items-center justify-between w-full mb-1.5 px-1">
                <label className="text-[#C9A126] text-xs font-medium tracking-wide">
                  Dsplie Name
                </label>
                {/* <div className="flex items-center gap-1 text-[#C9A126] text-xs">
                  <MdOutlineCheckCircle className="text-sm" />
                  <span className="font-medium text-[11px]">Available</span>
                </div> */}
              </div>
              <input type="text" placeholder="@ Enter username" />
            </div>
            <div className="inputs relative">
              <div className="flex items-center justify-between w-full mb-1.5 px-1">
                <label className="text-[#C9A126] text-xs font-medium tracking-wide">
                  FIDE Federation / Country
                </label>
              </div>
              <input type="text" placeholder="🇲🇦 Morocco (MAR)" />
            </div>
            <div className="inputs">
              <div className=" d flex items-center justify-conter w-full mb-1.5 px-1">
                <button>Save brofile change</button>
              </div>
            </div>

            {/* <CountrySelect/> */}

            {/* secend cread */}
            <div className="profil p-4 grid grid-cols-2 gap-2">
              <div className=" relative bg-[#101833] p-1 flex items-center justify-conter  rounded-lg border border-slate-800">
                {/* <img className="aa" src={chess} alt="" />
                 */}
                <BiSolidChess className="www p-2 " />
                <h1 className="text-sm text-slate-200">First Box</h1>
                 <FaCheck className=" qqs absolute" />
              </div>

              <div className="bg-[#101833] p-1 flex items-center justify-conter  rounded-lg border border-slate-800">
                {/* <img className="aa" src={chess} alt="" />
                 */}
                <BiSolidChess className="www p-2 " />
                <h1 className="text-sm text-slate-200">First Box</h1>
              </div>
              <div className="bg-[#101833] p-1 flex items-center justify-conter  rounded-lg border border-slate-800">
                {/* <img className="aa" src={chess} alt="" />
                 */}
                <BiSolidChess className="www p-2 " />
                <h1 className="text-sm text-slate-200">First Box</h1>
              </div>
              <div className="bg-[#101833] p-1 flex items-center justify-conter  rounded-lg border border-slate-800">
                {/* <img className="aa" src={chess} alt="" />
                 */}
                <BiSolidChess className="www p-2 " />
                <h1 className="text-sm text-slate-200">First Box</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
