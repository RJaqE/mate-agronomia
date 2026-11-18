# 2.2 Función Cuadrática (La Parábola)

En la naturaleza, rara vez las cosas crecen eternamente en línea recta. Si aplicas fertilizante a un cultivo, el rendimiento aumenta; pero si excedes la dosis óptima, la planta se intoxica y el rendimiento empieza a bajar.

Este comportamiento de **"subir, llegar a un punto máximo y luego bajar"** (o al revés, **"bajar, tocar un mínimo y luego subir"**) se modela con la **función cuadrática**. Su gráfica es una curva suave llamada **parábola**.

En esta página aprenderás a:

1. Reconocer una función cuadrática y el rol de sus coeficientes.
2. Encontrar el **vértice**, que es el punto más alto o más bajo de la curva.
3. Encontrar los **cortes con los ejes**, usando el discriminante.
4. Calcular el **dominio** y el **recorrido**, incluyendo el caso en que el dominio es un intervalo.
5. Resolver problemas de **optimización** (máximos y mínimos en situaciones reales).

> **Cómo usar esta página:** los ejemplos están plegados. Haz clic en el título para desplegar la resolución completa, con tablas, explicaciones y gráfica. Los ejemplos mantienen las letras del libro (a, b, d, e, f...). El libro no tiene literal c, así que se salta.

---

## 1. Estructura de la función cuadrática

Una función es **cuadrática** cuando la variable $x$ aparece elevada al cuadrado (y, como máximo, al cuadrado). Su forma general es:

$$ f(x) = ax^2 + bx + c \qquad \text{con } a \neq 0 $$

**¿Por qué $a \neq 0$?** Si $a=0$, el término $ax^2$ desaparece y queda $f(x)=bx+c$, que es una función **lineal**, no cuadrática.

### ¿Qué significa cada coeficiente?

| Coeficiente | Qué acompaña | Qué controla | Lo que vemos en la gráfica |
|:---:|:---:|:---:|:---|
| $a$ | $x^2$ | La **concavidad** (hacia dónde se abre) | Si $a>0$, la parábola se abre hacia arriba ($\cup$). Si $a<0$, se abre hacia abajo ($\cap$). |
| $b$ | $x$ | La **posición horizontal** del vértice | Junto con $a$ determina en qué $x$ está el vértice. |
| $c$ | nada (término independiente) | El **corte con el eje Y** | La parábola siempre pasa por el punto $(0,\,c)$. |

### Idea clave: ¿por qué la parábola "tiene techo" o "tiene piso"?

Piensa en $x^2$. Sin importar si $x$ es positivo o negativo, $x^2$ **siempre es mayor o igual a cero**:

* $(-3)^2 = 9$
* $(2)^2 = 4$
* $(0)^2 = 0$

Por eso, cuando $a>0$, el término $ax^2$ nunca es negativo y la función tiene un **piso** (mínimo). Cuando $a<0$, el término $ax^2$ nunca es positivo y la función tiene un **techo** (máximo).

---

## 2. El vértice

El **vértice** es el punto donde la parábola cambia de dirección. Es el punto más crítico de la función:
* Si $a>0$: es el **mínimo** (el punto más bajo).
* Si $a<0$: es el **máximo** (el punto más alto).

### Fórmulas del vértice $V(x_v, y_v)$

El cálculo siempre se hace en dos pasos obligatorios:

**Paso 1: la posición horizontal**

$$ x_v = \frac{-b}{2a} $$

**Paso 2: la altura**

$$ y_v = f(x_v) = \frac{4ac - b^2}{4a} $$

La segunda fórmula es un atajo: en lugar de reemplazar $x_v$ en la función, usamos directamente $a$, $b$ y $c$.

### ¿De dónde sale esta fórmula? (completar el cuadrado)

Partimos de $f(x)=ax^2+bx+c$ y factorizamos $a$ de los dos primeros términos:

$$
\begin{aligned}
f(x) &= a\left(x^2 + \frac{b}{a}x\right) + c \\
&= a\left(x^2 + \frac{b}{a}x + \frac{b^2}{4a^2}\right) - a\cdot\frac{b^2}{4a^2} + c \\
&= a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a} + c \\
&= a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a}
\end{aligned}
$$

Esta es la **forma canónica** o **forma de vértice**. El término $\left(x+\frac{b}{2a}\right)^2$ se anula cuando $x=-\frac{b}{2a}$, y ahí la función vale exactamente $-\frac{b^2-4ac}{4a}$.

**Ejemplo rápido:** en $f(x)=x^2-6x+5$ tenemos $a=1$, $b=-6$, $c=5$.
* $x_v = \dfrac{6}{2} = 3$
* $y_v = \dfrac{4(1)(5)-36}{4} = \dfrac{20-36}{4} = -4$

Vértice: $(3,\,-4)$. Lo verificamos reemplazando: $f(3)=9-18+5=-4$ ✓.

### Tabla resumen de la forma canónica

| Forma | Expresión | Útil para |
|:---|:---|:---|
| Forma general | $ax^2+bx+c$ | Leer $a$, $b$, $c$ y el corte con $Y$ |
| Forma de vértice | $a(x-x_v)^2+y_v$ | Leer el vértice directamente |
| Forma factorizada | $a(x-x_1)(x-x_2)$ | Leer los cortes con el eje $X$ (si existen) |

---

## 3. Cortes con el eje X y el discriminante

