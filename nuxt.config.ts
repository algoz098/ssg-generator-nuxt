// https://nuxt.com/docs/api/configuration/nuxt-config
import { load } from './js/structure'

export default defineNuxtConfig({
    runtimeConfig: {
        structure: null
    },
    hooks: {
        async 'nitro:config'(nitroConfig) {
            console.log('NUXT CONFIG LOADING STRUCTURE')
            const response = await load()

            nitroConfig.runtimeConfig!.public.structure = response

            if (nitroConfig.dev) {
                return
            }

            // const routes = Array.from(response.routes).map((e: any) => `/a${e.path}`)
            // const routes = ['/about']

            nitroConfig?.prerender?.routes?.push('/about')
            // console.log(nitroConfig.runtimeConfig)
            console.log(nitroConfig?.prerender?.routes)
            console.log('NUXT CONFIG LOADING STRUCTURE - ENDED')
            return 
        }
    }
})
