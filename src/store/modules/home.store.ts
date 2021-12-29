import { defineStore } from 'pinia'

interface UserInfo {
  name: string
  age: number
}

export default defineStore('home', {
  state: () => {
    return {
      userInfo: {
        name: 'Jack',
        age: 12
      }
    }
  },
  getters: {
    info({ userInfo: { name, age } }) {
      return `name is ${name}, age is ${age}`
    }
  },
  actions: {
    updateInfo(payload: UserInfo) {
      this.userInfo = payload
    }
  }
})
