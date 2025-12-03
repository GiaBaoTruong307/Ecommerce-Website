export interface CartItems {
  [itemId: string]: {
    [size: string]: number
  }
}

import type { Product } from './product'
export interface CartItemData {
  id: string
  size: string
  quantity: number
  details?: Product
}
