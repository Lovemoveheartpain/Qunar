<template>
  <div>
    <van-swipe class="my-swipe"  indicator-color="skyBlue">
      <van-swipe-item v-for="(item, index) in final" :key="index">
        <div class="iconDiv" v-for="(item, index) in item" :key="index">
          <img :src="item.imgUrl" alt />
          <p>{{item.desc}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
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
        // console.log(iconList);
        return iconList;
      }
    }
  }
};
</script>

<style scoped>
.my-swipe 
{
  padding-top: 0.625rem;
    height: 11.25rem;
    background-color: white;
    /* border: 0.0625rem solid red; */
}
.my-swipe .van-swipe-item {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.875rem;
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