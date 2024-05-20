import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button, Flex } from "@radix-ui/themes"

interface UserDropdown {
    logout: () => void
}

export function UserDropdown({logout}: UserDropdown) {

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger >
                <img className='h-10 opacity-50 rounded-md' src="/user-default.png" alt="" />

            </DropdownMenu.Trigger>

            <DropdownMenu.Portal >
                <DropdownMenu.Content className='w-full p-8 rounded-md bg-vive_items'>
                    <DropdownMenu.Item className='' >Account</DropdownMenu.Item>
                    <DropdownMenu.Item>Settings</DropdownMenu.Item>
                    < hr className='my-4'/>
                    <DropdownMenu.Item onClick={logout} >Log out</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>

        </DropdownMenu.Root>




    )
}