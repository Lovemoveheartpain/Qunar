<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe618;</div>
    </div>
    <div class="header-input" @click="focus">
      <span class="iconfont">&#xe662;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <span @click="onClickRight">{{city}}</span>
      <span class="iconfont arrow-icon">&#xe6b5;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    city() {
      return this.$store.state.city.selectCity;
    }
  },
  methods: {
    focus() {
      this.$router.push("/search");
    },
    onClickRight() {
      this.$router.push("/city");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/varibles.styl';
.header {
  display: flex;
  line-height: 2.6875rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 2rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 1.25rem;
    }
  }

  .header-input {
    flex: 1;
    height: 2rem;
    line-height: 2rem;
    margin-top: 0.375rem;
    margin-left: 0.625rem;
    padding-left: 0.625rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-text {
    flex: 1;
    height: 2rem;
    line-height: 2rem;
    margin-top: 0.375rem;
    margin-left: 0.625rem;
    padding-left: 0.625rem;
    color: white;
    font-size: 1rem;
    text-align: center;
  }

  .header-right {
    min-width: 3.25rem;
    padding: 0 0.3125rem;
    float: right;
    text-align: center;
    color: #fff;

    .arrow-icon {
      margin-left: -0.125rem;
      font-size: 0.75rem;
    }
  }
}

</style>