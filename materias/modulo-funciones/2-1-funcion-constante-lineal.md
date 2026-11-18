# 2.1 Función Constante y Función Lineal

Cuando analizamos datos en ciencias o economía, buscamos patrones. Los patrones más simples son aquellos que no cambian (**constantes**) o que cambian a un ritmo perfectamente parejo (**lineales**).

En esta sección aprenderemos a calcular el **Dominio** y el **Recorrido** de estas funciones, a resolver ejemplos paso a paso y a dibujarlas con precisión.

> **Cómo usar esta página:** cada ejemplo está plegado. Haz clic en el título para desplegar la resolución completa, con tablas de valores, análisis de dominio y recorrido, y gráfica.

---

## 1. La Función Constante

Imagina que arriendas un tractor por el día. El costo del arriendo es de $\$50.000$, sin importar cuántas horas lo uses. Si lo usas 1 hora, pagas $\$50.000$. Si lo usas 8 horas, pagas también $\$50.000$.

La función constante es una máquina que **ignora el valor de entrada ($x$)** y siempre arroja el mismo resultado fijo.

$$ f(x) = k $$

*(Donde $k$ es un número real fijo y conocido).*

### Análisis de Dominio y Recorrido

* **Dominio ($D_f$):** ¿Qué valores puedo meter en la variable $x$? Como en la fórmula $f(x) = k$ no hay divisiones por cero ni raíces cuadradas, no hay ninguna restricción matemática. Puedes evaluar $f(1)$, $f(-1000)$ o $f(0)$. Por lo tanto, el dominio son todos los números reales: **$D_f = \mathbb{R}$**.
* **Recorrido ($R_f$):** ¿Qué valores salen realmente de la máquina? Sin importar qué número introduzcas, el único resultado posible es $k$. Por lo tanto, el recorrido es un conjunto de un solo elemento: **$R_f = \{k\}$**.

<GraficoFuncion
  titulo="Función Constante: f(x) = 3 (línea horizontal en y = 3)"
  expresion="3"
  :x-min="-5" :x-max="5" :y-min="-1" :y-max="5"
  :puntos="[
    { x: -2, y: 3, label: '(-2, 3)' },
    { x: 4, y: 3, label: '(4, 3)' }
  ]"
/>

### Ejemplos resueltos de función constante

<details>
<summary><strong>Ejemplo 1.1 · Función constante definida en todos los reales</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}\to\mathbb{R}$ con $f(x)=1$. Determine $D_f$ y $R_f$, y grafique.

**Paso 1: tabla de valores.** Evaluamos la función en varios valores de $x$ para observar el patrón:

| $x$ | $-3$ | $-1$ | $0$ | $2$ | $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $1$ | $1$ | $1$ | $1$ | $1$ |

Sin importar qué valor de $x$ usemos, la salida siempre es $1$.

**Paso 2: dominio.** La expresión $f(x)=1$ no tiene divisiones ni raíces, así que cualquier número real es válido: $D_f=\mathbb{R}$.

**Paso 3: recorrido.** El único valor que sale de la función es $1$: $R_f=\{1\}$.

**Paso 4: gráfica.** Como $y$ siempre vale $1$, la gráfica es una recta horizontal que pasa por $y=1$.

<GraficoFuncion
  titulo="f(x) = 1 con dominio ℝ"
  expresion="1"
  :x-min="-5" :x-max="5" :y-min="-1" :y-max="3"
  :puntos="[
    { x: -3, y: 1, label: '(-3, 1)' },
    { x: 2, y: 1, label: '(2, 1)' }
  ]"
/>

**Conclusión.** $D_f=\mathbb{R}$ y $R_f=\{1\}$.

</details>

<details>
<summary><strong>Ejemplo 1.2 · Función constante con dominio restringido por un intervalo</strong></summary>

**Enunciado.** Sea $f:\,]-5,\,3]\to\mathbb{R}$ con $f(x)=-2$. Determine $D_f$ y $R_f$, y grafique.

**Paso 1: ¿qué dice el dominio?** El intervalo $]-5,3]$ significa: todos los $x$ **mayores que $-5$** (sin incluirlo) y **menores o iguales que $3$** (incluyendo el $3$). Por eso $x=-5$ queda fuera.

**Paso 2: tabla de valores.**

| $x$ | $-5$ | $-4$ | $-2$ | $0$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | No | Sí | Sí | Sí | Sí |
| $f(x)$ | — | $-2$ | $-2$ | $-2$ | $-2$ |

**Paso 3: dominio.** $D_f=\,]-5,3]$. Aquí el dominio no es todo $\mathbb{R}$ porque la función está definida solo en ese intervalo.

**Paso 4: recorrido.** Aunque el dominio tenga infinitos valores, la salida siempre es $-2$. Por lo tanto $R_f=\{-2\}$.

**Paso 5: gráfica.** Trazamos la recta $y=-2$ solo entre $x=-5$ y $x=3$. En $x=-5$ ponemos un punto **vacío** (no pertenece) y en $x=3$ un punto **lleno** (sí pertenece).

<GraficoFuncion
  titulo="f(x) = -2 con dominio ]-5, 3]"
  expresion="-2"
  dominio="]-5, 3]"
  :x-min="-6" :x-max="4" :y-min="-4" :y-max="0"
  :puntos="[
    { x: -5, y: -2, label: '(-5, -2)', abierto: true },
    { x: 3, y: -2, label: '(3, -2)' }
  ]"
