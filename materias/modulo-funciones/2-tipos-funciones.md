# 2. Tipos de Funciones Reales

En agronomía, diferentes fenómenos se modelan utilizando distintos tipos de funciones (por ejemplo, tasas de crecimiento, rendimiento de cultivos o costos de producción). A continuación, revisaremos las funciones reales más importantes.

## 2.1 Función Constante
Es aquella en la que, para todos los valores de la variable independiente $x$, la variable dependiente $y$ es igual a una constante $k$. Su gráfica es una línea horizontal.

$$ f(x) = k \quad \text{donde } k \in \mathbb{R} $$

* **Dominio:** $\mathbb{R}$
* **Recorrido:** $\{k\}$

## 2.2 Función Lineal
Modela crecimientos proporcionales o relaciones de costos fijos y variables. Su gráfica es una recta inclinada.

$$ f(x) = ax + b \quad \text{con } a, b \in \mathbb{R}, a \neq 0 $$

* $a$ es la pendiente (si $a > 0$ es creciente, si $a < 0$ es decreciente).
* $b$ es el coeficiente de posición (punto de corte con el eje Y).
* **Dominio y Recorrido:** $\mathbb{R}$

<EjercicioResuelto titulo="Ejemplo Práctico: Costo Eléctrico Lineal">

La empresa eléctrica cobra $0.08 el Kw-h consumido ($x$) más un costo fijo mensual de comercialización de $4.49. La función que modela el cobro mensual es:

$$ y = 0.08x + 4.49 $$

Si en un mes de riego intensivo el consumo es de $x=200$ Kw-h, el pago será:

$$ y = 0.08(200) + 4.49 = 16 + 4.49 = 20.49 $$

</EjercicioResuelto>

## 2.3 Función Cuadrática
Ampliamente usada para problemas de **optimización**, como encontrar la dosis ideal de fertilizante para obtener el rendimiento máximo de un cultivo. Su gráfica es una parábola.

$$ f(x) = ax^2 + bx + c \quad \text{donde } a \neq 0 $$

El punto crítico (vértice) donde se encuentra el máximo o mínimo se calcula con:
$$ X_{vertice} = \frac{-b}{2a} \quad ; \quad Y_{vertice} = \frac{4ac - b^2}{4a} $$

<br>

<QuizInteractivo 
  pregunta="En una función cuadrática donde el coeficiente 'a' es negativo (a < 0), ¿qué representa el vértice de la parábola?" 
  :opciones="['Un punto de inflexión', 'El punto mínimo (concavidad hacia arriba)', 'El punto máximo (concavidad hacia abajo)', 'La intersección con el eje X']" 
  respuesta-correcta="El punto máximo (concavidad hacia abajo)" 
/>

<br>

## 2.4 Otras Funciones Reales Comunes

1. **Función Valor Absoluto:** $f(x) = |x|$. Su gráfica tiene forma de "V". Su recorrido siempre son los reales no negativos $[0, +\infty[$.
2. **Función Raíz Cuadrada:** $f(x) = \sqrt{x}$. Está definida estrictamente para valores donde el contenido de la raíz (radicando) es mayor o igual a cero.
3. **Función Racional:** $f(x) = \frac{N(x)}{M(x)}$, donde el numerador y denominador son polinomios. 

> **Dato clave (Función Racional):** Es vital identificar dónde el denominador se hace cero ($M(x) = 0$), ya que esos puntos no pertenecen al dominio de la función y generalmente representan asíntotas verticales.