import { Toaster } from "sonner";
import HeaderBar from "../../components/headerBar/headerBar";
import { Tags } from "./tags";



export default function MainPage () {

    return (
        <div className=" p-0">
			<Tags />
            <HeaderBar />
        </div>
    )
}