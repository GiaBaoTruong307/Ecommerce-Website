import { createContext, useState, type ReactNode } from 'react'
import { products } from '../assets/assets'

export interface Product {
  _id: string
  name: string
  description: string
  price: number
  image: any[]
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
}

export const ShopContext = createContext<ShopContextType | null>(null)

interface ShopContextProviderProps {
  children: ReactNode
}

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const currency = '$'
  const delivery_fee = 10
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export default ShopContextProvider
