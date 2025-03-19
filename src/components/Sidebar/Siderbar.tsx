import { FaRegUserCircle } from "react-icons/fa";
import { IoCar } from "react-icons/io5";
import { IoChevronDownOutline, IoHomeOutline } from "react-icons/io5"
import { GoAlert } from "react-icons/go";
import { CiClock2, CiSettings } from "react-icons/ci";
import { LiaKeySolid } from "react-icons/lia";
import { BsFileEarmarkPdf, BsPeople } from "react-icons/bs";
import { LuBox, LuFuel } from "react-icons/lu";
import { FiSidebar } from "react-icons/fi";
import { MdOutlinePlace } from "react-icons/md";

const Siderbar = () => {
  return (
    <div className="bg-gray">
      <div className="flex flex-col justify-between h-full py-2 pr-2 pl-0.5">
        <h1 className="text-4xl font-black px-6">
          <span className="text-purple">my</span>
          Logo
        </h1>
        
        <nav className="flex  flex-col gap-y-2">
          <a href="#" className="flex justify-between items-center px-6">
            <span className="flex items-center gap-x-2 text-sm">
              <IoHomeOutline className="text-sm" />
              <span>Dashboard</span>
            </span>
          </a>
          <a href="#" className="flex justify-between items-center px-6 bg-light text-dark font-groteskMD py-1 border-s-2 rounded-r-md">
            <span className="flex items-center gap-x-2 text-sm">
              <IoCar className="text-sm" />
              <span>Vehicules</span>
            </span>
            <IoChevronDownOutline  className="text-sm"/>
          </a>
          <a href="#" className="flex justify-between items-center px-6 py-1 border-s-2 border-gray hover:bg-light  hover:border-dark hover:rounded-r-md hover:text-dark hover:font-groteskMD">
            <span className="flex items-center gap-x-2 text-sm">
              <IoCar  className="text-sm" />
              <span>Equipement</span>
            </span>
          </a>
          <a href="#" className="flex justify-between items-center px-6">
            <span className="flex items-center gap-x-2 text-sm">
              <FaRegUserCircle className="text-sm" />
              <span>Inspections</span>
            </span>
            <IoChevronDownOutline  className="text-sm"/>
          </a>
          <a href="#" className="flex justify-between items-center px-6">
            <span className="flex items-center gap-x-2 text-sm">
              <GoAlert />
              <span>Issues</span>
            </span>
            <IoChevronDownOutline  className="text-sm"/>
          </a>
          <a href="#" className="flex justify-between items-center px-6">
            <span className="flex items-center gap-x-2 text-sm">
              <CiClock2 />
              <span>Reminders</span>
            </span>
          </a>
          <a href="#" className="flex justify-between items-center px-6">
            <span className="flex items-center gap-x-2 text-sm">
              <LiaKeySolid className="text-sm" />
              <span>Services</span>
            </span>
          </a>
          <a href="#" className="flex justify-between items-center px-6">
            <span className="flex items-center gap-x-2 text-sm">
              <BsPeople className="text-sm" />
              <span>Contacts</span>
            </span>
            <IoChevronDownOutline  className="text-sm"/>
          </a>
          <a href="#" className="flex justify-between items-center px-6">
            <span className="flex items-center gap-x-2 text-sm">
              <LuBox className="text-sm" />
              <span>Vendors</span>
            </span>
          </a>
          <a href="#" className="flex justify-between items-center px-6">
            <span className="flex items-center gap-x-2 text-sm">
              <FiSidebar className="text-sm" />
              <span>Parts</span>
            </span>
          </a>
          <a href="#" className="flex justify-between items-center px-6">
            <span className="flex items-center gap-x-2 text-sm">
              <LuFuel className="text-sm" />
              <span>Fuel History</span>
            </span>
          </a>
          <a href="#" className="flex justify-between items-center px-6">
            <span className="flex items-center gap-x-2 text-sm">
              <MdOutlinePlace className="text-sm" />
              <span>Places</span>
            </span>
          </a>
          <a href="#" className="flex justify-between items-center px-6">
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
          </a>
        </nav>
        
        <div className="">
          <a href="#" className="flex justify-between items-center px-6">
            <span className="flex items-center gap-x-2 text-sm">
              <CiSettings className="text-sm" />
              <span>Settings</span>
            </span>
            <IoChevronDownOutline  className="text-sm"/>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Siderbar