/>

**Conclusión.** $D_f=\,]-5,3]$ y $R_f=\{-2\}$.

</details>

<details>
<summary><strong>Ejemplo 1.3 · Función constante por tramos</strong></summary>

**Enunciado.** Sea $f:[-7,4]\to\mathbb{R}$ definida por

$$
f(x)=\begin{cases}
4 & \text{si } -7 \le x < -3 \\
2 & \text{si } -3 \le x \le 0 \\
-3 & \text{si } \ \ 0 < x \le 4
\end{cases}
$$

Determine $D_f$ y $R_f$, y grafique.

**Paso 1: entender los tramos.** Una función por tramos usa una regla distinta según en qué intervalo cae $x$. Aquí hay tres tramos, cada uno constante:

| Tramo | Condición en $x$ | Valor de $f(x)$ |
|:---:|:---:|:---:|
| 1 | $-7 \le x < -3$ | $4$ |
| 2 | $-3 \le x \le 0$ | $2$ |
| 3 | $0 < x \le 4$ | $-3$ |

**Paso 2: el caso $x=-3$.** Este valor aparece en la frontera entre dos tramos. El tramo 1 termina en $-3$ con desigualdad **estricta** ($x<-3$), así que **no** incluye $-3$. El tramo 2 empieza con $-3 \le x$, así que **sí** lo incluye. Por lo tanto $f(-3)=2$, y el punto $(-3,4)$ queda como un hueco.

**Paso 3: tabla de valores.**

| $x$ | $-7$ | $-5$ | $-3$ | $-1$ | $0$ | $1$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 1 | 1 | 2 | 2 | 2 | 3 | 3 |
| $f(x)$ | $4$ | $4$ | $2$ | $2$ | $2$ | $-3$ | $-3$ |

**Paso 4: dominio.** Unimos los tramos: $D_f=[-7,4]$.

**Paso 5: recorrido.** Los valores que aparecen son $4$, $2$ y $-3$. Por lo tanto $R_f=\{4,\,2,\,-3\}$. Observa que el recorrido tiene solo tres elementos, aunque el dominio tenga infinitos.

**Paso 6: gráfica.** Dibujamos cada tramo por separado, respetando las fronteras:
* $y=4$ desde $x=-7$ (lleno) hasta $x=-3$ (vacío).
* $y=2$ desde $x=-3$ (lleno) hasta $x=0$ (lleno).
* $y=-3$ desde $x=0$ (vacío) hasta $x=4$ (lleno).

<GraficoFuncion
  titulo="Función por tramos con dominio [-7, 4]"
  :expresion="['4', '2', '-3']"
  :dominio="['[-7, -3[', '[-3, 0]', ']0, 4]']"
  :x-min="-8" :x-max="5" :y-min="-5" :y-max="6"
  :puntos="[
    { x: -7, y: 4, label: '(-7, 4)' },
    { x: -3, y: 4, label: '(-3, 4)', abierto: true },
    { x: -3, y: 2, label: '(-3, 2)' },
    { x: 0, y: 2, label: '(0, 2)' },
    { x: 0, y: -3, label: '(0, -3)', abierto: true },
    { x: 4, y: -3, label: '(4, -3)' }
  ]"
/>

**Conclusión.** $D_f=[-7,4]$ y $R_f=\{4,\,2,\,-3\}$.

</details>

<details>
<summary><strong>Ejemplo 1.4 · Aplicación: servicio de internet ilimitado</strong></summary>

**Enunciado.** Una compañía ofrece internet ilimitado por un pago mensual fijo de $\$25$. ¿Cuál es la ecuación de la oferta?

**Paso 1: identificar las variables.**
* $x$ es el tiempo de conexión a internet (lo que el cliente usa).
* $y$ es el precio que se paga.

**Paso 2: analizar el comportamiento.** Sin importar cuánto se conecte el cliente, el precio es el mismo: $\$25$. Por lo tanto el precio **no depende** del tiempo, y la función es constante.

**Paso 3: escribir la función.** $y = 25$, o equivalentemente $f(x)=25$.

**Paso 4: tabla de valores.**

| Tiempo de conexión $x$ | $5$ | $10$ | $15$ | $20$ | $25$ | $30$ | $35$ | $40$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Precio $y$ | $25$ | $25$ | $25$ | $25$ | $25$ | $25$ | $25$ | $25$ |

