<template>
  <div>
    <div class="van-nav-bar just">
      <div class="iconfont fan" @click="onClickLeft">&#xe618;</div>
      <div class="middle">城市选择</div>
      <div class="fan"></div>
    </div>
    <div class="realm van-nav-bar">
      <div
        v-for="(item,index) in realm"
        :key="index"
        @click="onChange(index)"
        :class="{addColor:item.flag}"
      >{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      realm: [
        {
          text: "境内",
          flag: true
        },
        {
          text: "境外·港澳台",
          flag: false
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    onChange(index) {
      this.realm.forEach(element => {
        element.flag = false;
      });
      this.realm[index].flag = true;
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-nav-bar
  background-color rgb(0, 188, 212)
  height 2.375rem
  color white
  display flex
  align-items center
.just
  justify-content space-around
.fan
  width 20%
  font-size 1.25rem
.middle
  width 50%
  text-align center
  font-size 1.125rem
.realm
  justify-content center
.realm > div
  width 35%
  height 1.25rem
  border 0.0625rem solid white
  line-height 1.25rem
  font-size 0.875rem
  text-align center
.addColor
  color rgb(0, 188, 212)
  background-color white
</style>