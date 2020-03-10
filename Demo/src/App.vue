<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      //页面的进出通过路由上的时间戳参数来决定
      const prevStamps = from.query.stamps || 0;
      const nextStamps = to.query.stamps || 0;
      this.transitionName =
        prevStamps > nextStamps ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang='stylus' >
*
  padding 0px
  margin 0px
  list-style none
  text-decoration none
.child-view
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  box-sizing border-box
  transition-property transform, opacity
  transition-duration 0.6s
  transition-timing-function ease-out
  background-color #ffffff
  display flex
  flex-direction column
.slide-left-enter
  opacity 0
  transform translate(100%, 0)
.slide-left-enter-active
  z-index 10
.slide-left-leave-active
  z-index 0
.slide-right-leave-active
  opacity 0
  transform translate(100%, 0)
  z-index 11
</style>