Los cortes con el eje $X$ son los valores de $x$ donde $f(x)=0$. Para encontrarlos usamos la **fórmula cuadrática**:

$$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

El número bajo la raíz, $\Delta = b^2 - 4ac$, se llama **discriminante** y decide cuántos cortes hay:

| Discriminante | Cortes con el eje $X$ | Lo que se ve en la gráfica |
|:---:|:---:|:---|
| $\Delta > 0$ | **Dos** cortes distintos | La parábola cruza el eje $X$ en dos puntos |
| $\Delta = 0$ | **Un** corte (raíz doble) | La parábola solo toca el eje $X$ en el vértice |
| $\Delta < 0$ | **Ninguno** | La parábola queda completamente por encima o por debajo del eje $X$ |

<details>
<summary><strong>Ejemplo complementario 3.1 · Tres casos del discriminante (Δ = 0)</strong></summary>

**Enunciado.** Analice el número de cortes con el eje $X$ de $f(x)=x^2-4x+4$.

**Paso 1: identificar coeficientes.** $a=1$, $b=-4$, $c=4$.

**Paso 2: calcular el discriminante.**

$$ \Delta = b^2 - 4ac = (-4)^2 - 4(1)(4) = 16 - 16 = 0 $$

Como $\Delta=0$, hay **un solo corte**.

**Paso 3: encontrar el corte.**

$$ x = \frac{-(-4)}{2(1)} = \frac{4}{2} = 2 $$

**Paso 4: verificar el vértice.** $y_v = f(2) = 4-8+4 = 0$. El vértice es $(2,\,0)$, justo sobre el eje $X$. Por eso la parábola lo toca y no lo cruza.

Además, $x^2-4x+4 = (x-2)^2$, un cuadrado perfecto, lo que confirma que la raíz es doble.

**Tabla de valores.**

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $4$ | $1$ | $0$ | $1$ | $4$ |

<GraficoFuncion
  titulo="f(x) = x² − 4x + 4 (Δ = 0: la parábola toca el eje X en el vértice)"
  expresion="x*x - 4*x + 4"
  :x-min="-1" :x-max="5" :y-min="-1" :y-max="6"
  :puntos="[
    { x: 2, y: 0, label: 'Vértice y único corte (2, 0)' },
    { x: 0, y: 4, label: '(0, 4)' }
  ]"
/>

**Conclusión.** $\Delta=0$: un solo corte, en $x=2$, y el vértice está sobre el eje $X$.

</details>

**Errores frecuentes:**
* Olvidar el signo negativo de $b$ en $-b$. Si $b=-4$, entonces $-b=+4$.
* Calcular $4ac$ con el signo equivocado. Si $c$ es negativo, $4ac$ puede volverse positivo.
* Confundir el discriminante con la fórmula completa. El discriminante es solo lo que está dentro de la raíz.

---

## 4. Dominio y recorrido de una función cuadrática

### Dominio

La expresión $ax^2+bx+c$ no tiene divisiones por $x$ ni raíces cuadradas. Por lo tanto, si el enunciado no pone ninguna restricción:

$$ D_f = \mathbb{R} $$

### Recorrido

El recorrido **no es todo $\mathbb{R}$**. Depende del signo de $a$ y de la altura del vértice:

| Signo de $a$ | Tipo de vértice | Recorrido (si $D_f=\mathbb{R}$) |
|:---:|:---:|:---:|
| $a>0$ | Mínimo | $R_f = [\,y_v,\ +\infty\,[$ |
| $a<0$ | Máximo | $R_f = \,]\,-\infty,\ y_v\,]$ |

### Cuando el dominio es un intervalo

Muchos ejemplos del libro dan un dominio restringido, como $]-2,3]$ o $[2,4]$. Para estos casos hay que hacer una pregunta extra:

> **¿El vértice está dentro del dominio?**

* **Sí, el vértice está dentro:** el mínimo (o máximo) se alcanza en el vértice. Los extremos del intervalo dan los otros valores del recorrido.
* **No, el vértice está fuera:** la función es monótona (siempre sube o siempre baja) dentro del intervalo. El valor mínimo y máximo se alcanzan **en los extremos** del dominio.

**Regla para no equivocarse:** evalúa la función en los extremos del dominio y en el vértice (si está dentro). Los valores más pequeño y más grande son los que determinan el recorrido. Recuerda que un extremo **abierto** (con paréntesis `]` o `[` apuntando hacia afuera) no se incluye, así que su valor no entra al recorrido.

---

## 5. Ejemplos resueltos del libro

### Ejemplo manuscrito: $f(x)=x^2+5x+6$

Esta función aparece escrita a mano en el libro, como guía para encontrar el vértice completando el cuadrado.

**Paso 1: completar el cuadrado.**

$$
\begin{aligned}
y &= x^2 + 5x + 6 \\
y &= \left(x + \tfrac{5}{2}\right)^2 - \tfrac{25}{4} + 6 \\
y + \tfrac{1}{4} &= \left(x + \tfrac{5}{2}\right)^2
\end{aligned}
$$

**Paso 2: leer el vértice.** De la forma $(x-h)^2+k$, obtenemos $h=-\frac{5}{2}$ y $k=-\frac{1}{4}$. El vértice es $\left(-\frac{5}{2},\,-\frac{1}{4}\right)$.

**Paso 3: verificar con la fórmula.** $x_v=\dfrac{-5}{2}$ ✓. $y_v=\dfrac{4(1)(6)-25}{4}=\dfrac{-1}{4}$ ✓.

