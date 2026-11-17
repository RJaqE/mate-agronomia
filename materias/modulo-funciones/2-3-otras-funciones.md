# 2.3 Otras Funciones Reales y Evaluación

Para cerrar este módulo, revisaremos otras tres funciones que aparecen constantemente en problemas de cálculo. 
Nos enfocaremos en entender por qué su **Dominio** y su **Recorrido** no son simplemente "todos los reales", aprendiendo a detectar las restricciones de sus máquinas.

---

## 1. Función Valor Absoluto ($f(x) = |x|$)
El valor absoluto es una máquina que toma cualquier número y, si es negativo, le quita el signo para volverlo positivo. Si ya es positivo (o cero), lo deja igual. 

* **Gráfica:** Tiene forma de letra "V". Choca en el cero y rebota hacia arriba.

### Análisis de Dominio y Recorrido
* **Dominio ($D_f$):** ¿Podemos meter números negativos en la máquina $|x|$? Sí. ¿Positivos? También. ¿Cero? Sí. Como no hay divisiones ni raíces, el dominio es libre: **$D_f = \mathbb{R}$**.
* **Recorrido ($R_f$):** ¿Qué sale de la máquina? Por definición, un valor absoluto jamás arroja un resultado negativo. Por lo tanto, el recorrido son los números reales positivos incluyendo el cero: **$R_f = [0, +\infty[$**.

<GraficoFuncion 
  titulo="Función Valor Absoluto: f(x) = |x|"
  expresion="Math.abs(x)"
  :x-min="-4" :x-max="4" :y-min="-1" :y-max="4"
/>

---

## 2. Función Raíz Cuadrada ($f(x) = \sqrt{x}$)
En los números reales (que son los que usamos en el mundo físico y agrario), no existe ningún número que multiplicado por sí mismo dé como resultado un negativo. Por lo tanto, las raíces cuadradas son máquinas delicadas.

* **Gráfica:** Es la mitad superior de una parábola acostada. Nace en un punto y crece lentamente hacia la derecha.

### Análisis de Dominio y Recorrido
* **Dominio ($D_f$):** Lo que está adentro de una raíz de índice par (el radicando) no puede ser negativo. Debemos obligarlo a ser mayor o igual a cero. 
  Para $f(x) = \sqrt{x}$, la condición es $x \geq 0$.
  Por lo tanto: **$D_f = [0, +\infty[$**.
* **Recorrido ($R_f$):** Por definición matemática, el resultado de una raíz cuadrada principal es siempre positivo o cero.
  Por lo tanto: **$R_f = [0, +\infty[$**.

<GraficoFuncion 
  titulo="Función Raíz Cuadrada: f(x) = √x"
  expresion="Math.sqrt(x)"
  :x-min="-1" :x-max="9" :y-min="-1" :y-max="4"
/>

---

## 3. Función Racional ($f(x) = \frac{1}{x}$)
Una función es racional cuando la variable $x$ aparece en un divisor (denominador). En matemáticas, **la división por cero está estrictamente prohibida** (indefinida).

* **Gráfica:** Forma hipérbolas (curvas separadas). Crea "muros invisibles" llamados **Asíntotas**, los cuales la gráfica se acerca infinitamente pero nunca toca.

### Análisis de Dominio y Recorrido (Método Paso a Paso)
Tomemos como ejemplo la función general $f(x) = \frac{1}{x}$.
* **Dominio ($D_f$):** Miramos el denominador. Exigimos que sea distinto de cero: $x \neq 0$.
  Por lo tanto: **$D_f = \mathbb{R} - \{0\}$**.
* **Recorrido ($R_f$):** Para saber qué sale de la máquina, hacemos el truco algebraico de igualar a $y$ y despejar la $x$:
  $$ y = \frac{1}{x} \implies x \cdot y = 1 \implies x = \frac{1}{y} $$
  Ahora analizamos esta nueva fracción. Observa que la $y$ quedó en el denominador. Para que esto exista, $y$ no puede ser cero ($y \neq 0$). 
  Esto significa que el número cero jamás saldrá de la máquina original como resultado.
  Por lo tanto: **$R_f = \mathbb{R} - \{0\}$**.

---

## 4. Evaluación del Módulo 2

<EvaluacionModulo 
  titulo="Test de Comprobación: Tipos de Funciones"
  :preguntas="[
    {
      pregunta: 'Si la pendiente (m) de una función lineal f(x) = mx + n es un número negativo, ¿qué podemos afirmar sobre su gráfica?',
      opciones: [
        'Es una parábola que se abre hacia abajo.',
        'Es una recta horizontal (constante).',
        'Es una recta decreciente (baja de izquierda a derecha).',
        'Es una recta creciente (sube de izquierda a derecha).'
      ],
      correcta: 'Es una recta decreciente (baja de izquierda a derecha).',
      explicacion: 'Una pendiente (m) menor que cero indica que por cada paso que avanzamos en X, el valor de Y disminuye (cae).'
    },
    {
      pregunta: 'Dada la función cuadrática f(x) = 2x² - 8x + 3, ¿cuál de los siguientes pasos es el correcto para iniciar el cálculo del Vértice?',
      opciones: [
        'Despejar la variable x utilizando una raíz cuadrada.',
        'Calcular Xv = -(-8) / (2 * 2), usando la fórmula Xv = -b / 2a.',
        'Asumir que el vértice está en el número que está solo (c = 3).',
        'Evaluar f(0) directamente en la ecuación.'
      ],
      correcta: 'Calcular Xv = -(-8) / (2 * 2), usando la fórmula Xv = -b / 2a.',
      explicacion: 'El primer paso para encontrar el vértice de cualquier cuadrática es encontrar su coordenada X usando la fórmula -b / 2a. Luego ese resultado se evalúa en la función.'
    },
    {
      pregunta: '¿Cuál es el recorrido de la función constante f(x) = 15?',
      opciones: [
        'Todos los reales (ℝ).',
        'Los reales mayores a 15.',
        'Un conjunto que contiene únicamente al número 15: {15}.',
        'Todos los reales excepto el 15 (ℝ - {15}).'
      ],
      correcta: 'Un conjunto que contiene únicamente al número 15: {15}.',
      explicacion: 'Sin importar el valor de entrada (x), la máquina de una función constante siempre arroja el mismo resultado. Por lo tanto, el recorrido es solo ese número.'
    },
    {
      pregunta: 'Si sabemos que el vértice de una parábola es V(4, -10) y su coeficiente \'a\' es positivo, ¿cuál es el Recorrido de la función cuadrática?',
      opciones: [
        '[-10, +∞[',
        ']-∞, -10]',
        'ℝ',
        '[4, +∞['
      ],
      correcta: '[-10, +∞[',
      explicacion: 'Como \'a\' es positivo, la parábola se abre hacia arriba (tiene un mínimo). Su valor más bajo es la altura Y del vértice (-10), y de ahí crece al infinito.'
    }
  ]"
/>