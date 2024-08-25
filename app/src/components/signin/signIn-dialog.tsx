import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { toast } from "sonner";
import User from "../../services/User";
import { useState } from "react";
import { errorHandler } from "../../helpers/handlers";

export function SignInDialog() {
	type user = {
		email: string;
	};
	type passKey = {
		passKey: string;
	};

	const { register: registerEmail, handleSubmit: handleSubmitEmail } =
		useForm<user>();
	const { register: registerPassKey, handleSubmit: handleSubmitPassKey } =
		useForm<passKey>();

	const [page, setPage] = useState(0);
	const [email, setEmail] = useState<string>("");
	const [open, setOpen] = useState(false);

	function handleClose(isOpen: boolean) {
		setPage(0);
		setOpen(isOpen);
	}

	async function handleRequest({ email }: user) {
		try {
			setEmail(email);
			const request = await User.signInRequest({ email });

			setPage(1);
		} catch (err) {
			toast.error("Algo deu errado.");
		}
	}
	
	async function handleLogin ({passKey}: passKey)  {
		try {
			const {auth} = await User.signIn({ passKey, email })

			setOpen(false);
			toast.success("Login realizado com sucesso.");
		}
		catch(err) {
			errorHandler(err)
		}
		
	}
	
	return (
		<Dialog.Root open={open} onOpenChange={handleClose}>
			<Dialog.Trigger>
				<p>Entrar</p>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="inset-0 fixed bg-black/20" />
				<Dialog.Content className="fixed p-5 md:left-1/2 md:top-1/2 inset-0 md:inset-auto md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[520px] md:h-[60vh] w-full bg-vive_items rounded-xl flex flex-col outlite-none overflow-hidden">
					{page === 0 && (
						<form
							onSubmit={handleSubmitEmail(handleRequest)}
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
										border="all"
										label="E-mail"
										placeholder="E-mail"
										{...registerEmail("email")}
									/>
								</div>
							</div>
							<div className="w-full h-2/3 pt-10 text-center">
								<Button type="submit" width="lg">
									Enviar Código
								</Button>
							</div>
						</form>
					)}
					{page === 1 && (
						<form
							onSubmit={handleSubmitPassKey(handleLogin)}
							className="w-full h-full flex-col"
						>
							<div className="h-3/4">
								<div className="w-full flex justify-center p-10">
									<h2 className="text-4xl">Acesse sua conta</h2>
								</div>
								<br />

								<div className="p-8 gap-4 mt-5">
									<Input
										type="number"
										width="full"
										border="all"
										label="Código"
										placeholder="Insira o código"
										{...registerPassKey("passKey")}
									/>
								</div>
							</div>
							<div className="w-full h-2/3 pt-10 text-center">
								<Button type="submit" width="lg">
									Sign In
								</Button>
							</div>
						</form>
					)}
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
