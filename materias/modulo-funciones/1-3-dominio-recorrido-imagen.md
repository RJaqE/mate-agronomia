# 1.3 Dominio, Codominio, Recorrido, Imagen y Preimagen

Para entender estos cinco conceptos fundamentales sin confusiones, lo más útil es imaginar una función como una **máquina transformadora**.

---

## 1. La Analogía de la Máquina
Supongamos que tenemos la función $f(x) = x^2$, definida desde los números reales hacia los números reales ($f: \mathbb{R} \rightarrow \mathbb{R}$).

* **Dominio ($D_f$ — Los ingredientes permitidos):**
  Es el conjunto de todos los valores que pueden entrar en la máquina sin romperla. En $f(x) = x^2$, puedes meter cualquier número real (positivos, negativos, cero), así que el dominio es todo $\mathbb{R}$. Si la máquina fuera $g(x) = \frac{1}{x}$, el $0$ rompería la máquina (división por cero), por lo que $0$ estaría prohibido en el dominio.

* **Codominio (El almacén de salida declarado):**
  Es el conjunto general de todos los posibles resultados que declaramos al inicio del problema. Al escribir $f: \mathbb{R} \rightarrow \mathbb{R}$, el segundo $\mathbb{R}$ es el codominio. Es como decir: *"los resultados de esta máquina serán números reales"*, aunque no todos los números reales vayan a salir realmente.

* **Recorrido o Rango ($R_f$ — Los productos realmente fabricados):**
  Es el conjunto exacto de los resultados que efectivamente salen de la máquina al meter todo el dominio. En $f(x) = x^2$, aunque el codominio sean todos los reales (positivos y negativos), al elevar al cuadrado **nunca saldrá un número negativo**. Por lo tanto, el recorrido son solo los reales positivos y el cero: $[0, +\infty[$.

<GraficoFuncion 
  titulo="f(x) = x²: Entra cualquier X (Dominio ℝ), pero Y solo sale desde 0 hacia arriba (Recorrido [0, +∞[)"
  expresion="x * x"
  :x-min="-4" :x-max="4" :y-min="-2" :y-max="10"
  :puntos="[
    { x: -3, y: 9, label: '(-3, 9)' },
    { x: 0, y: 0, label: 'Vértice (0,0)' },
    { x: 3, y: 9, label: '(3, 9)', align: 'left' }
  ]"
/>

---

## 2. Diferencia entre Imagen y Preimagen
Mientras que **dominio, codominio y recorrido** hablan de **conjuntos completos**, la **imagen y la preimagen** hablan de **elementos individuales** (un número específico).

* **Imagen (Mirar de entrada hacia salida):**
  Es el resultado específico que obtienes al meter un número puntual en la función. Responde a la pregunta: *"¿Qué sale si meto este número?"*.
  * **Ejemplo:** Si metes $x = 3$ en $f(x) = x^2$, obtienes $f(3) = 9$. Decimos que **$9$ es la imagen de $3$**. Cada elemento del dominio tiene una única imagen.

* **Preimagen (Mirar de salida hacia entrada):**
  Es el número (o números) que tuviste que meter en la máquina para obtener un resultado específico. Responde a la pregunta: *"¿Qué tuve que meter para que saliera esto?"*.
  * **Ejemplo:** Si ves que salió un $9$ de la máquina $f(x) = x^2$, buscas qué números al cuadrado dan $9$. Como $3^2 = 9$ y $(-3)^2 = 9$, decimos que **$3$ y $-3$ son las preimágenes de $9$**. 
  * *Nota:* A diferencia de la imagen, un resultado puede tener una, varias o ninguna preimagen (por ejemplo, el $-4$ está en el codominio $\mathbb{R}$, pero no tiene preimagen real porque ningún número real al cuadrado da $-4$).

---

## 3. Tabla Resumen Comparativa

| Concepto | ¿Qué es? | Pregunta clave | En el ejemplo $f(x) = x^2$ con $f: \mathbb{R} \to \mathbb{R}$ |
| :--- | :--- | :--- | :--- |
| **Dominio** | Conjunto de partida permitido | ¿Qué valores puedo meter? | Todos los reales ($\mathbb{R}$) |
| **Codominio** | Conjunto de llegada declarado | ¿En qué conjunto viven los resultados? | Todos los reales ($\mathbb{R}$) |
| **Recorrido** | Conjunto de resultados reales | ¿Qué valores salieron realmente? | Reales mayores o iguales a cero ($[0, +\infty[$) |
| **Imagen** | Elemento individual de salida | Si meto $a$, ¿qué sale? | La imagen de $3$ es $9$ |
| **Preimagen** | Elemento(s) individual(es) de entrada | Para que salga $b$, ¿qué metí? | Las preimágenes de $9$ son $3$ y $-3$ |

![Analogía de una Función: Dominio, Recorrido e Imagen](/analogia-funcion.jpg)
---

## 4. Cómo calcular el Dominio Máximo (Restricciones)
Cuando nos dan una fórmula matemática sin indicarnos el dominio, debemos buscar el **dominio máximo**, es decir, todos los números reales que no rompen la máquina. En los números reales existen dos prohibiciones principales:

1. **Prohibido dividir por cero:** Si hay una $x$ en el denominador, debemos exigir que ese denominador sea distinto de cero ($\neq 0$).
2. **Prohibido sacar raíz cuadrada de negativos:** Si hay una $x$ dentro de una raíz de índice par ($\sqrt{\quad}$), debemos exigir que lo de adentro sea mayor o igual a cero ($\geq 0$).

---

## 5. Ejercicios Resueltos Paso a Paso

<EjercicioResuelto titulo="Ejercicio 1: Calcular Imagen y Preimagen en una Función Lineal">

Dada la función $f(x) = 2x + 3$:
a) Calcule la **imagen** de $5$.
b) Calcule la **preimagen** de $10$.

**Desarrollo:**
**a) Buscando la imagen de 5:**
Significa que $x = 5$. Reemplazamos en la fórmula:
$$ f(5) = 2(5) + 3 = 10 + 3 = 13 $$
La imagen de $5$ es **$13$**.

