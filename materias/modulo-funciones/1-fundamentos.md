# 1. Fundamentos de Relaciones y Funciones

Para modelar fenómenos reales en agronomía —como relacionar la dosis de nitrógeno aplicada con el rendimiento de un cultivo de tomates, o calcular el volumen de agua necesario según las hectáreas— necesitamos dominar el lenguaje matemático de las **relaciones** y **funciones**.

---

## 1.1 Producto Cartesiano
El producto cartesiano de dos conjuntos $A$ y $B$ es un nuevo conjunto denotado por $A \times B$ ("A cruz B"), formado por todos los **pares ordenados** $(x, y)$ posibles donde el primer elemento pertenece a $A$ y el segundo pertenece a $B$:

$$ A \times B = \{(x,y) \mid x \in A \wedge y \in B\} $$

### Propiedades clave
* **No es conmutativo:** Por lo general, $A \times B \neq B \times A$ (el orden de las coordenadas importa: $(1,2) \neq (2,1)$).
* **Cardinalidad:** Si $A$ tiene $m$ elementos y $B$ tiene $n$ elementos, entonces $A \times B$ tendrá exactamente $m \cdot n$ pares ordenados.

<GraficoFuncion 
  titulo="Representación de A × B con A = {1, 2, 3} y B = {2, 3}"
  :x-min="0" :x-max="4" :y-min="0" :y-max="4"
  :puntos="[
    { x: 1, y: 2, label: '(1,2)' },
    { x: 1, y: 3, label: '(1,3)' },
    { x: 2, y: 2, label: '(2,2)' },
    { x: 2, y: 3, label: '(2,3)' },
    { x: 3, y: 2, label: '(3,2)' },
    { x: 3, y: 3, label: '(3,3)' }
  ]"
/>

---

## 1.2 Relación vs. Función
Una **relación** $\mathcal{R}$ es cualquier subconjunto no vacío del producto cartesiano $A \times B$ que cumple una regla o condición (por ejemplo, que $x < y$).

Una **función** $f: A \rightarrow B$ es una relación especial que debe cumplir **dos reglas estrictas**:
1. **Existencia (Todo elemento de salida participa):** Para todo $x \in A$, existe un $y \in B$ tal que $(x,y) \in f$. No pueden quedar elementos "huérfanos" en el conjunto de partida $A$.
2. **Unicidad (Una sola flecha por salida):** Si $(x,y) \in f$ y $(x,z) \in f$, entonces necesariamente $y = z$. Un mismo valor de entrada $x$ **jamás** puede producir dos resultados distintos.

> **Analogía Agronómica:** Piensa en $x$ como una parcela específica en un momento dado, e $y$ como la humedad del suelo medida. En ese instante, la parcela $x$ puede tener **un único** valor de humedad. Dos parcelas distintas ($x_1$ y $x_2$) sí pueden tener la misma humedad (compartir imagen en $B$), pero una misma parcela no puede marcar 25% y 60% al mismo tiempo.

### Criterio Gráfico de la Recta Vertical
Si dibujas una línea vertical imaginaria en cualquier punto del dominio y esta corta a la gráfica **en dos o más puntos**, entonces la curva **no representa una función**.

<GraficoFuncion 
  titulo="Ejemplo de relación que NO es función: y² = x (Parábola horizontal)"
  expresion="Math.sqrt(x)"
  :x-min="-1" :x-max="6" :y-min="-3" :y-max="3"
  :puntos="[
    { x: 4, y: 2, label: '(4, 2)' },
    { x: 4, y: -2, label: 'Nota: también pasa por (4, -2)' }
  ]"
/>

---

## 1.3 Dominio, Recorrido y Restricciones Algebraicas

* **Dominio ($D_f$):** Conjunto de todos los valores reales permitidos para la variable independiente $x$ (preimágenes).
* **Recorrido o Rango ($R_f$):** Conjunto de todos los resultados reales $y = f(x)$ obtenidos al evaluar el dominio (imágenes).

Cuando trabajamos con funciones reales ($f: A \subseteq \mathbb{R} \rightarrow \mathbb{R}$), debemos vigilar **dos restricciones naturales** para encontrar el dominio máximo:
1. **Denominadores:** Nunca se puede dividir por cero ($\frac{P(x)}{Q(x)} \Rightarrow Q(x) \neq 0$).
2. **Raíces de índice par:** El interior (radicando) debe ser mayor o igual a cero ($\sqrt{P(x)} \Rightarrow P(x) \geq 0$).

---

## 1.4 Ejercicios Resueltos Paso a Paso

<EjercicioResuelto titulo="Ejercicio 1: Identificar si una relación es función">

Dados los conjuntos $A = \{1, -2, 3, -4, 5\}$ y $B = \{-1, 0, 2, 3\}$.
Analice si la relación $f = \{(-2, 3), (3, 0), (-4, 0), (-4, 3), (5, 3)\}$ es una función.

**Desarrollo:**
La relación $f$ **no es función** porque falla en ambas condiciones fundamentales:
1. **Falla de existencia:** El elemento $1 \in A$ no tiene ninguna pareja asignada en $B$ ($f(1) = ?$).
2. **Falla de unicidad:** El elemento $-4 \in A$ tiene dos imágenes distintas: $(-4, 0)$ y $(-4, 3)$. Como $0 \neq 3$, se viola la definición de función.

