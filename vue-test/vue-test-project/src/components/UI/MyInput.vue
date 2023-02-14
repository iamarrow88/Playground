<template>
  <input class="input" :value="value" @input="updateInput"> <!--1. байндим value инпута с modelValue,
  2. добавляем слушатель на ввод данных в форму
  3. определяем функцию, которая срабатывает при этом событии-->
</template>

<script>
export default {
  name: "MyInput",
  props: {
    value: [String, Number] // 4.в пропсах определяем modelValue
  },
  methods: {
    updateInput() {
      this.$emit('update:value', event.target.value) // 5.определяем метод, который будет обрабатывать
          // событие. в методе эмитим событие для род. компонента, название события строго
          //update:props.line-name, передаем в него содержание инпута
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