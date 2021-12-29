import type { App } from 'vue'
import userinfo from './server/home/userinfo'

const http = {
  ...userinfo
}

export type API = typeof http

export const api = (app: App): void => {
  app.config.globalProperties.$http = http
}

export default http
