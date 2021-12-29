<template>
  <div>
    <h1 class="text-dark-400 dark:text-gray-300">Home32423423</h1>
    <a-button @click="addAge"> add Age </a-button>
    <a-button @click="updateInfo">update info</a-button>
  </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from '@/store/modules'

const homeStore = useHomeStore()

const addAge = () => {
  homeStore.userInfo.age++
}
const updateInfo = () => {
  homeStore.$patch({
    userInfo: {
      name: 'Mike',
      age: 34
    }
  })
}
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
