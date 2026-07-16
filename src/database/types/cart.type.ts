//@/database/types/cart.type.ts
import { CategoryName } from "./product.type"



export interface CartProduct {
  id:        string
  title:     string
  slug:      string
  category:  CategoryName
  image:     string   // image of the selected color
  variantId: string
  color:     string   // "olive"
  size:      string   // "M" or "32"
}

export interface CartItem {
  product:            CartProduct
  quantity:           number    // min 1
  basePrice:          number    // 49.99
  discountPercentage: number    // 20
  finalPrice:         number    // computed: 39.99
  lineTotal:          number    // finalPrice × quantity → 79.98
}

export interface Cart {
  items:     CartItem[]
  itemCount: number   // total units across all items
  subtotal:  number   // sum of all lineTotals
}