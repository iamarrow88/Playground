<template>
  <select @change="selectOption" v-model="selectedOption">
    <option disabled value="">Sort By</option>
    <option v-for="option in options"
            :value="option.value"
            :key="option.id">
            {{ option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    name: String,
    options: Array
  },
  data() {
    return {
      selectedOption: '',
    }
  },
  methods: {
    selectOption(event) {
      this.$emit('update:selectedOption', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>