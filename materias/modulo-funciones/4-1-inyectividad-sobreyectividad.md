# 4.1 Inyectividad y Sobreyectividad

Para entender el comportamiento de un modelo (por ejemplo, un ciclo de temperatura a lo largo del año, o una tasa de crecimiento) hay que saber clasificar la función según sus características: si cada resultado viene de una única entrada, si sube o baja, si es simétrica, si se repite. 

En este submódulo revisaremos las bases para decidir cuándo una función tiene **inversa**.

> **Cómo usar esta página:** cada ejemplo está plegado. Haz clic en el título para desplegar la resolución completa, con tablas de valores y gráficas.

---

## 1. Inyectividad

Una función $f$ es **inyectiva** (también se dice "uno a uno") si dos entradas distintas nunca dan el mismo resultado:

$$ f(a)=f(b) \implies a=b $$

Dicho de otra forma: cada $y$ del recorrido tiene **una sola** preimagen. Si encuentras dos entradas distintas $a\neq b$ con $f(a)=f(b)$, la función **no es inyectiva**, y basta ese par para demostrarlo.

**Forma visual (recta horizontal).** Si al trazar cualquier recta horizontal corta la gráfica en **más de un punto**, la función no es inyectiva.

**Cómo demostrar la inyectividad.** Se sigue siempre el mismo esquema:
1. Suponer $f(a)=f(b)$.
2. Despejar algebraicamente hasta llegar a una igualdad del tipo $a=b$.

**Cómo refutar la inyectividad.** Basta encontrar un par $a\neq b$ con $f(a)=f(b)$.

---

<details>
<summary><strong>Ejemplo 1.1 · Demostrar que f(x)=ax+b es inyectiva (a≠0)</strong></summary>

**Enunciado.** Sean $a,b\in\mathbb{R}$ con $a\neq 0$ y $f:\mathbb{R}\to\mathbb{R}$, $f(x)=ax+b$. Demuestre que $f$ es inyectiva.

**Paso 1: suponer.** Sean $x,y\in\mathbb{R}$ tales que $f(x)=f(y)$:
$$ ax+b = ay+b $$

**Paso 2: despejar.** Restamos $b$ a ambos lados:
$$ ax = ay $$
Dividimos por $a$, que es distinto de cero:
$$ x = y $$

**Conclusión.** Como $f(x)=f(y)$ implica $x=y$, la función es inyectiva. Note que el único lugar donde usamos $a\neq 0$ es en la última división. Si $a=0$, $f$ sería constante, y todo $x$ daría lo mismo.

**Ejemplo numérico: $f(x)=3x-2$.**

| $x$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $f(x)=3x-2$ | $-2$ | $1$ | $4$ | $7$ |

Cada entrada da una salida distinta, como esperábamos.

<GraficoFuncion
  titulo="f(x) = 3x − 2  (cada y viene de una sola x)"
  expresion="3*x - 2"
  :x-min="-2" :x-max="4" :y-min="-6" :y-max="10"
  :puntos="[
    { x: 0, y: -2, label: '(0, −2)' },
    { x: 1, y: 1, label: '(1, 1)' },
    { x: 2, y: 4, label: '(2, 4)' }
  ]"
/>

</details>

<details>
<summary><strong>Ejemplo 1.2 · Demostrar que f(x)=(3x+2)/(x−2) es inyectiva</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}-\{2\}\to\mathbb{R}$, $f(x)=\dfrac{3x+2}{x-2}$. Demuestre que $f$ es inyectiva.

**Paso 1: suponer.** Sean $a,b\in\mathbb{R}-\{2\}$ con $f(a)=f(b)$:
$$ \frac{3a+2}{a-2} = \frac{3b+2}{b-2} $$

**Paso 2: quitar los denominadores.** Multiplicamos en cruz (ambos denominadores son distintos de cero):
$$ (3a+2)(b-2) = (3b+2)(a-2) $$

**Paso 3: desarrollar.**
$$ 3ab - 6a + 2b - 4 = 3ab - 6b + 2a - 4 $$

**Paso 4: simplificar.** Cancelamos $3ab$ y $-4$ en ambos lados:
$$
\begin{aligned}
-6a + 2b &= -6b + 2a \\
8b &= 8a \\
a &= b
\end{aligned}
$$

**Conclusión.** La función es inyectiva.

