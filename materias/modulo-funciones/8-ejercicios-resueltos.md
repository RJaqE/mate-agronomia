# 8. Taller de Ejercicios Resueltos

Esta es tu zona de entrenamiento. Aquí están **todos los ejercicios de la Guía 1 de funciones** (Fundamentos de matemáticas, IMA – PUCV), en el mismo orden en que aparecen en el taller.

Intenta resolver cada apartado por tu cuenta en un cuaderno. Luego, despliega la respuesta para comparar tu desarrollo paso a paso.

> **Cómo usar esta página:** cada apartado está plegado. Haz clic en el título para ver el desarrollo completo, con tablas de valores y gráficas cuando ayudan a entender el resultado.

---

## Ejercicio 1 · Dominio y recorrido

Para cada función, encuentra el **dominio** (qué valores de $x$ puedes usar) y el **recorrido** (qué valores de $y$ se obtienen).

<details>
<summary><strong>1(a) · f(x) = 1/x</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=\dfrac{1}{x}$.

**Dominio:** no se puede dividir por cero, así que $x\neq 0$.

**Recorrido:** escribimos $y=\dfrac1x$ y despejamos $x$:

$$ y=\frac1x \implies x=\frac1y $$

Esta $x$ existe siempre que $y\neq 0$. Por lo tanto $y$ nunca vale $0$.

**Tabla de valores:**

| $x$ | $-2$ | $-1$ | $-\frac12$ | $\frac12$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-\frac12$ | $-1$ | $-2$ | $2$ | $1$ | $\frac12$ |

<GraficoFuncion
  titulo="f(x) = 1/x"
  :expresion="['1/x', '1/x']"
  :dominio="[']-6, 0[', ']0, 6]']"
  :x-min="-6" :x-max="6" :y-min="-6" :y-max="6"
/>

**Respuesta:** $Dom(f)=\mathbb{R}-\{0\}$ y $Rec(f)=\mathbb{R}-\{0\}$.

</details>

---

<details>
<summary><strong>1(b) · f(x) = 3x² − 9x + 3</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=3x^2-9x+3$.

**Dominio:** es un polinomio, así que $Dom(f)=\mathbb{R}$.

**Recorrido:** completamos el cuadrado. Factorizamos el $3$ de los dos primeros términos:

$$
\begin{aligned}
f(x) &= 3\left(x^2-3x\right)+3 \\
&= 3\left(x^2-3x+\tfrac94\right)-\tfrac{27}{4}+3 \\
&= 3\left(x-\tfrac32\right)^2-\tfrac{15}{4}
\end{aligned}
$$

