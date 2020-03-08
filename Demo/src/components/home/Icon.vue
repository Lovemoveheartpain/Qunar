<template>
  <div class="my-swiper">
    <swiper v-if="icon" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(list, index) in final" :key="index">
        <div class="iconDiv" v-for="(item, num) in list" :key="num">
          <img :src="item.imgUrl" alt />
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination">s</div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination"
        }
        // observer: true,
        // observeSlideChildren: true
      }
    };
  },
  computed: {
    icon() {
      return this.$store.state.init.iconList;
    },
    final() {
      if (this.icon) {
        // console.log(this.icon);
        let num = (this.icon.length % 8) + 1;
        let iconList = [];
        for (let i = 0; i < num; i++) {
          let arr = [];
          for (let j = 0 + i * 8; j < this.icon.length; j++) {
            arr.push(this.icon[j]);
            if (j >= 7) {
              break;
            }
          }
          iconList.push(arr);
        }
        console.log(iconList);
        return iconList;
      }
    }
  }
};
</script>

<style scoped>
.my-swiper {
  padding-top: 0.625rem;
  width: 100%;
  height: 11.25rem;
  background-color: white;
}
.swiper-slide {
  width: 100%;
  height: 11.25rem;
  display: inline-flex;
  flex-wrap: wrap;
}
.iconDiv {
  width: 25%;
  height: 4.375rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.iconDiv img {
  width: 50%;
}
.iconDiv p {
  width: 100%;
  text-align: center;
}
</style>