import { defineStore } from 'pinia'


export const usevariantStore = defineStore('variants', {
    state: () => ({
        variantValue:''
    })
})