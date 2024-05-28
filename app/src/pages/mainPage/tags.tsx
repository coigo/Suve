import { Container } from "@radix-ui/themes"

export function Tags () {

    const tags = [
        {
            label: "TypeScipt"
        },
        {
            label: "Docker"
        },
        {
            label: "Node"
        },
        {
            label: "Software Arquitecture"
        },
    ]

    const colors: string[] = ['bg-purple-500 text-white','bg-lime-500', 'bg-teal-400 text-teal-950 ', 'bg-yellow-400 text-yellow-950']
    
    return (
       
    <div className="flex mt-16  justify-center">
        
        {tags.map((tag, index) => (
            <div className={` bg-vive_main text-white font-semibold select-none opacity-95 text-wrap p-2 w-40 m-4 rounded-md flex items-center`} key={index}>
                {tag.label}
            </div>
        ))}

    </ div>
        
    )
     
}