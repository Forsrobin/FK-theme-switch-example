import { ref, onMounted } from "vue";

const theme = ref("system");

export function useTheme() {
  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    let resolvedTheme = newTheme;

    if (newTheme === "system") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      resolvedTheme = systemPrefersDark ? "dark" : "light";
    }

    root.setAttribute("data-theme", resolvedTheme);
  };

  const setTheme = (newTheme) => {
    theme.value = newTheme;
    localStorage.setItem("user-theme", newTheme);
    applyTheme(newTheme);
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem("user-theme");
    if (savedTheme) {
      theme.value = savedTheme;
    } else {
      theme.value = "system";
    }
    applyTheme(theme.value);
  };

  // Listen for system changes if current theme is 'system'
  onMounted(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme.value === "system") {
        applyTheme("system");
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    }
  });

  return {
    theme,
    setTheme,
    initTheme,
  };
}
