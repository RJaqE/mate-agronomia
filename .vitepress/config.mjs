import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: "Mate Agronomía",
  description: "Plataforma educativa de matemáticas aplicadas a la agronomía",

  base: '/mate-agronomia/',
  
  // NUEVO: Configuración para renderizar LaTeX
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Módulos', link: '/materias/modulo-funciones/1-fundamentos' }
    ],
    sidebar: [
      {
        text: 'Funciones Reales y Aplicaciones',
        collapsed: false,
        items: [
          { text: '1. Fundamentos de Funciones', link: '/materias/modulo-funciones/1-fundamentos' },
          { text: '2. Tipos de Funciones', link: '/materias/modulo-funciones/2-tipos-funciones' },
          { text: '3. Álgebra y Composición', link: '/materias/modulo-funciones/3-algebra-composicion' },
          { text: '4. Clasificación de Funciones', link: '/materias/modulo-funciones/4-clasificacion' },
          { text: '5. Funciones Trascendentes', link: '/materias/modulo-funciones/5-exponencial-logaritmica' },
          { text: '6. Modelación Matemática', link: '/materias/modulo-funciones/6-modelacion-aplicaciones' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RJaqE' }
    ]
  }
})