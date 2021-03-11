<template>
  <div>
    <h1 class="text_center">Registration</h1>

    <h2 v-if="pic._id" class="text_center">Update Registration</h2>
    <h2 v-else class="text_center">Insert Registration</h2>

    <form @submit.prevent="save()">
      <div class="control">
        <label for="tittle">Title</label>
        <input v-model="pic.titulo" id="tittle" autocomplete="off" />
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input v-model.lazy="pic.url" id="url" autocomplete="off" />
        <ImageResponsive v-show="pic.url" :url="pic.url" :title="pic.title" />
      </div>

      <div class="control">
        <label for="description">Description</label>
        <textarea
          v-model="pic.descricao"
          id="description"
          autocomplete="off"
        ></textarea>
      </div>

      <div class="text_center">
        <Button title="GRAVAR" btnType="submit" />
        <router-link :to="{ name: 'home' }">
          <Button title="VOLTAR" btnType="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImageResponsive from "../shared/image-responsive/ImageResponsive";
import Button from "../shared/button/Button";
import Pic from "../../domain/pic/Pic";
import PicService from "../../domain/pic/PicService";

export default {
  components: {
    ImageResponsive: ImageResponsive,
    Button: Button
  },

  data() {
    return {
      pic: new Pic(),
      picService: new PicService(this.axios),
      id: this.$route.params.id
    };
  },
  created() {
    if (this.id) {
      this.picService
        .search(this.id)
        .then(res => (this.pic = res))
        .catch(err => console.error(err));
    }
  },
  methods: {
    save() {
      this.picService
        .insertOrUpdate(this.pic)
        .then(() => {
          if (this.id) this.$router.push({ name: "home" });
          this.pic = new Pic();
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style scoped>
.text_center {
  text-align: center;
}
.control {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.control label {
  display: block;
  font-weight: bold;
}

.control label + input,
.control textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}
</style>
