import { useEffect, useRef, useState } from "react"
import { redirectTo } from "../../helpers/util"
import HeaderBar from "../../components/headerBar/headerBar"

export default function SearchPage() {

    const [search, setSearch] = useState<string | null>(null)
    const initialized = useRef<boolean>(false)
    useEffect(() => {

        if (!initialized.current) {

            const urlParams = new URLSearchParams(window.location.search)
            const searchParam = urlParams.get('s')
            
            if (!searchParam) {
                redirectTo("/")
            } else {
                setSearch(searchParam)
                initialized.current = true
            }
        }
    }, [])


    return (
        <HeaderBar />
    )
}