**b) Buscando la preimagen de 10:**
Significa que el resultado final es $y = 10$, y debemos despejar qué $x$ lo produjo:
$$ 2x + 3 = 10 $$
Restamos $3$ a ambos lados:
$$ 2x = 10 - 3 $$
$$ 2x = 7 $$
Dividimos por $2$:
$$ x = \frac{7}{2} = 3.5 $$
La preimagen de $10$ es **$\frac{7}{2}$**.

</EjercicioResuelto>

<EjercicioResuelto titulo="Ejercicio 2: Dominio y Recorrido con Denominador (Función Racional)">

Determine el dominio máximo y el recorrido de la función:
$$ f(x) = \frac{2x + 5}{x - 4} $$

**Paso 1: Encontrar el Dominio ($D_f$)**
Como hay una división, el denominador no puede valer cero:
$$ x - 4 \neq 0 \implies x \neq 4 $$
Podemos meter cualquier número real excepto el $4$:
$$ D_f = \mathbb{R} - \{4\} $$

**Paso 2: Encontrar el Recorrido ($R_f$)**
Escribimos $y$ en lugar de $f(x)$ y despejamos la letra $x$:
$$ y = \frac{2x + 5}{x - 4} $$
Multiplicamos cruzado por $(x - 4)$:
$$ y(x - 4) = 2x + 5 $$
$$ yx - 4y = 2x + 5 $$
Juntamos todo lo que tiene $x$ a la izquierda y lo demás a la derecha:
$$ yx - 2x = 4y + 5 $$
Factorizamos por $x$:
$$ x(y - 2) = 4y + 5 $$
Despejamos $x$:
$$ x = \frac{4y + 5}{y - 2} $$
Miramos el nuevo denominador: $y - 2 \neq 0 \implies y \neq 2$. Esto significa que el número $2$ jamás podrá salir de esta máquina:
$$ R_f = \mathbb{R} - \{2\} $$