**Paso 5: dominio y recorrido.** En el contexto real el tiempo no puede ser negativo, así que el dominio práctico es $D_f=[0,+\infty[$. El precio siempre es $25$, por lo que $R_f=\{25\}$.

**Paso 6: gráfica.** Una línea horizontal en $y=25$.

<GraficoFuncion
  titulo="Oferta de internet ilimitado: y = 25"
  expresion="25"
  dominio="[0, 40]"
  :x-min="0" :x-max="40" :y-min="0" :y-max="40"
  :puntos="[
    { x: 10, y: 25, label: '(10, 25)' },
    { x: 30, y: 25, label: '(30, 25)' }
  ]"
/>

**Conclusión.** La oferta se modela con $y=25$. Es una función constante: el cliente paga lo mismo sin importar cuánto use el servicio.

</details>

### Casos especiales

* **$f(x)=0$:** es la recta que coincide con el eje $X$. Su recorrido es $\{0\}$.
* **$f(x)=k$ con $k>0$:** la recta queda por encima del eje $X$. Con $k<0$, queda por debajo.
* **Cuidado con $f(x)=x$:** la función identidad **no es constante**, porque su salida cambia con $x$. Es una función lineal con $a=1$ y $b=0$.

---

## 2. La Función Lineal (y Afín)

La función lineal modela cosas que crecen o disminuyen a un ritmo constante. Por ejemplo, el cobro del agua: hay un cargo fijo (se paga siempre) y un cobro variable (se paga por cada metro cúbico extra).

Su estructura algebraica es:

$$ f(x) = ax + b \qquad \text{con } a, b \in \mathbb{R},\ a \neq 0 $$

### Las piezas de la máquina lineal

1. **$a$ (la pendiente):** es el número que multiplica a la $x$. Indica la inclinación de la recta y representa la **tasa de cambio**: cuánto cambia $y$ por cada paso que damos en $x$.
2. **$b$ (el coeficiente de posición):** es el número que está solo. Indica en qué altura exacta la recta cruza el eje vertical $Y$. Matemáticamente, es el valor de $y$ cuando $x=0$.

Para encontrar dónde la recta corta el eje $X$, hacemos $y=0$:

$$ 0 = ax + b \implies x = -\frac{b}{a} $$

### Ejemplos de identificación

| Función | Pendiente $a$ | Coeficiente $b$ | ¿Creciente o decreciente? |
|:---|:---:|:---:|:---:|
| $y = x + 1$ | $1$ | $1$ | Creciente |
| $y = 2x + 1$ | $2$ | $1$ | Creciente |
| $y = -5x + 4$ | $-5$ | $4$ | Decreciente |
| $y = -3x$ | $-3$ | $0$ | Decreciente (pasa por el origen) |

### Funciones crecientes vs decrecientes

El signo de la pendiente ($a$) define el comportamiento de la recta:

* **Si $a > 0$ (positiva): la función es CRECIENTE.** Al avanzar a la derecha en el eje $X$, la recta sube.
  * *Ejemplo agronómico:* crecimiento de una planta. $f(x) = 2x + 1$ (crece 2 cm por cada día que pasa).
* **Si $a < 0$ (negativa): la función es DECRECIENTE.** Al avanzar a la derecha en el eje $X$, la recta baja.
  * *Ejemplo agronómico:* vaciado de un estanque. $f(x) = -3x + 10$ (pierde 3 litros por cada minuto).

<GraficoFuncion
  titulo="Comparación: creciente (2x+1) vs decreciente (-3x+5)"
  :expresion="['2*x + 1', '-3*x + 5']"
  :x-min="-2" :x-max="5" :y-min="-2" :y-max="8"
  :puntos="[
    { x: 1, y: 3, label: 'Creciente' },
    { x: 1, y: 2, label: 'Decreciente' }
  ]"
/>

---

### 2.1 Ejemplos con pendiente positiva (funciones crecientes)

<details>
<summary><strong>Ejemplo 2.1 · Función creciente en todos los reales: f(x) = 2x + 8</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}\to\mathbb{R}$ con $f(x)=2x+8$. Determine los puntos de corte con los ejes, el dominio y el recorrido, y grafique.

**Paso 1: identificar $a$ y $b$.** Comparando con $ax+b$: $a=2$ y $b=8$. Como $a>0$, la función es **creciente**.

**Paso 2: corte con el eje $X$.** Hacemos $y=0$:

$$ x = -\frac{b}{a} = -\frac{8}{2} = -4 \implies \text{punto } (-4,\,0) $$

**Paso 3: corte con el eje $Y$.** Hacemos $x=0$: $y=b=8$. El punto es $(0,\,8)$.

**Paso 4: tabla de valores.**

| $x$ | $-4$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $y=2x+8$ | $0$ | $2$ | $4$ | $6$ | $8$ | $10$ | $12$ |

Observa que cada vez que $x$ aumenta en $1$, $y$ aumenta en $2$. Ese es el significado de la pendiente $a=2$.

**Paso 5: gráfica.** Ubicamos los puntos de la tabla y unimos con una recta.

<GraficoFuncion
  titulo="f(x) = 2x + 8"
  expresion="2*x + 8"
  :x-min="-6" :x-max="3" :y-min="-2" :y-max="14"
  :puntos="[
    { x: -4, y: 0, label: '(-4, 0)' },
    { x: 0, y: 8, label: '(0, 8)' },
    { x: 2, y: 12, label: '(2, 12)' }
  ]"
/>

**Paso 6: dominio.** La expresión $2x+8$ no tiene divisiones ni raíces: $D_f=\mathbb{R}$.

**Paso 7: recorrido.** Como $x\in\mathbb{R}$, también $2x\in\mathbb{R}$, y sumar $8$ no cambia eso: $2x+8\in\mathbb{R}$. Por lo tanto $R_f=\mathbb{R}$.

**Conclusión.** $D_f=\mathbb{R}$, $R_f=\mathbb{R}$, con cortes en $(-4,0)$ y $(0,8)$.

</details>

<details>
<summary><strong>Ejemplo 2.2 · Función creciente con pendiente 1: f(x) = x + 3</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}\to\mathbb{R}$ con $f(x)=x+3$. Determine los cortes, dominio y recorrido, y grafique.

**Paso 1: identificar $a$ y $b$.** $a=1$ y $b=3$. Como $a>0$, es creciente.