**Paso 4: cortes con el eje $X$.** Factorizamos $x^2+5x+6=(x+2)(x+3)$, así que $x=-2$ y $x=-3$. Como $\Delta=25-24=1>0$, hay dos cortes, consistentes con la factorización.

**Paso 5: recorrido.** Como $a=1>0$ (se abre hacia arriba) y el dominio es $\mathbb{R}$: $R_f=\left[-\frac{1}{4},\,+\infty\right[$.

**Tabla de valores.**

| $x$ | $-4$ | $-3$ | $-2{,}5$ | $-2$ | $-1$ | $0$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $2$ | $0$ | $-\frac{1}{4}$ | $0$ | $2$ | $6$ |

<GraficoFuncion
  titulo="f(x) = x² + 5x + 6  (vértice −5/2, −1/4)"
  expresion="x*x + 5*x + 6"
  :x-min="-5" :x-max="1" :y-min="-1" :y-max="7"
  :puntos="[
    { x: -2.5, y: -0.25, label: 'Vértice (−5/2, −1/4)' },
    { x: -3, y: 0, label: '(−3, 0)' },
    { x: -2, y: 0, label: '(−2, 0)' },
    { x: 0, y: 6, label: '(0, 6)' }
  ]"
/>

**Conclusión.** $D_f=\mathbb{R}$, $R_f=\left[-\frac{1}{4},+\infty\right[$, cortes en $-3$ y $-2$.

---

### Ejemplo a) : $f(x)=3x^2+6x-2$ (dominio $\mathbb{R}$, $a>0$)

<details>
<summary><strong>Ejemplo a) · Vértice, cortes y recorrido de 3x² + 6x − 2</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}\to\mathbb{R}$, $f(x)=3x^2+6x-2$. Determine el vértice, el dominio, el recorrido y grafique.

**Paso 1: identificar coeficientes.** $a=3$, $b=6$, $c=-2$.

Como $a=3>0$, la parábola se abre hacia arriba y el vértice es un **mínimo**.

**Paso 2: posición del vértice.**

$$ x_v = \frac{-b}{2a} = \frac{-6}{2(3)} = \frac{-6}{6} = -1 $$

**Paso 3: altura del vértice.** Reemplazamos $x=-1$ en la función:

$$ y_v = 3(-1)^2 + 6(-1) - 2 = 3 - 6 - 2 = -5 $$

Lo verificamos con la fórmula directa: $y_v=\dfrac{4(3)(-2)-6^2}{4(3)}=\dfrac{-24-36}{12}=-5$ ✓.

El vértice (mínimo) es **$V(-1,\,-5)$**.

**Paso 4: cortes con los ejes.**
* Con $Y$: $c=-2$, punto $(0,-2)$.
* Con $X$: $\Delta=6^2-4(3)(-2)=36+24=60>0$, así que hay dos cortes:

$$ x=\frac{-6\pm\sqrt{60}}{6} = -1 \pm \frac{\sqrt{60}}{6} \approx -1 \pm 1{,}29 $$

Los cortes son aproximadamente $x\approx-2{,}29$ y $x\approx 0{,}29$.

**Paso 5: tabla de valores.**

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)=3x^2+6x-2$ | $7$ | $-2$ | $-5$ | $-2$ | $7$ |

Observa la simetría: $x=-3$ y $x=1$ dan lo mismo ($7$), porque están a la misma distancia del eje de simetría $x=-1$.

**Paso 6: gráfica.**

<GraficoFuncion
  titulo="f(x) = 3x² + 6x − 2  (mínimo en V(−1, −5))"
  expresion="3*x*x + 6*x - 2"
  :x-min="-4" :x-max="3" :y-min="-6" :y-max="10"
  :puntos="[
    { x: -1, y: -5, label: 'Mínimo V(−1, −5)' },
    { x: 0, y: -2, label: '(0, −2)' },
    { x: 1, y: 7, label: '(1, 7)' }
  ]"
/>

**Paso 7: dominio y recorrido.**
* $D_f=\mathbb{R}$, porque no hay restricciones.
* Para el recorrido, usamos la forma de vértice: $f(x)=3(x+1)^2-5$. Como $(x+1)^2\ge 0$, entonces $3(x+1)^2\ge 0$ y $3(x+1)^2-5\ge -5$. Por lo tanto $R_f=[-5,+\infty[$.

**Conclusión.** Mínimo en $V(-1,-5)$, $D_f=\mathbb{R}$, $R_f=[-5,+\infty[$.

</details>

---

### Ejemplo b) : $f:\,]-2,3]\to\mathbb{R}$, $f(x)=x^2-2x+1$

<details>
<summary><strong>Ejemplo b) · Cuadrática con dominio intervalo, vértice dentro del dominio</strong></summary>

**Enunciado.** Sea $f:\,]-2,3]\to\mathbb{R}$, $f(x)=x^2-2x+1$. Determine el vértice, dominio y recorrido, y grafique.

**Paso 1: reconocer la función.** $a=1$, $b=-2$, $c=1$. Como $x^2-2x+1=(x-1)^2$, es un cuadrado perfecto y el vértice estará sobre el eje $X$.

**Paso 2: vértice.**

$$ x_v = \frac{-(-2)}{2(1)} = \frac{2}{2} = 1 $$

$$ y_v = (1-1)^2 = 0 $$

El vértice es **$V(1,\,0)$**, y es un **mínimo** porque $a=1>0$.

> **Corrección al libro:** en la resolución original aparece "Punto mínimo $(-1,0)$". El cálculo correcto da $x_v=+1$, así que el mínimo está en $(1,\,0)$.

**Paso 3: ¿el vértice está dentro del dominio?** $]-2,3]$ contiene al $1$, así que **sí**. Por eso el mínimo se alcanza en el vértice.

