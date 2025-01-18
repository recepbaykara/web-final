<template>
  <div v-if="isOpen" class="cart-dropdown">
    <div class="cart-content">
      <!-- Sepet İkonu -->
      <img src="/static/images/sepet-icon.png" alt="Sepet" class="cart-icon" />

      <!-- Alışverişe Devam Et Butonu -->
      <button class="continue-shopping" @click="redirectToShopping">
        Alışverişe devam et
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    redirectToShopping() {
      // Burada alışveriş sayfasına yönlendirme işlemi yapılabilir
      window.location.href = '/shop'; // Örnek yönlendirme
    },
  },
};
</script>

<style scoped>
.cart-dropdown {
  right: 25px;
  width: 200px;
  height: 150px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.cart-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  border-radius: none;
  padding: 15px 10px;
  font-size: 14px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
.continue-shopping:hover {
  background-color: #a00a28;
}
</style>
