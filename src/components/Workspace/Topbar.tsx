import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { FiCommand, FiSearch } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";
const Topbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className="border-b-2 border-gray px-4 py-2  justify-between items-center text-dark hidden lg:flex">
        <button className="rounded border-2 border-gray flex items-center justify-between gap-x-2 py-1 px-2 lg:w-[400px] xl:w-[500px]">
            <FiSearch className="text-lg" />
            <input type="text" placeholder="Search..." className="w-full bg-transparent placeholder:font-bold placeholder:text-sm focus:outline-none" />
            <span className="p-1 flex gap-0.5 items-center shadow bg-stone-50 rounded text-dark text-sm">
                <FiCommand />K
            </span>
        </button>
        <div className="flex items-center gap-x-4 relative">
            <button className="text-lg cursor-pointer"><IoIosNotificationsOutline /></button>
            <button className="text-lg cursor-pointer">
                <CiLight />
            </button>
            <button 
                className="flex items-center gap-x-1 cursor-pointer border-2 border-gray px-2 py-1 rounded-md"
                onClick={()=>setOpen(!open)}
            >
                <span className="bg-[#ffD980] rounded-full size-4 flex">
                    <img src="https://api.dicebear.com/9.x/notionists/svg" />
                </span>
                <div className="text-sm">Washim Showludury</div>
                <IoChevronDownOutline  className="text-sm"/>
            </button>
            <div className={`absolute  text-sm right-0 top-8 bg-gray px-1.5 py-2 ${open ? 'block' : 'hidden'}`}>
                Lorem ipsum dolor sit amet
            </div>
        </div>
    </div>
  )
}

export default Topbar