**Paso 4: tabla de valores.**

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | No | Sí | Sí | Sí | Sí | Sí |
| $f(x)=(x-1)^2$ | — (tendería a $9$) | $4$ | $1$ | $0$ | $1$ | $4$ |

**Paso 5: recorrido.** Analicemos los extremos del intervalo:
* En $x=-2$ (excluido), la función tiende a $(-2-1)^2 = 9$, pero nunca lo alcanza. Ese valor queda fuera.
* En $x=3$ (incluido), la función vale $(3-1)^2 = 4$.
* El mínimo, en el vértice, vale $0$ y sí se alcanza.

Por lo tanto los valores van desde $0$ (incluido) hasta $9$ (excluido). $R_f=[0,\,9[$.

**Paso 6: gráfica.**

<GraficoFuncion
  titulo="f(x) = (x − 1)² con dominio ]−2, 3]"
  expresion="(x-1)*(x-1)"
  dominio="]-2, 3]"
  :x-min="-3" :x-max="4" :y-min="-1" :y-max="10"
  :puntos="[
    { x: 1, y: 0, label: 'Mínimo V(1, 0)' },
    { x: -2, y: 9, label: '(−2, 9) no incluido', abierto: true },
    { x: 3, y: 4, label: '(3, 4)' }
  ]"
/>

**Conclusión.** $D_f=\,]-2,3]$, $R_f=[0,9[$, con mínimo $V(1,0)$.

</details>

---

### Ejemplo d) : $f:\,[-3,2[\to\mathbb{R}$, $f(x)=x^2+2x+3$

<details>
<summary><strong>Ejemplo d) · Cuadrática sin cortes con el eje X (Δ < 0)</strong></summary>

**Enunciado.** Sea $f:\,[-3,2[\to\mathbb{R}$, $f(x)=x^2+2x+3$. Determine el vértice, cortes, dominio y recorrido, y grafique.

**Paso 1: coeficientes.** $a=1$, $b=2$, $c=3$. Como $a>0$, es un mínimo.

**Paso 2: vértice.**

$$ x_v = \frac{-2}{2(1)} = -1 $$

$$ y_v = f(-1) = 1 - 2 + 3 = 2 $$

Vértice $V(-1,\,2)$, mínimo. También con la forma de vértice: $f(x)=(x+1)^2+2$.

**Paso 3: cortes con $X$.** $\Delta = 2^2-4(1)(3) = 4-12 = -8 < 0$. **No hay cortes con el eje $X$**: la parábola siempre está por encima de $y=0$, lo que coincide con que el mínimo ($2$) es positivo.

**Paso 4: ¿el vértice está en el dominio?** $[-3,2[$ contiene al $-1$. **Sí**, así que el mínimo se alcanza.

**Paso 5: tabla de valores.**

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | Sí | Sí | Sí | Sí | Sí | No |
| $f(x)$ | $6$ | $3$ | $2$ | $3$ | $6$ | — (tendería a $11$) |

**Paso 6: recorrido.**
* Mínimo en $x=-1$: valor $2$ (incluido).
* Extremo izquierdo $x=-3$ (incluido): valor $6$.
* Extremo derecho $x\to 2$ (excluido): tiende a $11$, pero no lo alcanza.

El recorrido va desde $2$ hasta $11$, incluyendo el $2$ y excluyendo el $11$: $R_f=[2,\,11[$.

**Paso 7: gráfica.**

<GraficoFuncion
  titulo="f(x) = x² + 2x + 3 con dominio [−3, 2["
  expresion="x*x + 2*x + 3"
  dominio="[-3, 2["
  :x-min="-4" :x-max="3" :y-min="0" :y-max="12"
  :puntos="[
    { x: -1, y: 2, label: 'Mínimo V(−1, 2)' },
    { x: -3, y: 6, label: '(−3, 6)' },
    { x: 2, y: 11, label: '(2, 11) no incluido', abierto: true }
  ]"
/>

**Conclusión.** Sin cortes con $X$, mínimo $V(-1,2)$, $D_f=[-3,2[$, $R_f=[2,11[$.

</details>

---

### Ejemplo e) : $f(x)=-3x^2+7x+2$ (dominio $\mathbb{R}$, $a<0$)

<details>
<summary><strong>Ejemplo e) · Máximo de una parábola que se abre hacia abajo</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}\to\mathbb{R}$, $f(x)=-3x^2+7x+2$. Determine el vértice, dominio, recorrido y grafique.

**Paso 1: coeficientes.** $a=-3$, $b=7$, $c=2$. Como $a<0$, la parábola se abre hacia abajo y el vértice es un **máximo**.

**Paso 2: posición del máximo.**

$$ x_v = \frac{-7}{2(-3)} = \frac{-7}{-6} = \frac{7}{6} $$

**Paso 3: altura del máximo.**

$$ y_v = \frac{4ac-b^2}{4a} = \frac{4(-3)(2)-7^2}{4(-3)} = \frac{-24-49}{-12} = \frac{-73}{-12} = \frac{73}{12} \approx 6{,}08 $$

Vértice $V\!\left(\frac{7}{6},\,\frac{73}{12}\right)$, el punto más alto.

**Paso 4: cortes con $X$.** $\Delta = 49-4(-3)(2) = 49+24 = 73 > 0$, así que hay dos cortes, en $x\approx -0{,}26$ y $x\approx 2{,}59$.

**Paso 5: tabla de valores.**

| $x$ | $-1$ | $0$ | $1$ | $\frac{7}{6}$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-8$ | $2$ | $6$ | $\frac{73}{12}\approx 6{,}08$ | $4$ | $-4$ |

**Paso 6: gráfica.**

<GraficoFuncion
  titulo="f(x) = −3x² + 7x + 2  (máximo en V(7/6, 73/12))"
  expresion="-3*x*x + 7*x + 2"
  :x-min="-2" :x-max="4" :y-min="-9" :y-max="8"
  :puntos="[
    { x: 1.1667, y: 6.0833, label: 'Máximo V(7/6, 73/12)' },
    { x: 0, y: 2, label: '(0, 2)' },
    { x: 3, y: -4, label: '(3, −4)' }
  ]"
/>

**Paso 7: dominio y recorrido.**
* $D_f=\mathbb{R}$.
* Como $a<0$ y el vértice es el máximo, $R_f = \,]\,-\infty,\ \tfrac{73}{12}\,]$.

**Conclusión.** Máximo en $V\!\left(\frac{7}{6},\frac{73}{12}\right)$, $R_f=\,]-\infty,\frac{73}{12}]$.

</details>

---

### Ejemplo f) : $f:\,]0,2[\to\mathbb{R}$, $f(x)=-2x^2+6x-4$

<details>
<summary><strong>Ejemplo f) · Máximo, cortes y huecos en un dominio abierto</strong></summary>

**Enunciado.** Sea $f:\,]0,2[\to\mathbb{R}$, $f(x)=-2x^2+6x-4$. Determine el vértice, cortes, dominio y recorrido, y grafique.

**Paso 1: coeficientes.** $a=-2$, $b=6$, $c=-4$. Como $a<0$, es un **máximo**.

**Paso 2: vértice.**

$$ x_v = \frac{-6}{2(-2)} = \frac{-6}{-4} = \frac{3}{2} $$

$$ y_v = \frac{4(-2)(-4)-6^2}{4(-2)} = \frac{32-36}{-8} = \frac{-4}{-8} = \frac{1}{2} $$

Vértice $V\!\left(\frac{3}{2},\,\frac{1}{2}\right)$.

**Paso 3: cortes con $X$.** $\Delta = 36-4(-2)(-4)=36-32=4>0$.

$$ x=\frac{-6\pm 2}{-4} \implies x_1 = 1 \quad \text{y} \quad x_2 = 2 $$

El corte en $x=1$ está dentro del dominio. El corte en $x=2$ **no** está dentro del dominio (el intervalo es abierto), así que aparece como **hueco**.

**Paso 4: ¿el vértice está en el dominio?** $\frac{3}{2}\in\,]0,2[$. **Sí**, el máximo se alcanza.

**Paso 5: tabla de valores.**

| $x$ | $0$ | $0{,}5$ | $1$ | $1{,}5$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | No | Sí | Sí | Sí | No |
| $f(x)$ | — (tendería a $-4$) | $-1{,}5$ | $0$ | $\frac{1}{2}$ | — (tendería a $0$) |

**Paso 6: recorrido.**
* El máximo $\frac{1}{2}$ se alcanza en $x=\frac{3}{2}$, que sí está dentro: se incluye.
* En $x\to 0^+$ la función tiende a $-4$, pero no lo alcanza. Ese valor queda fuera.
* En $x\to 2^-$ la función tiende a $0$, pero no lo alcanza.

Entonces el recorrido es $R_f=\,]-4,\ \tfrac{1}{2}\,]$.

