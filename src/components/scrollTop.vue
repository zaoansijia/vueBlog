<template lang="html">
  <span class="scrollTop" v-on:click="scrollTop"></span>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options()
export default class ScrollTop extends Vue {
    scrollTop() {
      const scrollBox = document.getElementById("view");
      const T = setInterval(function () {
        scrollBox.scrollTop -= 100;
        if (scrollBox.scrollTop == 0) {
          clearInterval(T);
        }
      }, 10);
    }
}

</script>

<style lang="scss" scoped>
span {
  &.scrollTop {
    position: fixed;
    top: 200%;
    right: 20px;
    display: block;
    width: 40px;
    height: 40px;
    background-image: url("../assets/scrollTop.png");
    background-size: 100% 100%;
    transform: translate(0, calc(-100% - 0.5rem));
    -webkit-transform: translate(0, calc(-100% - 0.5rem));
    -ms-transform: translate(0, calc(-100% - 0.5rem));
    -o-transform: translate(0, calc(-100% - 0.5rem));
    opacity: 0.2;
    cursor: pointer;
  }
}
</style>
