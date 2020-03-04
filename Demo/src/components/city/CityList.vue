<template>
  <div class="city_scrollBig">
    <div class="nei">
      <div v-for="(item,index) in finail" class="searchResult" :key="index">{{item.name}}</div>
      <!-- <div v-for="(item,index) in a()" class="searchResult" :key="index">{{item.name}}</div> -->
      <div class="noText" v-show="this.finail.length===0">没有找到匹配数据</div>
      <div class="noText" v-show="isBottom">{{scrollText}}</div>
    </div>
  </div>
</template>

<script>
import Better from "better-scroll";
export default {
  props: {
    val: String
  },
  data() {
    return {
      scrollText: "加载中...",
      isBottom: false,
      num: 10,
      page: 5
    };
  },
  computed: {
    list() {
      return this.$store.state.city.cityList.cities;
    },
    finail() {
      const result = [];
      for (let i in this.list) {
        // console.log(this.list[i]);
        this.list[i].forEach(value => {
          if (
            value.name.indexOf(this.val) > -1 ||
            value.spell.indexOf(this.val) > -1
          ) {
            result.push(value);
          }
        });
      }
      return result;
    }
  },
  methods: {
    a() {
      let arr = [];
      let resLength = this.finail.length; //数据总长度
      console.log(resLength);
        let remainder = (resLength - this.num) % this.page; //余数
        if (resLength >= this.num + this.page) {
          for (let index = this.num; index < this.num + this.page; index++) {
            let element = this.finail[index];
            arr.push(element);
          }
          this.num += this.page;
        } else if (remainder !== 0 && resLength - this.num == remainder) {
          window.console.log("有余数");
          for (let index = this.num; index < this.num + remainder; index++) {
            let element = this.finail[index];
            arr.push(element);
          }
          this.num += this.page;
        } else {
          console.log(12);
          this.scrollText = "已经到底了";
          return;
        }
        console.log(arr);
      return arr;
    }
  },
  mounted() {
    this.$nextTick(() => {
      let myscroll = new Better(".city_scrollBig", {
        scrollX: false,
        scrollY: true,
        click: true,
        mouseWheel: true,
        probeType: 3
      });
      myscroll.on("scroll", pos => {
        if (myscroll.maxScrollY >= pos.y + 50) {
          this.isBottom = true;
        }
      });
      myscroll.on("touchEnd", pos => {
        if (myscroll.maxScrollY > pos.y + 50) {
          this.isBottom = false;
          this.a();
          myscroll.refresh();
        }
      });
    });
  }
};
</script>

<style scoped>
.city_scrollBig {
  width: 100%;
  height: 34.5625rem;
  overflow: hidden;
}
.nei {
  width: 100%;
}
.noText {
  width: 100%;
  height: 1.875rem;
  text-align: center;
  line-height: 1.875rem;
}
.searchResult {
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  height: 2.5rem;
  line-height: 2.5rem;
  border-bottom: 0.0625rem solid lightgray;
}
</style>