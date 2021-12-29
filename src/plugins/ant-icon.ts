import type { App } from 'vue'
import {
  PieChartOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue'

const icons = [
  PieChartOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
]

export default (app: App) => {
  icons.forEach(icon => {
    app.component(icon.displayName, icon)
  })
}
