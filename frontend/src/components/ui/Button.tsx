import type { ReactElement } from "react";

export interface ButtonProps {
    variants: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
}

const variantStyle = {
  "primary": "bg-blue-500 text-white",
  "secondary": "bg-purple-300 text-purple-500"
}

const defaultStyles = "rounded-md p-4 flex items-center gap-2 shadow-sm";

const sizeStyles = {
  "sm": "py-1 px-2 text-sm",
  "md": "py-2 px-3 text-sm",
  "lg": "py-4 px-6 text-lg"
}

function Button(props: ButtonProps) {
  return (
    <>
      <button className={`${variantStyle[props.variants]} ${defaultStyles} ${sizeStyles[props.size]}`}>
        {props.startIcon}
        <span>{props.text}</span>
        {props.endIcon}
      </button>
    </>
  )
}

export default Button
