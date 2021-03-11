<template>
  <div>
    <h1 class="text_center">{{ title }}</h1>
    <p v-show="message" class="text_center">{{ message }}</p>
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
          <image-responsive
            v-transform-custom:scale="{ rotateValue: 180 }"
            :url="pic.url"
            :title="pic.titulo"
          />
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
import Panel from "../shared/panel/Panel";
import ImageResponsive from "../shared/image-responsive/ImageResponsive";
import Button from "../shared/button/Button";
import PicService from '../../domain/pic/PicService'

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
      filter: "",
      message: "",
      picService: new PicService(this.axios)
    };
  },

  created() {
    this.picService.list()
        .then(res => this.pics = res)
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
      this.picService
          .delete(pic)
          .then(()=> {
            let index = this.pics.indexOf(pic);
            this.pics.splice(index, 1);
            this.message = `Foto excluída com sucesso!`
          })
          .catch(err => this.message = "Erro ao excluir a foto!");
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
