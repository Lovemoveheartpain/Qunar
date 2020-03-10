<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <li class="li">
        <span class="span"></span>
        {{item.title}}
      </li>
      <DetailsList style="padding-left: 15px;" v-if="item.children" :list="item.children" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsList",
  props: {
    list: Array
  }
};
</script>

<style scoped>
.li {
  width: 95%;
  line-height: 1.875rem;
  border-bottom: 1px solid lightgray;
  display: inline-flex;
  align-items: center;
  padding-left: 5%;
}
.span {
  display: inline-block;
  width: 1.125rem;
  height: 1.125rem;
  background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -2.8125rem
    no-repeat;
  background-size: 1.25rem 9.375rem;
}
</style>