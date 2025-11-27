import { useContext } from 'react'
import { ShopContext } from './ShopContext'

export const useShopContext = () => {
  const context = useContext(ShopContext)

  if (context === null) {
    throw new Error('useShopContext must be used within a ShopContextProvider')
  }

  return context
}