</EjercicioResuelto>

<EjercicioResuelto titulo="Ejercicio 2: Dominio y Recorrido de una Función Racional">

Determine el dominio máximo y el recorrido de la función definida por la relación:
$$ y(x - 4) = 2x + 5 $$

**Desarrollo:**
**1. Cálculo del Dominio ($D_f$):**
Despejamos $y$ en términos de $x$:
$$ y = f(x) = \frac{2x + 5}{x - 4} $$
Como tenemos una división, exigimos que el denominador sea distinto de cero:
$$ x - 4 \neq 0 \implies x \neq 4 $$
Por lo tanto:
$$ D_f = \mathbb{R} - \{4\} $$

**2. Cálculo del Recorrido ($R_f$):**
Despejamos ahora la variable $x$ en términos de $y$ para ver qué valores de $y$ son posibles:
$$ y(x - 4) = 2x + 5 $$
$$ yx - 4y = 2x + 5 $$
Agrupamos los términos con $x$ a un lado:
$$ yx - 2x = 4y + 5 $$
$$ x(y - 2) = 4y + 5 \implies x = \frac{4y + 5}{y - 2} $$
Observamos que el nuevo denominador no puede ser cero:
$$ y - 2 \neq 0 \implies y \neq 2 $$
Por lo tanto:
$$ R_f = \mathbb{R} - \{2\} $$

</EjercicioResuelto>

<EjercicioResuelto titulo="Ejercicio 3: Recorrido de una Función con Dominio Acotado">

Determine el dominio y el recorrido de la función lineal acotada:
$$ f: [-4, 3[ \rightarrow \mathbb{R} \quad \text{tal que} \quad y = -2x - 1 $$

**Desarrollo:**
**1. Dominio:** El enunciado ya entrega el intervalo de entrada:
$$ D_f = [-4, 3[ $$

**2. Recorrido:** Construimos la expresión $-2x - 1$ partiendo desde la desigualdad del dominio ($-4 \leq x < 3$):
* Multiplicamos toda la desigualdad por $-2$ (**¡Ojo! Al multiplicar por un negativo, se invierten los signos de desigualdad**):
  $$ (-4)(-2) \geq -2x > (3)(-2) $$
  $$ 8 \geq -2x > -6 $$
* Restamos $1$ en todas las partes:
  $$ 8 - 1 \geq -2x - 1 > -6 - 1 $$
  $$ 7 \geq y > -7 $$
Ordenando de menor a mayor ($-7 < y \leq 7$), obtenemos el recorrido:
$$ R_f = ]-7, 7] $$

</EjercicioResuelto>

---

## 1.5 Evaluación del Módulo

<EvaluacionModulo 
  titulo="Test de Comprobación: Fundamentos de Funciones"
  :preguntas="[
    {
      pregunta: 'Si el conjunto A tiene 4 elementos y el conjunto B tiene 3 elementos, ¿cuántos pares ordenados tiene el producto cartesiano A × B?',
      opciones: ['7 pares ordenados', '12 pares ordenados', '64 pares ordenados', '81 pares ordenados'],
      correcta: '12 pares ordenados',
      explicacion: 'La cardinalidad del producto cartesiano es el producto de la cantidad de elementos de cada conjunto: 4 × 3 = 12.'
    },
    {
      pregunta: '¿Cuál de las siguientes situaciones rompe la definición matemática de función?',
      opciones: [
        'Dos valores distintos del dominio tienen exactamente la misma imagen en el codominio.',
        'Sobran elementos en el conjunto de llegada B que no reciben ninguna flecha.',
        'Un mismo elemento del dominio A apunta a dos valores diferentes en el conjunto de llegada B.',
        'Todos los elementos de A apuntan al número 0 en B.'
      ],
      correcta: 'Un mismo elemento del dominio A apunta a dos valores diferentes en el conjunto de llegada B.',
      explicacion: 'La regla de unicidad exige que cada preimagen x tenga una única imagen y. Compartir imágenes o dejar elementos libres en B sí está permitido en una función.'
    },
    {
      pregunta: '¿Cuál es el dominio máximo de la función real f(x) = √(3x + 6) / (x - 1)?',
      opciones: [
        '[-2, +∞[',
        '[-2, +∞[ - {1}',
        '] -2, +∞[ - {1}',
        'R - {1}'
      ],
      correcta: '[-2, +∞[ - {1}',
      explicacion: 'El radicando exige 3x + 6 ≥ 0 (es decir, x ≥ -2), y el denominador exige x - 1 ≠ 0 (es decir, x ≠ 1).'
    },
    {
      pregunta: 'Si f(x) = -x + 5 está definida únicamente en el dominio [-3, 2[, ¿cuál es su recorrido?',
      opciones: [
        '[3, 8]',
        ']3, 8]',
        '[3, 8[',
        '[-8, -3['
      ],
      correcta: ']3, 8]',
      explicacion: 'Evaluando los extremos: para x = -3 (cerrado), y = -(-3) + 5 = 8 (cerrado). Para x = 2 (abierto), y = -(2) + 5 = 3 (abierto). Ordenado de menor a mayor: ]3, 8].'
    }
  ]"
/>