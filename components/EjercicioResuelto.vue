<template>
  <details class="ejercicio-details">
    <summary class="ejercicio-summary">
      <span class="titulo">{{ titulo }}</span>
      <span class="icono">👇</span>
    </summary>
    <div class="ejercicio-contenido">
      <slot></slot>
    </div>
  </details>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    default: 'Ver desarrollo del ejercicio'
  }
})
</script>

<style scoped>
.ejercicio-details {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1.5rem 0;
  background-color: var(--vp-c-bg-alt);
}
.ejercicio-summary {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
}
.ejercicio-summary:hover {
  color: var(--vp-c-brand-1);
}
.ejercicio-contenido {
  padding: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>