<template>
  <div class="swiperDiv">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img :src="item.imgUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
          loop: true
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiperList() {
      return this.$store.state.init.swiperList;
    }
  }
};
</script>

<style scoped>
.swiperDiv {
  width: 100%;
  height: 9.375rem;
}
img {
  width: 100%;
  height: 9.375rem;
}
</style>