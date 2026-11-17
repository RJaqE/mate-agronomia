# 2.2 Función Cuadrática (La Parábola)

En la naturaleza, rara vez las cosas crecen eternamente en línea recta. Por ejemplo, si aplicas fertilizante a un cultivo, el rendimiento aumenta; pero si excedes la dosis óptima, la planta se intoxica y el rendimiento comienza a bajar. 

Este comportamiento de "subir, llegar a un punto máximo y luego bajar" se modela con la **función cuadrática**. Su gráfico es una curva suave llamada **parábola**.

---

## 1. Estructura de la Función Cuadrática

Una función cuadrática siempre tiene su variable independiente $x$ elevada al cuadrado. Su forma polinómica general es:

$$ f(x) = ax^2 + bx + c $$

*(Condición estricta: $a \neq 0$. Si $a$ fuera cero, el término $x^2$ desaparecería y se convertiría en una función lineal).*

### El significado de las letras (Coeficientes)
1. **El coeficiente $a$ (La Concavidad):**
   Es el número que acompaña al $x^2$. Define si la parábola sonríe o está triste.
   * Si **$a > 0$ (positivo):** La parábola se abre hacia arriba (cóncava hacia arriba, $\cup$). Su punto más bajo se llama **Mínimo**.
   * Si **$a < 0$ (negativo):** La parábola se abre hacia abajo (cóncava hacia abajo, $\cap$). Su punto más alto se llama **Máximo**.
2. **El coeficiente $c$ (Corte con el eje Y):**
   Es el número suelto, sin $x$. Indica exactamente la altura a la que la parábola corta el eje vertical $Y$. Ese punto es siempre $(0, c)$.

---

## 2. El Vértice y el Análisis de Dominio y Recorrido

El **vértice** es la "punta" de la parábola, el lugar donde la curva frena y cambia de dirección. Es el punto más crítico para resolver problemas de optimización (buscar la máxima ganancia o el mínimo costo).

El vértice es un par ordenado $(X_v, Y_v)$ que se calcula así:
1. **Primero calculamos la posición ($X_v$):**
   $$ X_v = \frac{-b}{2a} $$
2. **Luego calculamos la altura ($Y_v$):**
   Simplemente tomamos el número que nos dio $X_v$ y lo evaluamos en la función original: $Y_v = f(X_v)$.

### ¿Cómo calcular el Dominio y el Recorrido de una Cuadrática?
Aquí es donde falla la mayoría de los estudiantes, pero con esta regla no te perderás:

* **Dominio ($D_f$):** Al igual que la función lineal, la fórmula $ax^2 + bx + c$ no tiene divisiones por $x$ ni raíces cuadradas. Puedes elevar al cuadrado cualquier número real. Por lo tanto:
  **$D_f = \mathbb{R}$** (Todos los reales).

* **Recorrido ($R_f$):** ¡Cuidado aquí! El recorrido **NO son todos los reales**. Como la parábola tiene un tope (un mínimo o un máximo), no puede alcanzar ciertas alturas. Para calcular el recorrido, **dependemos exclusivamente de $a$ y de $Y_v$ (la altura del vértice):**
  * Si **$a > 0$** (se abre hacia arriba): El valor más pequeño posible es el vértice, y de ahí sube al infinito. **$R_f = [Y_v, +\infty[$**.
  * Si **$a < 0$** (se abre hacia abajo): Viene desde el menos infinito y choca contra el techo del vértice. **$R_f = ]-\infty, Y_v]$**.

<GraficoFuncion 
  titulo="Ejemplo: a < 0. El recorrido va desde -∞ hasta el techo del vértice."
  expresion="-x*x + 4*x"
  :x-min="-1" :x-max="5" :y-min="-2" :y-max="5"
  :puntos="[
    { x: 2, y: 4, label: 'Vértice (Techo máximo) Yv = 4' }
  ]"
/>

---

## 3. Ejercicios Resueltos Paso a Paso

<EjercicioResuelto titulo="Ejercicio 1: Calcular Dominio, Vértice y Recorrido">

Dada la función cuadrática $f(x) = x^2 - 6x + 5$.
Calcule su dominio, las coordenadas exactas de su vértice y su recorrido.

**Desarrollo:**
Primero, identificamos los coeficientes:
* $a = 1$ (positivo, la parábola se abre hacia arriba $\cup$).
* $b = -6$
* $c = 5$

**1. Dominio:** Como es una función cuadrática polinomial, no hay restricciones:
$$ D_f = \mathbb{R} $$

**2. Vértice ($X_v, Y_v$):**
Calculamos la posición $X_v$:
$$ X_v = \frac{-b}{2a} = \frac{-(-6)}{2(1)} = \frac{6}{2} = 3 $$
Ahora, para encontrar la altura $Y_v$, reemplazamos el $3$ en la función original:
$$ Y_v = f(3) = (3)^2 - 6(3) + 5 $$
$$ Y_v = 9 - 18 + 5 $$
$$ Y_v = -4 $$
El vértice se encuentra en el punto **$(3, -4)$**. Como $a > 0$, este es el punto MÍNIMO de la gráfica.

**3. Recorrido:**
Como la parábola se abre hacia arriba, los resultados parten desde el piso ($Y_v = -4$) y crecen hacia el infinito positivo:
$$ R_f = [-4, +\infty[ $$

</EjercicioResuelto>

<EjercicioResuelto titulo="Ejercicio 2: Problema Agronómico de Optimización">

La ganancia diaria $G(x)$ en miles de pesos por la venta de $x$ cajas de arándanos está modelada por la función:
$$ G(x) = -2x^2 + 40x - 50 $$
¿Cuántas cajas ($x$) se deben vender para obtener la ganancia máxima, y a cuánto asciende dicha ganancia máxima ($y$)?

**Desarrollo:**
Identificamos coeficientes: $a = -2$, $b = 40$, $c = -50$.
Como $a = -2$ (negativo), la parábola es un arco ($\cap$) y su vértice representa el punto máximo de ganancia. Esto confirma que vamos por buen camino.

**Paso 1: ¿Cuántas cajas vender? (Cálculo de $X_v$)**
$$ X_v = \frac{-b}{2a} = \frac{-40}{2(-2)} = \frac{-40}{-4} = 10 $$
Respuesta parcial: Se deben vender **10 cajas** para llegar al tope de la curva.

**Paso 2: ¿De cuánto será la ganancia? (Cálculo de $Y_v$)**
Evaluamos 10 cajas en la función de ganancia:
$$ G(10) = -2(10)^2 + 40(10) - 50 $$
Recuerda calcular primero la potencia (10 al cuadrado es 100):
$$ G(10) = -2(100) + 400 - 50 $$
$$ G(10) = -200 + 400 - 50 = 150 $$

**Respuesta final:** Para maximizar las utilidades, se deben vender 10 cajas, lo que generará una ganancia máxima de **150 mil pesos**.
</EjercicioResuelto>