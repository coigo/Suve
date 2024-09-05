import type { InputHTMLAttributes } from "react";
import  { forwardRef } from "react";
import { appendErrors } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    width: "sm" | "md" | "lg" | "lx2" |"full";
    border: "all" | "bottom"| "none"
    appendClass?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ( props: InputProps, ref) => {
        const inputSize = {
            sm: "w-1/3",
            md: "w-1/2",
            lg: "w-3/5",
            lx2: "w-11/12",
            full: "w-full",
        };

        const styleBorder = {
            all: "border border-gray-600",
            bottom: "rounded-none border-b-4 border-gray-600",
            none: ""
        }

        return (
            <div className="flex w-full flex-col items-start">
                {props.label ? (
                    <label className="text-lg mb-2" htmlFor={props.name}>
                        {props.label}
                    </label>
                ) : null}
                <input
                    ref={ref}
                    className={`bg-vive_items p-4  rounded-lg text-xl ${inputSize[props.width]} ${styleBorder[props.border]} placeholder:text-lg ${props.appendClass}`}
                    {...props}
                />
            </div>
        );
    }
);