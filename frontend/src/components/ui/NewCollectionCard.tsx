import { PlusIcon } from "../../Icons/PlusIcon"

function NewCollectionCard() {
  return (
    <div className="w-[260px] h-[170px] rounded-xl border-dashed border-2 border-[#D4D4D8] flex justify-center items-center">
        <div className="flex flex-col items-center">
            <div className="bg-[#F4F4F5] w-[40px] h-[40px] flex justify-center items-center rounded-full">
                <PlusIcon size="md" colour="text-[#71717B] stroke-2"/>
            </div>
            <div className="text-[#71717B] text-[14px] font-semibold">
                Create New Collection
            </div>
        </div>
    </div>
  )
}

export default NewCollectionCard
