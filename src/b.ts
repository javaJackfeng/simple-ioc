import { Provider } from "./provider"

@Provider('b', [10])
export default class B {
    p: number
    constructor(p: number) {
        this.p = p
    }
}
