<template>
  <div class="d-main">
    <h1 class="text_center">{{ title }}</h1>
    <input
      type="search"
      class="filter"
      v-on:input="filter = $event.target.value"
      placeholder="Buscar título"
    />

    <h2>{{ filter }}</h2>
    <ul class="pic_list">
      <li class="pic_list__item" v-for="pic of filterPics" :key="pic.id">
        <panel-base :title="pic.titulo">
          <img class="image_responsive" :src="pic.url" :alt="pic.titulo" />
        </panel-base>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from "./components/shared/panel/Panel.vue";
export default {
  components: {
    "panel-base": Panel
  },

  data() {
    return {
      title: "AluraPic",
      pics: [],
      filter: ""
    };
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => (this.pics = res.data))
      .catch(err => console.error(err));
  },

  computed: {
    filterPics() {
      if (!this.filter) return this.pics;

      let exp = new RegExp(this.filter.trim(), "i");
      return this.pics.filter(pic => exp.test(pic.titulo));
    }
  }
};
</script>

<style>
.text_center {
  text-align: center;
}
.d_main {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}
.pic_list {
  list-style: none;
}
.pic_list > .pic_list__item {
  display: inline-block;
}

.image_responsive {
  width: 100%;
}

.filter {
  display: block;
  width: 100%;
}
</style>
