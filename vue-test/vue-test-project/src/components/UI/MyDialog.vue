<template>
  <div class="black-area" @click="hideModal">
    <div class="content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  props: {
    shown: Boolean,
    default: false
  },
  methods: {
    hideModal() {
      this.$emit('changeShown', false);
    }
  }

}
</script>

<style scoped>
.black-area {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .3);
}
.content {
  margin: 25% auto;
  padding: 20px;
  max-width: 500px;
  max-height: 400px;
  background-color: #FFF;
}


</style>