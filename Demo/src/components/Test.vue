<template>
  <div>
    <div id="app">
      请输入关键字：
      <input type="text" v-model="keyword" @keyup="sendJsonP(keyword)" />
      <ul>
        <li v-for="(r,index) in result" :key="index">{{r}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      result: []
    };
  },
  methods: {
    sendJsonP(keyword) {
      let url =
        "https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web";
      this.$http
        .jsonp(url, {
          params: {
            wd: keyword
          },
          jsonp: "cb" //jsonp默认是callback,百度缩写成了cb，所以需要指定下                     }
        })
        .then(res => {
          console.log(res);
          if (res.data.g) {
            this.result = res.data.g.map(x => x["q"]);
          } else {
            this.result = [];
          }
        });
    }
  }
};
</script>

<style  scoped>
</style>