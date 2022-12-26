import {
    ref
} from 'vue'

const timeoutPromise = () => {
    return new Promise((resolve, rejection) => {
        setTimeout(() => {
            resolve(mockStrucutre)
        }, 10)
    })
}

const mockStrucutre = {
    routes: [
        {
            name: 'about-us',
            path: '/about',
            page: 'about-us'
        }
    ],
    pages: {
        home: {
            name: 'home',
            type: 'index',
            components: [
                'button'
            ]
        },
        'about-us': {
            name: 'about-us',
            type: 'common',
            components: [
                'button'
            ]
        }
    },
    components: {
        button: {
            tag: 'NuxtLink',
            events: {
            },
            props: {
                to: '/about',
                class: 'something'
            },
            text: 'olá'
        }
    }
}

export async function load() {
    console.log('LOADING STRUCTURE')
    const res = await timeoutPromise()
    console.log('LOADED STRUCTURE')
    return res
}