Como $3\left(x-\frac32\right)^2\geq 0$ y su mínimo es $0$ (en $x=\frac32$), la función tiene un mínimo de $-\frac{15}{4}$. La parábola abre hacia arriba, así que el recorrido es $\left[-\frac{15}{4},+\infty\right[$.

**Vértice:** $\left(\frac32,\,-\frac{15}{4}\right)$. Comprobación: $f\!\left(\frac32\right)=\frac{27}{4}-\frac{27}{2}+3=-\frac{15}{4}$ ✓.

**Tabla de valores:**

| $x$ | $0$ | $1$ | $\frac32$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $3$ | $-3$ | $-\frac{15}{4}$ | $-3$ | $3$ |

<GraficoFuncion
  titulo="f(x) = 3x² − 9x + 3  (vértice en (3/2, −15/4))"
  expresion="3*x*x - 9*x + 3"
  :x-min="-1" :x-max="4" :y-min="-5" :y-max="6"
  :puntos="[
    { x: 1.5, y: -3.75, label: 'Vértice (3/2, −15/4)' }
  ]"
/>

**Respuesta:** $Dom(f)=\mathbb{R}$ y $Rec(f)=\left[-\frac{15}{4},+\infty\right[$.

</details>

---

<details>
<summary><strong>1(c) · f(x) = √(x² − 2x − 3)</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=\sqrt{x^2-2x-3}$.

**Dominio:** el radicando debe ser mayor o igual a cero:

$$ x^2-2x-3\geq 0 \iff (x-3)(x+1)\geq 0 $$

Los puntos críticos son $x=-1$ y $x=3$. El producto es positivo fuera de las raíces y cero en ellas:

| Intervalo | $x<-1$ | $-1<x<3$ | $x>3$ |
|:---|:---:|:---:|:---:|
| $(x-3)$ | $-$ | $-$ | $+$ |
| $(x+1)$ | $-$ | $+$ | $+$ |
| Producto | $+$ | $-$ | $+$ |

Por lo tanto $Dom(f)=\,]-\infty,-1]\cup[3,+\infty[$.

**Recorrido:** el radicando $x^2-2x-3=(x-1)^2-4$ puede tomar valores desde $0$ hasta $+\infty$ dentro del dominio:
* Para $x\geq 3$, el radicando crece desde $0$ hasta $+\infty$.
* Para $x\leq -1$, el radicando baja desde $+\infty$ hasta $0$.

La raíz de esos valores da todo $[0,+\infty[$.

**Tabla de valores:**

| $x$ | $-3$ | $-2$ | $-1$ | $3$ | $4$ | $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $x^2-2x-3$ | $12$ | $5$ | $0$ | $0$ | $5$ | $12$ |
| $f(x)$ | $\sqrt{12}\approx 3{,}46$ | $\sqrt5\approx 2{,}24$ | $0$ | $0$ | $\sqrt5\approx 2{,}24$ | $\sqrt{12}\approx 3{,}46$ |

<GraficoFuncion
  titulo="f(x) = √(x² − 2x − 3)  (dominio ]−∞,−1] ∪ [3,+∞[)"
  expresion="Math.sqrt(x*x - 2*x - 3)"
  :dominio="[']-6, -1]', '[3, 8]']"
  :x-min="-6" :x-max="8" :y-min="0" :y-max="7"
  :puntos="[
    { x: -1, y: 0, label: '(−1, 0)' },
    { x: 3, y: 0, label: '(3, 0)' }
  ]"
/>

**Respuesta:** $Dom(f)=\,]-\infty,-1]\cup[3,+\infty[$ y $Rec(f)=[0,+\infty[$.

</details>

---

<details>
<summary><strong>1(d) · f(x) = 2x² + 16x + 1</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=2x^2+16x+1$.

**Dominio:** polinomio, así que $Dom(f)=\mathbb{R}$.

**Recorrido:** completamos el cuadrado:

$$
\begin{aligned}
f(x) &= 2\left(x^2+8x\right)+1 \\
&= 2\left(x^2+8x+16\right)-32+1 \\
&= 2(x+4)^2-31
\end{aligned}
$$

El término $2(x+4)^2$ es mínimo y vale $0$ en $x=-4$. Como abre hacia arriba, el recorrido es $[-31,+\infty[$.

**Tabla de valores:**

| $x$ | $-8$ | $-5$ | $-4$ | $-3$ | $0$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $1$ | $-29$ | $-31$ | $-29$ | $1$ |

<GraficoFuncion
  titulo="f(x) = 2x² + 16x + 1  (vértice en (−4, −31))"
  expresion="2*x*x + 16*x + 1"
  :x-min="-10" :x-max="2" :y-min="-35" :y-max="5"
  :puntos="[
    { x: -4, y: -31, label: 'Vértice (−4, −31)' }
  ]"
/>

**Respuesta:** $Dom(f)=\mathbb{R}$ y $Rec(f)=[-31,+\infty[$.

</details>

---

<details>
<summary><strong>1(e) · f(x) = −2x² − 16x − 1</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=-2x^2-16x-1$.

**Dominio:** polinomio, así que $Dom(f)=\mathbb{R}$.

**Recorrido:** completamos el cuadrado:

$$
\begin{aligned}
f(x) &= -2\left(x^2+8x\right)-1 \\
&= -2\left(x^2+8x+16\right)+32-1 \\
&= -2(x+4)^2+31
\end{aligned}
$$

El término $-2(x+4)^2$ es máximo y vale $0$ en $x=-4$. Como abre hacia abajo, el recorrido es $]-\infty,31]$.

**Tabla de valores:**

| $x$ | $-8$ | $-5$ | $-4$ | $-3$ | $0$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-1$ | $29$ | $31$ | $29$ | $-1$ |

<GraficoFuncion
  titulo="f(x) = −2x² − 16x − 1  (vértice máximo en (−4, 31))"
  expresion="-2*x*x - 16*x - 1"
  :x-min="-10" :x-max="2" :y-min="-35" :y-max="35"
  :puntos="[
    { x: -4, y: 31, label: 'Máximo (−4, 31)' }
  ]"
/>

**Respuesta:** $Dom(f)=\mathbb{R}$ y $Rec(f)=\,]-\infty,31]$.

</details>

---

<details>
<summary><strong>1(f) · f(x) = 2/(x − 4)</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=\dfrac{2}{x-4}$.

**Dominio:** el denominador no puede ser cero: $x\neq 4$.

**Recorrido:** escribimos $y=\dfrac{2}{x-4}$ y despejamos $x$:

$$ y(x-4)=2 \implies x=4+\frac{2}{y} $$

Esta $x$ existe siempre que $y\neq 0$. La fracción $\frac{2}{x-4}$ nunca vale cero, porque su numerador es $2$.

**Tabla de valores:**

| $x$ | $0$ | $2$ | $3$ | $5$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-\frac12$ | $-1$ | $-2$ | $2$ | $1$ |

<GraficoFuncion
  titulo="f(x) = 2/(x − 4)  (asíntotas x = 4 e y = 0)"
  :expresion="['2/(x-4)', '2/(x-4)']"
  :dominio="[']-6, 4[', ']4, 10]']"
  :x-min="-6" :x-max="10" :y-min="-6" :y-max="6"
/>

**Respuesta:** $Dom(f)=\mathbb{R}-\{4\}$ y $Rec(f)=\mathbb{R}-\{0\}$.

</details>

---

<details>
<summary><strong>1(g) · f(x) = (x + 3)/(x − 2)</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=\dfrac{x+3}{x-2}$.

**Dominio:** $x-2\neq 0$, así que $x\neq 2$.

**Recorrido:** reescribimos la fracción separando la parte constante:

$$ \frac{x+3}{x-2}=\frac{(x-2)+5}{x-2}=1+\frac{5}{x-2} $$

La fracción $\frac{5}{x-2}$ nunca vale cero, así que $f(x)$ nunca vale $1$.

**Comprobación por despeje:** de $y(x-2)=x+3$ obtenemos $x(y-1)=2y+3$, es decir $x=\dfrac{2y+3}{y-1}$. El denominador $y-1$ no puede ser cero, así que $y\neq 1$.

**Tabla de valores:**

| $x$ | $0$ | $1$ | $3$ | $4$ | $7$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-\frac32$ | $-4$ | $6$ | $\frac72$ | $2$ |

<GraficoFuncion
  titulo="f(x) = (x + 3)/(x − 2)  (asíntotas x = 2 e y = 1)"
  :expresion="['(x+3)/(x-2)', '(x+3)/(x-2)']"
  :dominio="[']-6, 2[', ']2, 8]']"
  :x-min="-6" :x-max="8" :y-min="-8" :y-max="10"
/>

**Respuesta:** $Dom(f)=\mathbb{R}-\{2\}$ y $Rec(f)=\mathbb{R}-\{1\}$.

</details>

---

<details>
<summary><strong>1(h) · f(x) = (x² − 1)/(x − 1)</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=\dfrac{x^2-1}{x-1}$.

**Dominio:** $x-1\neq 0$, así que $x\neq 1$.

**Simplificación:** como $x^2-1=(x-1)(x+1)$, para $x\neq 1$ tenemos

$$ f(x)=\frac{(x-1)(x+1)}{x-1}=x+1 $$

**Recorrido:** la recta $y=x+1$ toma todos los valores reales excepto el que corresponde a $x=1$, que sería $y=2$. Ese valor no se alcanza, porque $x=1$ no está en el dominio.

**Tabla de valores:**

| $x$ | $-1$ | $0$ | $0{,}5$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $0$ | $1$ | $1{,}5$ | (no existe) | $3$ |

<GraficoFuncion
  titulo="f(x) = (x² − 1)/(x − 1) = x + 1  (hueco en (1, 2))"
  :expresion="['x+1', 'x+1']"
  :dominio="[']-4, 1[', ']1, 4]']"
  :x-min="-4" :x-max="4" :y-min="-3" :y-max="5"
  :puntos="[
    { x: 1, y: 2, label: 'hueco (1, 2)', abierto: true }
  ]"
/>

**Respuesta:** $Dom(f)=\mathbb{R}-\{1\}$ y $Rec(f)=\mathbb{R}-\{2\}$.

</details>

---

<details>
<summary><strong>1(i) · f(x) = (x² − 1)/(x + 3)</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=\dfrac{x^2-1}{x+3}$.

**Dominio:** $x+3\neq 0$, así que $x\neq -3$.

**Reescritura:** dividimos $x^2-1$ entre $x+3$. Como $x^2-1=(x+3)(x-3)+8$:

$$ f(x)=x-3+\frac{8}{x+3} $$

**Recorrido:** sea $t=x+3$ (con $t\neq 0$). Entonces $f=t-6+\dfrac{8}{t}$.
* Si $t>0$: por la desigualdad entre la media aritmética y geométrica, $t+\frac8t\geq 2\sqrt8=4\sqrt2$, con igualdad en $t=2\sqrt2$. Por lo tanto $f\geq -6+4\sqrt2$.
* Si $t<0$: $t+\frac8t\leq -4\sqrt2$, con igualdad en $t=-2\sqrt2$. Por lo tanto $f\leq -6-4\sqrt2$.

Los valores entre $-6-4\sqrt2$ y $-6+4\sqrt2$ no se alcanzan. Así:

$$ Rec(f)=\,]-\infty,\,-6-4\sqrt2\,]\ \cup\ [\,-6+4\sqrt2,\,+\infty[ $$

Con $4\sqrt2\approx 5{,}657$: $Rec(f)\approx\,]-\infty,-11{,}66]\cup[-0{,}34,+\infty[$.

**Tabla de valores:**

| $x$ | $-5$ | $-4$ | $-2$ | $-0{,}17$ | $0$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-12$ | $-15$ | $3$ | $\approx -0{,}34$ | $-\frac13$ | $\frac35$ |

Los valores $-12$ y $-15$ quedan por debajo de $-11{,}66$, y el valor $\approx -0{,}34$ es el mínimo local del tramo de la derecha, como predice el recorrido.

<GraficoFuncion
  titulo="f(x) = (x² − 1)/(x + 3)  (hueco en x = −3; mínimo local ≈ −0,34)"
  :expresion="['(x*x-1)/(x+3)', '(x*x-1)/(x+3)']"
  :dominio="[']-10, -3[', ']-3, 6]']"
  :x-min="-10" :x-max="6" :y-min="-15" :y-max="15"
/>

**Respuesta:** $Dom(f)=\mathbb{R}-\{-3\}$ y $Rec(f)=\,]-\infty,-6-4\sqrt2]\cup[-6+4\sqrt2,+\infty[$.

</details>

---

<details>
<summary><strong>1(j) · f(x) = ((x − 1)² − 9)/(x² − 4x − 21)</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=\dfrac{(x-1)^2-9}{x^2-4x-21}$.

**Factorización:** el numerador es $(x-1)^2-9=x^2-2x-8=(x-4)(x+2)$, y el denominador es $x^2-4x-21=(x-7)(x+3)$. Así:

$$ f(x)=\frac{(x-4)(x+2)}{(x-7)(x+3)} $$

**Dominio:** el denominador se anula en $x=7$ y $x=-3$. Entonces $Dom(f)=\mathbb{R}-\{-3,\,7\}$.

**Recorrido:** escribimos $y=f(x)$ y pasamos el denominador:

$$ y(x^2-4x-21)=x^2-2x-8 $$

Agrupamos como ecuación cuadrática en $x$:

$$ (y-1)x^2+(2-4y)x+(8-21y)=0 $$

Para que exista $x$ real, el discriminante debe ser mayor o igual a cero:

$$
\begin{aligned}
\Delta(y) &= (2-4y)^2-4(y-1)(8-21y) \\
&= 100y^2-132y+36 \\
&= 4\left(25y^2-33y+9\right)\geq 0
\end{aligned}
$$

Las raíces de $25y^2-33y+9=0$ son $y=\dfrac{33\pm\sqrt{189}}{50}=\dfrac{33\pm 3\sqrt{21}}{50}$. Por lo tanto

$$ Rec(f)=\left]-\infty,\ \frac{33-3\sqrt{21}}{50}\right]\ \cup\ \left[\frac{33+3\sqrt{21}}{50},\ +\infty\right[ $$

**Verificación de los excluidos:** si $x=-3$ o $x=7$ fueran solución de la cuadrática para algún $y$, el resultado sería un valor de $y$ "falso". Al reemplazar, obtenemos $-7\neq 0$ y $-27\neq 0$ respectivamente, así que nunca ocurre. Por eso el recorrido no tiene valores extra.

**Valores aproximados:** $\frac{33-3\sqrt{21}}{50}\approx 0{,}385$ y $\frac{33+3\sqrt{21}}{50}\approx 0{,}935$.

**Tabla de valores:**

| $x$ | $0$ | $2$ | $4$ | $6$ | $10$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $\frac{8}{21}\approx 0{,}38$ | $0{,}32$ | $0$ | $-\frac{16}{9}\approx -1{,}78$ | $\frac{72}{39}\approx 1{,}85$ |

<GraficoFuncion
  titulo="f(x) = ((x−1)² − 9)/(x² − 4x − 21)  (asíntotas x = −3, x = 7 e y = 1)"
  :expresion="['((x-1)*(x-1)-9)/(x*x-4*x-21)', '((x-1)*(x-1)-9)/(x*x-4*x-21)', '((x-1)*(x-1)-9)/(x*x-4*x-21)']"
  :dominio="[']-10, -3[', ']-3, 7[', ']7, 12]']"
  :x-min="-10" :x-max="12" :y-min="-4" :y-max="4"
/>

**Respuesta:** $Dom(f)=\mathbb{R}-\{-3,7\}$ y $Rec(f)=\left]-\infty,\frac{33-3\sqrt{21}}{50}\right]\cup\left[\frac{33+3\sqrt{21}}{50},+\infty\right[$.

</details>

---

<details>
<summary><strong>1(k) · f(x) = 2/(x − 1) + 1/(x − 3)</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=\dfrac{2}{x-1}+\dfrac{1}{x-3}$.

**Dominio:** los denominadores no pueden ser cero: $x\neq 1$ y $x\neq 3$. Entonces $Dom(f)=\mathbb{R}-\{1,3\}$.

**Recorrido:** sumamos las fracciones:

$$
\begin{aligned}
f(x) &= \frac{2(x-3)+(x-1)}{(x-1)(x-3)} = \frac{3x-7}{x^2-4x+3}
\end{aligned}
$$

Escribimos $y=f(x)$ y ordenamos como ecuación cuadrática en $x$:

$$ y(x^2-4x+3)=3x-7 \implies yx^2-(4y+3)x+(3y+7)=0 $$

**Discriminante:**

$$ \Delta(y)=(4y+3)^2-4y(3y+7)=4y^2-4y+9=4\left(y-\tfrac12\right)^2+8>0 $$

Es siempre positivo, así que para cualquier $y$ existen soluciones reales. Para $y=0$ la ecuación se reduce a $-3x+7=0$, con solución $x=\frac73$, válida.

**Verificación de los excluidos:** con $x=1$, la ecuación queda $4=0$, falso. Con $x=3$, queda $-2=0$, falso. Ninguna solución cae en los polos.

Por lo tanto $Rec(f)=\mathbb{R}$.

**Tabla de valores:**

| $x$ | $0$ | $2$ | $\frac73$ | $4$ | $7$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-\frac73\approx -2{,}33$ | $1$ | $0$ | $\frac53\approx 1{,}67$ | $\frac{7}{12}\approx 0{,}58$ |

Comprobación de $f(7)$: $\frac{2}{7-1}+\frac{1}{7-3}=\frac13+\frac14=\frac{7}{12}$ ✓.

<GraficoFuncion
  titulo="f(x) = 2/(x−1) + 1/(x−3)  (asíntotas x = 1 y x = 3)"
  :expresion="['2/(x-1)+1/(x-3)', '2/(x-1)+1/(x-3)', '2/(x-1)+1/(x-3)']"
  :dominio="[']-5, 1[', ']1, 3[', ']3, 7]']"
  :x-min="-5" :x-max="7" :y-min="-8" :y-max="8"
  :puntos="[
    { x: 2.3333, y: 0, label: 'corte (7/3, 0)' }
  ]"
/>

**Respuesta:** $Dom(f)=\mathbb{R}-\{1,3\}$ y $Rec(f)=\mathbb{R}$.

</details>

---

<details>
<summary><strong>1(l) · f(x) = √(x / (|x| − 1))</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x)=\sqrt{\dfrac{x}{|x|-1}}$.

**Dominio:** hay dos condiciones:
1. El denominador no puede ser cero: $|x|\neq 1$.
2. El radicando debe ser mayor o igual a cero.

**Caso $x\geq 0$:** $|x|=x$, y $\frac{x}{x-1}\geq 0$ con $x\neq 1$. Esto ocurre si $x=0$ o $x>1$.

**Caso $x<0$:** $|x|=-x$, y $\frac{x}{-x-1}\geq 0$. Como $\frac{x}{-x-1}=\frac{-x}{x+1}$, la condición es $\frac{-x}{x+1}\geq 0$, es decir $\frac{x}{x+1}\leq 0$, que se cumple para $-1<x\leq 0$. Con $x<0$, queda $-1<x<0$.

Juntando ambos casos: $Dom(f)=\,]-1,0]\cup\,]1,+\infty[$.

**Recorrido:**
* Para $x>1$: $\frac{x}{x-1}=1+\frac{1}{x-1}$ toma valores en $]1,+\infty[$ (cuando $x\to 1^+$ crece sin límite). La raíz da $]1,+\infty[$.
* Para $-1<x\leq 0$: con $t=-x\in[0,1[$, la expresión es $\frac{t}{1-t}$, que toma todos los valores de $[0,+\infty[$. La raíz da $[0,+\infty[$.

Por lo tanto $Rec(f)=[0,+\infty[$.

**Tabla de valores:**

| $x$ | $-0{,}9$ | $-0{,}5$ | $0$ | $2$ | $3$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $\dfrac{x}{\lvert x\rvert-1}$ | $9$ | $1$ | $0$ | $2$ | $\frac32$ | $\frac65$ |
| $f(x)$ | $3$ | $1$ | $0$ | $\sqrt2\approx 1{,}41$ | $\approx 1{,}22$ | $\approx 1{,}10$ |

<GraficoFuncion
  titulo="f(x) = √(x/(|x| − 1))  (dominio ]−1,0] ∪ ]1,+∞[)"
  expresion="Math.sqrt(x/(Math.abs(x)-1))"
  :dominio="[']-1, 0]', ']1, 6]']"
  :x-min="-1.5" :x-max="6" :y-min="0" :y-max="5"
  :puntos="[
    { x: -0.5, y: 1, label: '(−1/2, 1)' },
    { x: 2, y: 1.414, label: '(2, √2)' }
  ]"
/>

**Respuesta:** $Dom(f)=\,]-1,0]\cup]1,+\infty[$ y $Rec(f)=[0,+\infty[$.

</details>

---

## Ejercicio 2 · Conjuntos de entrada o de salida

Encuentra el conjunto $A$ o $B$ más grande para que la función esté bien definida con el codominio pedido.

<details>
<summary><strong>2(a) · f: A → [10, +∞[, f(x) = 2 + √(x − 1)</strong></summary>

**Problema:** Encontrar $A\subseteq\mathbb{R}$ para que $f:A\to[10,+\infty[$, con $f(x)=2+\sqrt{x-1}$, esté bien definida.

**Condición 1 (raíz):** $x-1\geq 0$, es decir $x\geq 1$.

**Condición 2 (codominio):** $f(x)\geq 10$:

$$
\begin{aligned}
2+\sqrt{x-1} &\geq 10 \\
\sqrt{x-1} &\geq 8 \\
x-1 &\geq 64 \\
x &\geq 65
\end{aligned}
$$

La condición 2 ya implica la 1. Por lo tanto $A=[65,+\infty[$.

**Tabla de valores:**

| $x$ | $1$ | $10$ | $50$ | $65$ | $82$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $2$ | $5$ | $9$ | $10$ | $11$ |

*(Para $x=1$ y $x=50$ el valor de $f$ está fuera del codominio, así que no entran a $A$.)*

**Respuesta:** $A=[65,+\infty[$.

</details>

---

<details>
<summary><strong>2(b) · f: [−1, 6] → B, f(x) = (x − 1)/(x + 2)</strong></summary>

**Problema:** Encontrar el conjunto $B$ más pequeño que contiene todos los valores de $f(x)=\dfrac{x-1}{x+2}$ para $x\in[-1,6]$.

**Paso 1: reescribir la fracción.** Como $x-1=(x+2)-3$:

$$ \frac{x-1}{x+2}=1-\frac{3}{x+2} $$

**Paso 2: monotonía.** Cuando $x$ aumenta en $[-1,6]$, el denominador $x+2$ aumenta (de $1$ a $8$). Entonces $\frac{3}{x+2}$ disminuye, y $1-\frac{3}{x+2}$ aumenta. Por lo tanto $f$ es creciente en el intervalo.

**Paso 3: extremos.**
* $f(-1)=\dfrac{-2}{1}=-2$.
* $f(6)=\dfrac{5}{8}$.

Como $f$ es creciente, toma todos los valores entre $-2$ y $\frac58$:

$$ B=\left[-2,\ \tfrac58\right] $$

**Tabla de valores:**

| $x$ | $-1$ | $0$ | $2$ | $4$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-2$ | $-\frac12$ | $\frac14$ | $\frac12$ | $\frac58$ |

<GraficoFuncion
  titulo="f(x) = (x − 1)/(x + 2)  con x ∈ [−1, 6]  (creciente)"
  expresion="(x-1)/(x+2)"
  dominio="[-1, 6]"
  :x-min="-2" :x-max="7" :y-min="-2.5" :y-max="1"
  :puntos="[
    { x: -1, y: -2, label: '(−1, −2)' },
    { x: 6, y: 0.625, label: '(6, 5/8)' }
  ]"
/>

**Respuesta:** $B=\left[-2,\frac58\right]$.

</details>

---

<details>
<summary><strong>2(c) · f: A ⊆ ℝ → ]2, +∞[, f(x) = (x² + 1)/(x² − 4)</strong></summary>

**Problema:** Encontrar $A$ para que $f(x)=\dfrac{x^2+1}{x^2-4}$ tome valores en $]2,+\infty[$.

**Condición 1 (denominador):** $x^2-4\neq 0$, así que $x\neq\pm2$.

**Condición 2 (codominio):** $f(x)>2$. Sea $s=x^2-4$:

**Caso $s>0$** (es decir $x^2>4$): multiplicamos sin invertir la desigualdad:

$$
\begin{aligned}
x^2+1 &> 2(x^2-4) \\
x^2+1 &> 2x^2-8 \\
9 &> x^2
\end{aligned}
$$

Junto con $x^2>4$: $4<x^2<9$, es decir $2<|x|<3$.

**Caso $s<0$** (es decir $x^2<4$): multiplicamos por un número negativo, así que la desigualdad se invierte:

$$ x^2+1<2(x^2-4) \implies x^2>9 $$

Eso contradice $x^2<4$. No hay solución en este caso.

Por lo tanto $A=\,]-3,-2[\cup\,]2,3[$.

**Tabla de valores:**

| $x$ | $1$ | $2{,}5$ | $2{,}9$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-\frac23$ | $\approx 3{,}22$ | $\approx 2{,}13$ | $2$ | $\frac{17}{12}\approx 1{,}42$ |

Solo $x=2{,}5$ y $x=2{,}9$ cumplen $f(x)>2$. En $x=3$ vale exactamente $2$, así que queda excluido.

<GraficoFuncion
  titulo="f(x) = (x² + 1)/(x² − 4)  (dominio A = ]−3,−2[ ∪ ]2,3[)"
  expresion="(x*x+1)/(x*x-4)"
  :dominio="[']-3, -2[', ']2, 3[']"
  :x-min="-4" :x-max="4" :y-min="0" :y-max="10"
/>

**Respuesta:** $A=\,]-3,-2[\cup\,]2,3[$.

</details>

---

## Ejercicio 3 · ¿Las funciones están bien definidas?

Revisa si el dominio dado es correcto y si todos los resultados caen dentro del codominio.

<details>
<summary><strong>3(a) · f: [0, 10] → [1, 3], f(x) = x² − 7</strong></summary>

**Problema:** ¿Está bien definida $f:[0,10]\to[1,3]$, con $f(x)=x^2-7$?

**Análisis:** $f$ es creciente en $[0,10]$. Calculemos los extremos:
* $f(0)=-7$.
* $f(10)=93$.

El recorrido real es $[-7,93]$. Ese conjunto no cabe en el codominio $[1,3]$.

**Tabla de valores:**

| $x$ | $0$ | $\sqrt7\approx 2{,}65$ | $3$ | $10$ |
|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-7$ | $0$ | $2$ | $93$ |

**Respuesta:** **Mal definida.** El codominio debería contener el recorrido $[-7,93]$.

</details>

---

<details>
<summary><strong>3(b) · f: [−1, 4] → [2, 9], f(x) = 2 + √(3 − x)</strong></summary>

**Problema:** ¿Está bien definida $f:[-1,4]\to[2,9]$, con $f(x)=2+\sqrt{3-x}$?

**Análisis:** la raíz exige $3-x\geq 0$, es decir $x\leq 3$. Pero el dominio incluye $x\in\,]3,4]$. Por ejemplo, $x=3{,}5$ da $2+\sqrt{-0{,}5}$, que no es real.

**Corrección:** el dominio correcto es $[-1,3]$. En ese caso, $f$ toma valores en $[2,4]\subseteq[2,9]$, y sí está bien definida.

**Tabla de valores:**

| $x$ | $-1$ | $2$ | $3$ | $3{,}5$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $4$ | $3$ | $2$ | no existe | no existe |

**Respuesta:** **Mal definida.** El dominio tiene que restringirse a $[-1,3]$.

</details>

---

<details>
<summary><strong>3(c) · f: ]−∞, 0[ → [0, 1], f(x) = 2ˣ</strong></summary>

**Problema:** ¿Está bien definida $f:\,]-\infty,0[\to[0,1]$, con $f(x)=2^x$?

**Análisis:** para $x<0$ se cumple $0<2^x<1$. Cuando $x\to-\infty$, $2^x\to 0$, pero nunca lo alcanza. Cuando $x\to 0^-$, $2^x\to 1$, pero tampoco lo alcanza. Por lo tanto el recorrido es $]0,1[$, que está contenido en $[0,1]$.

**Tabla de valores:**

| $x$ | $-4$ | $-2$ | $-1$ | $-\frac12$ |
|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $\frac{1}{16}$ | $\frac14$ | $\frac12$ | $\approx 0{,}71$ |

<GraficoFuncion
  titulo="f(x) = 2ˣ con x < 0  (recorrido ]0, 1[)"
  expresion="Math.pow(2, x)"
  dominio="]-6, 0["
  :x-min="-6" :x-max="1" :y-min="0" :y-max="1.5"
/>

**Respuesta:** **Bien definida.**

</details>

---

<details>
<summary><strong>3(d) · f: ℝ → ℝ por tramos</strong></summary>

**Problema:** ¿Está bien definida $f:\mathbb{R}\to\mathbb{R}$ con
$$ f(x)=\begin{cases} 1-x^2 & \text{si } x<3 \\ 2+\sqrt{1+x} & \text{si } 3\leq x \end{cases} $$

**Análisis del primer tramo ($x<3$):** $1-x^2$ toma valores en $]-\infty,1]$. Cuando $x=0$ vale $1$, y crece hacia $-\infty$ cuando $|x|$ crece.

**Análisis del segundo tramo ($x\geq 3$):** el radicando $1+x$ es siempre positivo, así que la raíz existe. En $x=3$ vale $2+\sqrt4=4$, y crece sin límite.

Recorrido total: $]-\infty,1]\cup[4,+\infty[$. Está contenido en el codominio $\mathbb{R}$.

**Tabla de valores:**

| $x$ | $-2$ | $0$ | $2$ | $3$ | $8$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 1 | 1 | 1 | 2 | 2 |
| $f(x)$ | $-3$ | $1$ | $-3$ | $4$ | $5$ |

<GraficoFuncion
  titulo="f(x) = 1 − x² si x < 3;  2 + √(1 + x) si x ≥ 3"
  :expresion="['1-x*x', '2+Math.sqrt(1+x)']"
  :dominio="[']-6, 3[', '[3, 8]']"
  :x-min="-6" :x-max="8" :y-min="-10" :y-max="7"
  :puntos="[
    { x: 3, y: 4, label: '(3, 4)' },
    { x: 0, y: 1, label: 'máximo (0, 1)' }
  ]"
/>

**Respuesta:** **Bien definida.** El recorrido $]-\infty,1]\cup[4,+\infty[$ está contenido en el codominio.

</details>

---

<details>
<summary><strong>3(e) · f: ℝ → [14, +∞[ por tramos</strong></summary>

**Problema:** ¿Está bien definida $f:\mathbb{R}\to[14,+\infty[$ con
$$ f(x)=\begin{cases} \dfrac{2}{4-x} & \text{si } x<4 \\ 3x+2 & \text{si } 4\leq x \end{cases} $$

**Análisis:** para $x=2$ (primer tramo):

$$ f(2)=\frac{2}{4-2}=1 $$

Como $1\notin[14,+\infty[$, la función está **mal definida**.

Además, el primer tramo toma valores en $]0,+\infty[$ (cuando $x\to4^-$ crece sin límite), así que muchos resultados caen fuera del codominio.

**Tabla de valores:**

| $x$ | $2$ | $3$ | $3{,}5$ | $4$ | $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $1$ | $2$ | $4$ | $14$ | $17$ |

<GraficoFuncion
  titulo="f(x) = 2/(4−x) si x < 4;  3x + 2 si x ≥ 4"
  :expresion="['2/(4-x)', '3*x+2']"
  :dominio="[']-2, 4[', '[4, 6]']"
  :x-min="-2" :x-max="6" :y-min="-2" :y-max="20"
  :puntos="[
    { x: 4, y: 14, label: '(4, 14)' },
    { x: 2, y: 1, label: '(2, 1) fuera del codominio' }
  ]"
/>

**Respuesta:** **Mal definida.** $f(2)=1$ no pertenece al codominio $[14,+\infty[$.

</details>

---

<details>
<summary><strong>3(f) · f: ℝ → [1, +∞[ por tramos</strong></summary>

**Problema:** ¿Está bien definida $f:\mathbb{R}\to[1,+\infty[$ con
$$ f(x)=\begin{cases} x^2+2x+1 & \text{si } |x|>1 \\ 2-x & \text{si } |x|\leq 1 \end{cases} $$

**Análisis:** tomemos $x=-\frac32$. Como $\left|-\frac32\right|=\frac32>1$, usamos el primer tramo:

$$ f\!\left(-\tfrac32\right)=\left(-\tfrac32\right)^2+2\left(-\tfrac32\right)+1=\tfrac94-3+1=\tfrac14 $$

Como $\frac14<1$, no pertenece al codominio. La función está **mal definida**.

**Tabla de valores:**

| $x$ | $-2$ | $-\frac32$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 1 | 1 | 2 | 2 | 2 | 1 |
| $f(x)$ | $1$ | $\frac14$ | $3$ | $2$ | $1$ | $9$ |

**Respuesta:** **Mal definida.** $f\!\left(-\frac32\right)=\frac14$ no pertenece al codominio $[1,+\infty[$.

</details>

---

## Ejercicio 4 · Dominio, recorrido y gráfica

Para cada función, encuentra dominio y recorrido, y dibuja su gráfica.

<details>
<summary><strong>4(a) · f(x) = x si x < 1;  2x si x ≥ 1</strong></summary>

**Problema:** Encontrar dominio y recorrido de
$$ f(x)=\begin{cases} x & \text{si } x<1 \\ 2x & \text{si } x\geq 1 \end{cases} $$
y graficar.

**Dominio:** los tramos cubren todo $\mathbb{R}$, así que $Dom(f)=\mathbb{R}$.

**Recorrido:**
* Primer tramo ($x<1$): $f(x)=x$ toma valores en $]-\infty,1[$.
* Segundo tramo ($x\geq 1$): $f(x)=2x$ toma valores en $[2,+\infty[$.

Por lo tanto $Rec(f)=\,]-\infty,1[\,\cup\,[2,+\infty[$. El valor $1$ no se alcanza: viene de $x=1$ en el primer tramo (excluido), y el segundo tramo empieza en $2$.

**Tabla de valores:**

| $x$ | $-2$ | $0$ | $0{,}9$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 1 | 1 | 1 | 2 | 2 | 2 |
| $f(x)$ | $-2$ | $0$ | $0{,}9$ | $2$ | $4$ | $6$ |

<GraficoFuncion
  titulo="f(x) = x (x < 1);  2x (x ≥ 1)"
  :expresion="['x', '2*x']"
  :dominio="[']-4, 1[', '[1, 4]']"
  :x-min="-4" :x-max="4" :y-min="-4" :y-max="8"
  :puntos="[
    { x: 1, y: 1, label: 'hueco (1, 1)', abierto: true },
    { x: 1, y: 2, label: '(1, 2)' }
  ]"
/>

**Respuesta:** $Dom(f)=\mathbb{R}$ y $Rec(f)=\,]-\infty,1[\cup[2,+\infty[$.

</details>

---

<details>
<summary><strong>4(b) · f(x) = (x² + 2x + 1) si |x| > 1;  2 − x si |x| ≤ 1</strong></summary>

**Problema:** Encontrar dominio y recorrido de
$$ f(x)=\begin{cases} x^2+2x+1 & \text{si } |x|>1 \\ 2-x & \text{si } |x|\leq 1 \end{cases} $$
y graficar.

**Dominio:** $Dom(f)=\mathbb{R}$, porque los dos casos cubren todos los reales.

**Recorrido:** note que $x^2+2x+1=(x+1)^2$.
* **Tramo central** ($|x|\leq1$, es decir $-1\leq x\leq 1$): $f(x)=2-x$ va de $3$ (en $x=-1$) a $1$ (en $x=1$). Toma valores en $[1,3]$.
* **Tramo $x>1$:** $(x+1)^2$ toma valores en $]4,+\infty[$.
* **Tramo $x<-1$:** $(x+1)^2$ con $x+1<0$ toma valores en $]0,+\infty[$.

Uniendo: $]0,+\infty[\cup[1,3]\cup]4,+\infty[=\,]0,+\infty[$.

El valor $0$ no se alcanza: $f=0$ requiere $x=-1$, pero $x=-1$ pertenece al tramo central, donde $f(-1)=3$.

**Tabla de valores:**

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 1 | 1 | 2 | 2 | 2 | 1 |
| $f(x)$ | $4$ | $1$ | $3$ | $2$ | $1$ | $9$ |

<GraficoFuncion
  titulo="f(x) = (x+1)² si |x| > 1;  2 − x si |x| ≤ 1"
  :expresion="['(x+1)*(x+1)', '2-x', '(x+1)*(x+1)']"
  :dominio="[']-5, -1[', '[-1, 1]', ']1, 4]']"
  :x-min="-5" :x-max="4" :y-min="-1" :y-max="10"
  :puntos="[
    { x: -1, y: 0, label: 'hueco (−1, 0)', abierto: true },
    { x: -1, y: 3, label: '(−1, 3)' }
  ]"
/>

**Respuesta:** $Dom(f)=\mathbb{R}$ y $Rec(f)=\,]0,+\infty[$.

</details>

---

<details>
<summary><strong>4(c) · f(x) = √(x − 1) si 1 ≤ x ≤ 5;  −x + 7 si x > 5</strong></summary>

**Problema:** Encontrar dominio y recorrido de
$$ f(x)=\begin{cases} \sqrt{x-1} & \text{si } 1\leq x\leq 5 \\ -x+7 & \text{si } x>5 \end{cases} $$
y graficar.

**Dominio:** el primer tramo exige $x\geq 1$ y el segundo empieza en $x>5$. Por lo tanto $Dom(f)=[1,+\infty[$.

**Recorrido:**
* **Primer tramo** ($1\leq x\leq 5$): $\sqrt{x-1}$ va de $0$ a $2$. Toma valores en $[0,2]$.
* **Segundo tramo** ($x>5$): $-x+7$ es decreciente. Cuando $x\to5^+$ vale casi $2$ (sin alcanzarlo), y cuando $x\to+\infty$ tiende a $-\infty$. Toma valores en $]-\infty,2[$.

Uniendo: $]-\infty,2[\cup[0,2]=\,]-\infty,2]$.

**Tabla de valores:**

| $x$ | $1$ | $2$ | $5$ | $6$ | $7$ | $12$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 1 | 1 | 1 | 2 | 2 | 2 |
| $f(x)$ | $0$ | $1$ | $2$ | $1$ | $0$ | $-5$ |

<GraficoFuncion
  titulo="f(x) = √(x − 1) si 1 ≤ x ≤ 5;  −x + 7 si x > 5"
  :expresion="['Math.sqrt(x-1)', '-x+7']"
  :dominio="['[1, 5]', ']5, 12]']"
  :x-min="0" :x-max="12" :y-min="-6" :y-max="4"
  :puntos="[
    { x: 5, y: 2, label: '(5, 2)' },
    { x: 1, y: 0, label: '(1, 0)' }
  ]"
/>

**Respuesta:** $Dom(f)=[1,+\infty[$ y $Rec(f)=\,]-\infty,2]$.

</details>

---

<details>
<summary><strong>4(d) · f(x) = x + 1 si x < 0;  x + 2 si x ≥ 0</strong></summary>

**Problema:** Encontrar dominio y recorrido de
$$ f(x)=\begin{cases} x+1 & \text{si } x<0 \\ x+2 & \text{si } x\geq 0 \end{cases} $$
y graficar.

**Dominio:** $Dom(f)=\mathbb{R}$.

**Recorrido:**
* **Primer tramo** ($x<0$): $x+1$ toma valores en $]-\infty,1[$. El valor $1$ no se alcanza, porque $x=0$ no pertenece a este tramo.
* **Segundo tramo** ($x\geq 0$): $x+2$ toma valores en $[2,+\infty[$.

Uniendo: $Rec(f)=\,]-\infty,1[\,\cup\,[2,+\infty[$. El intervalo $[1,2[$ queda sin valores: es el "salto" de la función en $x=0$.

**Tabla de valores:**

| $x$ | $-3$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 1 | 1 | 2 | 2 | 2 |
| $f(x)$ | $-2$ | $0$ | $2$ | $3$ | $4$ |

<GraficoFuncion
  titulo="f(x) = x + 1 (x < 0);  x + 2 (x ≥ 0)  (salto en x = 0)"
  :expresion="['x+1', 'x+2']"
  :dominio="[']-4, 0[', '[0, 4]']"
  :x-min="-4" :x-max="4" :y-min="-3" :y-max="6"
  :puntos="[
    { x: 0, y: 1, label: 'hueco (0, 1)', abierto: true },
    { x: 0, y: 2, label: '(0, 2)' }
  ]"
/>

**Respuesta:** $Dom(f)=\mathbb{R}$ y $Rec(f)=\,]-\infty,1[\,\cup\,[2,+\infty[$.

</details>

---

## Ejercicio 5 · Transformaciones de gráficas

Consideramos la función base $f(x)=4-x^2$: una parábola que abre hacia abajo, con vértice en $(0,4)$ y que corta el eje $X$ en $x=\pm2$.

**Tabla de la función base:**

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $0$ | $3$ | $4$ | $3$ | $0$ |

<GraficoFuncion
  titulo="Función base f(x) = 4 − x²"
  expresion="4 - x*x"
  :x-min="-3" :x-max="3" :y-min="-3" :y-max="5"
  :puntos="[
    { x: 0, y: 4, label: 'vértice (0, 4)' },
    { x: -2, y: 0, label: '(−2, 0)' },
    { x: 2, y: 0, label: '(2, 0)' }
  ]"
/>

<details>
<summary><strong>5(a) · y = f(2x − 1)</strong></summary>

**Problema:** Graficar $y=f(2x-1)$, a partir de $f(x)=4-x^2$.

**Desarrollo:** reemplazamos:

$$ y=4-(2x-1)^2 $$

**Interpretación:** $f(2x-1)=f\big(2\left(x-\tfrac12\right)\big)$. Esto significa:
1. La gráfica se **desplaza $\frac12$ unidad a la derecha**.
2. Se **comprime horizontalmente a la mitad** (el factor $2$ multiplica a $x$).

**Vértice:** ocurre cuando $2x-1=0$, es decir en $x=\frac12$, con $y=4$. Ceros: $(2x-1)^2=4$, así que $2x-1=\pm2$, es decir $x=\frac32$ o $x=-\frac12$.

**Tabla de valores:**

| $x$ | $-\frac12$ | $0$ | $\frac12$ | $1$ | $\frac32$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $2x-1$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
| $y$ | $0$ | $3$ | $4$ | $3$ | $0$ |

<GraficoFuncion
  titulo="y = f(2x − 1) = 4 − (2x − 1)²"
  expresion="4-(2*x-1)*(2*x-1)"
  :x-min="-1.5" :x-max="2.5" :y-min="-2" :y-max="5"
  :puntos="[
    { x: 0.5, y: 4, label: 'vértice (1/2, 4)' },
    { x: -0.5, y: 0, label: '(−1/2, 0)' },
    { x: 1.5, y: 0, label: '(3/2, 0)' }
  ]"
/>

**Respuesta:** $y=4-(2x-1)^2$, con $Dom=\mathbb{R}$ y $Rec=\,]-\infty,4]$.

</details>

---

<details>
<summary><strong>5(b) · y = f(x) − 4</strong></summary>

**Problema:** Graficar $y=f(x)-4$.

**Desarrollo:**

$$ y=(4-x^2)-4=-x^2 $$

**Interpretación:** restar $4$ desplaza la gráfica **4 unidades hacia abajo**. El vértice pasa de $(0,4)$ a $(0,0)$.

**Tabla de valores:**

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $y=-x^2$ | $-4$ | $-1$ | $0$ | $-1$ | $-4$ |

<GraficoFuncion
  titulo="y = f(x) − 4 = −x²"
  expresion="-x*x"
  :x-min="-3" :x-max="3" :y-min="-5" :y-max="2"
  :puntos="[
    { x: 0, y: 0, label: 'vértice (0, 0)' }
  ]"
/>

**Respuesta:** $y=-x^2$, con $Dom=\mathbb{R}$ y $Rec=\,]-\infty,0]$.

</details>

---

<details>
<summary><strong>5(c) · y = √f(x)</strong></summary>

**Problema:** Graficar $y=\sqrt{f(x)}$.

**Desarrollo:** $y=\sqrt{4-x^2}$.

**Dominio:** la raíz exige $4-x^2\geq 0$, es decir $|x|\leq 2$. Donde $f(x)<0$ (para $|x|>2$), la gráfica no existe.

**Recorrido:** la raíz va de $0$ (en $x=\pm2$) hasta $2$ (en $x=0$). Entonces $Rec=[0,2]$.

**Interpretación:** es la mitad superior de una circunferencia de radio $2$.

**Tabla de valores:**

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $0$ | $3$ | $4$ | $3$ | $0$ |
| $y=\sqrt{f(x)}$ | $0$ | $\approx 1{,}73$ | $2$ | $\approx 1{,}73$ | $0$ |

<GraficoFuncion
  titulo="y = √f(x) = √(4 − x²)  (semicircunferencia)"
  expresion="Math.sqrt(4 - x*x)"
  dominio="[-2, 2]"
  :x-min="-3" :x-max="3" :y-min="-1" :y-max="3"
  :puntos="[
    { x: 0, y: 2, label: 'máximo (0, 2)' }
  ]"
/>

**Respuesta:** $Dom=[-2,2]$ y $Rec=[0,2]$.

</details>

---

<details>
<summary><strong>5(d) · y = 1 − √f(x)</strong></summary>

**Problema:** Graficar $y=1-\sqrt{f(x)}$.

**Desarrollo:** $y=1-\sqrt{4-x^2}$.

**Interpretación:** partimos de la semicircunferencia del literal (c), la reflejamos respecto al eje $X$ (cambio de signo) y la subimos $1$ unidad.

**Dominio:** $|x|\leq2$, igual que en (c).

**Recorrido:** como $\sqrt{4-x^2}\in[0,2]$, entonces $1-\sqrt{4-x^2}\in[-1,1]$.

**Tabla de valores:**

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $\sqrt{f(x)}$ | $0$ | $\approx 1{,}73$ | $2$ | $\approx 1{,}73$ | $0$ |
| $y=1-\sqrt{f(x)}$ | $1$ | $\approx -0{,}73$ | $-1$ | $\approx -0{,}73$ | $1$ |

<GraficoFuncion
  titulo="y = 1 − √(4 − x²)"
  expresion="1 - Math.sqrt(4 - x*x)"
  dominio="[-2, 2]"
  :x-min="-3" :x-max="3" :y-min="-2" :y-max="2"
  :puntos="[
    { x: 0, y: -1, label: 'mínimo (0, −1)' },
    { x: 2, y: 1, label: '(2, 1)' },
    { x: -2, y: 1, label: '(−2, 1)' }
  ]"
/>

**Respuesta:** $Dom=[-2,2]$ y $Rec=[-1,1]$.

</details>

---

<details>
<summary><strong>5(e) · y = √(1 − √f(x))</strong></summary>

**Problema:** Graficar $y=\sqrt{1-\sqrt{f(x)}}$.

**Desarrollo:** $y=\sqrt{1-\sqrt{4-x^2}}$.

**Dominio:** hay dos raíces anidadas, así que se exige:
1. $4-x^2\geq 0$: $|x|\leq2$.
2. $1-\sqrt{4-x^2}\geq 0$: $\sqrt{4-x^2}\leq 1$, es decir $4-x^2\leq 1$, o sea $x^2\geq 3$.

Juntando: $|x|\in[\sqrt3,2]$. Entonces $Dom=[-2,-\sqrt3]\cup[\sqrt3,2]$.

**Recorrido:** en el dominio, $1-\sqrt{4-x^2}\in[0,1]$, así que su raíz está en $[0,1]$. Entonces $Rec=[0,1]$.

**Tabla de valores:**

| $x$ | $-2$ | $-\sqrt3\approx -1{,}73$ | $1{,}9$ | $\sqrt3\approx 1{,}73$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $\sqrt{4-x^2}$ | $0$ | $1$ | $\approx 0{,}62$ | $1$ | $0$ |
| $y$ | $1$ | $0$ | $\approx 0{,}61$ | $0$ | $1$ |

<GraficoFuncion
  titulo="y = √(1 − √(4 − x²))  (dominio [−2,−√3] ∪ [√3,2])"
  :expresion="['Math.sqrt(1-Math.sqrt(4-x*x))', 'Math.sqrt(1-Math.sqrt(4-x*x))']"
  :dominio="['[-2, -1.7321]', '[1.7321, 2]']"
  :x-min="-3" :x-max="3" :y-min="-0.2" :y-max="1.5"
  :puntos="[
    { x: -1.7321, y: 0, label: '(−√3, 0)' },
    { x: 1.7321, y: 0, label: '(√3, 0)' },
    { x: 2, y: 1, label: '(2, 1)' },
    { x: -2, y: 1, label: '(−2, 1)' }
  ]"
/>

**Respuesta:** $Dom=[-2,-\sqrt3]\cup[\sqrt3,2]$ y $Rec=[0,1]$.

</details>

---

<details>
<summary><strong>5(f) · y = |−2f(x + 1)|</strong></summary>

**Problema:** Graficar $y=\big|-2f(x+1)\big|$.

**Desarrollo:** primero calculamos la expresión dentro del valor absoluto:

$$
\begin{aligned}
-2f(x+1) &= -2\left(4-(x+1)^2\right) \\
&= 2(x+1)^2-8
\end{aligned}
$$

Entonces $y=\big|2(x+1)^2-8\big|=2\big|(x+1)^2-4\big|$.

**Interpretación paso a paso:**
1. $f(x+1)$ **desplaza la gráfica 1 unidad a la izquierda**.
2. El signo menos y el factor $2$ **reflejan la gráfica respecto al eje $X$ y la estiran verticalmente**.
3. El valor absoluto **refleja hacia arriba todo lo que quedó debajo del eje $X$**.

**Dominio:** $Dom=\mathbb{R}$.

**Recorrido:** el valor absoluto nunca es negativo, y el mínimo se alcanza en $x=-3$ y $x=1$ (donde vale $0$). Entonces $Rec=[0,+\infty[$.

**Tabla de valores:**

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $2(x+1)^2-8$ | $0$ | $-6$ | $-8$ | $-6$ | $0$ | $10$ |
| $y=\lvert\cdot\rvert$ | $0$ | $6$ | $8$ | $6$ | $0$ | $10$ |

<GraficoFuncion
  titulo="y = |−2f(x + 1)| = 2|(x + 1)² − 4|"
  expresion="2*Math.abs((x+1)*(x+1)-4)"
  :x-min="-5" :x-max="3" :y-min="-1" :y-max="11"
  :puntos="[
    { x: -3, y: 0, label: '(−3, 0)' },
    { x: 1, y: 0, label: '(1, 0)' },
    { x: -1, y: 8, label: 'máximo local (−1, 8)' }
  ]"
/>

**Respuesta:** $Dom=\mathbb{R}$ y $Rec=[0,+\infty[$.

</details>

---

## Ejercicio 6 · Gráfica, crecimiento y decrecimiento

<details>
<summary><strong>6(a) · f(x) = |x + 1| + |x − 1|</strong></summary>

**Problema:** Graficar $f(x)=|x+1|+|x-1|$ y encontrar los intervalos de crecimiento y decrecimiento.

**Paso 1: quitar los valores absolutos por tramos.** Los cambios ocurren en $x=-1$ y $x=1$:

* Si $x<-1$: ambos términos internos son negativos. $f(x)=-(x+1)-(x-1)=-2x$.
* Si $-1\leq x\leq 1$: $x+1\geq0$ y $x-1\leq0$. $f(x)=(x+1)-(x-1)=2$.
* Si $x>1$: ambos son positivos. $f(x)=(x+1)+(x-1)=2x$.

$$ f(x)=\begin{cases} -2x & x<-1 \\ 2 & -1\leq x\leq 1 \\ 2x & x>1 \end{cases} $$

**Paso 2: monotonía.**
* En $]-\infty,-1]$: $-2x$ es decreciente.
* En $[-1,1]$: $f$ es constante ($=2$).
* En $[1,+\infty[$: $2x$ es creciente.

**Tabla de valores:**

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $4$ | $2$ | $2$ | $2$ | $4$ |

<GraficoFuncion
  titulo="f(x) = |x+1| + |x−1|"
  :expresion="['-2*x', '2', '2*x']"
  :dominio="[']-4, -1[', '[-1, 1]', ']1, 4]']"
  :x-min="-4" :x-max="4" :y-min="-1" :y-max="9"
  :puntos="[
    { x: -1, y: 2, label: '(−1, 2)' },
    { x: 1, y: 2, label: '(1, 2)' }
  ]"
/>

**Respuesta:** $f$ es **decreciente** en $]-\infty,-1]$, **constante** en $[-1,1]$ y **creciente** en $[1,+\infty[$.

> **Observación:** el taller original responde solo "creciente en $[1,\infty[$ y decreciente en $]-\infty,-1]$". Falta mencionar el tramo constante $[-1,1]$, que también es parte de la gráfica.

</details>

---

<details>
<summary><strong>6(b) · f(x) = 2 / (1 − |x|)</strong></summary>

**Problema:** Graficar $f(x)=\dfrac{2}{1-|x|}$ en $\mathbb{R}-\{-1,1\}$ y encontrar los intervalos de crecimiento y decrecimiento.

**Paso 1: separar por el signo de $x$.**
* Si $x\geq 0$: $|x|=x$, así que $f(x)=\dfrac{2}{1-x}$.
* Si $x<0$: $|x|=-x$, así que $f(x)=\dfrac{2}{1+x}$.

**Paso 2: monotonía en cada tramo.**
* En $[0,1[$: el denominador $1-x$ disminuye de $1$ a $0^+$, así que $f$ **crece** de $2$ a $+\infty$.
* En $]1,+\infty[$: $1-x$ es negativo; $f(x)=-\dfrac{2}{x-1}$ **crece** de $-\infty$ a $0$.
* En $]-1,0]$: el denominador $1+x$ aumenta de $0^+$ a $1$, así que $f$ **decrece** de $+\infty$ a $2$.
* En $]-\infty,-1[$: $f(x)=\dfrac{2}{1+x}$ **decrece** de $0^-$ a $-\infty$.

**Tabla de valores:**

| $x$ | $-3$ | $-2$ | $-\frac12$ | $0$ | $\frac12$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-1$ | $-2$ | $4$ | $2$ | $4$ | $-2$ | $-1$ |

<GraficoFuncion
  titulo="f(x) = 2/(1 − |x|)  (asíntotas x = ±1)"
  expresion="2/(1-Math.abs(x))"
  :dominio="[']-6, -1[', ']-1, 1[', ']1, 6]']"
  :x-min="-6" :x-max="6" :y-min="-6" :y-max="6"
/>

**Respuesta:**
* **Creciente** en $[0,1[$ y en $]1,+\infty[$.
* **Decreciente** en $]-\infty,-1[$ y en $]-1,0]$.

Así se confirma la respuesta del taller: creciente en $[0,\infty[-\{1\}$ y decreciente en $]-\infty,0]-\{-1\}$.

</details>

---

<details>
<summary><strong>6(c) · f(x) = x + 1 si x ≥ 1;  x² − 1 si x < 1</strong></summary>

**Problema:** Graficar
$$ f(x)=\begin{cases} x+1 & x\geq 1 \\ x^2-1 & x<1 \end{cases} $$
y encontrar los intervalos de crecimiento y decrecimiento.

**Paso 1: primer tramo ($x<1$).** $f(x)=x^2-1$ es una parábola:
* Decrece en $]-\infty,0]$ (cuando $x$ se acerca a $0$, $x^2$ baja).
* Crece en $[0,1[$.

**Paso 2: segundo tramo ($x\geq 1$).** $f(x)=x+1$ es una recta creciente.

**Paso 3: el salto en $x=1$.** Por la izquierda, $f\to 1^2-1=0$. En $x=1$, el segundo tramo vale $2$. Hay un salto **hacia arriba**: pasa de $0$ a $2$. Un salto hacia arriba mantiene la función creciente.

**Conclusión de monotonía:** decreciente en $]-\infty,0]$ y creciente en $[0,+\infty[$.

**Tabla de valores:**

| $x$ | $-2$ | $-1$ | $0$ | $\frac12$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 1 | 1 | 1 | 1 | 2 | 2 |
| $f(x)$ | $3$ | $0$ | $-1$ | $-\frac34$ | $2$ | $3$ |

<GraficoFuncion
  titulo="f(x) = x² − 1 (x < 1);  x + 1 (x ≥ 1)"
  :expresion="['x*x-1', 'x+1']"
  :dominio="[']-3, 1[', '[1, 4]']"
  :x-min="-3" :x-max="4" :y-min="-2" :y-max="6"
  :puntos="[
    { x: 1, y: 0, label: 'hueco (1, 0)', abierto: true },
    { x: 1, y: 2, label: '(1, 2)' },
    { x: 0, y: -1, label: 'mínimo (0, −1)' }
  ]"
/>

**Respuesta:** $f$ es **decreciente** en $]-\infty,0]$ y **creciente** en $[0,+\infty[$.

</details>

---

## Ejercicio 7 · Composición de funciones

Para cada par, define $g\circ f$ y $f\circ g$ (cuando existan). Recuerda: $(g\circ f)(x)=g(f(x))$, y el dominio exige que $x\in Dom(f)$ **y** $f(x)\in Dom(g)$.

<details>
<summary><strong>7(a) · f: ℝ₀⁺ → [−1, +∞[, f(x) = √x − 1;  g: [1, +∞[ → ℝ, g(x) = x + 5</strong></summary>

**Problema:** Definir $g\circ f$ y $f\circ g$, si existen.

**g∘f:**

*Fórmula:* $(g\circ f)(x)=g(\sqrt x-1)=(\sqrt x-1)+5=\sqrt x+4$.

*Dominio:* hay dos condiciones:
* $x\in Dom(f)=\mathbb{R}_0^+$, es decir $x\geq 0$.
* $f(x)\in Dom(g)=[1,+\infty[$: $\sqrt x-1\geq 1 \implies \sqrt x\geq 2 \implies x\geq 4$.

Intersectando: $Dom(g\circ f)=[4,+\infty[$.

**f∘g:**

*Fórmula:* $(f\circ g)(x)=f(x+5)=\sqrt{x+5}-1$.

*Dominio:* hay dos condiciones:
* $x\in Dom(g)=[1,+\infty[$.
* $g(x)\in Dom(f)=\mathbb{R}_0^+$: $x+5\geq 0$, que siempre se cumple si $x\geq 1$.

Entonces $Dom(f\circ g)=[1,+\infty[$.

**Tabla de valores:**

| $x$ | $1$ | $4$ | $11$ |
|:---:|:---:|:---:|:---:|
| $(g\circ f)(x)=\sqrt x+4$ | — | $6$ | $\approx 7{,}32$ |
| $(f\circ g)(x)=\sqrt{x+5}-1$ | $\sqrt6-1\approx 1{,}45$ | $2$ | $3$ |

*(En $x=1$ no existe $g\circ f$, porque $1\notin[4,+\infty[$.)*

**Respuesta:**
* $(g\circ f)(x)=\sqrt x+4$, con $Dom=[4,+\infty[$.
* $(f\circ g)(x)=\sqrt{x+5}-1$, con $Dom=[1,+\infty[$.

</details>

---

<details>
<summary><strong>7(b) · f(x) = (x − 3)²;  g: [2, +∞[ → ℝ, g(x) = √(x − 2) + 3</strong></summary>

**Problema:** Definir $g\circ f$ y $f\circ g$, si existen.

**g∘f:**

*Fórmula:* $(g\circ f)(x)=\sqrt{(x-3)^2-2}+3$.

*Dominio:* $f(x)=(x-3)^2$ debe estar en $[2,+\infty[$:

$$ (x-3)^2\geq 2 \implies |x-3|\geq \sqrt2 \implies x\leq 3-\sqrt2 \ \text{ o } \ x\geq 3+\sqrt2 $$

Entonces $Dom(g\circ f)=\,]-\infty,\,3-\sqrt2\,]\cup[\,3+\sqrt2,+\infty[$.

**f∘g:**

*Fórmula:* $(f\circ g)(x)=\big(g(x)-3\big)^2=\big(\sqrt{x-2}\big)^2=x-2$.

*Dominio:* $x\in Dom(g)=[2,+\infty[$. Además $g(x)$ siempre es real y $f$ acepta todos los reales. Entonces $Dom(f\circ g)=[2,+\infty[$.

**Tabla de valores para f∘g:**

| $x$ | $2$ | $3$ | $6$ |
|:---:|:---:|:---:|:---:|
| $g(x)$ | $3$ | $\approx 4$ | $5$ |
| $(f\circ g)(x)=x-2$ | $0$ | $1$ | $4$ |

**Respuesta:**
* $(g\circ f)(x)=\sqrt{(x-3)^2-2}+3$, con $Dom=\,]-\infty,3-\sqrt2]\cup[3+\sqrt2,+\infty[$.
* $(f\circ g)(x)=x-2$, con $Dom=[2,+\infty[$.

</details>

---

<details>
<summary><strong>7(c) · f: ℝ−{2} → ℝ−{1}, f(x) = (x + 1)/(x − 2);  g: [−3, +∞[ → ℝ, g(x) = 1 − √(x + 3)</strong></summary>

**Problema:** Definir $g\circ f$ y $f\circ g$, si existen.

**Observación previa:** $f(x)=\dfrac{x+1}{x-2}=1+\dfrac{3}{x-2}$. Esta fracción nunca vale $0$, así que $f$ nunca toma el valor $1$. Por eso el codominio es $\mathbb{R}-\{1\}$.

**g∘f:**

*Fórmula:* $(g\circ f)(x)=1-\sqrt{f(x)+3}$.

*Dominio:* hay dos condiciones:
* $x\in Dom(f)$: $x\neq 2$.
* $f(x)\in Dom(g)=[-3,+\infty[$: $f(x)+3\geq 0$.

Calculamos:

$$
\begin{aligned}
f(x)+3 &= \frac{x+1}{x-2}+3 = \frac{x+1+3x-6}{x-2} = \frac{4x-5}{x-2} \geq 0
\end{aligned}
$$

Sign table de $\frac{4x-5}{x-2}$, con puntos críticos $x=\frac54$ y $x=2$:

| Intervalo | $x<\frac54$ | $\frac54<x<2$ | $x>2$ |
|:---|:---:|:---:|:---:|
| $4x-5$ | $-$ | $+$ | $+$ |
| $x-2$ | $-$ | $-$ | $+$ |
| Cociente | $+$ | $-$ | $+$ |

Cumple $\geq 0$ en $x\leq\frac54$ y en $x>2$. Como $x=\frac54$ da cero y $x=2$ queda excluido:

$$ Dom(g\circ f)=\,]-\infty,\tfrac54\,]\cup\,]2,+\infty[ $$

> **Corrección al taller:** en la respuesta de tu versión, $\frac54$ aparecía excluido. Pero en $x=\frac54$ tenemos $f\!\left(\frac54\right)=\dfrac{9/4}{-3/4}=-3$, que sí pertenece al dominio $[-3,+\infty[$ de $g$. Por eso $\frac54$ debe incluirse.

**Fórmula:** $(g\circ f)(x)=1-\sqrt{\dfrac{4x-5}{x-2}}$.

**f∘g:**

*Fórmula:* $(f\circ g)(x)=\dfrac{g(x)+1}{g(x)-2}$, con $g(x)=1-\sqrt{x+3}$. Entonces

$$ (f\circ g)(x)=\frac{2-\sqrt{x+3}}{-1-\sqrt{x+3}} $$

*Dominio:* hay dos condiciones:
* $x\in Dom(g)=[-3,+\infty[$.
* $g(x)\neq 2$. Como $g(x)=1-\sqrt{x+3}\leq 1$, nunca vale $2$: no hay exclusiones extra.

Entonces $Dom(f\circ g)=[-3,+\infty[$.

> **Corrección al taller:** tu versión excluía $x=-3$. Pero en $x=-3$ tenemos $g(-3)=1$, y $f(1)=\dfrac{2}{-1}=-2$ es válido. Por lo tanto $-3$ sí pertenece al dominio.

**Tabla de valores:**

| $x$ | $-3$ | $-2$ | $1$ |
|:---:|:---:|:---:|:---:|
| $g(x)$ | $1$ | $0$ | $-1$ |
| $(f\circ g)(x)$ | $-2$ | $-\frac12$ | $0$ |

**Respuesta:**
* $(g\circ f)(x)=1-\sqrt{\dfrac{4x-5}{x-2}}$, con $Dom=\,]-\infty,\frac54]\cup\,]2,+\infty[$.
* $(f\circ g)(x)=\dfrac{2-\sqrt{x+3}}{-1-\sqrt{x+3}}$, con $Dom=[-3,+\infty[$.

</details>

---

## Ejercicio 8 · Composición y evaluación

<details>
<summary><strong>8(a) · Definir g∘f con f: ]−2, +∞[ → ℝ, f(x) = 4 − x;  g: ]−1, +∞[ → ]−∞, 1[, g(x) = −x² + 1</strong></summary>

**Problema:** Definir $g\circ f$.

**Dominio:** hay dos condiciones:
* $x\in Dom(f)=\,]-2,+\infty[$.
* $f(x)\in Dom(g)=\,]-1,+\infty[$: $4-x>-1 \iff x<5$.

Entonces $Dom(g\circ f)=\,]-2,5[$.

**Fórmula:**

$$ (g\circ f)(x)=-(4-x)^2+1=-x^2+8x-15 $$

> **Observación sobre el codominio:** el taller da como codominio $]-\infty,1[$, pero $g(0)=1$, así que $1$ sí es un valor de $g$. El codominio correcto es $]-\infty,1]$. Esto no cambia el dominio de la composición, pero sí es necesario para que la afirmación sea correcta.

**Tabla de valores:**

| $x$ | $-1$ | $0$ | $3$ | $4$ | $4{,}9$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)=4-x$ | $5$ | $4$ | $1$ | $0$ | $-0{,}9$ |
| $(g\circ f)(x)$ | $-24$ | $-15$ | $0$ | $1$ | $0{,}19$ |

<GraficoFuncion
  titulo="(g∘f)(x) = −x² + 8x − 15  con Dom = ]−2, 5["
  expresion="-x*x + 8*x - 15"
  dominio="]-2, 5["
  :x-min="-2" :x-max="6" :y-min="-30" :y-max="5"
  :puntos="[
    { x: 4, y: 1, label: '(4, 1)' },
    { x: 0, y: -15, label: '(0, −15)' }
  ]"
/>

</details>

---

<details>
<summary><strong>8(b) · Calcular (g∘f)(4)</strong></summary>

**Problema:** En caso de que exista, calcular $(g\circ f)(4)$.

**Verificación del dominio:** $4\in\,]-2,5[$, así que la composición existe en $x=4$.

**Cálculo:** usamos la fórmula:

$$ (g\circ f)(4)=-(4)^2+8(4)-15=-16+32-15=1 $$

También por pasos:
1. $f(4)=4-4=0$. Como $0\in\,]-1,+\infty[$, es válido.
2. $g(0)=-0^2+1=1$.

**Respuesta:** $(g\circ f)(4)=1$.

</details>

---

## Ejercicio 9 · Dominio de g∘f y f∘g

<details>
<summary><strong>9(a) · Definir g∘f, indicando su dominio</strong></summary>

**Problema:** Con $f(x)=|2x-1|+x^2$ (definida en $\mathbb{R}$) y $g(x)=\dfrac{1}{\sqrt{x+3}}$ con $Dom(g)=\,]-3,1[$, definir $g\circ f$.

**Dominio:** hay dos condiciones:
* $x\in\mathbb{R}$, pues $f$ está definida en todo $\mathbb{R}$.
* $f(x)\in\,]-3,1[$.

Como $f(x)\geq 0 > -3$, la primera parte se cumple siempre. Basta exigir $f(x)<1$:

$$ |2x-1|+x^2<1 $$

**Caso $x\geq\frac12$:** $2x-1+x^2<1 \iff x^2+2x-2<0$. Las raíces son $x=-1\pm\sqrt3$. Como $x\geq\frac12$, queda $\frac12\leq x<\sqrt3-1$.

**Caso $x<\frac12$:** $1-2x+x^2<1 \iff x^2-2x<0 \iff 0<x<2$. Como $x<\frac12$, queda $0<x<\frac12$.

Uniendo ambos casos: $Dom(g\circ f)=\,]0,\ \sqrt3-1[$.

**Fórmula:**

$$ (g\circ f)(x)=\frac{1}{\sqrt{|2x-1|+x^2+3}} $$

**Tabla de valores:**

| $x$ | $0{,}2$ | $0{,}5$ | $0{,}7$ | $0$ | $0{,}9$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $0{,}64$ | $0{,}25$ | $0{,}89$ | $1$ | $1{,}61$ |
| $(g\circ f)(x)$ | $\approx 0{,}52$ | $\approx 0{,}55$ | $\approx 0{,}51$ | — | — |

Los valores $x=0$ y $x=0{,}9$ quedan fuera: en el primero $f(x)=1$ (no es estrictamente menor), y en el segundo $f(x)>1$.

**Respuesta:** $(g\circ f)(x)=\dfrac{1}{\sqrt{|2x-1|+x^2+3}}$, con $Dom(g\circ f)=\,]0,\ \sqrt3-1[$.

</details>

---

<details>
<summary><strong>9(b) · Definir f∘g, indicando su dominio</strong></summary>

**Problema:** Definir $f\circ g$ con $f(x)=|2x-1|+x^2$ y $g(x)=\dfrac{1}{\sqrt{x+3}}$, $Dom(g)=\,]-3,1[$.

**Dominio:** hay dos condiciones:
* $x\in Dom(g)=\,]-3,1[$.
* $g(x)\in\mathbb{R}$ (siempre que $x\in\,]-3,1[$) y $f$ acepta cualquier real.

Entonces $Dom(f\circ g)=\,]-3,1[$.

**Fórmula:** sustituimos $u=g(x)=\dfrac{1}{\sqrt{x+3}}$:

$$ (f\circ g)(x)=\left|\frac{2}{\sqrt{x+3}}-1\right|+\frac{1}{x+3} $$

**Tabla de valores:**

| $x$ | $-2{,}5$ | $-2$ | $0$ | $0{,}5$ |
|:---:|:---:|:---:|:---:|:---:|
| $g(x)$ | $\approx 1{,}41$ | $1$ | $\approx 0{,}58$ | $\approx 0{,}53$ |
| $(f\circ g)(x)$ | $\approx 3{,}83$ | $2$ | $\approx 0{,}49$ | $\approx 0{,}36$ |

**Respuesta:** $(f\circ g)(x)=\left|\dfrac{2}{\sqrt{x+3}}-1\right|+\dfrac{1}{x+3}$, con $Dom(f\circ g)=\,]-3,1[$.

</details>

---

## Ejercicio 10 · Composición con una función por tramos

<details>
<summary><strong>10 · Definir f∘g, indicando el dominio</strong></summary>

**Problema:** Con
$$ f(x)=\begin{cases} 2x+5 & \text{si } x>9 \\ x^2-|x| & \text{si } -9\leq x\leq 9 \\ x+2 & \text{si } x<-9 \end{cases} \qquad g(x)=\sqrt{x^2+1} $$
definir $f\circ g$, indicando el dominio.

**Paso 1: dominio.** $g$ está definida en todo $\mathbb{R}$, y $g(x)\geq 1$ para todo $x$. Entonces $Dom(f\circ g)=\mathbb{R}$.

**Paso 2: ¿qué rama de $f$ se usa?** Como $u=g(x)\geq 1$, nunca es menor que $-9$. La rama $x<-9$ **nunca se activa**.

**Paso 3: dos casos según $u=g(x)$.**
* Si $u>9$: $f(u)=2u+5$. Esto ocurre cuando $\sqrt{x^2+1}>9$, es decir $x^2>80$, es decir $|x|>4\sqrt5$.
* Si $u\leq 9$: como $u\geq 1>0$, $|u|=u$ y $f(u)=u^2-u$.

**Paso 4: sustitución.**

$$
(f\circ g)(x)=\begin{cases}
2\sqrt{x^2+1}+5 & \text{si } |x|>4\sqrt5 \\
(x^2+1)-\sqrt{x^2+1} & \text{si } |x|\leq 4\sqrt5
\end{cases}
$$

**Tabla de valores:**

| $x$ | $0$ | $2$ | $4$ | $10$ |
|:---:|:---:|:---:|:---:|:---:|
| $g(x)=\sqrt{x^2+1}$ | $1$ | $\approx 2{,}24$ | $\approx 4{,}12$ | $\approx 10{,}05$ |
| Rama | $u^2-u$ | $u^2-u$ | $u^2-u$ | $2u+5$ |
| $(f\circ g)(x)$ | $0$ | $\approx 2{,}76$ | $\approx 12{,}88$ | $\approx 25{,}10$ |

<GraficoFuncion
  titulo="(f∘g)(x): rama 2u+5 si |x| > 4√5; rama u²−u si |x| ≤ 4√5"
  :expresion="['2*Math.sqrt(x*x+1)+5', '(x*x+1)-Math.sqrt(x*x+1)', '2*Math.sqrt(x*x+1)+5']"
  :dominio="[']-10, -8.9443[', '[-8.9443, 8.9443]', ']8.9443, 10]']"
  :x-min="-10" :x-max="10" :y-min="0" :y-max="30"
/>

**Respuesta:** $(f\circ g)(x)$ es la función por tramos de arriba, con $Dom(f\circ g)=\mathbb{R}$.

</details>

---

## Ejercicio 11 · Composición por tramos

<details>
<summary><strong>11 · Encontrar A y h tal que g∘f: A → ℝ, x ↦ h(x)</strong></summary>

**Problema:** Con
$$ f(x)=\begin{cases} x & \text{si } x<0 \\ 2x & \text{si } x\geq 0 \end{cases} \qquad g(x)=\begin{cases} x^2 & \text{si } x<1 \\ \sqrt x & \text{si } x\geq 1 \end{cases} $$
encontrar $A\subseteq\mathbb{R}$ y $h$ tal que $(g\circ f)(x)=h(x)$.

**Paso 1: dominio.** $f$ está definida en todo $\mathbb{R}$. El conjunto de llegada de $f$ es $\mathbb{R}$, y $g$ acepta todos los reales (en $x<1$ con $x^2$, y en $x\geq1$ con $\sqrt x$, que es real). Por lo tanto $A=\mathbb{R}$.

**Paso 2: separar en casos según $x$.**

* **Si $x<0$:** $f(x)=x<0<1$, así que $g(f(x))=(x)^2=x^2$.
* **Si $x\geq 0$:** $f(x)=2x$. Hay que comparar $2x$ con $1$.
  * Si $0\leq x<\frac12$: $2x<1$, entonces $g(2x)=(2x)^2=4x^2$.
  * Si $x\geq\frac12$: $2x\geq 1$, entonces $g(2x)=\sqrt{2x}$.

**Paso 3: resultado.**

$$
h(x)=\begin{cases}
x^2 & \text{si } x<0 \\
4x^2 & \text{si } 0\leq x<\frac12 \\
\sqrt{2x} & \text{si } x\geq\frac12
\end{cases}
$$

**Tabla de valores:**

| $x$ | $-2$ | $0$ | $\frac14$ | $\frac12$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-2$ | $0$ | $\frac12$ | $1$ | $4$ |
| $(g\circ f)(x)=h(x)$ | $4$ | $0$ | $\frac14$ | $1$ | $2$ |

<GraficoFuncion
  titulo="h(x) = (g∘f)(x)"
  :expresion="['x*x', '4*x*x', 'Math.sqrt(2*x)']"
  :dominio="[']-4, 0[', '[0, 0.5[', '[0.5, 4]']"
  :x-min="-4" :x-max="4" :y-min="-1" :y-max="5"
  :puntos="[
    { x: 0.5, y: 1, label: '(1/2, 1)' }
  ]"
/>

**Respuesta:** $A=\mathbb{R}$ y $h$ es la función por tramos del paso 3.

</details>

---

## Ejercicio 12 · Verdadero o falso

<details>
<summary><strong>12(a) · f(x) = x² − 1, g(x) = √(x + 1). Dom(f∘g) = ℝ</strong></summary>

**Problema:** Determinar si es verdadero o falso que $Dom(f\circ g)=\mathbb{R}$, con $f(x)=x^2-1$ y $g(x)=\sqrt{x+1}$. Justificar.

**Análisis:** hay que tener cuidado con la trampa. Compongamos la fórmula:

$$ (f\circ g)(x)=\left(\sqrt{x+1}\right)^2-1=x+1-1=x $$

La expresión final $x$ está definida en todo $\mathbb{R}$, pero el dominio de una composición **no** se decide mirando solo la fórmula final. Hay que revisar cada paso.

**Dominio real:** $x$ debe estar en $Dom(g)$. Como $g(x)=\sqrt{x+1}$ exige $x+1\geq 0$, tenemos $Dom(f\circ g)=[-1,+\infty[$.

**Contraejemplo:** con $x=-2$, $g(-2)=\sqrt{-1}$ no es real, así que $(f\circ g)(-2)$ no existe, aunque la fórmula $x$ diría $-2$.

**Respuesta:** **Falso.** El dominio es $[-1,+\infty[$, no $\mathbb{R}$.

</details>

---

<details>
<summary><strong>12(b) · El valor mínimo de f(x) = x(x − 3) es −9/4</strong></summary>

**Problema:** Determinar si es verdadero o falso que el valor mínimo de $f(x)=x(x-3)$ es $-\dfrac94$.

**Paso 1: expandir.** $f(x)=x^2-3x$, una parábola con $a=1>0$, que abre hacia arriba: tiene un mínimo en su vértice.

**Paso 2: coordenada del vértice.**

$$ X_v=\frac{-b}{2a}=\frac{-(-3)}{2}=\frac32 $$

**Paso 3: altura del vértice.**

$$
\begin{aligned}
Y_v &= f\!\left(\tfrac32\right) = \left(\tfrac32\right)^2-3\left(\tfrac32\right) \\
&= \tfrac94-\tfrac92 = \tfrac94-\tfrac{18}{4} = -\tfrac94
\end{aligned}
$$

**Tabla de valores:**

| $x$ | $1$ | $1{,}5$ | $2$ |
|:---:|:---:|:---:|:---:|
| $f(x)=x^2-3x$ | $-2$ | $-\frac94=-2{,}25$ | $-2$ |

<GraficoFuncion
  titulo="f(x) = x(x − 3)  (mínimo −9/4 en x = 3/2)"
  expresion="x*(x-3)"
  :x-min="-1" :x-max="4" :y-min="-3" :y-max="4"
  :puntos="[
    { x: 1.5, y: -2.25, label: 'mínimo (3/2, −9/4)' }
  ]"
/>

**Respuesta:** **Verdadero.** El mínimo de la función es $-\dfrac94$, alcanzado en $x=\dfrac32$.

</details>
