"use client"

import type React from "react"
import { createContext, useContext, useReducer, type ReactNode } from "react"

export interface CartItem {
  id: number
  name: {
    en: string
    ar: string
  }
  category?: string
  price: number
  originalPrice?: number
  image: string
  color?: string
  size?: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> & { quantity?: number } }
  | { type: "REMOVE_ITEM"; payload: { id: number; color: string; size: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; color: string; size: string; quantity: number } }
  | { type: "CLEAR_CART" }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size,
      )

      let newItems: CartItem[]
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) } : item,
        )
      } else {
        newItems = [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }]
      }

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter(
        (item) =>
          !(item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size),
      )
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount }
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map((item) =>
          item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0)

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount }
    }

    case "CLEAR_CART":
      return { items: [], total: 0, itemCount: 0 }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [
      {
    id: 1,
    name: {
      en: "Trendy Brown Coat",
      ar: "معطف بني عصري",
    },
    price: 73.0,
    originalPrice: 85.0,
    image: "https://i.pinimg.com/1200x/4f/f6/50/4ff6505961d4956bbe6d4aae9156684b.jpg",
    color: "brown",
    size: "XL",
    quantity: 1,
  },
  {
    id: 2,
    name: {
      en: "Chic Light Coat",
      ar: "معطف فاتح أنيق",
    },
    price: 132.0,
    originalPrice: 150.0,
    image: "https://i.pinimg.com/736x/a6/a0/27/a6a027e42fd1204fce827c35e0b38bd3.jpg",
    color: "brown",
    size: "XXL",
    quantity: 1,
  },
    ],
    total: 240,
    itemCount: 2,
  })

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