**Paso 2: corte con $X$.** $x=-\dfrac{b}{a}=-\dfrac{3}{1}=-3$. Punto $(-3,\,0)$.

**Paso 3: corte con $Y$.** $b=3$. Punto $(0,\,3)$.

**Paso 4: tabla de valores.**

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $y=x+3$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |

Aquí la pendiente es $1$: por cada unidad que avanzamos hacia la derecha, la recta sube una unidad.

**Paso 5: gráfica.**

<GraficoFuncion
  titulo="f(x) = x + 3"
  expresion="x + 3"
  :x-min="-5" :x-max="4" :y-min="-3" :y-max="8"
  :puntos="[
    { x: -3, y: 0, label: '(-3, 0)' },
    { x: 0, y: 3, label: '(0, 3)' }
  ]"
/>

**Paso 6: dominio y recorrido.** Ambos son todos los reales: $D_f=\mathbb{R}$ y $R_f=\mathbb{R}$.

**Conclusión.** La recta cruza el eje $X$ en $-3$ y el eje $Y$ en $3$.

</details>

<details>
<summary><strong>Ejemplo 2.3 · Creciente con dominio intervalo abierto: f(x) = 4x − 8 en ]−2, 2]</strong></summary>

**Enunciado.** Sea $f:\,]-2,\,2]\to\mathbb{R}$ con $f(x)=4x-8$. Determine los cortes, el dominio y el recorrido, y grafique.

> **Observación sobre el libro:** en la resolución original, el dominio aparece escrito como $[-2,2[$, pero el enunciado dice $]-2,2]$. Aquí usamos el dominio del enunciado: $-2$ **no** pertenece y $2$ **sí** pertenece.

**Paso 1: identificar $a$ y $b$.** $a=4$ y $b=-8$. Como $a>0$, es creciente.

**Paso 2: corte con $X$.** $x=-\dfrac{b}{a}=-\dfrac{-8}{4}=2$. El punto $(2,\,0)$ **sí** está en el dominio, porque $2 \in\,]-2,2]$.

**Paso 3: corte con $Y$.** $b=-8$. Punto $(0,\,-8)$.

**Paso 4: tabla de valores.**

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | No | Sí | Sí | Sí | Sí |
| $y=4x-8$ | — (no existe) | $-12$ | $-8$ | $-4$ | $0$ |

Para $x=-2$ no evaluamos, porque no pertenece al dominio; igual sirve calcular el valor al que se acerca: $4(-2)-8=-16$. Ese punto queda como **hueco**.

**Paso 5: gráfica.** Dibujamos la recta entre $x=-2$ (hueco en $(-2,-16)$) y $x=2$ (punto lleno en $(2,0)$).

<GraficoFuncion
  titulo="f(x) = 4x − 8 con dominio ]−2, 2]"
  expresion="4*x - 8"
  dominio="]-2, 2]"
  :x-min="-3" :x-max="3" :y-min="-18" :y-max="4"
  :puntos="[
    { x: -2, y: -16, label: '(-2, -16)', abierto: true },
    { x: 2, y: 0, label: '(2, 0)' },
    { x: 0, y: -8, label: '(0, -8)' }
  ]"
/>

**Paso 6: recorrido.** Partimos de la desigualdad del dominio y la transformamos paso a paso:

$$
\begin{aligned}
-2 &< x \le 2 \\
-8 &< 4x \le 8 \qquad \text{(multiplicamos por 4)} \\
-16 &< 4x-8 \le 0 \qquad \text{(restamos 8)}
\end{aligned}
$$

Por lo tanto $R_f=\,]-16,\,0]$.

**Conclusión.** $D_f=\,]-2,2]$ y $R_f=\,]-16,0]$.

</details>

<details>
<summary><strong>Ejemplo 2.4 · Creciente con dominio abierto en ambos extremos: f(x) = 2x + 3 en ]−4, 1[</strong></summary>

**Enunciado.** Sea $f:\,]-4,\,1[\to\mathbb{R}$ con $f(x)=2x+3$. Determine los cortes, dominio y recorrido, y grafique.

**Paso 1: identificar $a$ y $b$.** $a=2$ y $b=3$. Como $a>0$, es creciente.

**Paso 2: cortes.**
* Con $X$: $x=-\dfrac{3}{2}$, punto $\left(-\dfrac{3}{2},\,0\right)$. Está dentro del dominio.
* Con $Y$: $b=3$, punto $(0,\,3)$.

**Paso 3: tabla de valores.**

| $x$ | $-4$ | $-3$ | $-2$ | $-1$ | $0$ | $0{,}5$ | $1$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | No | Sí | Sí | Sí | Sí | Sí | No |
| $y=2x+3$ | — | $-3$ | $-1$ | $1$ | $3$ | $4$ | — |

Los extremos del dominio quedan fuera. Sus límites son útiles para el recorrido: en $x=-4$ la salida tendería a $-5$ y en $x=1$ tendería a $5$.

**Paso 4: gráfica.** Trazamos la recta entre $(-4,-5)$ y $(1,5)$, ambos con hueco.

<GraficoFuncion
  titulo="f(x) = 2x + 3 con dominio ]−4, 1["
  expresion="2*x + 3"
  dominio="]-4, 1["
  :x-min="-5" :x-max="2" :y-min="-7" :y-max="7"
  :puntos="[
    { x: -4, y: -5, label: '(-4, -5)', abierto: true },
    { x: 1, y: 5, label: '(1, 5)', abierto: true },
    { x: -1.5, y: 0, label: '(-3/2, 0)' },
    { x: 0, y: 3, label: '(0, 3)' }
  ]"
