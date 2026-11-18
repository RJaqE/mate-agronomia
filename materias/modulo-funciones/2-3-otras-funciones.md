# 2.3 Otras Funciones Reales y Evaluación

Para cerrar este módulo, revisaremos otras tres funciones que aparecen constantemente en problemas de cálculo. 

Nos enfocaremos en entender por qué su **Dominio** y su **Recorrido** no son simplemente "todos los reales", aprendiendo a detectar las "restricciones" (reglas que no se pueden romper) de sus máquinas matemáticas.

> **Cómo usar esta página:** cada ejemplo está plegado. Haz clic en el título para desplegar la resolución completa y el análisis gráfico.

---

## 1. Función Valor Absoluto ($f(x) = |x|$)

El valor absoluto es una máquina que toma cualquier número y, si es negativo, le quita el signo para volverlo positivo. Si ya es positivo (o cero), lo deja igual. Su símbolo son dos barras verticales: $|x|$.

* **Gráfica principal:** Tiene forma de letra "V". Choca en el cero y rebota hacia arriba.

### Análisis de Dominio y Recorrido
* **Dominio ($D_f$):** ¿Podemos meter números negativos en la máquina $|x|$? Sí (ej. $|-5| = 5$). ¿Positivos? También. ¿Cero? Sí. Como no hay divisiones ni raíces, el dominio es libre: **$D_f = \mathbb{R}$**.
* **Recorrido ($R_f$):** ¿Qué sale de la máquina? Por definición, un valor absoluto jamás arroja un resultado negativo. Por lo tanto, el recorrido son los números reales positivos incluyendo el cero: **$R_f = [0, +\infty[$**.

<details>
<summary><strong>Ejemplo 1.1 · Desplazamiento de un Valor Absoluto: f(x) = |x - 3|</strong></summary>

**Enunciado.** Determine el dominio, recorrido y grafique la función $f(x) = |x - 3|$.

**Paso 1: Dominio.** 
No hay denominadores ni raíces. Podemos restar $3$ a cualquier número real y luego sacarle el valor absoluto.
$$ D_f = \mathbb{R} $$

**Paso 2: Encontrar el vértice (el "rebote").**
El rebote en la V siempre ocurre cuando lo que está adentro de las barras se vuelve cero:
$$ x - 3 = 0 \implies x = 3 $$
Si $x = 3$, entonces $y = |3 - 3| = |0| = 0$. El vértice de la V está en **$(3, 0)$**.

**Paso 3: Recorrido.**
El resultado de $|x - 3|$ siempre será $\geq 0$. El punto más bajo es $0$ y crece infinitamente.
$$ R_f = [0, +\infty[ $$

**Paso 4: Gráfica.**

<GraficoFuncion 
  titulo="f(x) = |x - 3| (La 'V' se mueve 3 pasos a la derecha)"
  expresion="Math.abs(x - 3)"
  :x-min="-1" :x-max="7" :y-min="-1" :y-max="5"
  :puntos="[
    { x: 3, y: 0, label: 'Rebote V(3, 0)' },
    { x: 1, y: 2, label: '(1, 2)' },
    { x: 5, y: 2, label: '(5, 2)' }
  ]"
/>

</details>

---

## 2. Función Raíz Cuadrada ($f(x) = \sqrt{x}$)

En los números reales (que son los que usamos en el mundo físico y agrario), **no existe la raíz cuadrada de un número negativo**. Por ejemplo, no existe un número real que multiplicado por sí mismo dé $-4$. Por lo tanto, las raíces cuadradas son máquinas delicadas.

* **Gráfica principal:** Es la mitad superior de una parábola acostada. Nace en un punto y crece lentamente hacia la derecha.

### Análisis de Dominio y Recorrido
* **Dominio ($D_f$):** Lo que está adentro de una raíz de índice par (llamado *radicando*) no puede ser negativo. Debemos obligarlo a ser mayor o igual a cero con una inecuación: $x \geq 0$. 
  Por lo tanto: **$D_f = [0, +\infty[$**.
* **Recorrido ($R_f$):** Por convención matemática, la función raíz cuadrada principal siempre entrega resultados positivos o cero. 
  Por lo tanto: **$R_f = [0, +\infty[$**.

<details>
<summary><strong>Ejemplo 2.1 · Dominio y Recorrido de f(x) = √(2x - 8)</strong></summary>

**Enunciado.** Determine el dominio, recorrido y grafique la función $f(x) = \sqrt{2x - 8}$.

**Paso 1: Calcular el Dominio.**
Obligamos a que el interior de la raíz sea mayor o igual a cero:
$$ 2x - 8 \geq 0 $$
Sumamos $8$ a ambos lados:
$$ 2x \geq 8 $$
Dividimos por $2$:
$$ x \geq 4 $$
Esto significa que la máquina solo acepta números del $4$ en adelante. Si metemos un $3$, daría $\sqrt{-2}$, lo cual rompe la máquina.
$$ D_f = [4, +\infty[ $$

**Paso 2: Calcular el Recorrido.**
Como no hay números sumando o restando por fuera de la raíz, el valor más pequeño posible ocurre cuando $x = 4$ (que da $\sqrt{0} = 0$). De ahí en adelante, la raíz irá creciendo.
$$ R_f = [0, +\infty[ $$

**Paso 3: Gráfica.**

<GraficoFuncion 
  titulo="f(x) = √(2x - 8)"
  expresion="Math.sqrt(2*x - 8)"
  :x-min="0" :x-max="12" :y-min="-1" :y-max="4"
  :puntos="[
    { x: 4, y: 0, label: 'Inicio (4, 0)' },
    { x: 6, y: 2, label: '(6, 2)' }
  ]"
/>

</details>

---

## 3. Función Racional ($f(x) = \frac{1}{x}$)

Una función es racional cuando la variable $x$ aparece en el **denominador** de una fracción. En matemáticas, **la división por cero está estrictamente prohibida** (es indefinida).

* **Gráfica principal:** Forma hipérbolas (curvas separadas). Crea "muros invisibles" llamados **Asíntotas**, a los cuales la gráfica se acerca infinitamente pero nunca toca ni cruza.

### Análisis de Dominio y Recorrido
* **Dominio ($D_f$):** Miramos el denominador y exigimos que sea distinto de cero: $x \neq 0$. Por lo tanto, el dominio son todos los reales menos el cero: **$D_f = \mathbb{R} - \{0\}$**.
* **Recorrido ($R_f$):** Para saber qué sale de la máquina, aplicamos un truco algebraico: igualamos a $y$ y despejamos la $x$. Para $y = \frac{1}{x} \implies x = \frac{1}{y}$. Como $y$ queda dividiendo, exigimos $y \neq 0$. Por lo tanto: **$R_f = \mathbb{R} - \{0\}$**.

<details>
<summary><strong>Ejemplo 3.1 · Función Racional Completa: f(x) = (3x + 1) / (x - 2)</strong></summary>

**Enunciado.** Determine el dominio, recorrido y grafique la función $f(x) = \frac{3x + 1}{x - 2}$.

**Paso 1: Dominio.**
El denominador no puede ser cero. Tomamos solo la parte de abajo:
$$ x - 2 \neq 0 \implies x \neq 2 $$
El dominio son todos los reales excepto el $2$. Esa será nuestra asíntota vertical (el muro que no se puede cruzar).
$$ D_f = \mathbb{R} - \{2\} $$

**Paso 2: Recorrido.**
Igualamos la función a $y$ para despejar la $x$:
$$ y = \frac{3x + 1}{x - 2} $$
Pasamos el denominador multiplicando a la izquierda:
$$ y(x - 2) = 3x + 1 $$
$$ yx - 2y = 3x + 1 $$
Juntamos todos los términos que tienen $x$ a la izquierda, y los demás a la derecha:
$$ yx - 3x = 2y + 1 $$
Factorizamos la $x$:
$$ x(y - 3) = 2y + 1 $$
Despejamos $x$ pasando a dividir el paréntesis:
$$ x = \frac{2y + 1}{y - 3} $$
Ahora, miramos el **nuevo denominador**. Tampoco puede ser cero:
$$ y - 3 \neq 0 \implies y \neq 3 $$
Ese número $3$ jamás podrá salir como resultado, formando nuestra asíntota horizontal.
$$ R_f = \mathbb{R} - \{3\} $$

**Paso 3: Gráfica.**

<GraficoFuncion 
  titulo="f(x) = (3x + 1) / (x - 2) (Nota cómo se rompe en X = 2)"
  :expresion="['(3*x + 1)/(x - 2)']"
  :x-min="-4" :x-max="8" :y-min="-4" :y-max="10"
/>

</details>

<br>
<hr>
<br>

## 4. Evaluación del Módulo 2

Con esto concluimos los Tipos de Funciones. Pon a prueba tus conocimientos sobre Dominio, Recorrido y Gráficas de funciones lineales, cuadráticas, racionales y de raíz.

<EvaluacionModulo 
  titulo="Test Integrador: Tipos de Funciones Reales"
  :preguntas="[
    {
      pregunta: '¿Por qué el dominio de la función constante f(x) = 15 es igual a todos los números reales (ℝ)?',
      opciones: [
        'Porque no tiene variable x en un denominador ni dentro de una raíz par, por lo tanto no hay restricciones matemáticas.',
        'Porque al ser constante, su recorrido abarca desde el -15 hasta el +15.',
        'Porque la gráfica es una línea inclinada sin fin.',
        'Porque el número 15 es positivo.'
      ],
      correcta: 'Porque no tiene variable x en un denominador ni dentro de una raíz par, por lo tanto no hay restricciones matemáticas.',
      explicacion: 'Sin restricciones de división por cero o raíces negativas, cualquier número real puede entrar en la máquina.'
    },
    {
      pregunta: 'Si la pendiente (a) de una función lineal f(x) = ax + b es negativa, su gráfica es una línea recta que decrece. ¿Qué significa esto en un problema real de estanque de agua?',
      opciones: [
        'Que el estanque se está llenando a un ritmo acelerado.',
        'Que el nivel de agua se mantiene igual con el paso del tiempo.',
        'Que el estanque está perdiendo agua de manera constante a medida que pasa el tiempo.',
        'Que el estanque alcanzó su volumen máximo y se rompió.'
      ],
      correcta: 'Que el estanque está perdiendo agua de manera constante a medida que pasa el tiempo.',
      explicacion: 'Una función decreciente significa que al avanzar la variable x (el tiempo), la variable y (el volumen de agua) se hace cada vez menor.'
    },
    {
      pregunta: 'Para calcular el vértice de una función cuadrática f(x) = ax² + bx + c, ¿qué fórmula debes aplicar obligatoriamente en el primer paso?',
      opciones: [
        'x = -b / a',
        'y = mx + b',
        'Xv = -b / 2a',
        'Igualar la función a cero y factorizar.'
      ],
      correcta: 'Xv = -b / 2a',
      explicacion: 'El primer paso para encontrar el vértice es calcular su coordenada horizontal (Xv) mediante la fórmula -b / (2a). Luego, ese valor se evalúa en la función original para hallar Yv.'
    },
    {
      pregunta: 'Al calcular el Dominio de una función raíz cuadrada como f(x) = √(5x - 20), ¿qué inecuación debes plantear para evitar errores matemáticos?',
      opciones: [
        '5x - 20 = 0',
        '5x - 20 ≠ 0',
        '5x - 20 ≥ 0',
        '5x - 20 ≤ 0'
      ],
      correcta: '5x - 20 ≥ 0',
      explicacion: 'El interior de una raíz de índice par (el radicando) nunca puede ser negativo. Se debe exigir estrictamente que sea mayor o igual a cero.'
    },
    {
      pregunta: 'En la función racional f(x) = (2x + 5) / (x - 4), ¿cuál de los siguientes números NO pertenece al Dominio?',
      opciones: [
        '0',
        '2',
        '4',
        '-5'
      ],
      correcta: '4',
      explicacion: 'Si x = 4, el denominador se vuelve (4 - 4) = 0. Como la división por cero no existe, el número 4 está excluido del dominio.'
    }
  ]"
/>