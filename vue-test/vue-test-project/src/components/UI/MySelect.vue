<template>
  <select @change="selectOption" v-model="selectedOption">
    <option disabled value="">Sort By</option>
    <option v-for="option in options"
            :value="option.value"
            :key="option.id">
            {{ option.name}}
    </option>
<!-- 1. создаем выпадающий список через v-for
     2. он принимает в пропсах массив с доступными для сортировки вариантами
     3. не забываем про key для каждого элемента
     4. делаем двустороннее связывание с моделью selectedOption в этом компоненте
     5. отслеживаем изменения выбранного option в списке, при изменении вызываем спец функцию,
     которая передает value выбранного option родителю-->
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