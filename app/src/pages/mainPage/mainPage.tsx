import { Toaster } from "sonner";
import HeaderBar from "../../components/headerBar/headerBar";
import { Tags } from "./tags";
import { useEffect, useState } from "react";
import auth from "../../helpers/auth";
import { UserInterestsDialog } from "../../components/interestsDialog";



export default function MainPage () {

    
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [ user, setUser ] = useState<any>(auth.getAuth())
    useEffect(() => {

        
			if (!user.isTagged) {
                setIsOpen(true);   
				
			}
    })

    return (
        <div className=" p-0">
			<Tags />
            <HeaderBar />
            <UserInterestsDialog userId={user.id} isOpen={isOpen} />
        </div>
    )
}