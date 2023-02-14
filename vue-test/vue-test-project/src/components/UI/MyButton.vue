<template>
  <button class="btn"
          type="submit"
         >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>

.btn {
  align-self: end;
  background-color: transparent;
  width: 150px;
  height: 50px;
  border: 2px solid teal;
}
</style>