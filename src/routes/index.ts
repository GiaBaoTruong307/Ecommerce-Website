import Layout from '../components/layouts/Layout'
import Home from '../pages/Home/Home'
import Collection from '../pages/Collection/Collection'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Product from '../pages/ProductDetail/Product'
import Cart from '../pages/Cart/Cart'
import Login from '../pages/Members/Login'
import PlaceOrder from '../pages/Order/PlaceOrder'
import Orders from '../pages/Order/Orders'
import NotFound from '../pages/NotFound/NotFound'

export const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', element: Home, index: true, label: 'Trang chủ' },
      { path: '/collection', element: Collection, label: 'Bộ sưu tập' },
      { path: '/about', element: About, label: 'Giới thiệu' },
      { path: '/contact', element: Contact, label: 'Liên hệ' },
      { path: '/product/:id', element: Product, label: 'Chi tiết sản phẩm', hidden: true },
      { path: '/cart', element: Cart, label: 'Giỏ hàng' },
      { path: '/place-order', element: PlaceOrder, label: 'Thanh toán', private: true },
      { path: '/orders', element: Orders, label: 'Đơn hàng', private: true },
      { path: '*', element: NotFound, hidden: true },
    ],
  },
  // Trang không có layout (login, register…)
  {
    path: '/login',
    element: Login,
  },
]
