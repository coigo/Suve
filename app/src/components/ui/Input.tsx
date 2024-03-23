import type { InputHTMLAttributes } from "react";
import  { forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    width: "sm" | "md" | "lg" | "full";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, name, type, placeholder, width }, ref) => {
        const inputSize = {
            sm: "w-1/3",
            md: "w-1/2",
            lg: "w-3/5",
            full: "w-full",
        };

        return (
            <div className="flex flex-col items-start">
                {label ? (
                    <label className="text-lg mb-2" htmlFor={name}>
                        {label}
                    </label>
                ) : null}
                <input
                    ref={ref}
                    className={`bg-vive_items p-4 border border-gray-600 rounded-lg text-xl ${inputSize[width]} placeholder:text-lg`}
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                />
            </div>
        );
    }
);