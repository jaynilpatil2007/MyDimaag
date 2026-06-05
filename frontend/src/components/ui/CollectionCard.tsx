import { ClockIcon } from "../../Icons/ClockIcon"
import { FolderIcon } from "../../Icons/FolderIcon"
import { ThreeDotsVerticle } from "../../Icons/ThreeDotsVerticle"
import { random } from "../utils/random";

export interface CollectionCardProps {
    name: string,
    totalNotes: string,
    time: string 
}



function CollectionCard(props: CollectionCardProps) {
    const randomColor = random();    
  return (
    <div className="w-[260px] h-[170px] rounded-xl shadow-md overflow-auto">
      <div className={`w-full h-2 ${randomColor.primary}`}/>
      <div className=" flex flex-col gap-3 p-[16px]">
        <div className="flex justify-between">
            <div className={`w-[40px] h-[40px] ${randomColor.light} flex justify-center items-center rounded-lg`}>
                <FolderIcon color={randomColor.text}/>
            </div>
            <div>
                <ThreeDotsVerticle />
            </div>
        </div>

        <div>
            <div className="text-[#09090B] text-[16px] font-semibold">
                {props.name}
            </div>
            <div className="text-[#71717B] text-[14px]">
                {props.totalNotes}
            </div>
        </div>

        <div className="flex flex-row items-center gap-2">
            <div>
                <ClockIcon />
            </div>
            <div className="text-[#71717B] text-[12px]">
                {props.time}
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default CollectionCard
