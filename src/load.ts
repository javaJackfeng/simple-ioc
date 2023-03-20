import fs from 'fs'
import path from 'path'
import Container from "./container"
import { CLASS_KEY  } from './provider'

export function load(container: Container) {
    const list: string[] = fs.readdirSync(path.resolve(__dirname, './'))
    for (let file of list) {
        if (/\.ts$/.test(file)) {
            const exports = require(`./${file}`)
            for ( const m in exports ) {
                const module = exports[m]
                if (typeof module === 'function') {
                    const metaData = Reflect.getMetadata(CLASS_KEY, module)
                    if (metaData) {
                        container.bind(metaData.id, module, metaData.args)
                    }
                }
            }
        }
    }
}
