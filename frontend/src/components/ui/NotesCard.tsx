import { BulbIcon } from "../../Icons/BulbIcon";
import { ThreeDots } from "../../Icons/ThreeDots";

export interface NotesCardProps {
    type: "keyPoints" | "code" | "note" | "quote" | "design",
    title: string,
    content: string,
    tags: string[],
    time: string,
}

function NotesCard(props: NotesCardProps) {
  return (
    <div className="bg-white p-[16px] rounded-lg w-[250px] h-[280px] border-[#E4E4E7] border-2 shadow-md">
        <div className="flex flex-col gap-3">
            <div className="flex justify-between">
                <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#2B7FFF]/20 rounded-lg">
                    <BulbIcon />
                </div>
                <div>
                    <ThreeDots />
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-[#09090B] text-[14px] font-semibold">
                    {props.title}
                </div>
                <div className="text-[#71717B] text-[12px]">
                    {props.content}
                </div>
            </div>
      
            <div className="flex justify-between">
                <div className="w-[68px] h-[20px] bg-[#2B7FFF]/20 text-[12px] rounded-xl text-[#2B7FFF] font-semibold flex justify-center">
                    {props.tags}
                </div>
                <div className="text-[12px] text-[#71717B]">
                    {props.time}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotesCard
