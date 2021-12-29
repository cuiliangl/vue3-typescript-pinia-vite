<template>
  <div class="beicai-content">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.beicai-content {
  width: calc(100vw - 280px);
  height: 100px;
  padding: 10px;
  background-color: var(--bgc-color);
}
</style>
