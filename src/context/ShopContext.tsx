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
  const delivery_fee = 30000

  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState<CartItems>({})

  const addToCart = (itemId: string, size: string) => {
    if (!size) {
      toast.error('Please select a size before adding to cart.')
      return
    }

    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [size]: (prev[itemId]?.[size] || 0) + 1,
      },
    }))

    toast.success('Added to cart!')
  }

  useEffect(() => {
    console.log('Cart:', cartItems)
  }, [cartItems])

  const getCartCount = () => {
    return Object.values(cartItems).reduce(
      (total, sizes) => total + Object.values(sizes).reduce((sum, qty) => sum + qty, 0),
      0
    )
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
