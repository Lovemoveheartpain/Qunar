<template>
  <div class="searchingDiv">
    <ul>
      <li class="searchingLi" v-for="(item,index) in shop" :key="index">
        <span class="iconfont" style="color:rgb(0, 188, 212);">&#xe617;</span>
        <div v-html="item"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    val: Array,
    keyword: String
  },
  computed: {
    shop() {
      let temp = [];
      this.val.forEach(element => {
        if (element.includes(this.keyword)) {
          let test = element.replace(
            new RegExp(this.keyword, "g"),
            `<span class='highlights-text'>` + this.keyword + "</span>"
          );
          temp.push(test);
        }
      });
      return temp;
    }
  }
};
</script>

<style>
.searchingDiv {
  width: 100%;
  background-color: white;
}
.searchingLi {
  width: 94%;
  line-height: 1.875rem;
  padding-left: 3%;
  padding-right: 3%;
  border-bottom: 0.0625rem solid gray;
  background-color: #f0f0f0;
  display: inline-flex;
}
.highlights-text {
  color: red;
}
</style>