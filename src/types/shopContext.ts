import type { CartItems } from './cart'
import type { Product } from './product'

export interface ShopContextType {
  products: Product[]
  currency: string
  delivery_fee: number

  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>

  showSearch: boolean
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>

  cartItems: CartItems
  addToCart: (itemId: string, size: string) => void
  updateQuantity: (itemId: string, size: string, quantity: number) => void

  getCartCount: number

  getCartAmount: () => number

  navigate: (path: string) => void
}
