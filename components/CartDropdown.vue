<template>
  <div v-if="isOpen" class="cart-dropdown">
    <div class="cart-content">
      <div v-if="cartStore.items.length === 0" class="empty-cart">
        <img src="/static/images/sepet-icon.png" alt="Sepet" class="cart-icon" />
        <button class="continue-shopping" @click="redirectToShopping">
          Alışverişe devam et
        </button>
      </div>
      
      <div v-else class="cart-items">
        <div class="cart-header">
          <h3 class="text-lg font-semibold">Sepetim</h3>
          <button @click="confirmClearCart" class="clear-cart-btn">
            Sepeti Temizle
          </button>
        </div>
        
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.title" class="w-16 h-16 object-cover" />
          <div class="item-details">
            <p class="text-sm">{{ item.title }}</p>
            <div class="quantity-controls">
              <button 
                @click="cartStore.decreaseQuantity(item.id)"
                class="quantity-btn"
                :disabled="item.quantity <= 1"
              >
                -
              </button>
              <span class="quantity">{{ item.quantity }}</span>
              <button 
                @click="cartStore.increaseQuantity(item.id)"
                class="quantity-btn"
              >
                +
              </button>
            </div>
            <p class="text-sm font-bold">{{ item.price }}</p>
          </div>
          <button @click="removeItem(item.id)" class="remove-button">
            <span>&times;</span>
          </button>
        </div>
        <div class="cart-total">
          <p class="font-bold">Toplam: {{ cartStore.cartTotal.toLocaleString('tr-TR') }} ₺</p>
          <button class="checkout-button" @click="goToCart">Sepete Git</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import { onMounted } from 'vue'

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const cartStore = useCartStore()
    
    onMounted(() => {
      cartStore.initializeCart()
    })
    
    return { cartStore }
  },
  methods: {
    redirectToShopping() {
      window.location.href = '/'
    },
    goToCart() {
      window.location.href = '/cart'
    },
    removeItem(id) {
      this.cartStore.removeFromCart(id)
    },
    confirmClearCart() {
      if (confirm('Sepetinizdeki tüm ürünleri silmek istediğinizden emin misiniz?')) {
        this.cartStore.clearCart()
      }
    }
  }
}
</script>

<style scoped>
/* Önceki stiller aynen kalacak, sadece yeni stiller ekliyoruz */

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.quantity-btn {
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity-btn:hover:not(:disabled) {
  border-color: #c60c30;
  color: #c60c30;
}

.quantity {
  min-width: 24px;
  text-align: center;
  font-weight: 500;
}

.cart-dropdown {
  position: absolute;
  right: 25px;
  top: 100%; /* Header'ın altına yerleşecek */
  width: 300px;
  max-height: 400px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow-y: auto;
  z-index: 1000;
}

.cart-content {
  padding: 1rem;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}

.cart-items {
  max-height: 300px;
  overflow-y: auto;
}

.cart-item {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  position: relative;
}

.item-details {
  flex: 1;
}

.remove-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: #999;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
}

.remove-button:hover {
  color: #c60c30;
}

.cart-total {
  padding: 1rem 0;
  margin-top: 1rem;
  border-top: 2px solid #eee;
}

.cart-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.continue-shopping {
  background-color: #c60c30;
  color: white;
  border: none;
  border-radius: 0px;
  padding: 15px 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
  width: 30%;
  text-align: center;
}

.checkout-button {
  width: 100%;
  background-color: #c60c30;
  color: white;
  padding: 0.75rem;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.continue-shopping:hover,
.checkout-button:hover {
  background-color: #a00a28;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
}

.clear-cart-btn {
  color: #c60c30;
  font-size: 0.875rem;
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: opacity 0.2s;
}

.clear-cart-btn:hover {
  opacity: 0.8;
}
</style>