**Paso 7: gráfica.**

<GraficoFuncion
  titulo="f(x) = −2x² + 6x − 4 con dominio ]0, 2["
  expresion="-2*x*x + 6*x - 4"
  dominio="]0, 2["
  :x-min="-0.5" :x-max="2.5" :y-min="-5" :y-max="1"
  :puntos="[
    { x: 1.5, y: 0.5, label: 'Máximo V(3/2, 1/2)' },
    { x: 1, y: 0, label: 'Corte (1, 0)' },
    { x: 0, y: -4, label: 'hueco (0, −4)', abierto: true },
    { x: 2, y: 0, label: 'hueco (2, 0)', abierto: true }
  ]"
/>

**Conclusión.** Máximo $V\!\left(\frac{3}{2},\frac{1}{2}\right)$, $D_f=\,]0,2[$, $R_f=\,]-4,\frac{1}{2}]$.

</details>

---

### Ejemplo g) : $f:\,[2,4]\to\mathbb{R}$, $f(x)=-x^2+5x-9$

<details>
<summary><strong>Ejemplo g) · Máximo dentro del intervalo, mínimo en un extremo</strong></summary>

**Enunciado.** Sea $f:\,[2,4]\to\mathbb{R}$, $f(x)=-x^2+5x-9$. Determine el vértice, dominio y recorrido, y grafique.

**Paso 1: coeficientes.** $a=-1$, $b=5$, $c=-9$. Como $a<0$, es un **máximo**.

**Paso 2: vértice.**

$$ x_v = \frac{-5}{2(-1)} = \frac{-5}{-2} = \frac{5}{2} $$

