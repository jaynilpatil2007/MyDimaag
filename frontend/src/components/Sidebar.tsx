import { BulbIcon } from "../Icons/BulbIcon"
import { CollectionIcon } from "../Icons/CollectionIcon"
import { FileIcon } from "../Icons/FileIcon"
import { SearchIcon } from "../Icons/SearchIcon"
import { SettingIcon } from "../Icons/SettingIcon"
import { SquareIcon } from "../Icons/SquaresIcon"
import { TagIcon } from "../Icons/TagIcon"
import { NavLink } from "react-router"


function Sidebar() {

  return (
    <div className="w-[256px] h-screen bg-gray-100 border-gray-200 border-2">
      <div className="flex flex-col gap-6 p-6">
        <div className="flex gap-2">
            <div className="w-[40px] h-[40px] bg-blue-500/40 rounded-xl flex justify-center items-center">
                <BulbIcon />
            </div>
            <div>
                <div className="text-[14px] font-bold">
                    MyDimaag
                </div>
                <div className="text-gray-400 text-[12px] font-medium">
                    Second Brain
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <NavLink 
                to={"/"}
                className={({ isActive }) => 
                            `p-2 flex gap-3 cursor-pointer rounded-lg transition-all duration-200
                ${
                    isActive ?
                         "bg-blue-500 text-white" :    
                         "text-gray-400 hover:bg-gray-200"
                }`}
            >
                <div>
                    <SquareIcon size="md" colour="stroke-2"/>
                </div>
                <div className=" text-[14px] font-medium">
                    Dashboard
                </div>
            </NavLink>    
            <NavLink 
                to={"/notes"}
                className={({ isActive }) => 
                            `p-2 flex gap-3 cursor-pointer rounded-lg transition-all duration-200
                ${
                    isActive ?
                         "bg-blue-500 text-white" :    
                         "text-gray-400 hover:bg-gray-200"
                }`}
            >
                <div>
                    <FileIcon size="md" colour="stroke-2"/>
                </div>
                <div className=" text-[14px] font-medium">
                    Notes
                </div>
            </NavLink>    
            <NavLink 
                to={"/collections"}
                className={({ isActive }) => 
                            `p-2 flex gap-3 cursor-pointer rounded-lg transition-all duration-200
                ${
                    isActive ?
                         "bg-blue-500 text-white" :    
                         "text-gray-400 hover:bg-gray-200"
                }`}
            >
                <div>
                    <CollectionIcon size="md" colour="stroke-2"/>
                </div>
                <div className=" text-[14px] font-medium">
                    Collection
                </div>
            </NavLink>    
            <NavLink 
                to={"/search"}
                className={({ isActive }) => 
                            `p-2 flex gap-3 cursor-pointer rounded-lg transition-all duration-200
                ${
                    isActive ?
                         "bg-blue-500 text-white" :    
                         "text-gray-400 hover:bg-gray-200"
                }`}
            >
                <div>
                    <SearchIcon size="md" colour="stroke-2"/>
                </div>
                <div className=" text-[14px] font-medium">
                    Search
                </div>
            </NavLink>    
            <NavLink 
                to={"/tags"}
                className={({ isActive }) => 
                            `p-2 flex gap-3 cursor-pointer rounded-lg transition-all duration-200
                ${
                    isActive ?
                         "bg-blue-500 text-white" :    
                         "text-gray-400 hover:bg-gray-200"
                }`}
            >
                <div>
                    <TagIcon size="md" colour="stroke-2"/>
                </div>
                <div className=" text-[14px] font-medium">
                    Tag
                </div>
            </NavLink>    
            <NavLink 
                to={"/settings"}
                className={({ isActive }) => 
                            `p-2 flex gap-3 cursor-pointer rounded-lg transition-all duration-200
                ${
                    isActive ?
                         "bg-blue-500 text-white" :    
                         "text-gray-400 hover:bg-gray-200"
                }`}
            >
                <div>
                    <SettingIcon size="md" colour="stroke-2"/>
                </div>
                <div className=" text-[14px] font-medium">
                    Settings
                </div>
            </NavLink>    
        </div>
      </div>
    </div>
  )
}

export default Sidebar
