import { createContext, useState, useMemo, type ReactNode } from 'react'
import { toast } from 'react-toastify'
import { products } from '../constants/products'
import type { CartItems, ShopContextType } from '../types'
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext<ShopContextType | null>(null)

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const currency = '$'
  const delivery_fee = 10
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState<CartItems>({})

  // Navigation
  const navigate = useNavigate()

  // Add item to cart
  const addToCart = (itemId: string, size: string) => {
    if (!size) return toast.error('Please select a size before adding to cart.')

    setCartItems((prev) => {
      const newCart = structuredClone(prev)
      newCart[itemId] = newCart[itemId] || {}
      newCart[itemId][size] = (newCart[itemId][size] || 0) + 1
      return newCart
    })

    toast.success('Added to cart!')
  }

  // Update item quantity in cart
  const updateQuantity = (itemId: string, size: string, quantity: number) => {
    setCartItems((prev) => {
      const newCart = structuredClone(prev)
      newCart[itemId] = newCart[itemId] || {}
      newCart[itemId][size] = quantity
      return newCart
    })
  }

  const getCartAmount = () => {
    let totalAmount = 0
    for (const items in cartItems) {
      const itemInfo = products.find((product) => product.id === items)
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += (itemInfo?.price || 0) * cartItems[items][item]
        }
      }
    }
    return totalAmount
  }

  // Memoized cart count
  const getCartCount = useMemo(() => {
    let total = 0

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        total += cartItems[itemId][size]
      }
    }
    return total
  }, [cartItems])

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
    updateQuantity,
    getCartCount,
    getCartAmount,
    navigate,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