$$ y_v = \frac{4(-1)(-9)-5^2}{4(-1)} = \frac{36-25}{-4} = \frac{11}{-4} = -\frac{11}{4} $$

Vértice $V\!\left(\frac{5}{2},\,-\frac{11}{4}\right)$.

**Paso 3: ¿el vértice está en el dominio?** $\frac{5}{2}\in[2,4]$. **Sí**, así que el máximo se alcanza en el vértice.

**Paso 4: tabla de valores.**

| $x$ | $2$ | $2{,}5$ | $3$ | $3{,}5$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-3$ | $-\frac{11}{4}\approx -2{,}75$ | $-3$ | $-3{,}75$ | $-5$ |

**Paso 5: recorrido.** Como el dominio es cerrado, todos los extremos se incluyen.
* Máximo en el vértice: $-\frac{11}{4}$.
* Mínimo en el extremo derecho $x=4$: $f(4)=-16+20-9=-5$.
* En $x=2$ el valor es $-3$, que queda entre los dos anteriores.

Por lo tanto $R_f=\left[-5,\ -\frac{11}{4}\right]$.

**Paso 6: gráfica.**

<GraficoFuncion
  titulo="f(x) = −x² + 5x − 9 con dominio [2, 4]"
  expresion="-x*x + 5*x - 9"
  dominio="[2, 4]"
  :x-min="1" :x-max="5" :y-min="-6" :y-max="0"
  :puntos="[
    { x: 2.5, y: -2.75, label: 'Máximo V(5/2, −11/4)' },
    { x: 2, y: -3, label: '(2, −3)' },
    { x: 4, y: -5, label: 'Mínimo (4, −5)' }
  ]"
/>

**Conclusión.** $D_f=[2,4]$, $R_f=\left[-5,-\frac{11}{4}\right]$.

</details>

---

### Ejemplo h) : Cerco con 85 metros de alambre (problema de área máxima)

<details>
<summary><strong>Ejemplo h) · Optimización: el terreno de área máxima</strong></summary>

**Enunciado.** Se dispone de un alambre de $85$ metros para cercar **tres lados** de un terreno rectangular (el cuarto lado lo forma un muro o un camino). ¿Qué dimensiones dan la mayor área posible?

**Paso 1: dibujar y nombrar.** Llamamos $x$ al ancho (los dos lados iguales) y el largo lo llamamos $L$.

```
          ancho x
   ┌───────────────────┐
   │                   │  x
   │                   │
   └───────────────────┘
        largo = 85 − 2x
```

Los tres lados cercados son: dos anchos ($x$ cada uno) y un largo. Como el alambre mide $85$:

$$ 2x + L = 85 \implies L = 85 - 2x $$

**Paso 2: escribir el área.** El área de un rectángulo es base por altura:

$$ A(x) = x\,(85-2x) = 85x - 2x^2 $$

Esta es una función cuadrática con $a=-2$, $b=85$, $c=0$. Como $a<0$, tiene un **máximo**: exactamente lo que buscamos.

**Paso 3: encontrar el ancho óptimo.**

$$ x_v = \frac{-85}{2(-2)} = \frac{-85}{-4} = \frac{85}{4} = 21{,}25 \text{ m} $$

**Paso 4: área máxima.**

$$ A_{\max} = \frac{4ac-b^2}{4a} = \frac{0-85^2}{4(-2)} = \frac{-7225}{-8} = 903{,}125 \text{ m}^2 $$

**Paso 5: el largo.** $L = 85 - 2(21{,}25) = 85 - 42{,}5 = 42{,}5$ m.

**Verificación:** $2(21{,}25)+42{,}5 = 85$ ✓ y $21{,}25 \times 42{,}5 = 903{,}125$ ✓.

**Paso 6: tabla para entender por qué ese es el máximo.**

| Ancho $x$ (m) | $5$ | $10$ | $15$ | $21{,}25$ | $30$ | $40$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Largo $85-2x$ (m) | $75$ | $65$ | $55$ | $42{,}5$ | $25$ | $5$ |
| Área $A(x)$ (m²) | $375$ | $650$ | $825$ | $903{,}125$ | $750$ | $200$ |

Se ve que el área sube, llega a su punto más alto cerca de $x=21{,}25$, y luego baja.

**Paso 7: gráfica.**

<GraficoFuncion
  titulo="Área A(x) = 85x − 2x²  (máximo en x = 21,25)"
  expresion="85*x - 2*x*x"
  dominio="[0, 42.5]"
  :x-min="0" :x-max="45" :y-min="0" :y-max="1000"
  :puntos="[
    { x: 21.25, y: 903.125, label: 'Máximo (21,25; 903,125)' },
    { x: 0, y: 0, label: '(0, 0)' },
    { x: 42.5, y: 0, label: '(42,5; 0)' }
  ]"
/>

**Conclusión.** El terreno óptimo mide **$21{,}25$ m de ancho por $42{,}5$ m de largo**, con un área máxima de **$903{,}125$ m²**.

> **Nota:** el dominio práctico es $0 < x < 42{,}5$. Fuera de ese intervalo no existe un terreno con área positiva.

</details>

---

### Ejemplo i) : Movimiento parabólico de un proyectil

<details>
<summary><strong>Ejemplo i) · Altura máxima y tiempo de vuelo de un proyectil</strong></summary>

**Enunciado.** Un proyectil se lanza desde el suelo hacia arriba, describiendo un movimiento parabólico. La altura en metros en el instante $t$ (en segundos) está dada por:

$$ H(t) = -4t^2 + 15t $$