**Tabla de valores para verificar.**

| $x$ | $0$ | $1$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-1$ | $-5$ | $11$ | $7$ |

Todos los valores son distintos, como debe ser.

<GraficoFuncion
  titulo="f(x) = (3x + 2)/(x − 2)  (asíntotas x = 2 e y = 3)"
  expresion="(3*x + 2)/(x - 2)"
  :x-min="-4" :x-max="8" :y-min="-10" :y-max="12"
  :puntos="[
    { x: 0, y: -1, label: '(0, −1)' },
    { x: 4, y: 7, label: '(4, 7)' }
  ]"
/>

</details>

<details>
<summary><strong>Ejemplo 1.3 · Demostrar que f(x)=x²+2x−2 es inyectiva en [−1, 1[</strong></summary>

**Enunciado.** Sea $f:\,[-1,\,1[\to\mathbb{R}$, $f(x)=x^2+2x-2$. Demuestre que $f$ es inyectiva.

**Idea previa.** Una parábola completa **no** es inyectiva: $f(x)=f(-2-x)$ para cualquier $x$, porque el eje de simetría es $x=-1$. Pero si nos quedamos a un solo lado del vértice, la función es monótona y por lo tanto inyectiva. Aquí el vértice está en $x=-1$, que es el extremo izquierdo del dominio.

**Paso 1: suponer.** Sean $x,y\in[-1,1[$ con $f(x)=f(y)$:
$$ x^2+2x-2 = y^2+2y-2 $$

**Paso 2: pasar todo a un lado.**
$$ x^2-y^2+2x-2y = 0 $$

**Paso 3: factorizar.** Usamos $x^2-y^2=(x-y)(x+y)$ y sacamos factor común $2$:
$$ (x-y)(x+y) + 2(x-y) = 0 \implies (x-y)(x+y+2)=0 $$

**Paso 4: analizar los dos factores.** Por lo tanto $x=y$ **o** $x+y+2=0$.
Veamos si el segundo caso es posible. Como $x\geq -1$ e $y\geq -1$, tenemos $x+y\geq -2$, así que $x+y+2\geq 0$. La igualdad $x+y+2=0$ solo ocurre si $x=y=-1$, pero entonces ya tenemos $x=y$.

**Conclusión.** En cualquier caso, $x=y$. La función es inyectiva en $[-1,1[$.

<GraficoFuncion
  titulo="f(x) = x² + 2x − 2  con dominio [−1, 1["
  expresion="x*x + 2*x - 2"
  dominio="[-1, 1["
  :x-min="-2" :x-max="2" :y-min="-4" :y-max="2"
  :puntos="[
    { x: -1, y: -3, label: 'Inicio (−1, −3)' },
    { x: 1, y: 1, label: 'no incluido (1, 1)', abierto: true }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 1.4 · Demostrar que f es inyectiva con dos reglas distintas</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}\to\mathbb{R}$ definida por
$$
f(x)=\begin{cases} x^2 & \text{si } x>2 \\ x+2 & \text{si } x\leq 2 \end{cases}
$$
Determine si $f$ es inyectiva.

**Estrategia.** Hay tres casos posibles para $f(x)=f(y)$:
1. Ambos $x,y$ en el tramo $x>2$. ($x^2=y^2 \implies x=y$)
2. Ambos en el tramo $x\leq 2$. ($x+2=y+2 \implies x=y$)
3. Uno en cada tramo.

**Caso 3: $x>2$ e $y\leq 2$.** Veamos los recorridos de cada tramo:
* Si $x>2$: $x^2>4$. El recorrido del primer tramo es $]4,+\infty[$.
* Si $y\leq 2$: $y+2\leq 4$. El recorrido del segundo tramo es $]-\infty,\,4]$.

Los dos recorridos **no se superponen**. Por lo tanto $f(x)=f(y)$ es imposible en este caso.

**Conclusión.** En los tres casos, $f(x)=f(y)$ implica $x=y$. La función es inyectiva.

<GraficoFuncion
  titulo="f(x) = x + 2 si x ≤ 2;  x² si x > 2  (inyectiva)"
  :expresion="['x + 2', 'x*x']"
  :dominio="['[-2, 2]', ']2, 4]']"
  :x-min="-3" :x-max="5" :y-min="-2" :y-max="17"
  :puntos="[
    { x: 2, y: 4, label: '(2, 4)' },
    { x: 4, y: 16, label: '(4, 16)' }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 1.5 · Encontrar dos entradas con la misma salida (NO inyectiva)</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}\to\mathbb{R}$ definida por
$$
f(x)=\begin{cases} \sqrt{x-1} & \text{si } x>1 \\ x^3 & \text{si } x\leq 1 \end{cases}
$$
Determine si $f$ es inyectiva.

**Paso 1: analizar los recorridos de cada tramo.**
* Tramo $x>1$: $x-1>0$, así que $\sqrt{x-1}>0$. Recorrido: $]0,+\infty[$.
* Tramo $x\leq 1$: $x^3\leq 1$. Recorrido: $]-\infty,\,1]$.

**Paso 2: buscar la superposición.** Los dos recorridos se superponen en $]0,1]$. Cualquier valor $y\in\,]0,1]$ puede venir de los dos tramos. Eso ya indica que **no es inyectiva**.

