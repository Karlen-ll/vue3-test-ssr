<template>
  <header class="header">
    <h1 class="header__title">{{ title }}</h1>

    <Menu class="header__menu" />
  </header>
</template>

<script>
import Menu from "@/components/Menu/Menu";

export default {
  name: "Header",

  components: {
    Menu
  },

  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 10px 30px 0 fade-out(#000, 0.9);
  border-top: 1px solid $light-color;
  box-sizing: border-box;
  padding: 0.35em 2em 0.6em 1.75em;
  margin: 0;

  &__title {
    font-size: 1.5em;
    font-weight: normal;
    margin: 0;
  }

  &__menu {

  }
}
</style>
