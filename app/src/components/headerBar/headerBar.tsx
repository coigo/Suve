import { toast } from "sonner";
import { SignInDialog } from "../signin/signIn-dialog";
import { SignUpDialog } from "../signup/signUp-page";
import auth from "../../helpers/auth";
import { UserDropdown } from "./userDropdown/userDropdown";
import { dropdownItems } from "./userDropdown/dropdownItems";

export default function HeaderBar() {

	return (

		
		<div className="relative top-0">
			<div className="fixed min-h-16 top-0 flex md:left-1/2 md:-translate-x-1/2 items-center w-full md:w-3/4 lg:w-3/4 bg-vive_items rounded-none md:rounded-b-2xl p-4 py-1 justify-between shadow-lg">
				<div>Pesquisar</div>
				<div>
				{ auth.isLogged() && (<UserDropdown dropdownItems={dropdownItems} />) }
				{ !auth.isLogged() && (<><SignInDialog /> / <SignUpDialog /></>) }

				</div>
			</div>
		</div>
	);
}
