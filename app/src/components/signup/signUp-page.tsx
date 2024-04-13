import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import User from "../../services/User";
import { toast } from "sonner";

export function SignUpDialog() {

    type newUser = {
        username: string,
        email: string
    }

	const { register, handleSubmit } = useForm<newUser>();

    async function handleCreateUser(data: newUser) { 
        try {
			const signUp = await User.signUp(data)
			toast(`singupado ${signUp}`)
		} catch (err) {
			
		}
    }
    

	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<p>Cadastre-se</p>
			</Dialog.Trigger>
			<Dialog.Portal>
                
				<Dialog.Overlay className="inset-0 fixed bg-black/20" />
				<Dialog.Content className="fixed p-5 md:left-1/2 md:top-1/2 inset-0 md:inset-auto md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[520px] md:h-[60vh] w-full bg-vive_items rounded-xl flex flex-col outlite-none overflow-hidden">
                    
					<form
						onSubmit={handleSubmit(handleCreateUser)}
						className="w-full h-full flex-col"
					>
						<div className="h-3/4">
							<div className="w-full flex justify-center p-10">
								<h2 className="text-4xl">Crie sua conta</h2>
							</div>
							<br />
                            
							<div className="p-8 gap-4">
								<Input
									type="text"
									width="full"
									placeholder="Nome de usuário"
									{...register("username")}
                                    name="username"
                                    />
								<br />
								<br />
								<Input
									type="email"
									width="full"
									placeholder="E-mail"
									{...register("email")}
								/>
							</div>

						</div>
						<div className="w-full h-1/4 pt-10 text-center">
							<Button type="submit" width="lg">
								Sign Up
							</Button>
						</div>
					</form>
                    
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
