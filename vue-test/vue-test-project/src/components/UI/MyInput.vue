<template>
  <input class="input" :value="value" @input="updateInput">
</template>

<script>
export default {
  name: "MyInput",
  props: {
    value: [String, Number]
  },
  methods: {
    updateInput() {
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped>
  input {
    margin-top: 15px;
    width: 100%;
    height: 35px;
    font-size: 20px;
  }
</style>