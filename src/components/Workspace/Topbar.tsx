import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLight, CiDark } from "react-icons/ci";
import { FiCommand, FiSearch } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
const Topbar = () => {
  return (
    <div className="border-b-2 border-gray px-4 py-2  justify-between items-center text-dark hidden lg:flex">
        <button className="rounded shadow border-gray flex items-center justify-between gap-x-2 py-1 px-2 xl:w-[500px]">
            <FiSearch className="text-lg" />
            <input type="text" placeholder="Search..." className="w-full bg-transparent placeholder:text-dark focus:outline-none" />
            <span className="p-1 flex gap-0.5 items-center shadow bg-stone-50 rounded text-dark text-sm">
                <FiCommand />K
            </span>
        </button>
        <div className="flex items-center gap-x-4">
            <button className="text-lg cursor-pointer"><IoIosNotificationsOutline /></button>
            <button className="text-lg cursor-pointer">
                <CiLight />
            </button>
            <button className="flex items-center gap-x-1 cursor-pointer border-2 border-gray px-2 py-1 rounded-md">
                <span className="bg-[#ffD980] rounded-full size-4 flex"><img src="https://api.dicebear.com/9.x/notionists/svg" /></span>
                <div className="text-sm">Washim Showludury</div>
                <IoChevronDownOutline  className="text-sm"/>
            </button>
        </div>
    </div>
  )
}

export default Topbar