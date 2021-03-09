<template>
  <div class="panel">
    <h2 class="panel__title" @dblclick="visible = !visible">{{ title }}</h2>
    <transition name="panel_fade">
      <div class="panel__main" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["title"],

  data() {
    return {
      visible: false
    };
  }
};
</script>

<style scoped>
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

.panel .panel__title {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}


* {
  box-shadow: 5px 5px 10px black;
}

.panel_fade-enter, .panel_fade-leave-active{
  opacity: 0;
}

.panel_fade-enter-active, .panel_fade-leave-active  {
  transition: opacity .5s;
}
.panel__main{
  overflow: hidden;
}

</style>
