import type { RouteRecordRaw, RouteMeta } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    hidden?: boolean
    breadcrumb?: boolean
    noTabsView?: boolean
    closable?: boolean
    transition?: string
    icon?: string
  }
}
