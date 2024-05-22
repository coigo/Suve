import { toast } from "sonner";
import { SignInDialog } from "../signin/signIn-dialog";
import { SignUpDialog } from "../signup/signUp-page";
import auth from "../../helpers/auth";
import { UserDropdown } from "./userDropdown/userDropdown";
import { dropdownItems } from "./userDropdown/dropdownItems";

export default function HeaderBar() {

	return (

		
		<div className="relative top-0">
			<div className="fixed top-0 flex md:left-1/2 md:-translate-x-1/2 items-center w-full md:w-3/4 lg:w-3/4 bg-vive_items rounded-b-2xl p-4 py-2 justify-between shadow-lg">
				<div>Pesquisar</div>
				<div>
				{ auth.isLogged() 
				? (<UserDropdown dropdownItems={dropdownItems} />) 
				: (<><SignInDialog /> / <SignUpDialog /></>) }

				</div>
			</div>
		</div>
	);
}
