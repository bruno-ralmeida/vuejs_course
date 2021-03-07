<template>
  <div class="d-main">
    <base-menu :routes="routes"/>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from "./components/shared/menu/Menu.vue";
import { routes } from "./routes";
export default {
  components: {
    "base-menu": Menu
  },

  data() {
    return {
      routes
    };
  }
};
</script>

<style scoped>
.d_main {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
</style>
