import { useForm, Controller } from "react-hook-form"
import { Input } from "../../../../components/ui/Input"
import { Button } from "../../../../components/ui/Button"
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { useComments } from "../../../../hooks/videos/useComment"

interface CommentProps {
    videoId: string
    afterSubmit: () => void
}

export function CommentForm({ videoId, afterSubmit }: CommentProps) {

    const { control, register, handleSubmit, setValue } = useForm()
    const { loading, submit } = useComments()

    const onSubmit = async (data: any) => {
        
        if ( data.comment && data.comment !== '' ) {
            console.log("comentado");
            
            await submit({
                ...data,
                videoId
            })
    
            setValue("comment", "")
            afterSubmit()
        }
    }

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full">

                <Controller
                    control={control}
                    name="comment"
                    render={({ field }) => (
                        <Input
                            {...register("comment")}
                            border="bottom"
                            placeholder="Escreva um comentario..."
                            width="full"
                            appendClass="py-2 ml-2"
                            {...field}
                        />
                    )} />

                <Button
                    type="submit"
                    className="aspect-square w-fit h-fit bg-vive_main p-4 rounded-md "
                    width="md"
                >
                    <PaperPlaneIcon />
                </Button>
            </div>
        </form>
    )

}