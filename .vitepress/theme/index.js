// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import QuizInteractivo from '../../components/QuizInteractivo.vue'
import EjercicioResuelto from '../../components/EjercicioResuelto.vue'
import GraficoFuncion from '../../components/GraficoFuncion.vue'
import EvaluacionModulo from '../../components/EvaluacionModulo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('QuizInteractivo', QuizInteractivo)
    app.component('EjercicioResuelto', EjercicioResuelto)
    app.component('GraficoFuncion', GraficoFuncion)
    app.component('EvaluacionModulo', EvaluacionModulo)
  }
}