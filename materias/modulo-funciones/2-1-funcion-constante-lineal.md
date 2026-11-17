# 2.1 Función Constante y Función Lineal

Las matemáticas son el lenguaje que usamos para describir cómo cambian las cosas. Sin embargo, a veces las cosas no cambian, o cambian a un ritmo perfectamente parejo. Para estos casos usamos las funciones constantes y lineales, que son las más comunes al momento de calcular cobros, tarifas y costos fijos.

---

## 1. La Función Constante
Imagina que arriendas un tractor por el día. El costo del arriendo es de $\$50.000$, sin importar cuántas horas lo uses. Si lo usas 1 hora, pagas $50.000$. Si lo usas 8 horas, pagas $50.000$. 

El resultado ($y$) **no depende** de la variable de entrada ($x$). Se mantiene "constante".

$$ f(x) = k $$
*(Donde $k$ es un número real cualquiera, fijo).*

* **Gráfica:** Es una línea completamente horizontal.
* **Dominio:** $\mathbb{R}$ (puedes meter cualquier valor de $x$).
* **Recorrido:** $\{k\}$ (el único resultado que sale de la máquina es ese número).

<GraficoFuncion 
  titulo="Función Constante: f(x) = 3 (Siempre sale 3)"
  expresion="3"
  :x-min="-5" :x-max="5" :y-min="-1" :y-max="5"
  :puntos="[
    { x: -2, y: 3, label: '(-2, 3)' },
    { x: 4, y: 3, label: '(4, 3)' }
  ]"
/>

---

## 2. La Función Lineal (y Afín)
Ahora imagina que la cuenta de la luz del campo tiene un **cargo fijo mensual** (aunque no consumas nada) y un **cobro extra por cada kilowatt** que consumes. 

Esta función tiene un crecimiento parejo, como una escalera donde todos los peldaños miden lo mismo. Su ecuación general tiene esta forma:

$$ f(x) = mx + n $$

### Las piezas de la máquina lineal:
* **$m$ (La Pendiente o Tasa de cambio):** Es el número que multiplica a la $x$. Nos dice qué tan inclinada está la recta.
  * Si $m > 0$ (positivo), la recta sube (crece).
  * Si $m < 0$ (negativo), la recta baja (decrece).
  * *Analogía:* Es el costo variable. Lo que te cobran **por cada** unidad extra.
* **$n$ (El Coeficiente de Posición):** Es el número que está solo. Nos dice en qué punto la recta cruza o choca con el eje vertical $Y$.
  * *Analogía:* Es el costo fijo. Lo que pagas en el día cero o cuando $x = 0$.

<GraficoFuncion 
  titulo="Función Lineal: f(x) = 2x + 1 (Sube 2 pasos por cada 1 que avanza)"
  expresion="2*x + 1"
  :x-min="-3" :x-max="3" :y-min="-3" :y-max="7"
  :puntos="[
    { x: 0, y: 1, label: 'Corte Y en n=1 (0, 1)' },
    { x: 2, y: 5, label: '(2, 5)' }
  ]"
/>

---

## 3. Ejercicios Resueltos Paso a Paso

<EjercicioResuelto titulo="Ejercicio 1: Identificar las partes de un cobro de agua">

El comité de agua potable rural (APR) cobra un cargo fijo mensual de $\$2.500$, más $\$300$ por cada metro cúbico ($m^3$) consumido.
a) Construya la función lineal que modele el pago mensual $P(x)$ según los metros cúbicos $x$.
b) ¿Cuál es la pendiente y el coeficiente de posición?

**Desarrollo:**
a) Armamos la ecuación identificando el costo fijo (el que no tiene $x$) y el costo variable (el que se multiplica por la cantidad $x$):
$$ P(x) = 300x + 2500 $$

b) Comparando con la fórmula $f(x) = mx + n$:
* La pendiente ($m$) es **$300$**. (Indica que el cobro sube $\$300$ por cada $1 m^3$ extra).
* El coeficiente de posición ($n$) es **$2500$**. (Indica que si consumimos $0 m^3$, pagamos $\$2.500$).

</EjercicioResuelto>

<EjercicioResuelto titulo="Ejercicio 2: Evaluando la Función Lineal">

Usando la función del ejercicio anterior ($P(x) = 300x + 2500$), ¿cuánto pagará un parcelero que consumió $15 m^3$ de agua en el mes?

**Desarrollo:**
Simplemente reemplazamos la variable $x$ por el número $15$ en la máquina:
$$ P(15) = 300(15) + 2500 $$
Multiplicamos primero:
$$ P(15) = 4500 + 2500 $$
Sumamos:
$$ P(15) = 7000 $$

**Respuesta:** El parcelero deberá pagar **$\$7.000$**.

</EjercicioResuelto>

<EjercicioResuelto titulo="Ejercicio 3: Encontrar el punto de corte en X (Cero de la función)">

Dada la función $f(x) = -4x + 12$. ¿En qué valor de $x$ la recta cruza el eje horizontal (cuando $y = 0$)?

**Desarrollo:**
Para saber dónde cruza el suelo (el eje $X$), obligamos a que el resultado de la función sea cero:
$$ -4x + 12 = 0 $$
Pasamos el $-4x$ al otro lado sumando para que quede positivo:
$$ 12 = 4x $$
Dividimos por $4$:
$$ x = \frac{12}{4} = 3 $$

**Respuesta:** La recta corta el eje horizontal en el punto **$(3, 0)$**.

</EjercicioResuelto>