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

    const colors: string[] = ['#a536c9','#1dc45d', '#c1e620', '#29becc']
    

    return (
        

    <div className="flex mt-16  justify-center">
        
        {tags.map((tag, index) => (
            <div className={`bg-[${colors[index]}] opacity-90 text-wrap p-2 w-40 m-4 rounded-md flex items-center`} key={index}>
                {tag.label}
            </div>
        ))}

    </ div>
        
    )
     
}