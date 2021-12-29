<template>
  <div class="beicai-container">
    <Header />
    <div class="beicai-container-content">
      <Sider />
      <Content />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sider from './Sider/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
</script>

<style lang="scss" scoped>
.beicai-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  &-content {
    flex: 1;
    display: flex;
  }
}
</style>