a) ¿En qué momento alcanza la altura máxima?
b) ¿Cuál es la altura máxima?

**Paso 1: coeficientes.** $a=-4$, $b=15$, $c=0$. Como $a<0$, la trayectoria tiene un **máximo**.

Además, $c=0$ significa que $H(0)=0$: el proyectil parte desde el suelo.

**Paso 2: momento de la altura máxima (literal a).**

$$ t_v = \frac{-b}{2a} = \frac{-15}{2(-4)} = \frac{-15}{-8} = \frac{15}{8} = 1{,}875 \text{ s} $$

> **Corrección al libro:** la resolución original escribe $t=1{,}85$ s. El cálculo exacto da $\frac{15}{8}=1{,}875$, que redondeado es **$1{,}88$ s**.

**Paso 3: altura máxima (literal b).**

$$ H_{\max} = \frac{4ac-b^2}{4a} = \frac{4(-4)(0)-15^2}{4(-4)} = \frac{-225}{-16} = \frac{225}{16} = 14{,}0625 \text{ m} $$

> **Corrección al libro:** la resolución original escribe $4a = -8$. En realidad $4a = 4(-4) = -16$. El resultado final ($14{,}06$ m) sí es correcto, pero la división intermedia del libro no lo es.

**Paso 4: tabla de valores.**

| $t$ (s) | $0$ | $0{,}5$ | $1$ | $1{,}5$ | $1{,}875$ | $2$ | $3$ | $3{,}75$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $H(t)$ (m) | $0$ | $6{,}5$ | $11$ | $13{,}5$ | $14{,}06$ | $14$ | $9$ | $0$ |

**Paso 5: tiempo de vuelo.** El proyectil vuelve al suelo cuando $H(t)=0$:

$$ -4t^2+15t=0 \implies t(-4t+15)=0 \implies t=0 \quad \text{o} \quad t=\frac{15}{4}=3{,}75 \text{ s} $$

Así, sale en $t=0$ y cae en $t=3{,}75$ s. El punto más alto ocurre justo a mitad de camino: $\frac{3{,}75}{2}=1{,}875$ s ✓.

**Paso 6: gráfica.**

<GraficoFuncion
  titulo="H(t) = −4t² + 15t  (altura máxima 14,06 m en t = 1,875 s)"
  expresion="-4*x*x + 15*x"
  dominio="[0, 3.75]"
  :x-min="0" :x-max="4" :y-min="0" :y-max="16"
  :puntos="[
    { x: 1.875, y: 14.0625, label: 'Máximo (1,875; 14,06)' },
    { x: 0, y: 0, label: 'Salida (0, 0)' },
    { x: 3.75, y: 0, label: 'Caída (3,75; 0)' }
  ]"
/>

**Conclusión.**
* a) La altura máxima se alcanza a los **$1{,}88$ s** (exactamente $1{,}875$ s).
* b) La altura máxima es de **$14{,}06$ m**.

</details>

---

### Ejemplo j) : Ingreso de una embotelladora

<details>
<summary><strong>Ejemplo j) · Cantidad necesaria para lograr un ingreso fijo</strong></summary>

**Enunciado.** Una compañía vende semanalmente $x$ botellas de agua a $p$ dólares cada una. La relación entre el precio y la cantidad está dada por la ecuación de demanda:

$$ p = x - 246 $$

¿Cuántas botellas debe vender la compañía para obtener un ingreso semanal de $\$1.000$?

**Paso 1: relación entre las variables.**
* Precio por botella: $p = x-246$.
* Cantidad vendida: $x$.
* Ingreso total: **precio por cantidad** $\implies I = p\cdot x$.

**Paso 2: plantear la ecuación.** Queremos que el ingreso sea $1.000$:

$$ (x-246)\cdot x = 1.000 $$

Expandimos:

$$ x^2 - 246x = 1.000 $$

Pasamos todo a un lado para tener la forma $ax^2+bx+c=0$:

$$ x^2 - 246x - 1.000 = 0 $$

**Paso 3: identificar coeficientes.** $a=1$, $b=-246$, $c=-1.000$.

**Paso 4: discriminante.**

$$ \Delta = (-246)^2 - 4(1)(-1000) = 60.516 + 4.000 = 64.516 $$

Como $\Delta>0$, hay dos soluciones. Notemos que $\sqrt{64.516} = 254$ (porque $254^2 = 64.516$).

**Paso 5: fórmula cuadrática.**

$$ x = \frac{-(-246) \pm \sqrt{64.516}}{2(1)} = \frac{246 \pm 254}{2} $$

$$ x_1 = \frac{246+254}{2} = \frac{500}{2} = 250 \qquad x_2 = \frac{246-254}{2} = \frac{-8}{2} = -4 $$

**Paso 6: elegir la solución válida.** Una cantidad de botellas no puede ser negativa, así que descartamos $x=-4$. La respuesta es $x=250$.

**Verificación:** con $x=250$, el precio es $p=250-246=4$ dólares, y el ingreso es $4 \cdot 250 = 1.000$ ✓.

**Paso 7: tabla de valores.**

| Botellas $x$ | $200$ | $246$ | $250$ | $254$ | $300$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Precio $p=x-246$ | $-46$ | $0$ | $4$ | $8$ | $54$ |
| Ingreso $I=p\cdot x$ | $-9.200$ | $0$ | $1.000$ | $2.032$ | $16.200$ |

