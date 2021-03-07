<template>
  <div class="d-main">
    <nav>
      <ul>
        <li v-for="route of routes">
          <router-link :to="route.path ? route.path : '/'">{{ route.title }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from './routes'
export default {
  data() {
    return {
      routes,
    }
  },
};
</script>

<style scoped>
.d_main {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}
</style>
