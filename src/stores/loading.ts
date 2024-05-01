import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('loading', {
  state: () => {
    const searchBoxLoading = ref(true)
    const searchHotLoading = ref(true)
    const searchLoading = ref(true)
    const indexLoading = ref(true)
    return { searchLoading, searchBoxLoading, indexLoading, searchHotLoading }
  },
  actions: {},
  persist: true,
})