/>

**Paso 5: recorrido.** Transformamos la desigualdad del dominio:

$$
\begin{aligned}
-4 &< x < 1 \\
-8 &< 2x < 2 \\
-5 &< 2x+3 < 5
\end{aligned}
$$

Por lo tanto $R_f=\,]-5,\,5[$.

**Conclusión.** $D_f=\,]-4,1[$ y $R_f=\,]-5,5[$.

</details>

---

### 2.2 Ejemplos con pendiente negativa (funciones decrecientes)

<details>
<summary><strong>Ejemplo 2.5 · Función decreciente en todos los reales: f(x) = −2x + 6</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}\to\mathbb{R}$ con $f(x)=-2x+6$. Determine los cortes, dominio y recorrido, y grafique.

**Paso 1: identificar $a$ y $b$.** $a=-2$ y $b=6$. Como $a<0$, la función es **decreciente**.

**Paso 2: corte con $X$.** $x=-\dfrac{b}{a}=-\dfrac{6}{-2}=3$. Punto $(3,\,0)$.

**Paso 3: corte con $Y$.** $b=6$. Punto $(0,\,6)$.

**Paso 4: tabla de valores.**

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $y=-2x+6$ | $8$ | $6$ | $4$ | $2$ | $0$ | $-2$ |

Al avanzar a la derecha, $y$ **baja** 2 unidades por cada unidad de $x$.

**Paso 5: gráfica.**

<GraficoFuncion
  titulo="f(x) = −2x + 6"
  expresion="-2*x + 6"
  :x-min="-2" :x-max="5" :y-min="-4" :y-max="10"
  :puntos="[
    { x: 3, y: 0, label: '(3, 0)' },
    { x: 0, y: 6, label: '(0, 6)' }
  ]"
/>

**Paso 6: dominio y recorrido.** No hay restricciones, así que $D_f=\mathbb{R}$. Como $x\in\mathbb{R}$, $-2x\in\mathbb{R}$ y $-2x+6\in\mathbb{R}$. Por lo tanto $R_f=\mathbb{R}$.

**Conclusión.** Función decreciente con cortes en $(3,0)$ y $(0,6)$.

</details>

