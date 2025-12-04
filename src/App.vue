<template>
  <div id="app">
    <ThemeSwitcher />
    <LandingPage />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useTheme } from "./composables/useTheme";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",
  components: {
    ThemeSwitcher,
    LandingPage,
  },
  setup() {
    const { initTheme } = useTheme();

    onMounted(() => {
      initTheme();
    });

    return {};
  },
};
</script>

<style lang="scss">
#app {
  padding: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
