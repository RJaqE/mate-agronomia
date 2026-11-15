<template>
  <div class="eval-container">
    <div class="eval-header">
      <h3>📝 {{ titulo }}</h3>
      <span v-if="enviado" class="badge-puntaje" :class="aprobado ? 'aprobado' : 'reprobado'">
        Puntaje: {{ correctas }} / {{ preguntas.length }} ({{ porcentaje }}%)
      </span>
    </div>

    <div v-for="(item, qIndex) in preguntas" :key="qIndex" class="pregunta-bloque">
      <p class="pregunta-texto"><strong>{{ qIndex + 1 }}.</strong> {{ item.pregunta }}</p>
      
      <div class="opciones-lista">
        <label 
          v-for="(op, oIndex) in item.opciones" 
          :key="oIndex" 
          class="opcion-item"
          :class="{
            'seleccionada': respuestasUsuario[qIndex] === op,
            'correcta': enviado && op === item.correcta,
            'incorrecta': enviado && respuestasUsuario[qIndex] === op && op !== item.correcta
          }"
        >
          <input 
            type="radio" 
            :name="'eval-q-' + qIndex" 
            :value="op" 
            v-model="respuestasUsuario[qIndex]"
            :disabled="enviado"
          />
          <span>{{ op }}</span>
        </label>
      </div>

      <div v-if="enviado && item.explicacion" class="explicacion-box">
        <strong>Explicación:</strong> {{ item.explicacion }}
      </div>
    </div>

    <div class="eval-footer">
      <button @click="calificar" :disabled="!todasRespondidas || enviado" class="btn-primary">
        Finalizar Evaluación
      </button>
      <button v-if="enviado" @click="reiniciar" class="btn-secondary">
        Intentar Nuevamente
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  titulo: { type: String, default: 'Evaluación del Módulo' },
  preguntas: { type: Array, required: true }
})

const respuestasUsuario = ref({})
const enviado = ref(false)

const todasRespondidas = computed(() => {
  return props.preguntas.every((_, index) => respuestasUsuario.value[index] !== undefined)
})

const correctas = computed(() => {
  return props.preguntas.reduce((acc, item, index) => {
    return acc + (respuestasUsuario.value[index] === item.correcta ? 1 : 0)
  }, 0)
})

const porcentaje = computed(() => Math.round((correctas.value / props.preguntas.length) * 100))
const aprobado = computed(() => porcentaje.value >= 60)

const calificar = () => {
  if (todasRespondidas.value) enviado.value = true
}

const reiniciar = () => {
  respuestasUsuario.value = {}
  enviado.value = false
}
</script>

<style scoped>
.eval-container {
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem 0;
  background-color: var(--vp-c-bg-soft);
}
.eval-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}
.eval-header h3 { margin: 0; }
.badge-puntaje {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.95rem;
}
.aprobado { background-color: rgba(76, 175, 80, 0.2); color: #2e7d32; }
.reprobado { background-color: rgba(244, 67, 54, 0.2); color: #c62828; }
.dark .aprobado { color: #81c784; }
.dark .reprobado { color: #e57373; }

.pregunta-bloque {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed var(--vp-c-divider);
}
.pregunta-bloque:last-of-type { border-bottom: none; }
.pregunta-texto { margin-bottom: 0.75rem; font-size: 1.05rem; }
.opciones-lista { display: flex; flex-direction: column; gap: 0.5rem; }
.opcion-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 0.9rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  background-color: var(--vp-c-bg);
}
.opcion-item.seleccionada { border-color: var(--vp-c-brand-1); }
.opcion-item.correcta { background-color: rgba(76, 175, 80, 0.15); border-color: #4caf50; }
.opcion-item.incorrecta { background-color: rgba(244, 67, 54, 0.15); border-color: #f44336; }

.explicacion-box {
  margin-top: 0.75rem;
  padding: 0.75rem;
  border-radius: 6px;
  background-color: var(--vp-c-bg-mute);
  font-size: 0.92rem;
}
.eval-footer { display: flex; gap: 1rem; margin-top: 1rem; }
.btn-primary, .btn-secondary {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
.btn-primary { background-color: var(--vp-c-brand-1); color: white; border: none; }
.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-secondary { background-color: transparent; border: 1px solid var(--vp-c-divider); }
</style>