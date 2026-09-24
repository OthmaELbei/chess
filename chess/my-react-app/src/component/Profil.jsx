import "./Profil.css";

import { CgProfile } from "react-icons/cg";
import chess from "../assets/chess-board.png";
import Header from "./header/Header";
import Profile from "./Profile";
import { MdOutlineCheckCircle } from "react-icons/md";
import CountrySelect from "./CountrySelect";
import { BiSolidChess } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import React, { useState } from "react";
import { TbPasswordFingerprint } from "react-icons/tb";

import { FiAlertTriangle } from "react-icons/fi";

import { MdSecurity } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

import { FaPen } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

const initialSettings = [
  {
    id: "autoQueen",
    title: "Auto-promote to Queen",
    desc: "Saves 0.4s in scramble pre-moves",
    enabled: true,
  },
  {
    id: "moveAudio",
    title: "Move Piece Audio",
    desc: "Crisp wood strike acoustics",
    enabled: true,
  },
  {
    id: "checkAlert",
    title: "Check Warning Alert",
    desc: "Subtle resonance chord upon threat",
    enabled: true,
  },
  {
    id: "ambientSound",
    title: "Ambient Arena Sound",
    desc: "Midnight chess hall background murmur",
    enabled: false,
  },
];

export default function Profil() {
  const [activeId, setActiveId] = useState(1);


  const [settings, setSettings] = useState(initialSettings);

  const toggleSetting = (id) => {
    setSettings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item,
      ),
    );
  };

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
              <FaPen className="qq absolute  text-[#C9A126] text-xs cursor-pointer hover:opacity-80 transition-opacity" />
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
              <div className="  bg-[#c9a126] rounded mt-2 p-1 flex items-center  justify-center">
                {/* <button></button>
                 */}
                  <FaSave className="mr-3" />
                <h6>Save brofile change</h6>
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

              <div className="bg-[#101833] p-1 flex items-center  rounded-lg border border-slate-800">
                {/* <img className="aa" src={chess} alt="" />
                 */}
                <BiSolidChess className="www p-2 " />
                <h1 className="text-sm text-slate-200">First Box</h1>
              </div>
              <div className="bg-[#101833] p-1 flex items-center   rounded-lg border border-slate-800">
                {/* <img className="aa" src={chess} alt="" />
                 */}
                <BiSolidChess className="www p-2 " />
                <h1 className="text-sm text-slate-200">First Box</h1>
              </div>
              <div className="bg-[#101833] p-1 flex items-center   rounded-lg border border-slate-800">
                {/* <img className="aa" src={chess} alt="" />
                 */}
                <BiSolidChess className="www p-2 " />
                <h1 className="text-sm text-slate-200">First Box</h1>
              </div>
            </div>
            <div
              onClick={() => setActiveId(1)}
              className={`profil ${activeId === 1 ? "activ" : "notactiv"}`}
            >
              Click to select Option 1
            </div>

            <div
              onClick={() => setActiveId(2)}
              className={`profil ${activeId === 2 ? "activ" : "notactiv"}`}
            >
              Click to select Option 2
            </div>

            <div
              onClick={() => setActiveId(3)}
              className={`profil ${activeId === 3 ? "activ" : "notactiv"}`}
            >
              Click to select Option 3
            </div>

            {/* <div className="inputs">
            
            </div> */}
            <div className=" pt-6  flex flex-col font-sans">
              {settings.map((item) => (
                <label
                  key={item.id}
                  className="flex profil items-center justify-between p-2 hover:bg-[#171e30] rounded-lg cursor-pointer transition"
                >
                  <div className="flex flex-col">
                    <span className="text-slate-100 font-semibold text-sm">
                      {item.title}
                    </span>
                    <span className="text-slate-400 text-xs mt-0.5">
                      {item.desc}
                    </span>
                  </div>

                  <div className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={item.enabled}
                      onChange={() => toggleSetting(item.id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-300 peer-checked:after:bg-white"></div>
                  </div>
                </label>
              ))}
            </div>
            <div className=" profil  flex flex-col font-sans p-4 bg=[#1c2617]">
              <div className=" flex text-xs items-center">
                <MdSecurity className="text-[#725b17]" />
                <h3 className="p-2 ">Privacy & Security</h3>
              </div>
              <div className="pasword pl-4 pt-2">
                <h6 className=" "> Primary Registered Email</h6>
                <h6 className="email">youssef.gm@2chess.com</h6>
              </div>

              <div className=" sss text-[#725b17] bg-[#9a94a1] m-4 rounded mt-2 p-1 flex items-center  justify-center">
                <TbPasswordFingerprint className="mr-3" />
                <h6>Change Master Password </h6>
              </div>
            </div>
            <div className="profil p-4">
              <div className=" flex text-xs items-center text-[#8b220f]">
                <FiAlertTriangle className=""/>
                <h3 className="p-2 ">Account Actions</h3>
              </div>
               <div className=" sss text-[#725b17] bg-[#9a94a1] m-4 rounded mt-2 p-1 flex items-center  justify-center">
                <CiLogout className="mr-3" />
                <h6>CLog Out of 2Chess</h6>
              </div>
               <div className=" sss  bg-[#8b220f] m-4 rounded mt-2 p-1 flex items-center  justify-center">
                <MdDeleteForever className="mr-3" />
                <h6>Deactivate Account </h6>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
