import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: "Mate Agronomía",
  description: "Plataforma educativa de matemáticas aplicadas a la agronomía",

  base: '/mate-agronomia/',
  
  // Configuración para renderizar LaTeX
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Módulos', link: '/materias/modulo-funciones/1-1-producto-cartesiano-relacion' }
    ],
    sidebar: [
      {
        text: '1. Fundamentos de Funciones',
        collapsed: false,
        items: [
          { text: '1.1 Producto Cartesiano y Relación', link: '/materias/modulo-funciones/1-1-producto-cartesiano-relacion' },
          { text: '1.2 Definición de Función', link: '/materias/modulo-funciones/1-2-definicion-funcion' },
          { text: '1.3 Dominio, Recorrido e Imagen', link: '/materias/modulo-funciones/1-3-dominio-recorrido-imagen' }
        ]
      },
      {
        text: '2. Tipos de Funciones',
        collapsed: false,
        items: [
          { text: '2.1 Función Constante y Lineal', link: '/materias/modulo-funciones/2-1-funcion-constante-lineal' },
          { text: '2.2 Función Cuadrática', link: '/materias/modulo-funciones/2-2-funcion-cuadratica' },
          { text: '2.3 Otras Funciones y Test', link: '/materias/modulo-funciones/2-3-otras-funciones' }
        ]
      },
      {
        text: '3. Álgebra y Composición',
        collapsed: false,
        items: [
          { text: '3.1 Operaciones con Funciones', link: '/materias/modulo-funciones/3-1-operaciones' },
          { text: '3.2 Composición de Funciones', link: '/materias/modulo-funciones/3-2-composicion' },
          { text: '3.3 Composición por Tramos y Test', link: '/materias/modulo-funciones/3-3-composicion-tramos' }
        ]
      },
      {
        text: '4. Clasificación de Funciones',
        collapsed: false,
        items: [
          { text: '4.1 Inyectividad y Sobreyectividad', link: '/materias/modulo-funciones/4-1-inyectividad-sobreyectividad' },
          { text: '4.2 Función Inversa', link: '/materias/modulo-funciones/4-2-funcion-inversa' },
          { text: '4.3 Monotonía, Paridad y Test', link: '/materias/modulo-funciones/4-3-monotonia-paridad' }
        ]
      },
      {
        text: '5. Funciones Trascendentes',
        collapsed: false,
        items: [
          { text: '5.1 Función Exponencial', link: '/materias/modulo-funciones/5-1-exponencial' },
          { text: '5.2 Función Logarítmica', link: '/materias/modulo-funciones/5-2-logaritmica' },
          { text: '5.3 Ecuaciones, Inecuaciones y Test', link: '/materias/modulo-funciones/5-3-ecuaciones-inecuaciones' }
        ]
      },
      {
        text: '6. Modelación Matemática',
        collapsed: false,
        items: [
          { text: '6.1 Impuestos y Áreas', link: '/materias/modulo-funciones/6-1-impuestos-areas' },
          { text: '6.2 Costos de Empaque', link: '/materias/modulo-funciones/6-2-costos-empaque' },
          { text: '6.3 Composición, Aplicaciones y Test', link: '/materias/modulo-funciones/6-3-aplicaciones-test' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RJaqE' }
    ]
  }
})