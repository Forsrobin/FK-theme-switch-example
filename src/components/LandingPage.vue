<template>
  <div class="landing-page">
    <header class="hero">
      <p class="subtitle">FK Theme exempel</p>
      <div class="cta-buttons">
        <button class="btn primary">Knapp 1</button>
        <button class="btn secondary">Knapp 2</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style lang="scss" scoped>
.landing-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(45deg, var(--color-primary), #35495e);
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    margin-bottom: 2rem;
  }
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.98);
  }

  &.primary {
    background-color: var(--color-primary);
    color: white;

    &:hover {
      background-color: var(--color-primary-hover);
    }
  }

  &.secondary {
    background-color: var(--color-surface);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);

    &:hover {
      border-color: var(--color-text-secondary);
    }
  }
}
</style>
