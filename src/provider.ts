import 'reflect-metadata'

export const CLASS_KEY = 'ioc:tagged_class'

export function Provider(identify: string, args?: Array<any>) {
    return (target: Object) => {
        Reflect.defineMetadata(CLASS_KEY, { id: identify, args: args || [] }, target)
    }
}