<template>
  <button @click="activateButton" class="btn" :class="buttonStyle" :btnType="btnType">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    btnType: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    confirm: Boolean,
    btnStyle: String
  },
  methods: {
    activateButton() {
      if (this.confirm) {
        if (confirm(`Do you want continue?`)) {
          this.$emit("activateButton", new Date());
        }
        return;
      }
      this.$emit("activateButton", "Valor recebido do filho.");
    }
  },
  computed: {
    buttonStyle() {
      return this.btnStyle == "danger" ? "btn-danger" : "btn-default";
    }
  }
};
</script>

<style>
.btn {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.btn-danger {
  background: firebrick;
  color: white;
}

.btn-default {
  background: rgb(3, 194, 194);
  color: white;
}
</style>