<details>
<summary><strong>Ejemplo 2.6 · Decreciente con dominio intervalo: f(x) = −2x − 1 en [−4, 3[</strong></summary>

**Enunciado.** Sea $f:\,[-4,\,3[\to\mathbb{R}$ con $f(x)=-2x-1$. Determine los cortes, dominio y recorrido, y grafique.

**Paso 1: identificar $a$ y $b$.** $a=-2$ y $b=-1$. Como $a<0$, es decreciente.

**Paso 2: cortes.**
* Con $X$: $x=-\dfrac{b}{a}=-\dfrac{-1}{-2}=-\dfrac{1}{2}$. Punto $\left(-\dfrac{1}{2},\,0\right)$.
* Con $Y$: $b=-1$. Punto $(0,\,-1)$.

**Paso 3: tabla de valores.**

| $x$ | $-4$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | Sí | Sí | Sí | Sí | Sí | Sí | Sí | No |
| $y=-2x-1$ | $7$ | $5$ | $3$ | $1$ | $-1$ | $-3$ | $-5$ | — (tendería a $-7$) |

**Paso 4: gráfica.** Punto lleno en $(-4,7)$ y hueco en $(3,-7)$.

<GraficoFuncion
  titulo="f(x) = −2x − 1 con dominio [−4, 3["
  expresion="-2*x - 1"
  dominio="[-4, 3["
  :x-min="-5" :x-max="4" :y-min="-9" :y-max="9"
  :puntos="[
    { x: -4, y: 7, label: '(-4, 7)' },
    { x: 3, y: -7, label: '(3, -7)', abierto: true },
    { x: -0.5, y: 0, label: '(-1/2, 0)' },
    { x: 0, y: -1, label: '(0, -1)' }
  ]"
/>

**Paso 5: recorrido.** Este es el paso que más se equivoca. Como $a<0$, **al multiplicar por $-2$ la desigualdad se invierte**:

$$
\begin{aligned}
-4 &\le x < 3 \\
-6 &< -2x \le 8 \qquad \text{(multiplicamos por }-2\text{ e invertimos los signos de desigualdad)} \\
-7 &< -2x-1 \le 7 \qquad \text{(restamos 1)}
\end{aligned}
$$

Por lo tanto $R_f=\,]-7,\,7]$.

**Conclusión.** $D_f=[-4,3[$ y $R_f=\,]-7,7]$.

</details>

<details>
<summary><strong>Ejemplo 2.7 · Decreciente con corte fuera del dominio: f(x) = −x + 5 en [−3, 2[</strong></summary>

**Enunciado.** Sea $f:\,[-3,\,2[\to\mathbb{R}$ con $f(x)=-x+5$. Determine los cortes, dominio y recorrido, y grafique.

**Paso 1: identificar $a$ y $b$.** $a=-1$ y $b=5$. Como $a<0$, es decreciente.

**Paso 2: cortes.**
* Con $X$: $x=-\dfrac{5}{-1}=5$. Punto $(5,\,0)$.
* Con $Y$: $b=5$. Punto $(0,\,5)$.

> **Ojo:** el corte con $X$ está en $x=5$, que **no** pertenece al dominio $[-3,2[$. Por eso no se dibuja en este ejemplo: la gráfica solo muestra el tramo permitido.

**Paso 3: tabla de valores.**

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | Sí | Sí | Sí | Sí | Sí | No |
| $y=-x+5$ | $8$ | $7$ | $6$ | $5$ | $4$ | — (tendería a $3$) |

**Paso 4: gráfica.** Punto lleno en $(-3,8)$ y hueco en $(2,3)$.

<GraficoFuncion
  titulo="f(x) = −x + 5 con dominio [−3, 2["
  expresion="-x + 5"
  dominio="[-3, 2["
  :x-min="-4" :x-max="6" :y-min="0" :y-max="10"
  :puntos="[
    { x: -3, y: 8, label: '(-3, 8)' },
    { x: 2, y: 3, label: '(2, 3)', abierto: true },
    { x: 0, y: 5, label: '(0, 5)' }
  ]"
/>

**Paso 5: recorrido.** Como $a<0$, la desigualdad se invierte al multiplicar por $-1$:

$$
\begin{aligned}
-3 &\le x < 2 \\
-2 &< -x \le 3 \qquad \text{(multiplicamos por }-1\text{ e invertimos las desigualdades)} \\
3 &< -x+5 \le 8 \qquad \text{(sumamos 5)}
\end{aligned}
$$

Por lo tanto $R_f=\,]3,\,8]$.

**Conclusión.** $D_f=[-3,2[$ y $R_f=\,]3,8]$.

</details>

---

### 2.3 Dominio y recorrido de una función lineal en general

* **Dominio ($D_f$):** en la fórmula $ax+b$ no hay divisiones por $x$ ni raíces cuadradas, así que no hay peligro de romper las reglas matemáticas. Por lo tanto $D_f=\mathbb{R}$ (si no hay restricción externa).
* **Recorrido ($R_f$):** para hallarlo, despejamos $x$:

  $$ y = ax + b \implies y - b = ax \implies x = \frac{y-b}{a} $$

  Como la pendiente $a$ nunca es cero en una función lineal (si lo fuera, sería constante), el denominador es un número seguro. La variable $y$ queda libre de restricciones, así que $R_f=\mathbb{R}$.

**Casos especiales de recta:** la función identidad $f(x)=x$ pasa por el origen con pendiente $1$ (es creciente); $f(x)=-x$ también pasa por el origen con pendiente $-1$ (es decreciente).

---

## 3. ¿Cómo graficar una Función Lineal?

Existen dos métodos para dibujar una recta sin equivocarse. Usaremos como ejemplo la función **$f(x) = 2x - 1$**.

### Método 1: usando una tabla de valores (dos puntos)

Para trazar una recta solo necesitas conocer dos puntos por donde pasa.

1. **Paso 1:** elige dos valores fáciles para $x$ (por ejemplo, $x=0$ y $x=2$).
2. **Paso 2:** evalúa esos números en la función:

| $x$ | $0$ | $2$ |
|:---:|:---:|:---:|
| $y=2x-1$ | $-1$ | $3$ |
| Punto | $A(0,\,-1)$ | $B(2,\,3)$ |

3. **Paso 3:** ubica los puntos en el plano cartesiano y únelos con una regla.

### Método 2: usando el coeficiente de posición y la pendiente

Este método es más rápido porque no requiere calcular nada extra.

1. **Paso 1: ubica el punto de partida ($b$).** En $f(x)=2x-1$, $b=-1$. La recta corta el eje $Y$ en $-1$: punto $(0,\,-1)$.
2. **Paso 2: usa la pendiente como un mapa.** La pendiente es $2 = \dfrac{2}{1}$.
   * El numerador ($+2$) indica cuántos pasos subir en el eje $Y$.
   * El denominador ($+1$) indica cuántos pasos avanzar hacia la derecha en el eje $X$.
   * **Instrucción:** párate en $(0,-1)$, sube 2 cuadritos y avanza 1 cuadrito a la derecha. Llegas a $(1,\,1)$. Marca el punto y traza la recta.

<GraficoFuncion
  titulo="f(x) = 2x − 1 (método de la pendiente)"
  expresion="2*x - 1"
  :x-min="-3" :x-max="4" :y-min="-4" :y-max="6"
  :puntos="[
    { x: 0, y: -1, label: '(0, -1) inicio' },
    { x: 1, y: 1, label: '(1, 1)' },
    { x: 2, y: 3, label: '(2, 3)' }
  ]"
/>

---

## 4. Ecuación de la recta

### 4.1 Ecuación a partir de dos puntos

Si conocemos dos puntos $(x_1,y_1)$ y $(x_2,y_2)$, la pendiente es

$$ m = \frac{y_2-y_1}{x_2-x_1} $$

y la ecuación de la recta se obtiene con

$$ y - y_1 = m\,(x - x_1) $$

<details>
<summary><strong>Ejemplo 4.1 · Recta que pasa por A(2, 1) y B(4, 5)</strong></summary>

**Enunciado.** Determine la ecuación de la recta que pasa por $A=(2,\,1)$ y $B=(4,\,5)$.

**Paso 1: calcular la pendiente.**

$$ m = \frac{5-1}{4-2} = \frac{4}{2} = 2 $$

**Paso 2: aplicar la fórmula punto-pendiente con $A$.**

$$ y - 1 = 2\,(x-2) $$

**Paso 3: despejar $y$.**

$$
\begin{aligned}
y - 1 &= 2x - 4 \\
y &= 2x - 3
\end{aligned}
$$

**Paso 4: verificar con los dos puntos.**

| Punto | Sustitución | ¿Se cumple? |
|:---:|:---:|:---:|
| $A(2,\,1)$ | $2(2)-3 = 1$ | Sí |
| $B(4,\,5)$ | $2(4)-3 = 5$ | Sí |

**Paso 5: tabla y gráfica.**

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $y=2x-3$ | $-3$ | $-1$ | $1$ | $3$ | $5$ |

<GraficoFuncion
  titulo="Recta por A(2, 1) y B(4, 5): y = 2x − 3"
  expresion="2*x - 3"
  :x-min="0" :x-max="6" :y-min="-4" :y-max="8"
  :puntos="[
    { x: 2, y: 1, label: 'A(2, 1)' },
    { x: 4, y: 5, label: 'B(4, 5)' }
  ]"
/>

**Conclusión.** La recta es $y = 2x - 3$ (pendiente $2$, corte con $Y$ en $-3$).

</details>

<details>
<summary><strong>Ejemplo 4.2 · Curva de demanda de pantalones</strong></summary>

**Enunciado.** Una fábrica de pantalones tiene una demanda semanal de $500$ pantalones cuando el precio es de $\$60$, y de $300$ pantalones cuando el precio es de $\$80$. Determine la ecuación de la demanda, suponiendo que es lineal.

**Paso 1: definir los puntos.** El precio $x$ es la variable independiente y la demanda $y$ es la dependiente:

$$ A=(60,\,500) \qquad B=(80,\,300) $$

**Paso 2: calcular la pendiente.**

$$ m = \frac{300-500}{80-60} = \frac{-200}{20} = -10 $$

Interpretación: por cada peso de aumento en el precio, la demanda baja en $10$ pantalones.

**Paso 3: ecuación punto-pendiente con $A$.**

$$ y - 500 = -10\,(x-60) $$

**Paso 4: despejar $y$.**

$$
\begin{aligned}
y - 500 &= -10x + 600 \\
y &= -10x + 1100
\end{aligned}
$$

**Paso 5: verificar.** Con $x=60$: $y=-600+1100=500$ ✓. Con $x=80$: $y=-800+1100=300$ ✓.

**Paso 6: tabla de valores.** Usamos precios entre $\$60$ y $\$110$, que es donde la demanda no es negativa.

| Precio $x$ | $60$ | $70$ | $80$ | $90$ | $100$ | $110$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Demanda $y$ | $500$ | $400$ | $300$ | $200$ | $100$ | $0$ |

**Paso 7: gráfica.**

<GraficoFuncion
  titulo="Demanda: y = −10x + 1100"
  expresion="-10*x + 1100"
  dominio="[0, 110]"
  :x-min="0" :x-max="120" :y-min="0" :y-max="1200"
  :puntos="[
    { x: 60, y: 500, label: '(60, 500)' },
    { x: 80, y: 300, label: '(80, 300)' },
    { x: 110, y: 0, label: '(110, 0)' }
  ]"
/>

**Conclusión.** $y=-10x+1100$. En la práctica, el dominio tiene sentido solo entre $0$ y $110$: por sobre $\$110$ la demanda sería negativa, y no tiene significado.

</details>

### 4.2 Ecuación a partir de la pendiente y un punto

Si conocemos la pendiente $m$ y un punto $P(x_1,y_1)$, basta con aplicar directamente:

$$ y - y_1 = m\,(x-x_1) $$

<details>
<summary><strong>Ejemplo 4.3 · Recta de pendiente 4 que pasa por P(2, 3)</strong></summary>

**Enunciado.** Si la pendiente es $m=4$ y el punto es $P=(2,\,3)$, determine la ecuación de la recta.

**Paso 1: reemplazar en la fórmula.**

$$ y - 3 = 4\,(x-2) $$

**Paso 2: despejar $y$.**

$$
\begin{aligned}
y - 3 &= 4x - 8 \\
y &= 4x - 5
\end{aligned}
$$

**Paso 3: verificar.** Con $x=2$: $y=8-5=3$ ✓ (la recta pasa por $P$).

**Paso 4: tabla y gráfica.**

| $x$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $y=4x-5$ | $-5$ | $-1$ | $3$ | $7$ |

<GraficoFuncion
  titulo="Recta de pendiente 4 por P(2, 3): y = 4x − 5"
  expresion="4*x - 5"
  :x-min="-1" :x-max="4" :y-min="-8" :y-max="10"
  :puntos="[
    { x: 2, y: 3, label: 'P(2, 3)' },
    { x: 0, y: -5, label: '(0, -5)' }
  ]"
