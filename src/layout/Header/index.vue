<template>
  <div class="beicai-header">
    <div class="beicai-header-left">
      <i class="logo">logo</i>
      <div class="company-info">
        <p class="name">公司</p>
        <p class="desc">专业</p>
      </div>
      <div>面包屑</div>
    </div>
    <div class="beicai-header-right">
      <a-button @click="toggleTheme"> 皮肤 </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const toggleTheme = () => {
  const theme = document.documentElement.classList
  let newTheme = 'light'

  if (theme.value === newTheme) {
    newTheme = 'dark'
  }

  localStorage.setItem('bc-theme', newTheme)
  document.documentElement.classList.value = newTheme
}
</script>

<style lang="scss" scoped>
.beicai-header {
  width: 100vw;
  height: 65px;
  background-color: green;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-left {
    display: flex;
    align-items: center;
  }
}
</style>
