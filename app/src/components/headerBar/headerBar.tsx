import { SignInDialog } from "../signin/signIn-dialog";
import { SignUpDialog } from "../signup/signUp-page";

export default function HeaderBar() {
	return (
		<div className="relative inset-x-0 top-0">
            <div className="p-3 md:justify-center fixed md:left-28 md:-translate-x-1/2 md:flex hidden">
			    <div className="  bg-vive_main  py-2 px-20 rounded-lg">VIVE</div>
            </div>
			<div className="fixed flex md:left-1/2 md:-translate-x-1/2 items-center w-full md:w-3/4 lg:w-3/4 bg-vive_items rounded-b-2xl p-5 justify-between shadow-lg">
				<div>Pesquisar</div>
				<div>
					<SignInDialog /> / <SignUpDialog />
				</div>
			</div>
		</div>
	);
}
