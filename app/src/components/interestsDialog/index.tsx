import * as Dialog from "@radix-ui/react-dialog";
import { Chips, ChipsChangeEvent } from "primereact/chips";
import { useState } from "react";


interface UserInterestsProps {
    userId: number
    isOpen: boolean
}

export const UserInterestsDialog = ({ isOpen, userId }: UserInterestsProps) => {

    const [value, setValue] = useState<string[]>([]);

    const onSubmit = () => {
        try {

        }
        catch (err) {

        }
    } 

    return (
        <>
	<Dialog.Root open={isOpen}>

		<Dialog.Portal>
            <Dialog.Overlay className="inset-0 fixed bg-black/20" />
            <Dialog.Content className="fixed p-5 md:left-1/2 md:top-1/2 inset-0 md:inset-auto md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[520px] md:h-[60vh] w-full bg-vive_items rounded-xl flex flex-col outlite-none overflow-hidden">
                <h2>Nos ajuda a te conhecer melhor s222</h2>
                <p>Selecione alguns assuntos de seu interesse</p>

                <Chips value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value ?? [])} />

			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
        </>
    )
}
