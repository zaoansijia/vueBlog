<template lang="html">
  <div>
    <div class="about">
      <p>乱七八糟，学习中</p>
      <p>最近很喜欢的人：蔡康永</p>
      <h3>联系我</h3>
      <ul class="list">
        <li><a href="https://github.com/zaoansijia" target="_blank">Gitbub</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  div.about {
    /* width: 7.5rem; */
    margin: 0 auto;
    padding: 0.4rem 0.8rem;
  }
  div.about > h1 {
    margin-bottom: 0.4rem;
  }
  div.about > h2 {
    margin-bottom: 0.3rem;
  }
  div.about > h3 {
    margin: 0.1rem;
  }
  div.about > p.text {
    margin-bottom: 0.4rem;
    line-height: 200%;
    text-indent: 40px;
    color: #555;
    text-align: justify;
  }
  div.about > ul.list {
    padding-left: 0.4rem;
    list-style-position: inside;
    list-style-type: disc;
    line-height: 200%;
  }
</style>
