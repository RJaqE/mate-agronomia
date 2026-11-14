// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import QuizInteractivo from '../../components/QuizInteractivo.vue'
import EjercicioResuelto from '../../components/EjercicioResuelto.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Registramos los componentes globalmente
    app.component('QuizInteractivo', QuizInteractivo)
    app.component('EjercicioResuelto', EjercicioResuelto)
  }
}