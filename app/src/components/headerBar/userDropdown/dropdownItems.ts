import auth from "../../../helpers/auth"

export type DropdownItem = {
    separator: boolean,
    label: string,
    itemClassname: string, 
    onclick: () => any
} 

const itemClassname = 'p-12 py-2 outline-none hover:bg-slate-700'

export const dropdownItems: DropdownItem[] = [
    {
        separator: false,
        label: "Account",
        itemClassname,
        onclick: () => console.log('Accont')
        
    },
    {
        separator: false,
        label: "Settings",
        itemClassname,
        onclick: () => console.log('Settings')
    },
    {   
        separator: true,
        label: "Log out",
        itemClassname,
        onclick: auth.logout
    },
]  