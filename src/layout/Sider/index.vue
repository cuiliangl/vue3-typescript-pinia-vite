<template>
  <div class="beicai-sider">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @select="selectHandle"
    >
      <a-menu-item key="home">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>工作台 </span>
      </a-menu-item>
      <a-sub-menu key="organize">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>机构管理</template>
        <div class="menu-item-child">
          <a-menu-item key="info">机构信息</a-menu-item>
          <a-menu-item key="account">机构账号</a-menu-item>
        </div>
      </a-sub-menu>
      <a-sub-menu key="test">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>test</template>
        <a-menu-item key="child">test</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const collapsed = ref(false)
const openKeys = ref<string[]>([])
const selectedKeys = ref<string[]>([])
const selectHandle = ({ keyPath }: { keyPath: string[] }) => {
  router.push(`/${keyPath.join('/')}`)
}

watch(
  route,
  ({ path }) => {
    const pathArr = path.split('/').filter(v => v && v !== '/')

    pathArr.slice(0, -1).forEach(parentPath => {
      if (!openKeys.value.includes(parentPath)) {
        openKeys.value.push(parentPath)
      }
    })
    selectedKeys.value = pathArr
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.beicai-sider {
  width: 280px;
  height: 100%;
  overflow-y: scroll;
  background-color: #031529;
  .menu-item-child {
    display: flex;
    justify-content: space-around;
  }
}
</style>
