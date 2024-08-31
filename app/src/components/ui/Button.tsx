import type { ButtonHTMLAttributes, ReactNode } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	width: "sm" | "md" | "lg" | "full";
	onClick?: () => unknown;
	
}

export function Button({ onClick, children, type, width, ...props }: buttonProps) {
	const buttonSize = {
		sm: "w-1/3",
		md: "w-1/2",
		lg: "w-3/5",
		full: "w-full",
	};

	return (
		<button
			className={`bg-vive_main p-3 rounded-lg  ${buttonSize[width]} placeholder:text-lg`}
			type={type}
			onClick={onClick}
			{...props}
		>
			<>
				{children}
			</>
		</button>
	);
} 