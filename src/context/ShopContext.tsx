import { createContext, useEffect, useState, type ReactNode } from 'react'
import { products } from '../assets/assets'
import { toast } from 'react-toastify'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string[]
  category: string
  subCategory: string
  sizes: string[]
  date: number
  bestseller: boolean
}

interface ShopContextType {
  products: Product[]
  currency: string
  delivery_fee: number
  search: string
  setSearch: (search: string) => void
  showSearch: boolean
  setShowSearch: (show: boolean) => void
  cartItems: CartItems
  addToCart: (itemId: string, size: string) => Promise<void>
  getCartCount: () => number
}

export const ShopContext = createContext<ShopContextType | null>(null)

interface ShopContextProviderProps {
  children: ReactNode
}

interface CartItems {
  [itemId: string]: {
    [size: string]: number
  }
}
const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const currency = '$'
  const delivery_fee = 10
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState<CartItems>({})

  const addToCart = async (itemId: string, size: string) => {
    if (!size) {
      toast.error('Please select a size before adding to cart.')
      return
    }

    const cartData = structuredClone(cartItems)

    if (!cartData[itemId]) {
      cartData[itemId] = {}
    }

    if (!cartData[itemId][size]) {
      cartData[itemId][size] = 1
    } else {
      cartData[itemId][size] += 1
    }

    setCartItems(cartData)
  }

  useEffect(() => {
    console.log('Cart Items Updated:', cartItems)
  }, [cartItems])

  const getCartCount = () => {
    let totalCount = 0
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalCount += cartItems[items][item]
        }
      }
    }
    return totalCount
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

export default ShopContextProvider
