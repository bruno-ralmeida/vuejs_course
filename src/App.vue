<template>
  <div class="d-main">
    <h1 class="text_center">{{ title }}</h1>
    <ul class="pic_list">
      <li class="pic_list__item" v-for="pic of pics" :key="pic.id">
        <div class="panel">
          <h2 class="panel__title">
            {{ pic.titulo }}
          </h2>
          <div class="panel__main">
            <img class="image_responsive" :src="pic.url" :alt="pic.titulo" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "AluraPic",
      pics: [],
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => (this.pics = res.data))
      .catch((err) => console.error(err));
  },
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

/* estilo do painel */

.panel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.panel .panel-title {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}
</style>
