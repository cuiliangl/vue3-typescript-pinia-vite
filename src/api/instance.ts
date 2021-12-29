import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import { message, notification } from 'ant-design-vue'
import NProgress from 'nprogress'

class CreateAxios {
  instance: AxiosInstance
  constructor(options: AxiosRequestConfig) {
    this.instance = axios.create(options)
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        NProgress.start()

        return config
      },
      (error: AxiosError) => {
        NProgress.done()
        return Promise.reject(error)
      }
    )
  }

  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        NProgress.done()

        const { status, data: body } = response

        if (status === 200) {
          const { code, value, message: msg, error } = body

          if (code === 0) {
            return value
          } else {
            message.error(msg || error || '请求出错')
          }
          return Promise.reject(value)
        }
      },
      (error: AxiosError) => {
        const {
          data: { error: message = '服务出错', message: description }
        } = error.response || {}

        notification.error({
          message,
          description
        })

        NProgress.done()
        return Promise.reject(error)
      }
    )
  }

  get = <T>(
    url: string,
    params?: object,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return this.instance.get(url, {
      params,
      ...config
    })
  }

  post = <T>(
    url: string,
    data: object = {},
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const formData = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    return this.instance.post(url, formData, config)
  }
}

export default new CreateAxios({
  baseURL: '/sms/api/',
  timeout: 6 * 1000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: false
})
