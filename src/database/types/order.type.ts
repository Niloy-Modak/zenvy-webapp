//@/database/types/order.type.ts

import { CategoryName } from "./product.type"


export interface OrderProduct {
  id:          string
  title:       string
  slug:        string
  category:    CategoryName
  image:       string   // image of the selected color at time of order
  variantId:   string
  color:       string
  size:        string
}

export interface OrderItem {
  product:     OrderProduct
  quantity:    number
  priceAtTime: number   // locked price at the moment of purchase
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled"

export interface Order {
  id:          string
  status:      OrderStatus
  items:       OrderItem[]
  totalAmount: number
  createdAt:   string
}