<template>
    <component v-bind:is="component" v-bind="props">
        <template v-if="text">{{ text }}</template>
    </component>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const definedProps = defineProps({
    tag: String,
    text: String|undefined,
    props: {
        to: String|undefined,
        class: String|undefined
    }
})

const component = computed(() => {
    const tag = definedProps.tag
    
    if (tag) return resolveComponent('NuxtLink');
    return tag
})
</script>