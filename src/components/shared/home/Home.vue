<template>
  <div>
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
          <image-responsive :url="pic.url" :title="pic.titulo" />
          <btn-custom
            btnType="button"
            title="REMOVER"
            @activateButton="removePic($event, pic)"
            :confirm="false"
            btnStyle="danger"
          />
        </panel-base>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from "../panel/Panel";
import ImageResponsive from "../image-responsive/ImageResponsive";
import Button from "../button/Button";

export default {
  components: {
    "panel-base": Panel,
    "image-responsive": ImageResponsive,
    "btn-custom": Button
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
  },

  methods: {
    removePic($event, pic) {
      alert($event);
      alert(`${pic.titulo} is removed. `);
    }
  }
};
</script>

<style>
.text_center {
  text-align: center;
}
.pic_list {
  list-style: none;
}
.pic_list > .pic_list__item {
  display: inline-block;
}

.filter {
  display: block;
  width: 100%;
}
</style>
