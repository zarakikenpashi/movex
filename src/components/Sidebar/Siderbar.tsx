import { FaRegUserCircle } from "react-icons/fa";
import { IoCar, IoChevronUpOutline, IoSettingsOutline } from "react-icons/io5";
import { IoChevronDownOutline, IoHomeOutline } from "react-icons/io5"
import { GoAlert } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { LiaKeySolid } from "react-icons/lia";
import { BsFileEarmarkPdf, BsPeople } from "react-icons/bs";
import { LuBox, LuFuel } from "react-icons/lu";
import { FiSidebar } from "react-icons/fi";
import { MdOutlinePlace } from "react-icons/md";
import logo from '../../assets/logo.svg'
import { useState } from "react";

const Siderbar = () => {
  const [collapse, setCollapse] = useState(true)

  return (
    <div className="bg-gray overflow-y-scroll custom-scroll">
      <div className="flex flex-col  h-full py-4 pr-2 pl-0.5 justify-between">
        
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center gap-y-1">
            <img src={logo} alt="" className="w-42" />
            <div className="mb-4 mt-2">
              <button className="flex p-0.5 rounded transition-colors relative gap-2 w-full items-center">
                <img
                  src="https://api.dicebear.com/9.x/notionists/svg"
                  alt="avatar"
                  className="size-8 rounded-full shrink-0 bg-[#ffD980] shadow"
                />
                <div className="text-start">
                  <span className="text-sm font-bold block">Luffy D Monkey</span>
                  <span className="text-xs block">luffy@onepiece.dev</span>
                </div>
              </button>
            </div>
          </div>
          
          <nav className="flex  flex-col gap-y-2">
            <a href="#" className="flex justify-between items-center px-6 py-1">
              <span className="flex items-center gap-x-2 text-sm">
                <IoHomeOutline className="text-sm" />
                <span>Dashboard</span>
              </span>
            </a>
            
            <button className="flex flex-col">
              <button className="px-6  cursor-pointer flex w-full justify-between items-center bg-light text-dark font-groteskMD py-1 border-s-2 rounded-r-md" onClick={()=>setCollapse(!collapse)}>
                <span className="flex items-center gap-x-2 text-sm">
                  <IoCar className="text-sm" />
                  <span>Vehicules</span>
                </span>
                <IoChevronUpOutline  className={`text-sm ${ collapse ? '-rotate-180' : '' } `}/>
              </button>
              <div className={`px-7 flex flex-col ${collapse?'h-0':'h-auto'}`}>
                {
                  !collapse 
                  && 
                  <>
                    <a href="#" className="text-sm text-purple font-bold py-2 flex items-center gap-x-3 w-full">
                      <span className="w-2 h-2 bg-purple rounded-full"></span>
                      <span>Liste des vehicules</span>
                    </a>
                    <a href="#" className="text-sm font-thin py-2 flex items-center gap-x-3 w-full">
                      <span className="w-2 h-2 bg-[#d9d8db] rounded-full"></span>
                      <span>Vehicule Assignement</span>
                    </a>
                    <a href="#" className="text-sm font-thin py-2 flex items-center gap-x-3 w-full">
                      <span className="w-2 h-2 bg-[#d9d8db] rounded-full"></span>
                      <span>Meter History</span>
                    </a>
                    <a href="#" className="text-sm font-thin py-2 flex items-center gap-x-3 w-full">
                      <span className="w-2 h-2 bg-[#d9d8db] rounded-full"></span>
                      <span>Expenses history</span>
                    </a>
                    <a href="#" className="text-sm font-thin py-2 flex items-center gap-x-3 w-full">
                      <span className="w-2 h-2 bg-[#d9d8db] rounded-full"></span>
                      <span>Remplacement analysis</span>
                    </a>
                  </>
                }

              </div>
            </button>
            <a href="#" className="flex justify-between items-center px-6 py-1 border-s-2 border-gray hover:bg-light  hover:border-dark hover:rounded-r-md">
              <span className="flex items-center gap-x-2 text-sm">
                <IoCar  className="text-sm" />
                <span>Equipement</span>
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-6 py-1">
              <span className="flex items-center gap-x-2 text-sm">
                <FaRegUserCircle className="text-sm" />
                <span>Inspections</span>
              </span>
              <IoChevronDownOutline  className="text-sm"/>
            </a>
            <a href="#" className="flex justify-between items-center px-6 py-1">
              <span className="flex items-center gap-x-2 text-sm">
                <GoAlert />
                <span>Issues</span>
              </span>
              <IoChevronDownOutline  className="text-sm"/>
            </a>
            <a href="#" className="flex justify-between items-center px-6 py-1">
              <span className="flex items-center gap-x-2 text-sm">
                <CiClock2 />
                <span>Reminders</span>
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-6 py-1">
              <span className="flex items-center gap-x-2 text-sm">
                <LiaKeySolid className="text-sm" />
                <span>Services</span>
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-6 py-1">
              <span className="flex items-center gap-x-2 text-sm">
                <BsPeople className="text-sm" />
                <span>Contacts</span>
              </span>
              <IoChevronDownOutline  className="text-sm"/>
            </a>
            <a href="#" className="flex justify-between items-center px-6 py-1">
              <span className="flex items-center gap-x-2 text-sm">
                <LuBox className="text-sm" />
                <span>Vendors</span>
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-6 py-1">
              <span className="flex items-center gap-x-2 text-sm">
                <FiSidebar className="text-sm" />
                <span>Parts</span>
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-6 py-1">
              <span className="flex items-center gap-x-2 text-sm">
                <LuFuel className="text-sm" />
                <span>Fuel History</span>
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-6 py-1">
              <span className="flex items-center gap-x-2 text-sm">
                <MdOutlinePlace className="text-sm" />
                <span>Places</span>
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-6 py-1">
              <span className="flex items-center gap-x-2 text-sm">
                <BsFileEarmarkPdf className="text-sm" />
                <span>Documents</span>
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-6">
              <span className="flex items-center gap-x-2 text-sm">
                <BsFileEarmarkPdf className="text-sm" />
                <span>Reports</span>
              </span>
              <IoChevronDownOutline  className="text-sm"/>
            </a>
          </nav>
        </div>
        
        <div className="pt-4">
          <a href="#" className="flex justify-between items-center px-6 py-1">
            <span className="flex items-center gap-x-2 text-sm">
              <IoSettingsOutline className="text-sm"/>
              <span>Settings</span>
            </span>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Siderbar