# 2.3 Otras Funciones Reales y Evaluación

Aunque las lineales y cuadráticas son las más usadas, existen otras tres "máquinas matemáticas" que debes conocer visualmente porque aparecen constantemente en cálculos más complejos.

---

## 1. Función Valor Absoluto
El valor absoluto se encarga de convertir cualquier número que entre en positivo. Su símbolo son dos barras verticales $|x|$.
* **Ecuación:** $f(x) = |x|$
* **Gráfica:** Tiene una característica forma de letra "V", rebotando en el eje X para nunca tocar los negativos.

<GraficoFuncion 
  titulo="Función Valor Absoluto: f(x) = |x|"
  expresion="Math.abs(x)"
  :x-min="-4" :x-max="4" :y-min="-1" :y-max="4"
/>

---

## 2. Función Raíz Cuadrada
Esta máquina no acepta números negativos en su dominio, ya que en los números reales no existe la raíz cuadrada de un negativo.
* **Ecuación:** $f(x) = \sqrt{x}$
* **Gráfica:** Es como una parábola acostada a la que le falta la mitad inferior. Nace en el cero y crece lentamente hacia la derecha.

<GraficoFuncion 
  titulo="Función Raíz Cuadrada: f(x) = √x"
  expresion="Math.sqrt(x)"
  :x-min="-1" :x-max="9" :y-min="-1" :y-max="4"
/>

---

## 3. Función Racional (Fraccionaria)
Ocurre cuando la variable $x$ aparece dividiendo (en el denominador). Estas funciones son famosas por romperse (indefinirse) en los números que hacen que el denominador sea cero, creando un muro invisible llamado **Asíntota**.
* **Ecuación básica:** $f(x) = \frac{1}{x}$

> **Importante:** La curva de una función racional se acercará infinitamente al muro de la asíntota, pero **jamás la cruzará ni la tocará**.

<GraficoFuncion 
  titulo="Función Racional: f(x) = 1/x (Nota cómo huye del cero)"
  :expresion="['1/x']"
  :x-min="-4" :x-max="4" :y-min="-4" :y-max="4"
/>

<br>

---

## 4. Evaluación del Módulo 2

<EvaluacionModulo 
  titulo="Test Integrador: Tipos de Funciones"
  :preguntas="[
    {
      pregunta: 'En una función lineal f(x) = mx + n, ¿qué representa matemáticamente la letra m?',
      opciones: [
        'El coeficiente de posición (donde choca con el eje Y).',
        'La pendiente o tasa de cambio de la recta.',
        'El punto máximo de la función.',
        'La concavidad de la parábola.'
      ],
      correcta: 'La pendiente o tasa de cambio de la recta.',
      explicacion: 'La m es la pendiente, e indica qué tan inclinada está la recta (cuánto sube o baja por cada paso que da en x).'
    },
    {
      pregunta: 'Si la ecuación de costo mensual de un plan telefónico es C(x) = 150x + 8000, ¿cuál es el costo fijo mensual que se cobra sin importar el consumo?',
      opciones: [
        '$150',
        '$8000',
        '$8150',
        '$0'
      ],
      correcta: '$8000',
      explicacion: 'El costo fijo es el coeficiente de posición n (el número que no depende de la x). En este caso es 8000.'
    },
    {
      pregunta: 'Al mirar la ecuación f(x) = -5x² + 3x - 1, ¿qué podemos afirmar inmediatamente sobre su gráfico?',
      opciones: [
        'Es una línea recta que decrece.',
        'Es una parábola en forma de U (cóncava hacia arriba) con un punto mínimo.',
        'Es una parábola en forma de arco (cóncava hacia abajo) con un punto máximo.',
        'Es una función constante.'
      ],
      correcta: 'Es una parábola en forma de arco (cóncava hacia abajo) con un punto máximo.',
      explicacion: 'Como tiene un término x², es una parábola. Como el coeficiente a que acompaña al x² es negativo (-5), la curva se abre hacia abajo, formando un punto máximo en la cima.'
    },
    {
      pregunta: '¿Para qué sirve la fórmula Xv = -b / (2a) en una función cuadrática?',
      opciones: [
        'Para calcular la raíz cuadrada de la función.',
        'Para encontrar en qué valor del eje X (variable independiente) se produce el punto máximo o mínimo (el vértice).',
        'Para calcular la pendiente de la curva.',
        'Para encontrar dónde choca la parábola con el eje Y.'
      ],
      correcta: 'Para encontrar en qué valor del eje X (variable independiente) se produce el punto máximo o mínimo (el vértice).',
      explicacion: 'Es la coordenada X del vértice, indispensable para resolver problemas de optimización (buscar máximos y mínimos).'
    },
    {
      pregunta: '¿Cuál de las siguientes funciones gráficas tiene forma de letra V y nunca arroja resultados negativos?',
      opciones: [
        'Función Constante',
        'Función Raíz Cuadrada',
        'Función Valor Absoluto',
        'Función Lineal'
      ],
      correcta: 'Función Valor Absoluto',
      explicacion: 'El valor absoluto f(x) = |x| transforma todo en positivo, dibujando una línea recta que rebota en el origen formando una V.'
    }
  ]"
/>