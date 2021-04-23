<template lang="html">
  <div>
    <ul class="list">
      <li v-for="post in list" v-bind:key="post.datetime">
        <h3>{{ post.title }}</h3>
        <p>{{ post.datetime }}</p>
        <p class="click" v-on:click="read(post.title)">点击阅读>></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { getHttp } from "../services/http";
import { api } from "../services/api";
@Options()
export default class List extends Vue {
  list = [];
  created() {
    getHttp(api.blogList).then((res) => {
      console.log(res, "res");
      this.list = res.data;
    });
  }
  read(file) {
    this.$router.push(`/detail/${file}`);
  }
}
</script>

<style lang="css" scoped>
ul.list {
  /* width: 7.5rem; */
  margin: 0 auto;
  padding: 0.4rem 0.8rem;
  list-style: none;
}
ul.list h3 {
  color: #555;
}
ul.list > li {
  position: relative;
  /*padding: 0.4rem 0;*/
  border-bottom: 1px dashed #ccc;
}
ul.list > li > p {
  font-size: 12px;
  color: #666;
  /*margin-top: 6px;*/
}
ul.list > li > p.click {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
}
</style>
