// stores/cartStore.ts
import { defineStore } from 'pinia'

interface CartItem {
  id: string
  image: string
  title: string
  price: string
  quantity: number
  category?: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  actions: {
    initializeCart() {
      if (process.client) {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
          this.items = JSON.parse(savedCart)
        }
      }
    },

    addToCart(product: CartItem) {
      const productWithId = {
        ...product,
        id: product.id || `${product.title}-${Date.now()}`
      }
      
      const existingItemIndex = this.items.findIndex(item => item.id === productWithId.id)
      
      if (existingItemIndex !== -1) {
        this.items[existingItemIndex].quantity += 1
      } else {
        this.items.push({
          ...productWithId,
          quantity: 1
        })
      }

      this.saveCart()
    },
    
    removeFromCart(productId: string) {
      this.items = this.items.filter(item => item.id !== productId)
      this.saveCart()
    },
    
    increaseQuantity(productId: string) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity++
        this.saveCart()
      }
    },

    decreaseQuantity(productId: string) {
      const item = this.items.find(item => item.id === productId)
      if (item && item.quantity > 1) {
        item.quantity--
        this.saveCart()
      }
    },

    saveCart() {
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(this.items))
      }
    },
    
    clearCart() {
      this.items = []
      if (process.client) {
        localStorage.removeItem('cart')
      }
    }
  },

  getters: {
    cartCount: (state) => state.items.length,
    cartTotal: (state) => {
      return state.items.reduce((total, item) => {
        // Fiyatı string'den sayıya çevirirken 10 ile çarpıyoruz
        const price = Number(item.price.replace(/[^0-9]/g, '')) * 10
        return total + (price * item.quantity)
      }, 0)
    }
  }
})