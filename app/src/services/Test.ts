import Api from "./Api"

export default {
    test: () => {
        return Api.get({ path: "/test" } )
    }
}