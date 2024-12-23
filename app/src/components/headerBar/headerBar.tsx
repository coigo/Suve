import { toast } from "sonner";
import { SignInDialog } from "../signin/signIn-dialog";
import { SignUpDialog } from "../signup/signUp-page";
import auth from "../../helpers/auth";
import { UserDropdown } from "./userDropdown/userDropdown";
import { dropdownItems } from "./userDropdown/dropdownItems";
import { Button } from "primereact/button";
import { KeyboardEvent, useState } from "react";
import { Input } from "../ui/Input";
import { redirect } from "react-router-dom";
import { redirectTo } from "../../helpers/util";

export default function HeaderBar() {

	const [value, setValue] = useState<string>("")
	const [ inputFocused, setInputFocus ] = useState<boolean>(false)

	const onSearch = (inputValue: string) => {
		setValue(inputValue) 
	}

	const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {

		console.log(value)
		
		if (e.key === 'Enter') {
			redirectTo('/search?' + new URLSearchParams({s: value}))
		}
	}
	
	return (

		
		<div className="relative top-0">
			<div className="fixed min-h-16 top-0 flex md:left-1/2 md:-translate-x-1/2 items-center w-full md:w-3/4 lg:w-3/4 bg-vive_items rounded-none md:rounded-b-2xl p-4 py-1 justify-between shadow-lg">
				<div className="w-1/2">
					<i className="pi pi-search mr-4"></i>
					<input 
						className="bg-transparent w-2/3 outline-none"
						placeholder="Pesquisar"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						onKeyDown={(e) => handleSearch(e)}
						
					/>

				</div>
			
				<div>
				{ auth.isLogged() && (<UserDropdown dropdownItems={dropdownItems} />) }
				{ !auth.isLogged() && (<><SignInDialog /> / <SignUpDialog /></>) }

				</div>
			</div>
		</div>
	);
}
