<template lang="html">
  <div>
    <div class="post scroll">
      <h3 class="post-title">[顶] {{header.title}}</h3>
      <p class="datetime">{{header.datetime}}</p>
      <div class="content" v-html="content"></div>
      <scrollTop></scrollTop>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
// import VueResource from "vue-resource";
// Vue.use(VueResource);
import scrollTop from "../components/scrollTop.vue";
export default {
  data() {
    return {
      header: "",
      content: ""
    };
  },
  created() {
    this.$http.get("http://localhost:80/api/blog/posts").then(function(res) {
        this.header = res.body[0];
        console.log(res,'res');
        this.$http.get( "http://localhost:80/api/blog/post/detail?file="+this.header.title +".md")
          .then(function(res) {
            this.content = res.body.content;
          });
      });
  },
  computed: {},
  mounted() {},
  methods: {},
  components: {
    scrollTop
  }
};
</script>

<style lang="css">
</style>