/>

**Conclusión.** $y=4x-5$.

</details>

### 4.3 Aplicación: factura de luz

<details>
<summary><strong>Ejemplo 4.4 · Modelo del cobro mensual de electricidad</strong></summary>

**Enunciado.** La empresa eléctrica cobra $\$0{,}08$ por cada kilowatt-hora (kWh) más un costo fijo mensual por comercialización. La factura mensual de María es de $\$18{,}33$ por $173$ kWh.

a) Determine la función que modela el cobro mensual de luz.
b) ¿Cuánto debe pagar María si consume $200$ kWh?

**Solución del literal a).**

**Paso 1: definir las variables.**
* $x$ = cantidad de kWh consumidos.
* $y$ = costo mensual de la luz.

**Paso 2: identificar la pendiente.** El cobro por cada kWh es la tasa de cambio: $m=0{,}08$.

**Paso 3: usar el punto conocido.** Sabemos que $(173,\;18{,}33)$ pertenece a la recta.

**Paso 4: ecuación punto-pendiente.**

$$ y - 18{,}33 = 0{,}08\,(x-173) $$

**Paso 5: despejar $y$.**

$$
\begin{aligned}
y &= 0{,}08x - 0{,}08(173) + 18{,}33 \\
y &= 0{,}08x - 13{,}84 + 18{,}33 \\
y &= 0{,}08x + 4{,}49
\end{aligned}
$$