**Paso 3: encontrar explícitamente los dos valores.** Tomemos $y=\frac12$:
* Del primer tramo: $\sqrt{x-1}=\frac12 \implies x-1=\frac14 \implies x=\frac54$. Como $\frac54>1$, es válido.
* Del segundo tramo: $x^3=\frac12 \implies x=\sqrt[3]{\frac12}\approx 0{,}794$. Como $0{,}794\leq 1$, es válido.

Dos entradas distintas, $\frac54\neq \sqrt[3]{\frac12}$, dan la misma salida $\frac12$. Por lo tanto $f$ **no es inyectiva**.

<GraficoFuncion
  titulo="f(x) = √(x−1) si x > 1;  x³ si x ≤ 1  (valor 1/2 se alcanza dos veces)"
  :expresion="['Math.sqrt(x - 1)', 'x*x*x']"
  :dominio="[']1, 4]', '[-2, 1]']"
  :x-min="-2" :x-max="4" :y-min="-2" :y-max="3"
  :puntos="[
    { x: 1.25, y: 0.5, label: '(5/4, 1/2)' },
    { x: 0.7937, y: 0.5, label: '(∛(1/2), 1/2)' }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 1.6 · Redefinir el dominio de g(x)=x/(x²+5) para que sea inyectiva</strong></summary>

**Enunciado.** Sea $g:\mathbb{R}\to\mathbb{R}$, $g(x)=\dfrac{x}{x^2+5}$. Determine si $g$ es inyectiva. Si no lo es, redefina su dominio para que sí lo sea.

**Paso 1: buscar dos entradas con la misma salida.** Probemos $a=1$ y $b=5$:
$$ g(1)=\frac{1}{6} \qquad g(5)=\frac{5}{25+5}=\frac{5}{30}=\frac{1}{6} $$
Como $g(1)=g(5)$ con $1\neq 5$, la función **no es inyectiva**.

**Paso 2: encontrar la condición general.** Supongamos $g(a)=g(b)$:
$$
\begin{aligned}
\frac{a}{a^2+5} &= \frac{b}{b^2+5} \\
a(b^2+5) &= b(a^2+5) \\
ab^2 + 5a &= a^2b + 5b \\
(b-a)(ab-5) &= 0
\end{aligned}
$$
Por lo tanto, $g(a)=g(b)$ con $a\neq b$ ocurre **exactamente** cuando $ab=5$.

**Paso 3: redefinir el dominio.** Necesitamos un conjunto donde no existan dos números distintos $a\neq b$ con $ab=5$.
Cualquiera de estos dominios hace a la función inyectiva: $[-\sqrt5,\ \sqrt5]$, $]-1,\ \sqrt5]$, o $[-\sqrt5,\ 1[$.

<GraficoFuncion
  titulo="g(x) = x/(x² + 5)  (no inyectiva en ℝ)"
  expresion="x/(x*x + 5)"
  :x-min="-6" :x-max="6" :y-min="-0.4" :y-max="0.4"
  :puntos="[
    { x: 1, y: 0.1667, label: '(1, 1/6)' },
    { x: 5, y: 0.1667, label: '(5, 1/6)' }
  ]"
/>
</details>

---

## 2. Sobreyectividad y Biyectividad

Una función $f:A\to B$ es **sobreyectiva** (también llamada **epiyectiva**) si todo elemento del codominio $B$ es imagen de algún elemento de $A$. Dicho de otra forma, $R_f=B$.

Una función es **biyectiva** si y solo si es **inyectiva y sobreyectiva** al mismo tiempo. Cada elemento de $B$ tiene **exactamente una** preimagen en $A$.

**Propiedad de la composición.** Si $f:A\to B$ y $g:B\to C$ son inyectivas, entonces $g\circ f$ es inyectiva. Si ambas son sobreyectivas, $g\circ f$ también lo es.

---

<details>
<summary><strong>Ejemplo 2.1 · Demostrar inyectividad y sobreyectividad de f(x)=(x−1)/x</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}-\{0\}\to\mathbb{R}-\{1\}$, $f(x)=\dfrac{x-1}{x}$. Determine si $f$ es biyectiva.

