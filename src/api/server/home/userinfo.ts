/**
 * @file userInfo
 * @author cuiliang
 */

import instance from '../../instance'
import { UserInfo } from '@/interface/home/userinfo'

const { get}  = instance

interface Id {
  id: number
}

export default {
  getUserInfo               :     (params: Id )       =>    get<UserInfo>('/userinfo', params) // 获取用户信息
}