**Paso 6: interpretar.** La pendiente $0{,}08$ es el costo variable por kWh. El coeficiente $4{,}49$ es el **cargo fijo** que se paga aunque no se consuma nada.

**Paso 7: verificar.** Con $x=173$: $0{,}08(173)+4{,}49 = 13{,}84+4{,}49 = 18{,}33$ ✓.

**Solución del literal b).** Reemplazamos $x=200$:

$$ y = 0{,}08(200) + 4{,}49 = 16 + 4{,}49 = 20{,}49 $$

María debe pagar **$\$20{,}49$**.

**Tabla de valores.**

| Consumo $x$ (kWh) | $0$ | $100$ | $173$ | $200$ | $300$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Cobro $y$ ($\$$) | $4{,}49$ | $12{,}49$ | $18{,}33$ | $20{,}49$ | $28{,}49$ |

**Gráfica.**

<GraficoFuncion
  titulo="Cobro mensual de luz: y = 0,08x + 4,49"
  expresion="0.08*x + 4.49"
  :x-min="0" :x-max="300" :y-min="0" :y-max="30"
  :puntos="[
    { x: 173, y: 18.33, label: '(173; 18,33)' },
    { x: 200, y: 20.49, label: '(200; 20,49)' },
    { x: 0, y: 4.49, label: 'cargo fijo 4,49' }
  ]"
/>

**Conclusión.** $y = 0{,}08x + 4{,}49$, y con $200$ kWh la cuenta es de $\$20{,}49$.

</details>

---

## 5. Ejercicio resuelto: modelo de costos

<details>
<summary><strong>Ejercicio 5.1 · Encontrar la función de costo a partir de dos puntos</strong></summary>

**Enunciado.** Un agrónomo sabe que si produce $10$ litros de biofertilizante, su costo es de $\$35.000$. Si produce $30$ litros, su costo sube a $\$75.000$. Suponiendo un comportamiento lineal, encuentre la función de costo $C(x)$.

**Paso 1: los puntos.** $(x_1,y_1)=(10,\;35.000)$ y $(x_2,y_2)=(30,\;75.000)$.

**Paso 2: calcular la pendiente.**

$$ m = \frac{75.000-35.000}{30-10} = \frac{40.000}{20} = 2.000 $$

Esto significa que el costo variable es de $\$2.000$ por cada litro extra.

**Paso 3: encontrar el coeficiente de posición.** Usamos $y=mx+b$ con el primer punto:

$$
\begin{aligned}
35.000 &= 2.000(10) + b \\
35.000 &= 20.000 + b \\
b &= 15.000
\end{aligned}
$$

El costo fijo es de $\$15.000$.

**Paso 4: tabla de valores.**

| Litros $x$ | $0$ | $10$ | $20$ | $30$ | $40$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Costo $C(x)$ | $15.000$ | $35.000$ | $55.000$ | $75.000$ | $95.000$ |

**Paso 5: gráfica.**

<GraficoFuncion
  titulo="Costo de biofertilizante: C(x) = 2000x + 15000"
  expresion="2000*x + 15000"
  :x-min="0" :x-max="40" :y-min="0" :y-max="100000"
  :puntos="[
    { x: 10, y: 35000, label: '(10, 35.000)' },
    { x: 30, y: 75000, label: '(30, 75.000)' }
  ]"
/>

**Respuesta.** La función de costo es **$C(x)=2000x+15000$**.

</details>

---

## 6. Resumen

| Característica | Función constante $f(x)=k$ | Función lineal $f(x)=ax+b$, $a\neq 0$ |
|:---|:---:|:---:|
| Gráfica | Recta horizontal | Recta inclinada |
| Pendiente | $0$ | $a$ |
| Dominio (sin restricciones) | $\mathbb{R}$ | $\mathbb{R}$ |
| Recorrido (sin restricciones) | $\{k\}$ | $\mathbb{R}$ |
| Comportamiento | Ni sube ni baja | Creciente si $a>0$, decreciente si $a<0$ |
| Corte con eje $Y$ | $(0,\,k)$ | $(0,\,b)$ |
| Corte con eje $X$ | No existe (salvo $k=0$) | $\left(-\dfrac{b}{a},\,0\right)$ |

Si una restricción en el dominio cambia, el recorrido cambia con él: recuerda que al multiplicar por un número negativo, las desigualdades se invierten.
