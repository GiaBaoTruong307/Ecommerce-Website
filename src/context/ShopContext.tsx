import { createContext, useState, useEffect, type ReactNode } from 'react'
import { toast } from 'react-toastify'
import { products } from '../constants/products'
import type { Product, CartItems } from '../types'

interface ShopContextType {
  products: Product[]
  currency: string
  delivery_fee: number
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  showSearch: boolean
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>
  cartItems: CartItems
  addToCart: (itemId: string, size: string) => void
  getCartCount: () => number
}

export const ShopContext = createContext<ShopContextType | null>(null)

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const currency = '$'
  const delivery_fee = 10

  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState<CartItems>({})

  const addToCart = (itemId: string, size: string) => {
    if (!size) {
      toast.error('Vui lòng chọn kích cỡ!')
      return
    }

    setCartItems((prev) => {
      const newCart = structuredClone(prev)
      newCart[itemId] ??= {}
      newCart[itemId][size] = (newCart[itemId][size] || 0) + 1
      return newCart
    })

    toast.success('Đã thêm vào giỏ hàng!')
  }

  useEffect(() => {
    console.log('Giỏ hàng hiện tại:', cartItems)
  }, [cartItems])

  const getCartCount = (): number => {
    let count = 0
    Object.values(cartItems).forEach((sizes) => {
      Object.values(sizes).forEach((qty) => {
        count += qty
      })
    })
    return count
  }

  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
