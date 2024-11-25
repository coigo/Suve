import * as Dialog from "@radix-ui/react-dialog";
import { Chips, ChipsChangeEvent } from "primereact/chips";
import { useState } from "react";
import { Button } from "../ui/Button";
import { ButtonIcon } from "@radix-ui/react-icons";
import User from "../../services/User";


interface UserInterestsProps {
    userId: number
    isOpen: boolean
}

export const UserInterestsDialog = ({ isOpen, userId }: UserInterestsProps) => {

    const [value, setValue] = useState<string[]>([]);
    const [ open, setOpen ] = useState(isOpen)
    const onSubmit = async () => {
        try {
            console.log(value)
            value.length && await User.addInterests({interests: value})
            setOpen(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Dialog.Root open={open}>

                <Dialog.Portal>
                    <Dialog.Overlay className="inset-0 fixed bg-black/20" />
                    <Dialog.Content className="fixed md:left-1/2 md:top-1/2 inset-0 md:inset-auto md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[520px] md:h-[20vh] w-full bg-vive_items rounded-xl flex flex-col outlite-none overflow-hidden">
                        <div className="p-4">
                            <div className="mb-4 flex flex-col justify-center text-center">
                                <h2 className="text-2xl mb-2">Nos ajuda a te conhecer melhor </h2>
                                <p>Selecione alguns assuntos de seu interesse</p>

                            </div>
                            <div>
                                <Chips value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value ?? [])} />

                            </div>
                        </div>
                        <div className="justify-self-end mt">
                            <button className="fixed bottom-0 w-full py-4 bg-vive_main" onClick={onSubmit}> Enviar </button>

                        </div>


                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}
