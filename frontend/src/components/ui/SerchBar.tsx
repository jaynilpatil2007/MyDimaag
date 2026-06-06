import { SearchIcon } from "../../Icons/SearchIcon";
import Button from "./Button";

interface SearchProps {
    placeholder: string;
    size: "small" | "big"; 
}

const SearchType = {
    small : "w-[224px] h-[36px] rounded-lg shadow-md",
    big: "w-[672px] h-[54px] rounded-lg shadow-md"
}

export const SerchBar = (props: SearchProps) => {
    return (
        <div className={`${SearchType[props.size]} flex justify-center items-center gap-2 px-3`}>
            <SearchIcon size="md" colour="text-gray-400"/>
            <input 
                className="outline-none bg-transparent w-full text-sm placeholder:font-medium"
                placeholder={props.placeholder}    
            />
            {
                props.size === "big" ? <Button size="md" variants="primary" text="Search"/> : null
            }
        </div>
    )
}