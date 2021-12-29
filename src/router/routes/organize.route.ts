import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'

const organize: RouteRecordRaw[] = [
  {
    path: '/organize',
    name: 'organize',
    component: Layout,
    redirect: '/organize/info',
    children: [
      {
        path: 'info',
        name: 'organize-info',
        component: () => import('@/views/organize/info/index.vue'),
        meta: {
          title: '机构信息'
        }
      },
      {
        path: 'account',
        name: 'organize-account',
        component: () => import('@/views/organize/account/index.vue'),
        meta: {
          title: '机构账号'
        }
      }
    ]
  }
]

export default organize
