<template>
  <div class="swiperDiv" >
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="skyBlue">
      <van-swipe-item v-for="(item, index) in swiper" :key="index">
        <img :src="item.imgUrl" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  computed: {
    swiper() {
      return this.$store.state.init.swiperList;
    }
  },
};
</script>

<style scoped>
.swiperDiv
{
  width: 100%;
<<<<<<< HEAD
  height: 9.375rem;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 9.375rem;
=======
  height: 150px;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 150px;
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
}
</style>