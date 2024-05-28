import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button, Flex } from "@radix-ui/themes"
import type { DropdownItem } from './dropdownItems';
import { Separator } from '../../ui/Separator';

interface UserDropdown {
    dropdownItems: DropdownItem[]
}



export function UserDropdown({dropdownItems}: UserDropdown) {

    const itemClass = 'outline-none hover:bg-slate-700'



    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger >
                <img className='h-10 opacity-50 rounded-md outline-none' src="/user-default.png" alt="" />

            </DropdownMenu.Trigger>

            <DropdownMenu.Portal >
                <DropdownMenu.Content align='end' avoidCollisions sideOffset={20} className=' rounded-md bg-vive_items'>
                {
                    dropdownItems.map((item) => {
                        return (
                            <>
                                {
                                    item.separator ? <Separator /> : null
                                }
                                <DropdownMenu.Item 
                                    onClick={item.onclick}
                                    className={item.itemClassname}
                                >
                                    {item.label}
                                </DropdownMenu.Item>
                            </>
                        );
                    })
                }

                </DropdownMenu.Content>
            </DropdownMenu.Portal>

        </DropdownMenu.Root>




    )
}