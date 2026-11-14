<template>
  <div class="quiz-container">
    <div class="pregunta">{{ pregunta }}</div>
    
    <div class="opciones">
      <label 
        v-for="(opcion, index) in opciones" 
        :key="index"
        class="opcion-label"
        :class="{
          'seleccionada': seleccion === opcion,
          'correcta': evaluado && opcion === respuestaCorrecta,
          'incorrecta': evaluado && seleccion === opcion && seleccion !== respuestaCorrecta
        }"
      >
        <input 
          type="radio" 
          :name="pregunta" 
          :value="opcion" 
          v-model="seleccion"
          :disabled="evaluado"
        />
        {{ opcion }}
      </label>
    </div>

    <div class="controles">
      <button 
        @click="evaluar" 
        :disabled="!seleccion || evaluado"
        class="btn-evaluar"
      >
        Verificar Respuesta
      </button>
      <button 
        v-if="evaluado" 
        @click="reiniciar" 
        class="btn-reiniciar"
      >
        Reintentar
      </button>
    </div>

    <div v-if="evaluado" class="feedback" :class="esCorrecto ? 'fb-exito' : 'fb-error'">
      {{ esCorrecto ? '¡Excelente! Respuesta correcta.' : 'Respuesta incorrecta. Revisa el procedimiento e inténtalo de nuevo.' }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  pregunta: { type: String, required: true },
  opciones: { type: Array, required: true },
  respuestaCorrecta: { type: String, required: true }
})

const seleccion = ref(null)
const evaluado = ref(false)

const esCorrecto = computed(() => seleccion.value === props.respuestaCorrecta)

const evaluar = () => {
  if (seleccion.value) evaluado.value = true
}

const reiniciar = () => {
  seleccion.value = null
  evaluado.value = false
}
</script>

<style scoped>
.quiz-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  background-color: var(--vp-c-bg-soft);
}
.pregunta {
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}
.opciones {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.opcion-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.opcion-label:hover:not(.correcta):not(.incorrecta) {
  background-color: var(--vp-c-bg-mute);
}
.opcion-label.seleccionada {
  border-color: var(--vp-c-brand-1);
}
.opcion-label.correcta {
  background-color: rgba(76, 175, 80, 0.1);
  border-color: #4caf50;
  color: #2e7d32;
}
.opcion-label.incorrecta {
  background-color: rgba(244, 67, 54, 0.1);
  border-color: #f44336;
  color: #c62828;
}
.dark .opcion-label.correcta { color: #81c784; }
.dark .opcion-label.incorrecta { color: #e57373; }

.btn-evaluar, .btn-reiniciar {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
}
.btn-evaluar {
  background-color: var(--vp-c-brand-1);
  color: white;
  border: none;
}
.btn-evaluar:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn-reiniciar {
  margin-left: 1rem;
  background-color: transparent;
  border: 1px solid var(--vp-c-divider);
}
.feedback {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 500;
}
.fb-exito { background-color: rgba(76, 175, 80, 0.1); color: #2e7d32; }
.fb-error { background-color: rgba(244, 67, 54, 0.1); color: #c62828; }
.dark .fb-exito { color: #81c784; }
.dark .fb-error { color: #e57373; }
</style>