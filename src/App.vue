<template>
  <div class="page">
    <Header title="Digital cloud" />

    <main class="wrapper">
      <router-view />
    </main>
  </div>

</template>

<script>
import Header from "@/components/Header/Header";

export default {
  name: "App",

  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.wrapper {
  flex: 1 0;
  padding: 1em;
  box-sizing: border-box;
}
</style>
