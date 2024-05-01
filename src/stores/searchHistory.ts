import { defineStore } from 'pinia'

export default defineStore(
  'searchHistory',
  () => {
    // 定义一个数组来存储搜索历史
    const searchHistory = ref<string[]>([])

    // 添加搜索历史
    function add(keyword: string) {
      if (!searchHistory.value.includes(keyword) && keyword != '') {
        searchHistory.value.unshift(keyword)
      }
    }

    function remove(keyword: string) {
      searchHistory.value.splice(searchHistory.value.indexOf(keyword), 1)
    }

    return { searchHistory, add, remove }
  },
  {
    persist: true,
  },
)
