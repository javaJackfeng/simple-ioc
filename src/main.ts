import A from "./a"
import B from "./b"
import Container from "./container"
import { load } from './load'


export const container = new Container()
load(container)
// container.bind('b', B, [9])
// container.bind('a', A)

const a = container.get('a')


// const b = new B(9)
// const a = new A(b);

console.log(a)