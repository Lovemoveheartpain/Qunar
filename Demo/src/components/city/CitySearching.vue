<template>
  <div class="searchDiv">
    <div class="search_input">
      <input v-model="val" type="text" placeholder="请输入城市名或拼音" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "",
      timer: ""
    };
  },
  watch: {
    val() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.$emit("show", this.val);
      }, 500);
    }
  }
};
</script>

<style lang="stylus" scoped>
.searchDiv
  width: 100%
  height: 2.375rem
  background-color: rgb(0, 188, 212)
  display: inline-flex
  align-items: center
  justify-content: center
.search_input
  width: 68%
  height: 25px
  background-color: white
  border-radius: 5px
  display: inline-flex
  align-items: center
  padding-left: 3%
</style>