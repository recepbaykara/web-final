<template>
  <div>
    <Carousel />
    <h1 style="font-size: 30px; margin-left: 50px; margin-top: 50px;">Spor Giyim</h1>
    <ProductCarousel style="margin-left: 50px;" />
    <BigFoto />
    <h1 style="font-size: 30px; margin-left: 50px; margin-top: 50px;">En Yeniler</h1>
    <ProductCard style="margin-left: 50px;" />
    <FotoDiv />
  </div>
</template>

<script>
  import Carousel from '~/components/Carousel.vue';
  import ProductCarousel from '~/components/ProductCarousel.vue';
  import FotoDiv from '~/components/FotoDiv.vue';
  import ProductCard from '~/components/ProductCard.vue';
  import BigFoto from '~/components/BigFoto.vue';
</script>

<style scoped>

</style>