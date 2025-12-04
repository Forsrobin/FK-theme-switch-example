<template>
  <div class="theme-switcher">
    <div class="switcher-container">
      <button 
        v-for="option in options" 
        :key="option.value"
        :class="{ active: theme === option.value }"
        @click="setTheme(option.value)"
        :aria-label="`Switch to ${option.label} theme`"
      >
        {{ option.icon }} {{ option.label }}
      </button>
    </div>
    <p class="current-status">Current mode: <strong>{{ theme }}</strong></p>
  </div>
</template>

<script>
import { useTheme } from '@/composables/useTheme';

export default {
  name: 'ThemeSwitcher',
  setup() {
    const { theme, setTheme } = useTheme();

    const options = [
      { value: 'light', label: 'Light', icon: '☀️' },
      { value: 'dark', label: 'Dark', icon: '🌙' },
      { value: 'system', label: 'System', icon: '💻' },
    ];

    return {
      theme,
      setTheme,
      options
    };
  }
}
</script>

<style lang="scss" scoped>
.theme-switcher {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.switcher-container {
  display: flex;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 30px;
  padding: 4px;
  box-shadow: var(--shadow-sm);
}

button {
  background: transparent;
  border: none;
  color: var(--color-text-secondary);
  padding: 8px 16px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;

  &:hover {
    color: var(--color-text-primary);
  }

  &.active {
    background-color: var(--color-primary);
    color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-primary-hover);
  }
}

.current-status {
  margin-top: 10px;
  font-size: 0.8rem;
  color: var(--color-text-secondary);
}
</style>