> **Observación para pensar:** en este modelo, el precio sube cuando se venden más botellas, algo poco realista (normalmente más ventas implican precios más bajos). Además, para $x<246$ el precio sería negativo y no tiene sentido. Por eso el ejercicio solo tiene sentido con $x>246$, y la solución $x=250$ es la única válida.

**Paso 8: gráfica.**

<GraficoFuncion
  titulo="Ingreso I(x) = (x − 246)·x  (I = 1.000 cuando x = 250)"
  expresion="(x-246)*x"
  dominio="[246, 300]"
  :x-min="200" :x-max="300" :y-min="-10000" :y-max="20000"
  :puntos="[
    { x: 250, y: 1000, label: 'Ingreso 1.000 con x = 250' },
    { x: 246, y: 0, label: '(246, 0)' }
  ]"
/>

**Conclusión.** La compañía debe vender **$250$ botellas** semanales.

</details>

---

## 6. Ejemplos complementarios

Estos ejemplos no vienen en el libro, pero refuerzan las ideas con números sencillos.

<details>
<summary><strong>Complementario A · Vértice, dominio y recorrido de f(x) = x² − 6x + 5</strong></summary>

**Enunciado.** Dada $f(x)=x^2-6x+5$, calcule dominio, vértice y recorrido.

**Paso 1: coeficientes.** $a=1$, $b=-6$, $c=5$. Como $a>0$, es un mínimo.

**Paso 2: dominio.** $D_f=\mathbb{R}$.

**Paso 3: vértice.**

$$ x_v = \frac{6}{2} = 3 \qquad y_v = f(3) = 9-18+5 = -4 $$

Vértice $V(3,\,-4)$.

**Paso 4: recorrido.** Como $a>0$: $R_f=[-4,+\infty[$.

**Paso 5: tabla y gráfica.**

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $5$ | $0$ | $-3$ | $-4$ | $-3$ | $0$ |

<GraficoFuncion
  titulo="f(x) = x² − 6x + 5"
  expresion="x*x - 6*x + 5"
  :x-min="-1" :x-max="7" :y-min="-5" :y-max="6"
  :puntos="[
    { x: 3, y: -4, label: 'Vértice (3, −4)' },
    { x: 1, y: 0, label: '(1, 0)' },
    { x: 5, y: 0, label: '(5, 0)' },
    { x: 0, y: 5, label: '(0, 5)' }
  ]"
/>

**Conclusión.** $D_f=\mathbb{R}$, $V(3,-4)$, $R_f=[-4,+\infty[$.

</details>

<details>
<summary><strong>Complementario B · Modelo de ganancia: G(x) = −2x² + 40x − 50</strong></summary>

**Enunciado.** La ganancia diaria $G(x)$, en miles de pesos, por vender $x$ cajas de arándanos está modelada por $G(x)=-2x^2+40x-50$. ¿Cuántas cajas maximizan la ganancia, y cuál es esa ganancia máxima?

**Paso 1: coeficientes.** $a=-2$, $b=40$, $c=-50$. Como $a<0$, el vértice es un **máximo**.

**Paso 2: cajas óptimas.**

$$ x_v = \frac{-40}{2(-2)} = \frac{-40}{-4} = 10 $$

**Paso 3: ganancia máxima.**

$$ G(10) = -2(10)^2 + 40(10) - 50 = -200 + 400 - 50 = 150 $$

(Recuerda elevar primero al cuadrado: $10^2 = 100$.)

**Paso 4: tabla de valores.**

| Cajas $x$ | $0$ | $5$ | $10$ | $15$ | $20$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $G(x)$ (miles) | $-50$ | $100$ | $150$ | $100$ | $-50$ |

**Paso 5: gráfica.**

<GraficoFuncion
  titulo="G(x) = −2x² + 40x − 50  (máximo en x = 10)"
  expresion="-2*x*x + 40*x - 50"
  :x-min="0" :x-max="20" :y-min="-60" :y-max="180"
  :puntos="[
    { x: 10, y: 150, label: 'Máximo (10 cajas, 150 mil)' },
    { x: 0, y: -50, label: '(0, −50)' },
    { x: 20, y: -50, label: '(20, −50)' }
  ]"
/>

**Conclusión.** Se deben vender **10 cajas**, con una ganancia máxima de **$150$ mil pesos**.

</details>

---

## 7. Resumen de la función cuadrática

| Pregunta | Cómo se responde |
|:---|:---|
| ¿Hacia dónde se abre? | $a>0$: arriba ($\cup$). $a<0$: abajo ($\cap$). |
| ¿Dónde está el vértice? | $x_v=\dfrac{-b}{2a}$, $y_v=\dfrac{4ac-b^2}{4a}$ |
| ¿Dónde corta el eje $Y$? | En $(0,\,c)$ |
| ¿Cuántos cortes con $X$? | Según $\Delta=b^2-4ac$: $>0$ dos, $=0$ uno, $<0$ ninguno |
| ¿Dominio? | $\mathbb{R}$, salvo que el enunciado lo restrinja |
| ¿Recorrido sin restricciones? | $a>0$: $[y_v,+\infty[$. $a<0$: $]-\infty,y_v]$ |
| ¿Recorrido con dominio intervalo? | Evalúa los extremos y el vértice (si está dentro). Los extremos abiertos no se incluyen. |

Recuerda: si el problema pide "máxima ganancia", "área máxima" o "altura máxima", casi siempre estás buscando el **vértice de una parábola que se abre hacia abajo** ($a<0$).
