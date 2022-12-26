<template>
    <div>
      <h1>INDEX: {{route.fullPath}}</h1>

      <div v-for="(component, index) in structure.components" :key="`component_${index}`">
        <load-component v-bind="component" />
      </div>

      <pre>{{structure}}</pre>
    </div>
</template>
  
<script setup>
import loadComponent from '@/components/LoadComponent'
import useStructure from '@/composables/structure'
import {useRoute} from 'vue-router'

const {structure} = useStructure()

const route = useRoute()
const slug = route.params.page
console.log('RENDERING Index.vue')
</script>
  