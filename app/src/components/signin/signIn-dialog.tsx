import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { toast } from "sonner";
import User from "../../services/User";

export function SignInDialog() {

    type user = {
        email: string
    }

	const { register, handleSubmit } = useForm<user>();

    async function handleLogin(data: user) { 
        try {
			const signIn = await User.signIn(data)
			toast.success(`singado \n ${signIn}`)
		}
		catch (err) {
			toast.error('deu errado caralho porra.')
		}
    }
    

	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<p>Entrar</p>
			</Dialog.Trigger>
			<Dialog.Portal>
                
				<Dialog.Overlay className="inset-0 fixed bg-black/20" />
				<Dialog.Content className="fixed p-5 md:left-1/2 md:top-1/2 inset-0 md:inset-auto md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[520px] md:h-[60vh] w-full bg-vive_items rounded-xl flex flex-col outlite-none overflow-hidden">
                    
					<form
						onSubmit={handleSubmit(handleLogin)}
						className="w-full h-full flex-col"
					>
						<div className="h-3/4">
							<div className="w-full flex justify-center p-10">
								<h2 className="text-4xl">Acesse sua conta</h2>
							</div>
							<br />
                            
							<div className="p-8 gap-4 mt-5">
								<Input
									type="email"
									width="full"
									label="E-mail"
									placeholder="E-mail"
									{...register("email")}
								/>
							</div>

						</div>
						<div className="w-full h-2/3 pt-10 text-center">
							<Button type="submit" width="lg">
                                Sign In
							</Button>
						</div>
					</form>
                    
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
