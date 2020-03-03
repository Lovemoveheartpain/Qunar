<template>
  <van-nav-bar right-text="搜索" left-arrow @click-left="changeLeft" @click-right="searchThing">
    <van-search
      v-model="value"
      placeholder="输入城市或景点"
      input-align="center"
      autofocus
      shape="round"
      slot="title"
      @input="change"
    />
  </van-nav-bar>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    changeLeft() {
      this.$router.push("/");
    },
    change() {
      this.$emit("handle", this.value);
    },
    searchThing() {
      this.$store.commit("setHistory", this.value);
    }
  }
};
</script>

<style scoped>
.van-nav-bar {
  display: flex;
  align-items: center;
}
.van-search {
<<<<<<< HEAD
  padding: 0rem;
=======
  padding: 0px;
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
}
.van-icon {
  color: gray;
}
.van-nav-bar__title {
  margin-left: 12%;
  max-width: 75%;
  width: 70%;
}
.van-nav-bar__right span {
  color: gray;
}
.van-search__content--round {
  background-color: #f5f5f5;
}
</style>