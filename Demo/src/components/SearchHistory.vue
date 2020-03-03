<template>
  <div class="searchContainer">
    <div class="searchHistory" v-show="this.history.length>0">
      <h4>
        搜索历史
        <span @click="remove" class="iconfont fontcolor">&#xe73d; 清空</span>
      </h4>
      <div class="searchHistoryContainer">
        <div v-for="(item, index) in history" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="searchHot">
      <h4>
        热门搜索
        <span @click="change" class="iconfont fontcolor">&#xe6cd; 换一批</span>
      </h4>
      <div class="searchHotContainer">
        <div v-for="(item, index) in finish" :key="index">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      list: [],
      index: 0,
      sum: 5
    };
  },
  computed: {
    history() {
      return this.$store.state.history.searchHistory;
    },
    newList() {
      let arr = [];
      if (this.list.length > 0) {
        for (
          let i = this.index * this.sum;
          i < (this.index + 1) * this.sum;
          i++
        ) {
          arr.push(this.list[i]);
        }
      }
      return arr;
    },
    finish() {
      let arr = [];
      this.newList.forEach(element => {
        if (element) {
          arr.push(element);
        }
      });
      return arr;
    }
  },
  methods: {
    remove() {
      this.$store.commit("removeHistory", []);
    },
    change() {
      this.index++;
      if (this.list.length % this.sum == 0) {
        if (this.index > this.list.length / this.sum - 1) {
          this.index = 0;
        }
      } else {
        if (this.index > parseInt(this.list.length / this.sum)) {
          this.index = 0;
        }
      }
    }
  },
  mounted() {
    Axios.get("/a/recommend.json")
      .then(res => {
        this.list = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.searchContainer {
  width: 100%;
}
.searchHistory {
  width: 100%;
  background-color: white;
}
.searchHot {
  width: 100%;
  background-color: white;
}
.fontcolor {
<<<<<<< HEAD
  font-size: 0.75rem;
=======
  font-size: 12px;
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
  color: rgb(47, 189, 208);
  float: right;
}
h4 {
<<<<<<< HEAD
  padding: 0.9375rem;
=======
  padding: 15px;
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
  background: rgb(240, 245, 246);
}
.searchHistoryContainer {
  width: 90%;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 3%;
}
.searchHistoryContainer > div {
<<<<<<< HEAD
  border: 0.0625rem solid gray;
  padding: 0.4375rem;
  margin: 0.3125rem;
  border-radius: 0.3125rem;
=======
  border: 1px solid gray;
  padding: 7px;
  margin: 5px;
  border-radius: 5px;
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
}
.searchHotContainer {
  width: 90%;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 3%;
}
.searchHotContainer > div {
<<<<<<< HEAD
  border: 0.0625rem solid gray;
  padding: 0.4375rem;
  margin: 0.3125rem;
  border-radius: 0.3125rem;
=======
  border: 1px solid gray;
  padding: 7px;
  margin: 5px;
  border-radius: 5px;
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
  color: aqua;
}
</style>