</EjercicioResuelto>

<EjercicioResuelto titulo="Ejercicio 3: Dominio y Recorrido con Raíz Cuadrada">

Determine el dominio y el recorrido de:
$$ f(x) = \sqrt{3x + 4} + 2 $$

**Paso 1: Encontrar el Dominio ($D_f$)**
Lo que está dentro de la raíz cuadrada debe ser mayor o igual a cero:
$$ 3x + 4 \geq 0 $$
Restamos $4$:
$$ 3x \geq -4 $$
Dividimos por $3$:
$$ x \geq -\frac{4}{3} $$
En notación de intervalo, el dominio es:
$$ D_f = \left[-\frac{4}{3}, +\infty\right[ $$

**Paso 2: Encontrar el Recorrido ($R_f$)**
Sabemos por definición que el resultado de una raíz cuadrada positiva siempre es mayor o igual a cero:
$$ \sqrt{3x + 4} \geq 0 $$
Como nuestra función le suma $2$ por fuera de la raíz, sumamos $2$ a ambos lados de la desigualdad:
$$ \sqrt{3x + 4} + 2 \geq 0 + 2 $$
$$ y \geq 2 $$
Por lo tanto, el valor más pequeño que saldrá de la máquina es $2$, y de ahí hacia el infinito:
$$ R_f = [2, +\infty[ $$

</EjercicioResuelto>

---

## 6. Evaluación del Módulo 1

<EvaluacionModulo 
  titulo="Test Final: Fundamentos de Funciones"
  :preguntas="[
    {
      pregunta: 'En la analogía de la máquina transformadora, ¿qué representa el Recorrido o Rango?',
      opciones: [
        'Todos los ingredientes que podríamos intentar meter en la máquina.',
        'El conjunto general de resultados declarados al inicio del problema (Codominio).',
        'El conjunto exacto de productos o resultados que efectivamente salen de la máquina.',
        'Un único número específico que introducimos como prueba.'
      ],
      correcta: 'El conjunto exacto de productos o resultados que efectivamente salen de la máquina.',
      explicacion: 'El recorrido son los valores reales de salida (y) que se obtienen al evaluar todo el dominio permitido.'
    },
    {
      pregunta: 'Dada la función f(x) = x² + 1, ¿cuáles son las preimágenes del número 10?',
      opciones: [
        'Únicamente el 101',
        '3 y -3',
        'Únicamente el 3',
        '9 y -9'
      ],
      correcta: '3 y -3',
      explicacion: 'Buscamos qué valores de x hacen que x² + 1 = 10. Restando 1 queda x² = 9, lo que tiene dos soluciones reales: x = 3 y x = -3.'
    },
    {
      pregunta: 'Si trazas una línea vertical sobre el gráfico de una relación y esta corta la curva en dos puntos distintos, ¿qué significa?',
      opciones: [
        'Que es una función cuadrática.',
        'Que la relación NO es una función, porque un valor del dominio tiene dos imágenes.',
        'Que el recorrido es todos los números reales.',
        'Que la función tiene dos preimágenes iguales.'
      ],
      correcta: 'Que la relación NO es una función, porque un valor del dominio tiene dos imágenes.',
      explicacion: 'El criterio de la recta vertical verifica la unicidad: cada x puede tener solo una altura y.'
    },
    {
      pregunta: '¿Cuál es el dominio máximo de la función f(x) = √(2x - 10)?',
      opciones: [
        '[5, +∞[',
        ']5, +∞[',
        '[-5, +∞[',
        'Todos los reales (ℝ)'
      ],
      correcta: '[5, +∞[',
      explicacion: 'Exigimos que el interior de la raíz sea mayor o igual a cero: 2x - 10 ≥ 0 → 2x ≥ 10 → x ≥ 5.'
    }
  ]"
/>