<template>
  <div>
    <div class="scrollDiv">
      <div class="nei">
        <div class="cityContainer">
          <h4>热门城市</h4>
          <div class="hotCityDiv rep">
            <div
              v-for="(item, index) in hotCityList"
              :key="index"
              @click="changeCity(item.name)"
            >{{item.name}}</div>
          </div>
          <h4>字母排序</h4>
          <div class="letterDiv rep">
            <div v-for="(item, index) in cityList" @click="location(item)" :key="index">{{item.key}}</div>
          </div>
          <div class="particular">
            <div v-for="(item, index) in cityList" :key="index">
              <h4 class="h4" ref="h4" :id="'A'+index">{{item.key}}</h4>
              <div class="rep">
                <div
                  class="gridDiv"
                  v-for="(item, index) in item.city"
                  :key="index"
                  @click="changeCity(item.name)"
                >{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="letterSideBar" :class="{show:isShow}">
      <div
        v-for="(item, index) in cityList"
        @click="location(item)"
        ref="letter"
        :key="index"
      >{{item.key}}</div>
    </div>
    <button class="btn" @click="top" :class="{show2:isShow}">回到顶部</button>
  </div>
</template>

<script>
import $ from "jquery";
import Better from "better-scroll";
export default {
  data() {
    return {
      isShow: false,
      scrollEle: "",
      timer: ""
    };
  },
  computed: {
    hotCityList() {
      return this.$store.state.city.cityList.hotCities;
    },
    cityList() {
      let cityList = [];
      let data = this.$store.state.city.cityList.cities;
      for (const key in data) {
        let obj = {
          key: key,
          city: data[key]
        };
        cityList.push(obj);
      }
      return cityList;
    }
  },
  methods: {
    changeCity(name) {
      this.$store.commit("changeCity", name);
      this.$router.push("/");
    },
    top() {
      this.scrollEle.scrollTo(0, 0, 500);
    },
    location(item) {
      let i = this;
      $(".h4").each(function() {
        if (item.key === $(this).text()) {
          i.scrollEle.scrollToElement($(this)[0], 500, 0, 2);
        }
      });
    },
    scroll(scroll) {
      let i = this;
      if (scroll > $(".particular")[0].offsetTop) {
        i.isShow = true;
      } else {
        i.isShow = false;
      }
      let num = 0;
      let arr = i.$refs.h4;
      let array = [];
      arr.forEach((element, index) => {
        if (scroll - element.offsetTop > 0) {
          array.push(index);
        }
      });
      i.$refs.letter.forEach(element => {
        element.style.color = "";
      });
      let bin = i.$refs.letter[array[array.length - 1]];
      if (bin) {
        bin.style.color = "aqua";
      }
    }
  },
  mounted() {
    this.scrollEle = new Better(".scrollDiv", {
      scrollY: true,
      scrollX: false,
      mouseWheel: true,
      click: true,
      probeType: 3
    });
    this.scrollEle.on("scroll", pos => {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.scroll(Math.abs(pos.y));
      }, 50);
    });
  }
};
</script>

<style scoped>
h4 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.625rem;
}
.rep {
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  text-align: center;
}
.rep > div {
  line-height: 1.875rem;
  background-color: white;
}

.hotCityDiv > div {
  width: 32.5%;
  border: 0.0625rem solid lightgray;
}
.letterDiv > div {
  width: 16%;
  border: 0.0625rem solid lightgray;
}
.particular .gridDiv {
  width: 24%;
  border: 0.0625rem solid lightgray;
}
.letterSideBar {
  width: 1.25rem;
  height: 31.25rem;
  background-color: rgba(200, 200, 200, 0.4);
  position: fixed;
  right: 0rem;
  top: 113px;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  opacity: 0;
}
.letterSideBar > div {
  width: 100%;
  height: 1.125rem;
  /* background-color: red; */
  text-align: center;
  line-height: 1.125rem;
}
.show {
  opacity: 1;
  transition: all 1.5s;
}
.btn {
  position: fixed;
  right: 0rem;
  bottom: 1.875rem;
  width: 1.875rem;
  height: 1.25rem;
  opacity: 0;
}
.show2 {
  opacity: 1;
  transition: all 1.5s;
}
.scrollDiv {
  width: 100%;
  height: 34.5625rem;
  overflow: hidden;
}
.nei {
  width: 100%;
}
</style>