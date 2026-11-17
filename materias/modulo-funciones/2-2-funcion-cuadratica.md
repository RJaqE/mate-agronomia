# 2.2 Función Cuadrática (La Parábola)

En la naturaleza y la agronomía, rara vez las cosas crecen de forma eternamente recta. Por ejemplo, si aplicas fertilizante a un cultivo, el rendimiento sube, pero si aplicas demasiado, la planta se intoxica y el rendimiento vuelve a bajar. 

Este comportamiento de "subir, llegar a un punto máximo y luego bajar" (o viceversa) se modela con la **función cuadrática**, cuyo gráfico es una curva llamada **parábola**.

---

## 1. La Fórmula de la Función Cuadrática
Una función cuadrática siempre tiene una $x$ elevada al cuadrado ($x^2$). Su forma general es:

$$ f(x) = ax^2 + bx + c $$

Donde $a$, $b$ y $c$ son números reales conocidos, y $a$ **nunca puede ser cero** (porque si fuera cero, se borraría el $x^2$ y volvería a ser una línea recta).

### Las piezas de la máquina cuadrática:
1. **El coeficiente $a$ (La Concavidad):**
   * Si **$a > 0$ (positivo):** La parábola se abre hacia arriba (forma de "U" o de sonrisa). Tiene un punto **mínimo**.
   * Si **$a < 0$ (negativo):** La parábola se abre hacia abajo (forma de "n" o arco). Tiene un punto **máximo**.
2. **El coeficiente $c$ (Corte con el eje Y):** Al igual que en la función lineal, el número que está solo indica en qué altura la parábola choca con la pared vertical (eje $Y$).

---

## 2. El Vértice: El punto más importante
El **vértice** es la punta de la parábola, donde cambia de dirección. En problemas reales, encontrar el vértice significa encontrar la **ganancia máxima**, el **costo mínimo** o la **dosis óptima**.

El vértice es un punto con coordenadas $(X_v, Y_v)$. Se calcula con dos fórmulas sencillas:

* **Para encontrar la posición ($X_v$):**
  $$ X_v = \frac{-b}{2a} $$
* **Para encontrar el resultado máximo o mínimo ($Y_v$):**
  Solo tomas el $X_v$ que calculaste y lo metes en la función original. (También existe una fórmula directa: $Y_v = \frac{4ac - b^2}{4a}$).

<GraficoFuncion 
  titulo="Parábola hacia abajo (a negativo). Ideal para buscar máximos."
  expresion="-x*x + 4*x"
  :x-min="-1" :x-max="5" :y-min="-2" :y-max="5"
  :puntos="[
    { x: 2, y: 4, label: 'Vértice Máximo V(2, 4)' },
    { x: 0, y: 0, label: 'Corte (0,0)' },
    { x: 4, y: 0, label: 'Corte (4,0)' }
  ]"
/>

---

## 3. Ejercicios Resueltos Paso a Paso

<EjercicioResuelto titulo="Ejercicio 1: Identificar coeficientes y concavidad">

Dada la función cuadrática $f(x) = 3x^2 - 6x + 5$.
Determine el valor de $a, b, c$ y hacia dónde se abre la parábola.

**Desarrollo:**
Comparando con la forma general $ax^2 + bx + c$:
* **$a = 3$** (el número que acompaña al $x^2$).
* **$b = -6$** (el número que acompaña a la $x$, **con su signo**).
* **$c = 5$** (el número suelto).

Como $a = 3$ (positivo, $a > 0$), la parábola **se abre hacia arriba** ($\cup$) y por lo tanto tendrá un punto **mínimo**. Choca con el eje $Y$ en la altura $5$.

</EjercicioResuelto>

<EjercicioResuelto titulo="Ejercicio 2: Calcular el Vértice (Optimización)">

Un estudio agronómico determinó que el rendimiento en toneladas de un campo de tomates, según los kilos de fertilizante aplicados ($x$), se modela con la función:
$$ R(x) = -2x^2 + 20x + 10 $$
¿Cuántos kilos de fertilizante ($x$) se deben aplicar para lograr el rendimiento máximo, y de cuántas toneladas ($y$) será ese rendimiento?

**Desarrollo:**
Primero identificamos los coeficientes: $a = -2$, $b = 20$, $c = 10$.
Como $a$ es negativo, la curva es un arco hacia abajo y tiene un máximo. Debemos buscar el vértice.

**Paso 1: Calcular $X_v$ (Los kilos ideales)**
Usamos la fórmula $X_v = \frac{-b}{2a}$:
$$ X_v = \frac{-(20)}{2(-2)} = \frac{-20}{-4} = 5 $$
*Respuesta parcial:* Se deben aplicar **$5$ kilos** de fertilizante para llegar al máximo.

**Paso 2: Calcular $Y_v$ (El rendimiento en toneladas logrado)**
Metemos el $5$ en la máquina (función original):
$$ R(5) = -2(5)^2 + 20(5) + 10 $$
Ojo con el orden de las operaciones, primero la potencia:
$$ R(5) = -2(25) + 100 + 10 $$
$$ R(5) = -50 + 100 + 10 = 60 $$

**Respuesta final:** Al aplicar $5$ kilos de fertilizante, se obtiene el rendimiento máximo de **$60$ toneladas**.

</EjercicioResuelto>