<template>
  <div class="grafico-wrapper">
    <div v-if="titulo" class="grafico-titulo">{{ titulo }}</div>
    <svg :viewBox="`0 0 ${width} ${height}`" class="grafico-svg">
      <!-- Grilla -->
      <g class="grid">
        <line v-for="x in gridX" :key="'gx'+x" :x1="toSvgX(x)" :y1="pad" :x2="toSvgX(x)" :y2="height - pad" />
        <line v-for="y in gridY" :key="'gy'+y" :x1="pad" :y1="toSvgY(y)" :x2="width - pad" :y2="toSvgY(y)" />
      </g>

      <!-- Ejes principales X e Y -->
      <line :x1="pad" :y1="toSvgY(0)" :x2="width - pad" :y2="toSvgY(0)" class="axis" />
      <line :x1="toSvgX(0)" :y1="pad" :x2="toSvgX(0)" :y2="height - pad" class="axis" />

      <!-- Etiquetas de números en ejes -->
      <g class="labels">
        <text v-for="x in gridX.filter(n => n !== 0)" :key="'lx'+x" :x="toSvgX(x)" :y="toSvgY(0) + 14" text-anchor="middle">{{ x }}</text>
        <text v-for="y in gridY.filter(n => n !== 0)" :key="'ly'+y" :x="toSvgX(0) - 8" :y="toSvgY(y) + 4" text-anchor="end">{{ y }}</text>
      </g>

      <!-- Curvas de las funciones -->
      <polyline 
        v-for="(pts, idx) in curvas" 
        :key="'curva'+idx" 
        :points="pts" 
        fill="none" 
        class="curva" 
      />

      <!-- Puntos destacados -->
      <g v-for="(pt, idx) in puntos" :key="'pt'+idx" class="punto-destacado">
        <circle :cx="toSvgX(pt.x)" :cy="toSvgY(pt.y)" r="5" />
        <text 
          v-if="pt.label" 
          :x="toSvgX(pt.x) + (pt.align === 'left' ? -8 : 8)" 
          :y="toSvgY(pt.y) - 8" 
          :text-anchor="pt.align === 'left' ? 'end' : 'start'"
          class="punto-label"
        >
          {{ pt.label }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  titulo: { type: String, default: '' },
  expresion: { type: [String, Array], default: '' }, // Acepta un string o un array de strings
  xMin: { type: Number, default: -5 },
  xMax: { type: Number, default: 5 },
  yMin: { type: Number, default: -5 },
  yMax: { type: Number, default: 5 },
  puntos: { type: Array, default: () => [] }
})

const width = 520
const height = 340
const pad = 24 // Margen interno para que no se corten los números en los bordes

const toSvgX = (x) => pad + ((x - props.xMin) / (props.xMax - props.xMin)) * (width - 2 * pad)
const toSvgY = (y) => (height - pad) - ((y - props.yMin) / (props.yMax - props.yMin)) * (height - 2 * pad)

const gridX = computed(() => {
  const arr = []
  const step = Math.max(1, Math.round((props.xMax - props.xMin) / 10))
  for (let x = Math.ceil(props.xMin); x <= props.xMax; x += step) arr.push(x)
  return arr
})

const gridY = computed(() => {
  const arr = []
  const step = Math.max(1, Math.round((props.yMax - props.yMin) / 8))
  for (let y = Math.ceil(props.yMin); y <= props.yMax; y += step) arr.push(y)
  return arr
})

const curvas = computed(() => {
  if (!props.expresion) return []
  const listaExpresiones = Array.isArray(props.expresion) ? props.expresion : [props.expresion]
  
  return listaExpresiones.map(expr => {
    try {
      const fn = new Function('x', `with (Math) { return ${expr}; }`)
      const pts = []
      const steps = 300
      const dx = (props.xMax - props.xMin) / steps
      for (let i = 0; i <= steps; i++) {
        const x = props.xMin + i * dx
        const y = fn(x)
        if (!isNaN(y) && isFinite(y) && y >= props.yMin && y <= props.yMax) {
          pts.push(`${toSvgX(x).toFixed(1)},${toSvgY(y).toFixed(1)}`)
        }
      }
      return pts.join(' ')
    } catch (e) {
      return ''
    }
  }).filter(Boolean)
})
</script>

<style scoped>
.grafico-wrapper {
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.grafico-titulo {
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
}
.grafico-svg {
  width: 100%;
  max-width: 540px;
  height: auto;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
}
.grid line {
  stroke: var(--vp-c-divider);
  stroke-width: 0.7;
  stroke-dasharray: 2,2;
}
.axis {
  stroke: var(--vp-c-text-2);
  stroke-width: 1.5;
}
.labels text {
  font-size: 10px;
  fill: var(--vp-c-text-2);
  font-family: sans-serif;
}
.curva {
  stroke: var(--vp-c-brand-1);
  stroke-width: 2.5;
  stroke-linecap: round;
}
.punto-destacado circle {
  fill: #e53935;
  stroke: var(--vp-c-bg);
  stroke-width: 1.5;
}
.punto-label {
  font-size: 11px;
  font-weight: bold;
  fill: var(--vp-c-text-1);
  font-family: sans-serif;
}
</style>