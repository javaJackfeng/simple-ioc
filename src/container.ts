import "reflect-metadata"
import { PROPS_KEY } from "./inject"

export default class Container {
    beanMap = new Map()

    bind = (identify: string, clazz: any, constructorArgs?: Array<any>) => {
        this.beanMap.set(identify, { clazz, constructorArgs: constructorArgs || [] })
    }

    get = (identify: string): any => {
        const target = this.beanMap.get(identify)
        const { clazz, constructorArgs = [] } = target
        const props = Reflect.getMetadata(PROPS_KEY, clazz)
        const inst = Reflect.construct(clazz, constructorArgs) as any
        for (let prop in props) {
            const identify = props[prop].value
            inst[prop] = this.get(identify)
        }
        return inst
    }
}