**a) Inyectividad.** Sean $a,b\in\mathbb{R}-\{0\}$ con $f(a)=f(b)$:
$$
\begin{aligned}
\frac{a-1}{a} &= \frac{b-1}{b} \\
1-\frac{1}{a} &= 1-\frac{1}{b} \\
\frac{1}{a} &= \frac{1}{b} \\
a &= b
\end{aligned}
$$
Por lo tanto $f$ es inyectiva.

**b) Sobreyectividad.** Debemos mostrar que todo $y\in\mathbb{R}-\{1\}$ es imagen de algún $x$. Sea $y\in\mathbb{R}$ con $y=f(x)$:
$$
\begin{aligned}
y &= \frac{x-1}{x} \\
xy &= x-1 \\
x(y-1) &= -1 \\
x &= \frac{1}{1-y}
\end{aligned}
$$
Esta $x$ existe siempre que $y\neq 1$. Además, $x\neq 0$ siempre (porque $\frac{1}{1-y}$ nunca es cero). Por lo tanto todo $y\in\mathbb{R}-\{1\}$ tiene una preimagen en $\mathbb{R}-\{0\}$, y $R_f=\mathbb{R}-\{1\}$. La función es sobreyectiva.

**Conclusión.** $f$ es inyectiva y sobreyectiva, así que es **biyectiva**.

<GraficoFuncion
  titulo="f(x) = (x − 1)/x  (asíntotas x = 0 e y = 1)"
  expresion="(x-1)/x"
  :x-min="-5" :x-max="5" :y-min="-4" :y-max="4"
  :puntos="[
    { x: -1, y: 2, label: '(−1, 2)' },
    { x: 2, y: 0.5, label: '(2, 1/2)' }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 2.2 · Revisar si f(x)=x (x>0), f(x)=x² (x≤0) es biyectiva</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}\to\mathbb{R}$ definida por
$$
f(x)=\begin{cases} x & \text{si } x>0 \\ x^2 & \text{si } x\leq 0 \end{cases}
$$
Determine si $f$ es biyectiva.

**Contraejemplo de Inyectividad.** Tomemos $a=4$ y $b=-2$:
* $f(4) = 4$, porque $4>0$ usa la regla $x$.
* $f(-2) = (-2)^2 = 4$, porque $-2\leq 0$ usa la regla $x^2$.

Dos entradas distintas dan $4$. Por lo tanto **$f$ no es inyectiva**, y como una función biyectiva debe ser inyectiva, **$f$ tampoco es biyectiva**.

**Recorrido (Sobreyectividad).** Para $x>0$ la función toma valores en $]0,+\infty[$, y para $x\leq 0$ toma valores en $[0,+\infty[$. Entre los dos, el recorrido es $[0,+\infty[$. Eso tampoco llega a todo $\mathbb{R}$, así que $f$ no es sobreyectiva sobre $\mathbb{R}$.

<GraficoFuncion
  titulo="f(x) = x si x > 0;  x² si x ≤ 0  (no inyectiva)"
  :expresion="['x', 'x*x']"
  :dominio="[']0, 5]', '[-3, 0]']"
  :x-min="-4" :x-max="5" :y-min="-1" :y-max="9"
  :puntos="[
    { x: 4, y: 4, label: '(4, 4)' },
    { x: -2, y: 4, label: '(−2, 4)' }
  ]"
/>

**Conclusión.** Con la regla tal como se presenta, $f$ **no es biyectiva**.
</details>