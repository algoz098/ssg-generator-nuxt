import {useFetch} from "#app";
import {
    ref
} from 'vue'

const structure = ref()

export default function useStructure() {
    const {structure: runtimeStructure } = useRuntimeConfig()
    if (!structure.value) structure.value = runtimeStructure

    return {
      structure
    }
  }
  