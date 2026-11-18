# 2.3 Otras Funciones Reales y Evaluación

Hasta ahora estudiamos funciones constantes, lineales y cuadráticas. En esta página veremos tres familias más que aparecen constantemente en cálculo y en problemas reales:

1. **Función valor absoluto**, que convierte todo en positivo.
2. **Función raíz cuadrada**, que solo acepta ciertos valores de entrada.
3. **Función racional**, que tiene una variable en el denominador.

Al final hay una **miscelánea** con ejercicios que combinan todo lo anterior, y una **evaluación** para comprobar lo aprendido.

El hilo conductor es siempre el mismo: **encontrar las restricciones de la máquina**. Una restricción es una regla que no se puede romper (no dividir por cero, no sacar raíz de negativo). Esas reglas determinan el **dominio**, y el **recorrido** sale de lo que la máquina puede entregar.

> **Cómo usar esta página:** cada ejemplo está plegado. Haz clic en el título para desplegar la resolución completa. Los ejemplos mantienen las letras del libro para que puedas compararlos con él. Donde el libro tiene un error, lo señalo dentro del ejemplo.

---

## 1. Función valor absoluto

### Definición

El valor absoluto de un número es su **distancia al cero**, sin importar el signo. Se escribe con dos barras verticales, $|x|$:

$$
|x| =
\begin{cases}
\ \ x & \text{si } x \ge 0 \\
-x & \text{si } x < 0
\end{cases}
$$

Ejemplos rápidos:
* $|-5| = 5$, porque $-5<0$, así que tomamos $-(-5)=5$.
* $|7| = 7$, porque $7\ge 0$, así que queda igual.
* $|0| = 0$.

**Idea clave:** el valor absoluto nunca entrega un número negativo. Por eso su gráfica tiene forma de **V**: baja hasta el cero, toca el eje y rebota hacia arriba.

### Dominio y recorrido de $f(x)=|x|$

* **Dominio:** podemos meter cualquier número real, positivo, negativo o cero. $D_f=\mathbb{R}$.
* **Recorrido:** como nunca sale un negativo y el valor cero sí se alcanza (en $x=0$), $R_f=[0,+\infty[$.

<GraficoFuncion
  titulo="f(x) = |x|  (forma de V, vértice en (0, 0))"
  expresion="Math.abs(x)"
  :x-min="-5" :x-max="5" :y-min="-1" :y-max="5"
  :puntos="[
    { x: 0, y: 0, label: 'Vértice (0, 0)' },
    { x: -3, y: 3, label: '(−3, 3)' },
    { x: 3, y: 3, label: '(3, 3)' }
  ]"
/>

### Método general para el recorrido de un valor absoluto

Cuando aparece $|g(x)|$ con un dominio, conviene seguir tres etapas:

1. **Etapa 1:** encuentra el recorrido de la expresión de adentro, $g(x)$.
2. **Etapa 2:** aplica el valor absoluto. Los valores negativos se vuelven positivos. Si el recorrido de $g$ cruza el cero, el mínimo del resultado es $0$.
3. **Etapa 3:** aplica lo que queda por fuera (sumar, restar, multiplicar por $-1$). Recuerda que **multiplicar por un número negativo invierte las desigualdades**.

---

### Ejemplo a) : $f(x)=|2x-4|$ con dominio $\mathbb{R}$

<details>
<summary><strong>Ejemplo a) · Valor absoluto de una recta: dónde rebota la V</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}\to\mathbb{R}$, $f(x)=|2x-4|$. Determine el dominio, el recorrido y grafique.

**Paso 1: dominio.** No hay divisiones ni raíces. $D_f=\mathbb{R}$.

**Paso 2: ¿dónde está el "rebote"?** El valor absoluto se comporta como una V en el punto donde lo que está dentro se vuelve cero:

$$ 2x - 4 = 0 \implies x = 2 $$

En $x=2$ la función vale $|0| = 0$. El vértice de la V está en $(2,\,0)$.

**Paso 3: entender los dos lados de la V.** Para ver cómo cambia la función, separemos según el signo de $2x-4$:

* Si $x \ge 2$: $2x-4 \ge 0$, así que $|2x-4| = 2x-4$. Es una recta creciente.
* Si $x < 2$: $2x-4 < 0$, así que $|2x-4| = -(2x-4) = -2x+4$. Es una recta decreciente.

**Paso 4: tabla de valores.**

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $2x-4$ | $-4$ | $-2$ | $0$ | $2$ | $4$ |
| $\lvert 2x-4 \rvert$ | $4$ | $2$ | $0$ | $2$ | $4$ |

Observa que los valores son simétricos alrededor de $x=2$: $x=1$ y $x=3$ dan lo mismo ($2$), igual que $x=0$ y $x=4$ ($4$).

**Paso 5: recorrido.** El valor absoluto nunca es negativo, y el cero se alcanza en $x=2$. Por lo tanto $R_f=[0,+\infty[$.

**Paso 6: gráfica.**

<GraficoFuncion
  titulo="f(x) = |2x − 4|  (vértice en (2, 0))"
  expresion="Math.abs(2*x - 4)"
  :x-min="-2" :x-max="6" :y-min="-1" :y-max="8"
  :puntos="[
    { x: 2, y: 0, label: 'Vértice (2, 0)' },
    { x: 0, y: 4, label: '(0, 4)' },
    { x: 4, y: 4, label: '(4, 4)' }
  ]"
/>

**Conclusión.** $D_f=\mathbb{R}$, $R_f=[0,+\infty[$, vértice en $(2,0)$.

</details>

---

### Ejemplo b) : $f:\,]0,3]\to\mathbb{R}$, $f(x)=|-3x+5|$

<details>
<summary><strong>Ejemplo b) · Valor absoluto con dominio intervalo: el recorrido paso a paso</strong></summary>

**Enunciado.** Sea $f:\,]0,3]\to\mathbb{R}$, $f(x)=|-3x+5|$. Determine el dominio y el recorrido, y grafique.

**Paso 1: dominio.** Es el intervalo dado: $D_f=\,]0,3]$.

**Paso 2: Etapa 1, recorrido de la expresión de adentro $g(x)=-3x+5$.** Partimos de la desigualdad del dominio y la transformamos. Como la multiplicación es por $-3$ (negativo), **la desigualdad se invierte**:

$$
\begin{aligned}
0 &< x \le 3 \\
0 &> -3x \ge -9 \qquad \text{(multiplicamos por }-3\text{, invertimos)} \\
5 &> -3x+5 \ge -4 \qquad \text{(sumamos 5)}
\end{aligned}
$$

Entonces $g(x)$ toma valores en $[-4,\,5[$. Cuidado: el $5$ no se alcanza porque $x=0$ está excluido.

**Paso 3: Etapa 2, aplicar el valor absoluto.**
* Los valores de $g$ que están entre $-4$ y $0$ se convierten en valores entre $0$ y $4$.
* Los valores de $g$ que están entre $0$ y $5$ se quedan igual.
* El valor $0$ se alcanza en $x=\frac{5}{3}$, que sí está en el dominio.

Por lo tanto $|g(x)|$ toma valores en $[0,\,5[$.

**Paso 4: tabla de valores.**

| $x$ | $0{,}5$ | $1$ | $\frac{5}{3}$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $-3x+5$ | $3{,}5$ | $2$ | $0$ | $-1$ | $-4$ |
| $\lvert -3x+5 \rvert = f(x)$ | $3{,}5$ | $2$ | $0$ | $1$ | $4$ |

**Paso 5: recorrido.** $R_f=[0,\,5[$.

> **Corrección al libro:** en la resolución original aparece como conclusión "$0\le y\le 5$" (con corchete cerrado en 5). Eso es un error: el $5$ **no** se alcanza, porque $x=0$ no pertenece al dominio. El recorrido correcto es $[0,5[$.

**Paso 6: gráfica.** Trazamos la V con vértice en $\left(\frac{5}{3},0\right)$, con un hueco en $(0,5)$ porque $x=0$ no está en el dominio.

<GraficoFuncion
  titulo="f(x) = |−3x + 5| con dominio ]0, 3]"
  expresion="Math.abs(-3*x + 5)"
  dominio="]0, 3]"
  :x-min="-1" :x-max="4" :y-min="-1" :y-max="6"
  :puntos="[
    { x: 1.6667, y: 0, label: 'Vértice (5/3, 0)' },
    { x: 0, y: 5, label: '(0, 5) no incluido', abierto: true },
    { x: 3, y: 4, label: '(3, 4)' }
  ]"
/>

**Conclusión.** $D_f=\,]0,3]$, $R_f=[0,5[$.

</details>

---

### Ejemplo c) : $f:\,]-1,4]\to\mathbb{R}$, $f(x)=|-4x+8|-2$

<details>
<summary><strong>Ejemplo c) · Valor absoluto con resta al final</strong></summary>

**Enunciado.** Sea $f:\,]-1,4]\to\mathbb{R}$, $f(x)=|-4x+8|-2$. Determine el dominio y el recorrido, y grafique.

**Paso 1: dominio.** $D_f=\,]-1,4]$.

**Paso 2: Etapa 1, recorrido de $g(x)=-4x+8$.**

$$
\begin{aligned}
-1 &< x \le 4 \\
4 &> -4x \ge -16 \qquad \text{(multiplicamos por }-4\text{, invertimos)} \\
12 &> -4x+8 \ge -8 \qquad \text{(sumamos 8)}
\end{aligned}
$$

Entonces $g(x)$ toma valores en $[-8,\,12[$.

**Paso 3: Etapa 2, valor absoluto.** El valor más pequeño de $|g|$ es $0$ (en $x=2$). El valor más grande es $8$ (en $x=4$, incluido) o se acerca a $12$ por el lado de $x=-1$, que no se alcanza. Por lo tanto $|g(x)|$ toma valores en $[0,\,12[$.

**Paso 4: Etapa 3, restar 2.** Restamos $2$ a todo el intervalo:

$$ [0-2,\ 12-2[ \;=\; [-2,\ 10[ $$

**Paso 5: tabla de valores.**

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | No | Sí | Sí | Sí | Sí | Sí |
| $-4x+8$ | $12$ | $8$ | $4$ | $0$ | $-4$ | $-8$ |
| $f(x)=\lvert -4x+8\rvert - 2$ | — (tiende a $10$) | $6$ | $2$ | $-2$ | $2$ | $6$ |

**Paso 6: gráfica.**

<GraficoFuncion
  titulo="f(x) = |−4x + 8| − 2 con dominio ]−1, 4]"
  expresion="Math.abs(-4*x + 8) - 2"
  dominio="]-1, 4]"
  :x-min="-2" :x-max="5" :y-min="-4" :y-max="12"
  :puntos="[
    { x: 2, y: -2, label: 'Mínimo (2, −2)' },
    { x: 4, y: 6, label: '(4, 6)' },
    { x: -1, y: 10, label: '(−1, 10) no incluido', abierto: true }
  ]"
/>

**Conclusión.** $D_f=\,]-1,4]$, $R_f=[-2,\,10[$.

</details>

---

### Ejemplo d) : $f:\,]-2,3]\to\mathbb{R}$, $f(x)=-|3x-3|+1$

<details>
<summary><strong>Ejemplo d) · Valor absoluto con signo negativo: la V se vuelve Λ</strong></summary>

**Enunciado.** Sea $f:\,]-2,3]\to\mathbb{R}$, $f(x)=-|3x-3|+1$. Determine el dominio y el recorrido, y grafique.

**Paso 1: idea clave.** El signo menos delante del valor absoluto **voltea la V hacia abajo**, convirtiéndola en una Λ. Por eso el valor más grande que se alcanza será el vértice, y los demás valores serán más pequeños.

**Paso 2: dominio.** $D_f=\,]-2,3]$.

**Paso 3: Etapa 1, recorrido de $g(x)=3x-3$.**

$$
\begin{aligned}
-2 &< x \le 3 \\
-6 &< 3x \le 9 \qquad \text{(multiplicamos por 3)} \\
-9 &< 3x-3 \le 6 \qquad \text{(restamos 3)}
\end{aligned}
$$

**Paso 4: Etapa 2, valor absoluto.** Como $g$ cruza el cero (en $x=1$), el mínimo de $|g|$ es $0$. El valor de $|g|$ se acerca a $9$ cuando $x\to -2$, pero no lo alcanza. Entonces $|g(x)|$ toma valores en $[0,\,9[$.

**Paso 5: Etapa 3, cambiar de signo y sumar 1.** Aplicamos el menos: $-|g|$ toma valores en $]-9,\,0]$. Luego sumamos $1$:

$$ ]-9+1,\ 0+1] \;=\; ]-8,\ 1] $$

**Paso 6: tabla de valores.**

| $x$ | $-2$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | No | Sí | Sí | Sí | Sí |
| $3x-3$ | $-9$ | $-3$ | $0$ | $3$ | $6$ |
| $f(x)=-\lvert 3x-3\rvert+1$ | — (tiende a $-8$) | $-2$ | $1$ | $-2$ | $-5$ |

**Paso 7: gráfica.** La punta de la Λ está en $(1,\,1)$.

<GraficoFuncion
  titulo="f(x) = −|3x − 3| + 1  con dominio ]−2, 3]"
  expresion="-Math.abs(3*x - 3) + 1"
  dominio="]-2, 3]"
  :x-min="-3" :x-max="4" :y-min="-9" :y-max="3"
  :puntos="[
    { x: 1, y: 1, label: 'Máximo (1, 1)' },
    { x: 3, y: -5, label: '(3, −5)' },
    { x: -2, y: -8, label: '(−2, −8) no incluido', abierto: true }
  ]"
/>

**Conclusión.** $D_f=\,]-2,3]$, $R_f=\,]-8,\,1]$.

</details>

---

### Ejemplo e) : $f:\,]0,3[\to\mathbb{R}$, $f(x)=-|-4x+4|-1$

<details>
<summary><strong>Ejemplo e) · Valor absoluto con dominio abierto en ambos extremos</strong></summary>

**Enunciado.** Sea $f:\,]0,3[\to\mathbb{R}$, $f(x)=-|-4x+4|-1$. Determine el dominio y el recorrido, y grafique.

> **Corrección al libro:** en la resolución original el dominio aparece escrito como $]-0,3[$. Lo correcto es $]0,3[$, porque el extremo izquierdo es $0$ (no existe "$-0$" como intervalo distinto).

**Paso 1: Etapa 1, recorrido de $g(x)=-4x+4$.**

$$
\begin{aligned}
0 &< x < 3 \\
0 &> -4x > -12 \qquad \text{(multiplicamos por }-4\text{, invertimos)} \\
4 &> -4x+4 > -8 \qquad \text{(sumamos 4)}
\end{aligned}
$$

Entonces $g(x)$ toma valores en $]-8,\,4[$, con ambos extremos excluidos.

**Paso 2: Etapa 2, valor absoluto.** El valor $0$ se alcanza en $x=1$. El valor más grande de $|g|$ se acerca a $8$ cuando $x\to 3$, pero no se alcanza. Entonces $|g(x)|$ toma valores en $[0,\,8[$.

**Paso 3: Etapa 3, cambiar de signo y restar 1.** Con el menos, $-|g|$ toma valores en $]-8,\,0]$. Después restamos $1$:

$$ ]-8-1,\ 0-1] \;=\; ]-9,\ -1] $$

**Paso 4: tabla de valores.**

| $x$ | $0{,}5$ | $1$ | $2$ | $2{,}5$ |
|:---:|:---:|:---:|:---:|:---:|
| $-4x+4$ | $2$ | $0$ | $-4$ | $-6$ |
| $f(x)=-\lvert -4x+4\rvert-1$ | $-3$ | $-1$ | $-5$ | $-7$ |

Los extremos: en $x\to 0^+$ la función tiende a $-5$ (hueco), y en $x\to 3^-$ tiende a $-9$ (hueco).

**Paso 5: gráfica.** La punta de la Λ está en $(1,\,-1)$, con dos huecos en los extremos.

<GraficoFuncion
  titulo="f(x) = −|−4x + 4| − 1  con dominio ]0, 3["
  expresion="-Math.abs(-4*x + 4) - 1"
  dominio="]0, 3["
  :x-min="-1" :x-max="4" :y-min="-10" :y-max="1"
  :puntos="[
    { x: 1, y: -1, label: 'Máximo (1, −1)' },
    { x: 0, y: -5, label: 'hueco (0, −5)', abierto: true },
    { x: 3, y: -9, label: 'hueco (3, −9)', abierto: true }
  ]"
/>

**Paso 6: recorrido.** $R_f=\,]-9,\,-1]$.

**Conclusión.** $D_f=\,]0,3[$, $R_f=\,]-9,-1]$.

</details>

---

### Ejemplos complementarios de valor absoluto

<details>
<summary><strong>Complementario · f(x) = |x − 3|: desplazamiento horizontal</strong></summary>

**Enunciado.** Determine dominio, recorrido y grafique $f(x)=|x-3|$.

**Paso 1: dominio.** $D_f=\mathbb{R}$.

**Paso 2: vértice.** El rebote ocurre cuando $x-3=0$, es decir $x=3$. Allí $f(3)=0$. Vértice $(3,\,0)$.

**Paso 3: recorrido.** $R_f=[0,+\infty[$.

**Paso 4: tabla de valores.**

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $3$ | $2$ | $1$ | $0$ | $1$ | $2$ |

**Paso 5: gráfica.** La V se mueve 3 pasos a la derecha respecto de $y=|x|$.

<GraficoFuncion
  titulo="f(x) = |x − 3|  (la V se desplaza 3 unidades a la derecha)"
  expresion="Math.abs(x - 3)"
  :x-min="-1" :x-max="7" :y-min="-1" :y-max="5"
  :puntos="[
    { x: 3, y: 0, label: 'Vértice (3, 0)' },
    { x: 1, y: 2, label: '(1, 2)' },
    { x: 5, y: 2, label: '(5, 2)' }
  ]"
/>

**Conclusión.** $D_f=\mathbb{R}$, $R_f=[0,+\infty[$.

</details>

---

## 2. Función raíz cuadrada

### Definición

$$ f(x)=\sqrt{x} $$

La raíz cuadrada de $x$ es el número que, multiplicado por sí mismo, da $x$. Por ejemplo, $\sqrt{9}=3$ porque $3\cdot 3=9$.

**Regla en los números reales:** no existe la raíz cuadrada de un número negativo. Ningún número real multiplicado por sí mismo da $-4$, porque un número positivo al cuadrado es positivo, y un negativo al cuadrado también es positivo.

### Dominio de una raíz cuadrada

Lo que está adentro de la raíz se llama **radicando**. Para que la raíz exista, el radicando debe ser mayor o igual a cero:

$$ \text{radicando} \ge 0 $$

Esta inecuación es **el paso más importante** del dominio.

### Recorrido de $f(x)=\sqrt{x}$

Como la raíz principal siempre entrega un resultado mayor o igual a cero: $D_f=[0,+\infty[$ y $R_f=[0,+\infty[$.

<GraficoFuncion
  titulo="f(x) = √x  (dominio y recorrido: [0, +∞[)"
  expresion="Math.sqrt(x)"
  :x-min="0" :x-max="10" :y-min="0" :y-max="4"
  :puntos="[
    { x: 0, y: 0, label: 'Inicio (0, 0)' },
    { x: 1, y: 1, label: '(1, 1)' },
    { x: 4, y: 2, label: '(4, 2)' },
    { x: 9, y: 3, label: '(9, 3)' }
  ]"
/>

**Patrón de la raíz:** la gráfica sube rápido al principio y luego cada vez más despacio. Eso es normal: la raíz "frena" con el tiempo.

---

### Ejemplo a) : $y=f(x)=\sqrt{2x-1}$

<details>
<summary><strong>Ejemplo a) · Dominio y recorrido de una raíz con radicando lineal</strong></summary>

**Enunciado.** Determine el dominio y el recorrido de $f(x)=\sqrt{2x-1}$, y grafique.

**Paso 1: dominio.** El radicando debe ser no negativo:

$$
\begin{aligned}
2x-1 &\ge 0 \\
2x &\ge 1 \\
x &\ge \tfrac{1}{2}
\end{aligned}
$$

Entonces $D_f=\left[\tfrac{1}{2},\,+\infty\right[$.

**Paso 2: tabla de valores.**

| $x$ | $\frac{1}{2}$ | $1$ | $2$ | $5$ | $13$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $2x-1$ | $0$ | $1$ | $3$ | $9$ | $25$ |
| $\sqrt{2x-1}$ | $0$ | $1$ | $\approx 1{,}73$ | $3$ | $5$ |

Observa que en $x=\frac{1}{2}$ el radicando vale $0$, y el resultado también. Ese es el **punto de inicio** de la gráfica.

**Paso 3: recorrido.** El resultado de una raíz nunca es negativo. El valor más pequeño es $0$ (en $x=\frac12$) y crece sin límite. Por lo tanto $R_f=[0,+\infty[$.

**Paso 4: gráfica.**

<GraficoFuncion
  titulo="f(x) = √(2x − 1)  (inicia en (1/2, 0))"
  expresion="Math.sqrt(2*x - 1)"
  dominio="[0.5, 10]"
  :x-min="0" :x-max="10" :y-min="0" :y-max="5"
  :puntos="[
    { x: 0.5, y: 0, label: 'Inicio (1/2, 0)' },
    { x: 5, y: 3, label: '(5, 3)' },
    { x: 13, y: 5, label: '(13, 5)' }
  ]"
/>

**Conclusión.** $D_f=\left[\tfrac12,+\infty\right[$, $R_f=[0,+\infty[$.

</details>

---

### Ejemplo b) : $y=f(x)=\sqrt{3x+4}+2$

<details>
<summary><strong>Ejemplo b) · Raíz con desplazamiento vertical: el recorrido empieza en 2</strong></summary>

**Enunciado.** Determine el dominio y el recorrido de la relación $y=f(x)=\sqrt{3x+4}+2$, para que sea función, y grafique.

**Paso 1: dominio.** El radicando debe ser no negativo:

$$
\begin{aligned}
3x+4 &\ge 0 \\
3x &\ge -4 \\
x &\ge -\tfrac{4}{3}
\end{aligned}
$$

$D_f=\left[-\tfrac{4}{3},\,+\infty\right[$.

**Paso 2: recorrido.** Primero analizamos la raíz: $\sqrt{3x+4}$ toma valores en $[0,+\infty[$. Luego sumamos $2$, así que $\sqrt{3x+4}+2$ toma valores en $[2,+\infty[$.

Esta es la lógica del recorrido con desplazamientos: **la raíz determina el piso, y el número que se suma lo desplaza**.

**Paso 3: tabla de valores.**

| $x$ | $-\frac{4}{3}$ | $-1$ | $0$ | $\frac{4}{3}$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $3x+4$ | $0$ | $1$ | $4$ | $8$ | $16$ |
| $\sqrt{3x+4}+2$ | $2$ | $3$ | $4$ | $\approx 4{,}83$ | $6$ |

**Paso 4: gráfica.** La curva nace en $\left(-\frac{4}{3},\,2\right)$ y sube lentamente.

<GraficoFuncion
  titulo="f(x) = √(3x + 4) + 2  (inicia en (−4/3, 2))"
  expresion="Math.sqrt(3*x + 4) + 2"
  dominio="[-1.3333, 6]"
  :x-min="-2" :x-max="6" :y-min="0" :y-max="7"
  :puntos="[
    { x: -1.3333, y: 2, label: 'Inicio (−4/3, 2)' },
    { x: 0, y: 4, label: '(0, 4)' },
    { x: 4, y: 6, label: '(4, 6)' }
  ]"
/>

**Conclusión.** $D_f=\left[-\tfrac43,+\infty\right[$, $R_f=[2,+\infty[$.

</details>

---

### Ejemplo c) : $f:\,]-3,2]\to\mathbb{R}$, $f(x)=\sqrt{-x+3}-1$

<details>
<summary><strong>Ejemplo c) · Raíz con coeficiente negativo: la función decrece</strong></summary>

**Enunciado.** Sea $f:\,]-3,2]\to\mathbb{R}$, $f(x)=\sqrt{-x+3}-1$. Determine el recorrido y grafique.

**Paso 1: verificar el dominio.** Ya viene dado: $D_f=\,]-3,2]$. Comprobemos que el radicando no sea negativo en ese intervalo: $-x+3\ge 0 \iff x\le 3$, y $]-3,2]$ cumple eso. ✓

**Paso 2: Etapa 1, recorrido del radicando $g(x)=-x+3$.**

$$
\begin{aligned}
-3 &< x \le 2 \\
-2 &\le -x < 3 \qquad \text{(multiplicamos por }-1\text{, invertimos)} \\
1 &\le -x+3 < 6 \qquad \text{(sumamos 3)}
\end{aligned}
$$

Entonces el radicando toma valores en $[1,\,6[$.

**Paso 3: Etapa 2, aplicar la raíz.** Como la raíz es creciente, $\sqrt{[1,6[}=[\sqrt{1},\sqrt{6}[=[1,\sqrt6[$.

**Paso 4: Etapa 3, restar 1.** $[1-1,\ \sqrt6-1[ \;=\; [0,\ \sqrt6-1[$.

**Paso 5: tabla de valores.**

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | No | Sí | Sí | Sí | Sí | Sí |
| $-x+3$ | $6$ | $5$ | $4$ | $3$ | $2$ | $1$ |
| $f(x)=\sqrt{-x+3}-1$ | — (tiende a $\approx 1{,}45$) | $\approx 1{,}24$ | $1$ | $\approx 0{,}73$ | $\approx 0{,}41$ | $0$ |

**Paso 6: interpretación.** Como el coeficiente de $x$ es negativo, al crecer $x$ el radicando **baja**, y por eso la función **decrece**. El extremo $x=2$ da el valor más pequeño ($0$, incluido). El extremo $x=-3$ da el valor más grande ($\sqrt6-1$), pero no se alcanza porque $-3$ no está en el dominio.

**Paso 7: gráfica.**

<GraficoFuncion
  titulo="f(x) = √(−x + 3) − 1  con dominio ]−3, 2]"
  expresion="Math.sqrt(-x + 3) - 1"
  dominio="]-3, 2]"
  :x-min="-4" :x-max="4" :y-min="-1" :y-max="2"
  :puntos="[
    { x: 2, y: 0, label: 'Mínimo (2, 0)' },
    { x: -1, y: 1, label: '(−1, 1)' },
    { x: -3, y: 1.449, label: 'hueco (−3, √6 − 1)', abierto: true }
  ]"
/>

**Conclusión.** $D_f=\,]-3,2]$, $R_f=[0,\ \sqrt6-1[$.

</details>

---

### Ejemplo d) : $f:\,]-1,2]\to\mathbb{R}$, $f(x)=\sqrt{2x+3}-3$

<details>
<summary><strong>Ejemplo d) · Recorrido de una raíz con resta al final</strong></summary>

**Enunciado.** Sea $f:\,]-1,2]\to\mathbb{R}$, $f(x)=\sqrt{2x+3}-3$. Determine el recorrido y grafique.

> **Corrección al libro:** en la resolución original el recorrido aparece como "$[\sqrt7-3,\,-2[$", con los extremos invertidos. Eso no puede ser correcto: $\sqrt7-3\approx -0{,}35$ es **mayor** que $-2$, así que el intervalo debe ir de $-2$ a $\sqrt7-3$. Lo verás en el paso 4.

**Paso 1: Etapa 1, recorrido del radicando $g(x)=2x+3$.**

$$
\begin{aligned}
-1 &< x \le 2 \\
-2 &< 2x \le 4 \qquad \text{(multiplicamos por 2)} \\
1 &< 2x+3 \le 7 \qquad \text{(sumamos 3)}
\end{aligned}
$$

El radicando toma valores en $]1,\,7]$.

**Paso 2: Etapa 2, aplicar la raíz.** La raíz es creciente: $\sqrt{]1,7]}=]\sqrt1,\ \sqrt7]=]1,\ \sqrt7]$.

**Paso 3: Etapa 3, restar 3.**

$$ ]1-3,\ \sqrt7-3] \;=\; ]-2,\ \sqrt7-3] $$

**Paso 4: recorrido.** Entonces $R_f=\,]-2,\ \sqrt7-3]$. El extremo $-2$ queda **excluido** (viene de $x=-1$, que no está en el dominio), y $\sqrt7-3$ queda **incluido** (viene de $x=2$, que sí está).

**Paso 5: tabla de valores.**

| $x$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|
| ¿Pertenece a $D_f$? | No | Sí | Sí | Sí |
| $2x+3$ | $1$ | $3$ | $5$ | $7$ |
| $f(x)=\sqrt{2x+3}-3$ | — (tiende a $-2$) | $\approx -1{,}27$ | $\approx -0{,}76$ | $\approx -0{,}35$ |

**Paso 6: gráfica.**

<GraficoFuncion
  titulo="f(x) = √(2x + 3) − 3  con dominio ]−1, 2]"
  expresion="Math.sqrt(2*x + 3) - 3"
  dominio="]-1, 2]"
  :x-min="-2" :x-max="3" :y-min="-3" :y-max="0"
  :puntos="[
    { x: -1, y: -2, label: 'hueco (−1, −2)', abierto: true },
    { x: 2, y: -0.354, label: 'extremo (2, √7 − 3)' }
  ]"
/>

**Conclusión.** $D_f=\,]-1,2]$, $R_f=\,]-2,\ \sqrt7-3]$.

</details>

---

### Ejemplo e) : Caída libre desde un edificio

<details>
<summary><strong>Ejemplo e) · Aplicación: tiempo de caída de un objeto</strong></summary>

**Enunciado.** Un objeto se suelta en caída libre desde un edificio de $800$ m de altura. Determine el tiempo que tarda en llegar al suelo.

**Paso 1: la fórmula.** En caída libre, el tiempo de caída se calcula con:

$$ T = \sqrt{\frac{2h}{g}} $$

donde $h$ es la altura en metros y $g = 9{,}8 \ \text{m/s}^2$ es la aceleración de la gravedad.

**Paso 2: identificar el dominio.** La altura no puede ser negativa, y la raíz exige que $\frac{2h}{g}\ge 0$. Por lo tanto $h\ge 0$. Aquí el dominio es $[0,+\infty[$ en metros.

**Paso 3: reemplazar.**

$$
\begin{aligned}
T &= \sqrt{\frac{2(800)}{9{,}8}} \\
&= \sqrt{\frac{1.600}{9{,}8}} \\
&= \sqrt{163{,}27} \\
&\approx 12{,}78 \text{ s}
\end{aligned}
$$

> **Corrección al libro:** la resolución original tiene tres problemas. (1) En los datos escribe $H=700$ m, pero el enunciado dice $800$ m. (2) Calcula $\sqrt{163{,}26}=12{,}77$ s en un paso y luego escribe $11{,}95$ s en la conclusión, que son números distintos. (3) El valor correcto con $800$ m es $\approx 12{,}78$ s.

**Paso 4: tabla de valores.** Usamos alturas distintas para ver cómo cambia el tiempo:

| Altura $h$ (m) | $100$ | $400$ | $800$ | $1.200$ |
|:---:|:---:|:---:|:---:|:---:|
| Tiempo $T$ (s) | $\approx 4{,}52$ | $\approx 9{,}04$ | $\approx 12{,}78$ | $\approx 15{,}65$ |

Observa que el tiempo **no crece proporcional a la altura**. Duplicar la altura no duplica el tiempo, sino que lo multiplica por $\sqrt2\approx 1{,}41$. Ese es el comportamiento típico de una raíz.

**Paso 5: gráfica.** Aquí la variable de entrada es la altura $h$, y la salida es el tiempo $T$.

<GraficoFuncion
  titulo="T(h) = √(2h / 9,8)  (tiempo de caída según la altura)"
  expresion="Math.sqrt(2*x/9.8)"
  dominio="[0, 1200]"
  :x-min="0" :x-max="1200" :y-min="0" :y-max="18"
  :puntos="[
    { x: 800, y: 12.78, label: '(800 m, 12,78 s)' },
    { x: 100, y: 4.52, label: '(100 m, 4,52 s)' }
  ]"
/>

**Conclusión.** Desde $800$ m, el objeto tarda aproximadamente **$12{,}78$ s** en llegar al suelo.

</details>

---

### Ejemplos complementarios de raíz cuadrada

<details>
<summary><strong>Complementario · f(x) = √(2x − 8): dominio y recorrido</strong></summary>

**Enunciado.** Determine el dominio, recorrido y grafique $f(x)=\sqrt{2x-8}$.

**Paso 1: dominio.** $2x-8\ge 0 \implies x\ge 4$. $D_f=[4,+\infty[$.

Si metiéramos $x=3$, obtendríamos $\sqrt{-2}$, lo que rompe la máquina en los reales.

**Paso 2: recorrido.** El valor más pequeño ocurre en $x=4$, donde $\sqrt0=0$. Desde ahí la raíz crece. $R_f=[0,+\infty[$.

**Paso 3: tabla y gráfica.**

| $x$ | $4$ | $5$ | $6$ | $8$ | $12$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $0$ | $\approx 1{,}41$ | $2$ | $\approx 2{,}83$ | $4$ |

<GraficoFuncion
  titulo="f(x) = √(2x − 8)"
  expresion="Math.sqrt(2*x - 8)"
  dominio="[4, 12]"
  :x-min="0" :x-max="12" :y-min="-1" :y-max="4"
  :puntos="[
    { x: 4, y: 0, label: 'Inicio (4, 0)' },
    { x: 6, y: 2, label: '(6, 2)' }
  ]"
/>

**Conclusión.** $D_f=[4,+\infty[$, $R_f=[0,+\infty[$.

</details>

---

## 3. Función racional

### Definición

Una función es **racional** cuando la variable aparece en el **denominador**:

$$ y = f(x) = \frac{N(x)}{M(x)} \qquad \text{con } M(x)\neq 0 $$

donde $N$ y $M$ son polinomios.

**Regla de oro:** la división por cero está prohibida. Cualquier $x$ que haga $M(x)=0$ queda fuera del dominio.

### Dominio

Igualamos el denominador a cero para encontrar los valores prohibidos, y luego los excluimos de $\mathbb{R}$:

$$ M(x) \neq 0 $$

### Recorrido: la técnica de "despejar"

Hay dos formas de encontrar el recorrido:

**Método 1: reescribir la fracción.** Hacemos una división de polinomios o una manipulación algebraica para escribir la función como un número más una fracción pequeña. Por ejemplo:

$$ \frac{x-2}{x+1} = 1 - \frac{3}{x+1} $$

Así se ve qué valor nunca se alcanza: la fracción $\frac{3}{x+1}$ **nunca puede ser cero** (una fracción solo vale cero cuando el numerador es cero, y aquí el numerador es $3$).

**Método 2: despejar $x$.** Igualamos $y=f(x)$, despejamos $x$ en función de $y$, y miramos cuándo el nuevo denominador se anula. Los valores de $y$ que anulan ese denominador **no** están en el recorrido.

### Asíntotas

Las **asíntotas** son "muros invisibles" a los que la gráfica se acerca sin tocarlos:
* **Asíntota vertical:** en los valores de $x$ que anulan el denominador.
* **Asíntota horizontal:** en el valor de $y$ que nunca se alcanza.

<GraficoFuncion
  titulo="f(x) = 1/x  (asíntotas: x = 0 e y = 0)"
  expresion="1/x"
  :x-min="-5" :x-max="5" :y-min="-5" :y-max="5"
  :puntos="[
    { x: 1, y: 1, label: '(1, 1)' },
    { x: -1, y: -1, label: '(−1, −1)' }
  ]"
/>

---

### Ejemplo a) : $y=f(x)=\dfrac{x-2}{x+1}$

<details>
<summary><strong>Ejemplo a) · Dominio, recorrido y asíntotas de una función racional</strong></summary>

**Enunciado.** Determine el dominio y el recorrido de $f(x)=\dfrac{x-2}{x+1}$, y grafique.

**Paso 1: dominio.** El denominador no puede ser cero:

$$
\begin{aligned}
x+1 &\neq 0 \\
x &\neq -1
\end{aligned}
$$

$D_f=\mathbb{R}-\{-1\}$. La recta $x=-1$ es una asíntota vertical.

**Paso 2: reescribir la fracción (división de polinomios).** Dividimos $x-2$ entre $x+1$:

* ¿Cuántas veces cabe $x$ en $x$? Una vez. Escribimos $1$.
* Multiplicamos $1\cdot(x+1)=x+1$ y restamos de $x-2$: queda $-3$.

Entonces $x-2 = 1\cdot(x+1) - 3$, y dividiendo entre $x+1$:

$$ f(x) = \frac{x-2}{x+1} = 1 - \frac{3}{x+1} $$

**Paso 3: recorrido.** Analicemos la fracción $-\frac{3}{x+1}$. Su numerador es $-3$, que nunca es cero, así que la fracción **nunca vale cero**. Por lo tanto:

$$ 1 - \frac{3}{x+1} \neq 1 $$

El valor $y=1$ nunca se alcanza. Es la **asíntota horizontal**.

$$ R_f = \mathbb{R}-\{1\} $$

> **Corrección al libro:** la resolución original llega a "$1-\frac{3}{x+1}\neq 1$" y de ahí concluye "$y\neq -1$". Eso es un error de signo. Lo que la desigualdad dice es $y\neq 1$. El recorrido correcto es $\mathbb{R}-\{1\}$, no $\mathbb{R}-\{-1\}$.

**Paso 4: tabla de valores.**

| $x$ | $-3$ | $-2$ | $0$ | $1$ | $2$ | $3$ | $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $2{,}5$ | $4$ | $-2$ | $-0{,}5$ | $0$ | $0{,}25$ | $0{,}5$ |

Observa que $x=-2$ da $4$ y $x=0$ da $-2$: a ambos lados de la asíntota $x=-1$ los valores saltan de forma brusca.

**Paso 5: gráfica.** Trazamos las asíntotas (líneas punteadas) y luego la curva.

<GraficoFuncion
  titulo="f(x) = (x − 2)/(x + 1)  (asíntotas x = −1 e y = 1)"
  expresion="(x-2)/(x+1)"
  :x-min="-6" :x-max="6" :y-min="-6" :y-max="6"
  :puntos="[
    { x: 0, y: -2, label: '(0, −2)' },
    { x: 2, y: 0, label: 'corte (2, 0)' },
    { x: 5, y: 0.5, label: '(5, 0,5)' }
  ]"
/>

**Conclusión.** $D_f=\mathbb{R}-\{-1\}$, $R_f=\mathbb{R}-\{1\}$.

</details>

---

### Ejemplo b) : $y=f(x)=\dfrac{2x-4}{x-3}$

<details>
<summary><strong>Ejemplo b) · Racional con asíntota horizontal en y = 2</strong></summary>

**Enunciado.** Determine el dominio y el recorrido de $f(x)=\dfrac{2x-4}{x-3}$, y grafique.

**Paso 1: dominio.**

$$
\begin{aligned}
x-3 &\neq 0 \\
x &\neq 3
\end{aligned}
$$

$D_f=\mathbb{R}-\{3\}$. Asíntota vertical en $x=3$.

**Paso 2: reescribir la fracción.** Vemos que $2x-4 = 2(x-3) + 2$. Entonces:

$$ \frac{2x-4}{x-3} = \frac{2(x-3)+2}{x-3} = 2 + \frac{2}{x-3} $$

**Paso 3: recorrido.** La fracción $\frac{2}{x-3}$ nunca vale cero, porque su numerador es $2$. Por lo tanto $2+\frac{2}{x-3}\neq 2$. El valor $y=2$ no se alcanza:

$$ R_f = \mathbb{R}-\{2\} $$

**Paso 4: tabla de valores.**

| $x$ | $0$ | $1$ | $2$ | $2{,}5$ | $4$ | $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $\frac{4}{3}\approx 1{,}33$ | $1$ | $0$ | $-2$ | $4$ | $3$ |

Verificación con la forma $2+\frac{2}{x-3}$: en $x=4$, $2+\frac{2}{1}=4$ ✓. En $x=5$, $2+\frac{2}{2}=3$ ✓.

**Paso 5: gráfica.** Asíntota vertical en $x=3$ y horizontal en $y=2$.

<GraficoFuncion
  titulo="f(x) = (2x − 4)/(x − 3)  (asíntotas x = 3 e y = 2)"
  expresion="(2*x-4)/(x-3)"
  :x-min="-5" :x-max="8" :y-min="-6" :y-max="8"
  :puntos="[
    { x: 2, y: 0, label: 'corte (2, 0)' },
    { x: 0, y: 1.33, label: '(0, 4/3)' },
    { x: 4, y: 4, label: '(4, 4)' }
  ]"
/>

**Conclusión.** $D_f=\mathbb{R}-\{3\}$, $R_f=\mathbb{R}-\{2\}$.

</details>

---

### Ejemplo c) : $f:\,[-5,2]-\{-2\}\to\mathbb{R}$, $f(x)=\dfrac{3x}{2x+4}$

<details>
<summary><strong>Ejemplo c) · Racional con dominio partido en dos tramos</strong></summary>

**Enunciado.** Sea $f:\,[-5,2]-\{-2\}\to\mathbb{R}$, $f(x)=\dfrac{3x}{2x+4}$. Determine el dominio y el recorrido, y grafique.

**Paso 1: dominio.** El denominador no puede ser cero: $2x+4\neq 0 \iff x\neq -2$. Como el enunciado ya restringe a $[-5,2]$, el dominio es:

$$ D_f = [-5,2]-\{-2\} $$

Esto significa que el dominio se parte en **dos tramos**: $[-5,-2[$ y $]-2,2]$.

**Paso 2: reescribir la fracción.** Buscamos la forma "número más fracción". Factorizamos $3x = \frac{3}{2}(2x+4) - 6$:

$$
\begin{aligned}
\frac{3x}{2x+4} &= \frac{\frac32(2x+4)-6}{2x+4} \\
&= \frac{3}{2} - \frac{6}{2x+4} \\
&= \frac{3}{2} - \frac{3}{x+2}
\end{aligned}
$$

Comprobamos con $x=0$: $\frac{3}{2}-\frac{3}{2}=0$ ✓ (y el original da $\frac{0}{4}=0$ ✓).

**Paso 3: análisis de cada tramo.** La fracción $-\frac{3}{x+2}$ cambia de signo al cruzar $x=-2$, así que la analizamos por separado.

**Tramo A: $x\in[-5,-2[$.** Aquí $x+2$ es negativo y va de $-3$ (en $x=-5$) a valores cercanos a $0^-$ (cuando $x\to -2^-$).
* En $x=-5$: $\frac{3}{2}-\frac{3}{-3} = \frac32+1 = \frac52$.
* Cuando $x\to-2^-$, $\frac{3}{x+2}\to -\infty$, así que $-\frac{3}{x+2}\to +\infty$ y $f\to+\infty$.

Entonces en este tramo $f$ toma valores en $\left[\frac52,\,+\infty\right[$.

**Tramo B: $x\in\,]-2,2]$.** Aquí $x+2$ es positivo y va de valores cercanos a $0^+$ (cuando $x\to -2^+$) hasta $4$ (en $x=2$).
* En $x=2$: $\frac{3}{2}-\frac{3}{4} = \frac{3}{4}$, incluido.
* Cuando $x\to-2^+$, $f\to -\infty$.

Entonces en este tramo $f$ toma valores en $\left]-\infty,\,\frac34\right]$.

**Paso 4: recorrido.** Unimos ambos tramos:

$$ R_f = \left]-\infty,\ \tfrac{3}{4}\right] \cup \left[\tfrac{5}{2},\ +\infty\right[ $$

Entre $\frac34$ y $\frac52$ no hay ningún valor: la función "salta" esa zona. Eso ocurre por la asíntota en $x=-2$.

**Paso 5: tabla de valores.**

| $x$ | $-5$ | $-4$ | $-3$ | $-2{,}5$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿En $D_f$? | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí |
| $f(x)=\frac{3x}{2x+4}$ | $2{,}5$ | $3$ | $4{,}5$ | $7{,}5$ | $-1{,}5$ | $0$ | $0{,}5$ | $0{,}75$ |

Observa: $x=-2$ no aparece porque no está en el dominio; es el hueco de la asíntota.

**Paso 6: gráfica.** Dibujamos los dos tramos por separado, con la asíntota vertical en $x=-2$.

<GraficoFuncion
  titulo="f(x) = 3x/(2x+4), dominio [−5, 2] − {−2}"
  :expresion="['3*x/(2*x+4)', '3*x/(2*x+4)']"
  :dominio="['[-5, -2[', ']-2, 2]']"
  :x-min="-6" :x-max="3" :y-min="-3" :y-max="8"
  :puntos="[
    { x: -5, y: 2.5, label: '(−5, 5/2)' },
    { x: 2, y: 0.75, label: '(2, 3/4)' },
    { x: -2, y: 0, label: 'asíntota x = −2', abierto: true }
  ]"
/>

**Conclusión.** $D_f=[-5,2]-\{-2\}$, $R_f=\left]-\infty,\frac34\right]\cup\left[\frac52,+\infty\right[$.

</details>

---

### Ejemplo d) : Costo unitario de producción de vasos

<details>
<summary><strong>Ejemplo d) · Aplicación: costo promedio de producción</strong></summary>

**Enunciado.** Una empresa que produce vasos tiene costos mensuales de producción iguales a los costos fijos más los costos variables. Los costos fijos son de $\$825$ mensuales, y los costos variables son de $\$2{,}9$ por cada vaso. Determine la función que describa el **costo unitario** de los vasos en función de la producción mensual, y grafique.

**Paso 1: definir las variables.**
* $x$ = número de vasos producidos al mes.
* $CT$ = costo total.
* $Cu$ = costo unitario (costo por vaso).

**Paso 2: escribir el costo total.** Costo total = costos fijos + costos variables:

$$ CT = 825 + 2{,}9\,x $$

**Paso 3: escribir el costo unitario.** El costo unitario es el costo total repartido entre la cantidad de vasos:

$$ Cu = \frac{CT}{x} = \frac{825 + 2{,}9\,x}{x} $$

**Paso 4: simplificar.** Separamos la fracción:

$$ Cu = \frac{825}{x} + \frac{2{,}9\,x}{x} = \frac{825}{x} + 2{,}9 $$

Esta forma es la más útil para analizar la función.

**Paso 5: dominio.** No se puede producir cero vasos (dividiríamos por cero) ni cantidades negativas. Por lo tanto $D_f=\,]0,+\infty[$ en teoría. En la práctica, $x$ es un número entero positivo de vasos.

**Paso 6: recorrido.** La fracción $\frac{825}{x}$ siempre es positiva para $x>0$, y se acerca a $0$ cuando $x$ crece mucho, pero nunca lo alcanza. Entonces $Cu$ siempre es mayor que $2{,}9$, y se acerca a ese valor:

$$ R_f = \,]2{,}9,\ +\infty[ $$

**Paso 7: tabla de valores.**

| Producción $x$ (vasos) | $100$ | $250$ | $500$ | $1.000$ | $2.000$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $\frac{825}{x}$ | $8{,}25$ | $3{,}30$ | $1{,}65$ | $0{,}825$ | $0{,}4125$ |
| $Cu=\frac{825}{x}+2{,}9$ | $11{,}15$ | $6{,}20$ | $4{,}55$ | $3{,}725$ | $3{,}3125$ |

**Paso 8: interpretación.** A medida que se producen más vasos, el costo unitario **baja**, porque los costos fijos de $\$825$ se reparten entre más unidades. Pero el costo unitario nunca baja de $\$2{,}9$, que es el costo variable por vaso. Por eso $y=2{,}9$ es una asíntota horizontal.

**Paso 9: gráfica.**

<GraficoFuncion
  titulo="Cu(x) = 825/x + 2,9  (asíntota horizontal y = 2,9)"
  expresion="825/x + 2.9"
  dominio="]0, 1000]"
  :x-min="0" :x-max="1000" :y-min="0" :y-max="12"
  :puntos="[
    { x: 100, y: 11.15, label: '(100, 11,15)' },
    { x: 500, y: 4.55, label: '(500, 4,55)' },
    { x: 1000, y: 3.725, label: '(1.000, 3,725)' }
  ]"
/>

**Conclusión.** $Cu(x)=\dfrac{825}{x}+2{,}9$, con $R_f=\,]2{,}9,+\infty[$. A mayor producción, menor costo por vaso, pero nunca menos de $\$2{,}9$.

</details>

---

### Ejemplos complementarios de función racional

<details>
<summary><strong>Complementario · f(x) = (3x + 1)/(x − 2): dominio y recorrido despejando x</strong></summary>

**Enunciado.** Determine el dominio y el recorrido de $f(x)=\dfrac{3x+1}{x-2}$, y grafique.

**Paso 1: dominio.** $x-2\neq 0 \implies x\neq 2$. $D_f=\mathbb{R}-\{2\}$.

**Paso 2: recorrido por despeje.** Igualamos la función a $y$ y despejamos $x$:

$$
\begin{aligned}
y &= \frac{3x+1}{x-2} \\
y(x-2) &= 3x+1 \\
yx - 2y &= 3x+1 \\
yx - 3x &= 2y+1 \\
x(y-3) &= 2y+1 \\
x &= \frac{2y+1}{y-3}
\end{aligned}
$$

**Paso 3: el nuevo denominador.** Para que $x$ exista, $y-3\neq 0$, es decir, $y\neq 3$. Ese valor nunca se alcanza. $R_f=\mathbb{R}-\{3\}$.

**Paso 4: tabla y gráfica.**

| $x$ | $0$ | $1$ | $3$ | $4$ | $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $-\frac12$ | $-4$ | $10$ | $13$ | $8$ |

<GraficoFuncion
  titulo="f(x) = (3x + 1)/(x − 2)  (se rompe en x = 2)"
  expresion="(3*x + 1)/(x - 2)"
  :x-min="-4" :x-max="8" :y-min="-6" :y-max="12"
  :puntos="[
    { x: 0, y: -0.5, label: '(0, −1/2)' },
    { x: 3, y: 10, label: '(3, 10)' }
  ]"
/>

**Conclusión.** $D_f=\mathbb{R}-\{2\}$, $R_f=\mathbb{R}-\{3\}$.

</details>

---

## 4. Miscelánea de ejercicios

Estos ejercicios combinan lo aprendido. En cada uno, identifica primero el tipo de función, luego busca las restricciones, y por último calcula el recorrido.

---

### Ejercicio a) : Función por tramos

<details>
<summary><strong>Ejercicio a) · Función por tramos con tres reglas distintas</strong></summary>

**Enunciado.** Sea $f:\,[-4,3]\to\mathbb{R}$ definida por

$$
f(x)=\begin{cases}
-3 & \text{si } -4 \le x < -2 \\
x-1 & \text{si } -2 \le x \le 0 \\
x^2-2x-1 & \text{si } 0 < x \le 3
\end{cases}
$$

Determine el recorrido de $f$ y grafique.

**Paso 1: entender el método.** Como cada tramo tiene su propia regla, calculamos el recorrido de cada tramo **por separado** y luego unimos los resultados.

**Paso 2: tramo 1, $x\in[-4,-2[$.** La función es constante: $f(x)=-3$. Recorrido: $\{-3\}$.

**Paso 3: tramo 2, $x\in[-2,0]$.** Es lineal con pendiente positiva. Evaluamos en los extremos:
* En $x=-2$: $-2-1=-3$.
* En $x=0$: $0-1=-1$.

Recorrido: $[-3,\,-1]$.

**Paso 4: tramo 3, $x\in\,]0,3]$.** Reescribimos el cuadrático completando el cuadrado: $x^2-2x-1=(x-1)^2-2$.
* El vértice $(1,-2)$ está dentro del tramo ($x=1\in\,]0,3]$), así que el mínimo es $-2$.
* El extremo $x=3$ da $9-6-1=2$, incluido.
* El extremo $x=0$ queda excluido, pero el valor que tendría ($-1$) ya está cubierto.

Recorrido: $[-2,\,2]$.

**Paso 5: unir los tres recorridos.**

$$ R_f = \{-3\} \cup [-3,-1] \cup [-2,2] = [-3,\,2] $$

**Paso 6: tabla de valores.**

| $x$ | $-4$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 1 | 1 | 2 | 2 | 2 | 3 | 3 | 3 |
| $f(x)$ | $-3$ | $-3$ | $-3$ | $-2$ | $-1$ | $-2$ | $-1$ | $2$ |

**Paso 7: gráfica.**

<GraficoFuncion
  titulo="Función por tramos con dominio [−4, 3]"
  :expresion="['-3', 'x - 1', 'x*x - 2*x - 1']"
  :dominio="['[-4, -2[', '[-2, 0]', ']0, 3]']"
  :x-min="-5" :x-max="4" :y-min="-4" :y-max="4"
  :puntos="[
    { x: 1, y: -2, label: 'Mínimo (1, −2)' },
    { x: 3, y: 2, label: '(3, 2)' }
  ]"
/>

**Conclusión.** $R_f=[-3,\,2]$.

</details>

---

### Ejercicio b) : Raíz de una función racional

<details>
<summary><strong>Ejercicio b) · Dominio y recorrido de √((2x − 3)/(x + 4))</strong></summary>

**Enunciado.** Determine el dominio y el recorrido de $y=f(x)=\sqrt{\dfrac{2x-3}{x+4}}$.

**Paso 1: dominio.** Como hay una raíz, la fracción de adentro debe ser **mayor o igual a cero**. Eso exige analizar signos. Los puntos críticos son los que anulan el numerador ($x=\frac32$) y el denominador ($x=-4$, que está prohibido).

Hacemos una tabla de signos:

| Intervalo | $x<-4$ | $-4<x<\frac32$ | $x>\frac32$ |
|:---:|:---:|:---:|:---:|
| $2x-3$ | $-$ | $-$ | $+$ |
| $x+4$ | $-$ | $+$ | $+$ |
| $\dfrac{2x-3}{x+4}$ | $+$ | $-$ | $+$ |

La fracción es mayor o igual a cero en $x<-4$ y en $x\ge\frac32$. En $x=-4$ no existe (denominador cero), y en $x=\frac32$ vale exactamente $0$, lo que sí está permitido.

$$ D_f = \,]-\infty,\,-4[\ \cup\ \left[\tfrac{3}{2},\,+\infty\right[ $$

**Paso 2: reescribir la fracción dentro de la raíz.** Como en ejemplos anteriores:

$$ \frac{2x-3}{x+4} = 2 - \frac{11}{x+4} $$

(Comprobación: $2(x+4)-11 = 2x+8-11 = 2x-3$ ✓.)

**Paso 3: recorrido del radicando.** Analicemos $2-\frac{11}{x+4}$ en cada tramo del dominio:
* **Tramo $x<-4$:** $x+4<0$, así que $\frac{11}{x+4}<0$ y $-\frac{11}{x+4}>0$. El radicando toma valores en $]2,+\infty[$.
* **Tramo $x\ge\frac32$:** $x+4\ge\frac{11}{2}$, así que $0<\frac{11}{x+4}\le 2$. El radicando toma valores en $[0,\,2[$.

**Paso 4: aplicar la raíz.** La raíz es creciente:
* $\sqrt{]2,+\infty[} = \,]\sqrt2,+\infty[$
* $\sqrt{[0,2[} = [0,\sqrt2[$

**Paso 5: recorrido.** Unimos:

$$ R_f = [0,\ \sqrt2[\ \cup\ ]\sqrt2,\ +\infty[ \;=\; [0,+\infty[ - \{\sqrt2\} $$

El valor $\sqrt2$ **no se alcanza**, porque el radicando nunca vale exactamente $2$ (eso exigiría $\frac{11}{x+4}=0$, imposible).

> **Corrección al libro:** la resolución original concluye "$R_f=[0,+\infty[-\{2\}$". El error es que el libro calcula el recorrido del radicando (que sí excluye el $2$) pero no aplica la raíz. Al sacar raíz, el valor excluido se convierte en $\sqrt2$, no en $2$.

**Paso 6: tabla de valores.**

| $x$ | $-10$ | $-6$ | $-5$ | $\frac32$ | $2$ | $3$ | $5$ | $10$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $\frac{2x-3}{x+4}$ | $3{,}83$ | $7{,}5$ | $13$ | $0$ | $\frac16$ | $\frac37$ | $\frac79$ | $\frac{17}{14}$ |
| $f(x)$ | $\approx 1{,}96$ | $\approx 2{,}74$ | $\approx 3{,}61$ | $0$ | $\approx 0{,}41$ | $\approx 0{,}65$ | $\approx 0{,}88$ | $\approx 1{,}10$ |

**Paso 7: gráfica.** Dibujamos los dos tramos del dominio.

<GraficoFuncion
  titulo="f(x) = √((2x − 3)/(x + 4))"
  :expresion="['Math.sqrt((2*x - 3)/(x + 4))', 'Math.sqrt((2*x - 3)/(x + 4))']"
  :dominio="['] -10, -4[', '[1.5, 10]']"
  :x-min="-11" :x-max="11" :y-min="0" :y-max="4"
  :puntos="[
    { x: 1.5, y: 0, label: 'Inicio (3/2, 0)' },
    { x: -4, y: 2, label: 'asíntota x = −4', abierto: true }
  ]"
/>

**Conclusión.** $D_f=\,]-\infty,-4[\cup\left[\frac32,+\infty\right[$, $R_f=[0,+\infty[-\{\sqrt2\}$.

</details>

---

### Ejercicio c) : Valor absoluto de una fracción

<details>
<summary><strong>Ejercicio c) · Recorrido de |(2 − x)/(2x + 5)|</strong></summary>

**Enunciado.** Determine el dominio y el recorrido de $f(x)=\left|\dfrac{2-x}{2x+5}\right|$, y grafique.

**Paso 1: dominio.** El denominador no puede ser cero:

$$ 2x+5 \neq 0 \implies x \neq -\tfrac{5}{2} $$

$D_f=\mathbb{R}-\left\{-\tfrac52\right\}$.

**Paso 2: reescribir la fracción de adentro.** Buscamos la forma "constante más fracción":

$$ \frac{2-x}{2x+5} = -\frac{1}{2} + \frac{9}{4x+10} $$

(Comprobación: $-\frac12 + \frac{9}{4x+10} = \frac{-(2x+5)+9}{2(2x+5)} = \frac{-2x+4}{2(2x+5)} = \frac{2-x}{2x+5}$ ✓.)

**Paso 3: recorrido de la fracción de adentro.** La parte $\frac{9}{4x+10}$ nunca vale cero (su numerador es $9$), así que la fracción completa **nunca vale $-\frac12$**. Pero puede tomar cualquier otro valor real.

**Paso 4: aplicar el valor absoluto.** Para cualquier $t\ge 0$, podemos encontrar un $x$ tal que $\left|\frac{2-x}{2x+5}\right| = t$, porque si $t\neq -\frac12$ siempre hay un valor de la fracción que da $t$ (o $-t$). Como $t\ge0$ nunca es igual a $-\frac12$, todo $t\ge0$ se alcanza.

$$ R_f = [0,+\infty[ $$

> **Nota:** esta respuesta coincide con la del libro. Aquí el recorrido del valor absoluto es todo lo que no es negativo, porque el valor excluido ($-\frac12$) queda "reflejado" por el valor absoluto.

**Paso 5: tabla de valores.**

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $2$ | $5$ | $10$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $\frac{2-x}{2x+5}$ | $-5$ | $4$ | $1$ | $\frac25$ | $0$ | $-\frac{3}{15}$ | $-\frac{8}{25}$ |
| $f(x)$ | $5$ | $4$ | $1$ | $0{,}4$ | $0$ | $0{,}2$ | $0{,}32$ |

**Paso 6: gráfica.** La asíntota vertical en $x=-\frac52$ hace que la gráfica se dispare hacia arriba a ambos lados.

<GraficoFuncion
  titulo="f(x) = |(2 − x)/(2x + 5)|  (asíntota en x = −5/2)"
  expresion="Math.abs((2-x)/(2*x+5))"
  :x-min="-10" :x-max="10" :y-min="0" :y-max="8"
  :puntos="[
    { x: 2, y: 0, label: 'cero (2, 0)' },
    { x: -1, y: 1, label: '(−1, 1)' },
    { x: -3, y: 5, label: '(−3, 5)' }
  ]"
/>

**Conclusión.** $D_f=\mathbb{R}-\{-\frac52\}$, $R_f=[0,+\infty[$.

</details>

---

### Ejercicio d) : Raíz de un polinomio cuadrático

<details>
<summary><strong>Ejercicio d) · Dominio con cuadrático dentro de la raíz</strong></summary>

**Enunciado.** Determine el dominio y el recorrido de $f(x)=\sqrt{2x^2+3x+1}$.

**Paso 1: dominio.** El radicando debe ser mayor o igual a cero:

$$ 2x^2+3x+1 \ge 0 $$

Factorizamos el polinomio. Buscamos dos números que multipliquen $2\cdot 1=2$ y sumen $3$: son $2$ y $1$.

$$ 2x^2+3x+1 = (2x+1)(x+1) $$

Los puntos críticos son $x=-\frac12$ y $x=-1$. Hacemos una tabla de signos:

| Intervalo | $x<-1$ | $-1<x<-\frac12$ | $x>-\frac12$ |
|:---:|:---:|:---:|:---:|
| $2x+1$ | $-$ | $-$ | $+$ |
| $x+1$ | $-$ | $+$ | $+$ |
| Producto | $+$ | $-$ | $+$ |

El producto es mayor o igual a cero en $x\le -1$ y en $x\ge -\frac12$:

$$ D_f = \,]-\infty,\,-1\,] \cup \left[-\tfrac12,\,+\infty\right[ $$

**Paso 2: recorrido del radicando.** En cada tramo del dominio, el radicando empieza en $0$ (en $x=-1$ o $x=-\frac12$) y crece sin límite hacia afuera. Por lo tanto el radicando toma todos los valores de $[0,+\infty[$.

**Paso 3: aplicar la raíz.** $\sqrt{[0,+\infty[}=[0,+\infty[$.

$$ R_f = [0,+\infty[ $$

**Paso 4: tabla de valores.**

| $x$ | $-2$ | $-1$ | $-\frac34$ | $-\frac12$ | $0$ | $1$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿En $D_f$? | Sí | Sí | No | Sí | Sí | Sí |
| $2x^2+3x+1$ | $3$ | $0$ | — ($-\frac18$) | $0$ | $1$ | $6$ |
| $f(x)$ | $\approx 1{,}73$ | $0$ | — | $0$ | $1$ | $\approx 2{,}45$ |

Observa que $x=-\frac34$ no está en el dominio: ahí el radicando vale $-\frac18$, lo que rompe la raíz. Eso confirma que hay un "hueco" de dominio entre $-1$ y $-\frac12$.

**Paso 5: gráfica.** Dibujamos los dos tramos del dominio.

<GraficoFuncion
  titulo="f(x) = √(2x² + 3x + 1)  (sin valores entre −1 y −1/2)"
  :expresion="['Math.sqrt(2*x*x + 3*x + 1)', 'Math.sqrt(2*x*x + 3*x + 1)']"
  :dominio="[']-4, -1]', '[-0.5, 4]']"
  :x-min="-4" :x-max="4" :y-min="0" :y-max="6"
  :puntos="[
    { x: -1, y: 0, label: '(−1, 0)' },
    { x: -0.5, y: 0, label: '(−1/2, 0)' }
  ]"
/>

**Conclusión.** $D_f=\,]-\infty,-1]\cup\left[-\frac12,+\infty\right[$, $R_f=[0,+\infty[$.

</details>

---

### Ejercicio e) : Función por tramos con racional y lineal

<details>
<summary><strong>Ejercicio e) · Recorrido combinando racional y lineal</strong></summary>

**Enunciado.** Determine el recorrido de

$$
f(x)=\begin{cases}
\dfrac{2x+4}{2x-2} & \text{si } -4 \le x < 1 \\[2mm]
3x+1 & \text{si } 1 \le x < 3
\end{cases}
$$

**Paso 1: primer tramo, $x\in[-4,1[$.** Es una racional. Simplificamos y reescribimos:

$$ \frac{2x+4}{2x-2} = \frac{x+2}{x-1} = 1 + \frac{3}{x-1} $$

En $[-4,1[$, el denominador $x-1$ va de $-5$ (en $x=-4$) hasta valores cercanos a $0^-$ (cuando $x\to 1^-$). El tramo no incluye $x=1$, así que no hay división por cero.

La fracción $\frac{3}{x-1}$ toma valores en $]-\infty,\,-\frac35]$:
* En $x=-4$: $\frac{3}{-5} = -\frac35$, incluido.
* Cuando $x\to1^-$: $\frac{3}{x-1}\to-\infty$, sin alcanzarlo.

Entonces $f$ en este tramo toma valores en $\left]-\infty,\ 1-\frac35\right] = \left]-\infty,\ \tfrac25\right]$.

**Paso 2: segundo tramo, $x\in[1,3[$.** Es lineal con pendiente positiva. Evaluamos:
* En $x=1$: $3(1)+1=4$, incluido.
* En $x\to 3^-$: $3(3)+1=10$, sin alcanzarlo.

Recorrido del tramo: $[4,\,10[$.

**Paso 3: unir los recorridos.**

$$ R_f = \,]-\infty,\ \tfrac25\,] \cup [4,\ 10[ $$

Entre $\frac25$ y $4$ no hay valores de la función.

**Paso 4: tabla de valores.**

| $x$ | $-4$ | $-3$ | $-1$ | $0$ | $0{,}5$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 1 | 1 | 1 | 1 | 1 | 2 | 2 | — |
| $f(x)$ | $0{,}4$ | $0{,}25$ | $-0{,}5$ | $-2$ | $-5$ | $4$ | $7$ | ($\to 10$, no incluido) |

**Paso 5: gráfica.** La asíntota en $x=1$ separa los dos tramos.

<GraficoFuncion
  titulo="f(x) por tramos: racional en [−4,1[ y lineal en [1,3["
  :expresion="['(x+2)/(x-1)', '3*x + 1']"
  :dominio="['[-4, 1[', '[1, 3[']"
  :x-min="-5" :x-max="4" :y-min="-6" :y-max="11"
  :puntos="[
    { x: -4, y: 0.4, label: '(−4, 2/5)' },
    { x: 1, y: 4, label: '(1, 4)' },
    { x: 3, y: 10, label: '(3, 10) no incluido', abierto: true }
  ]"
/>

**Conclusión.** $R_f=\,]-\infty,\frac25]\cup[4,10[$.

</details>

---

### Ejercicio f) : Función por tramos con valor absoluto

<details>
<summary><strong>Ejercicio f) · Tramos definidos por valor absoluto</strong></summary>

**Enunciado.** Determine el recorrido de

$$
f(x)=\begin{cases}
x^2+4x-1 & \text{si } |x| < 2 \\
-4 & \text{si } |x| \ge 2
\end{cases}
$$

**Paso 1: traducir las condiciones.** Recordemos que $|x|<2$ significa $-2<x<2$, y que $|x|\ge 2$ significa $x\le -2$ o $x\ge 2$.

Por lo tanto:
* Tramo 1: $x\in\,]-2,2[$, con regla $x^2+4x-1$.
* Tramo 2: $x\in\,]-\infty,-2]\cup[2,+\infty[$, con regla $-4$.

**Paso 2: tramo 1, $x\in\,]-2,2[$.** Completamos el cuadrado: $x^2+4x-1=(x+2)^2-5$.
* Cuando $x\in\,]-2,2[$, el valor $x+2$ va de $0$ (sin alcanzarlo) hasta $4$ (sin alcanzarlo).
* Entonces $(x+2)^2$ toma valores en $]0,16[$.
* Restando $5$: $]-5,\ 11[$.

**Paso 3: tramo 2.** La función es constante: $\{-4\}$.

**Paso 4: unir.** El valor $-4$ pertenece al intervalo $]-5,11[$, así que ya está incluido en el primer tramo:

$$ R_f = \,]-5,\,11[\ \cup\ \{-4\} = \,]-5,\,11[ $$

**Paso 5: tabla de valores.**

| $x$ | $-3$ | $-2$ | $-1{,}5$ | $-0{,}5$ | $0$ | $1$ | $1{,}9$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 2 |
| $f(x)$ | $-4$ | $-4$ | $-4{,}75$ | $-2{,}75$ | $-1$ | $4$ | $\approx 10{,}21$ | $-4$ |

Observa que en $x=-2$ y $x=2$ la función vale $-4$ (tramo 2), mientras que el tramo 1 tendería a $-5$ y a $11$ respectivamente, pero no los alcanza.

**Paso 6: gráfica.**

<GraficoFuncion
  titulo="f(x) = x² + 4x − 1 si |x| < 2;  −4 si |x| ≥ 2"
  :expresion="['x*x + 4*x - 1', '-4', '-4']"
  :dominio="[']-2, 2[', ']-6, -2]', '[2, 6]']"
  :x-min="-5" :x-max="5" :y-min="-7" :y-max="12"
  :puntos="[
    { x: -2, y: -5, label: 'hueco (−2, −5)', abierto: true },
    { x: 2, y: 11, label: 'hueco (2, 11)', abierto: true }
  ]"
/>

**Conclusión.** $R_f=\,]-5,\,11[$.

</details>

---

### Ejercicio g) : Raíz y valor absoluto en tramos

<details>
<summary><strong>Ejercicio g) · Función por tramos con raíz negativa y cuadrática con valor absoluto</strong></summary>

**Enunciado.** Determine el recorrido de

$$
f(x)=\begin{cases}
-\sqrt{-x+4} & \text{si } -4 < x \le -1 \\
\left|-x^2+x+2\right| & \text{si } x > -1
\end{cases}
$$

**Paso 1: dominio.** El primer tramo es $]-4,-1]$ y el segundo es $]-1,+\infty[$. Juntos: $D_f=\,]-4,+\infty[$. Observa que $x=-1$ pertenece al primer tramo, así que la función sí está definida ahí.

**Paso 2: tramo 1, $x\in\,]-4,-1]$.**
* El radicando $-x+4$ va de $5$ (en $x=-1$) hasta $8$ (sin alcanzarlo, en $x\to-4$). Entonces toma valores en $[5,8[$.
* Aplicamos la raíz: $\sqrt{[5,8[}=[\sqrt5,\,2\sqrt2[$.
* Aplicamos el menos: $-\sqrt{\cdot}$ toma valores en $]-2\sqrt2,\,-\sqrt5]$.

**Paso 3: tramo 2, $x>-1$.** Analicemos primero el interior $h(x)=-x^2+x+2$. Completando el cuadrado:

$$ h(x) = -\left(x-\tfrac12\right)^2 + \tfrac94 $$

* Su máximo es $\frac94$, en $x=\frac12$ (dentro del tramo).
* Cuando $x\to +\infty$, $h(x)\to -\infty$.
* En $x=-1$ vale $0$, pero ese punto está excluido. En $x=2$ vale $0$, incluido.

Entonces $h$ toma valores en $]-\infty,\,\frac94]$. Ahora aplicamos el valor absoluto: $|h|$ toma valores en $[0,+\infty[$, porque los valores negativos de $h$ se vuelven positivos y crecen sin límite.

**Paso 4: unir.**

$$ R_f = \,]-2\sqrt2,\,-\sqrt5\,] \ \cup\ [0,+\infty[ $$

**Paso 5: tabla de valores.**

| $x$ | $-4$ | $-3$ | $-2$ | $-1$ | $0$ | $\frac12$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Tramo | 1 (excl.) | 1 | 1 | 1 | 2 | 2 | 2 | 2 |
| $f(x)$ | ($\approx -2{,}83$) | $\approx -2{,}65$ | $\approx -2{,}45$ | $\approx -2{,}24$ | $2$ | $2{,}25$ | $0$ | $4$ |

**Paso 6: gráfica.** Hay dos piezas: una curva negativa a la izquierda y una parábola en V a la derecha.

<GraficoFuncion
  titulo="f(x) = −√(−x+4) si −4 < x ≤ −1;  |−x² + x + 2| si x > −1"
  :expresion="['-Math.sqrt(-x + 4)', 'Math.abs(-x*x + x + 2)']"
  :dominio="[']-4, -1]', ']-1, 5]']"
  :x-min="-5" :x-max="5" :y-min="-4" :y-max="8"
  :puntos="[
    { x: -4, y: -2.83, label: 'hueco (−4, −2√2)', abierto: true },
    { x: -1, y: -2.24, label: '(−1, −√5)' },
    { x: -1, y: 0, label: 'hueco (−1, 0)', abierto: true },
    { x: 2, y: 0, label: '(2, 0)' }
  ]"
/>

**Conclusión.** $D_f=\,]-4,+\infty[$, $R_f=\,]-2\sqrt2,\,-\sqrt5\,]\cup[0,+\infty[$.

</details>

---

## 5. Evaluación del Módulo 2

Con esto concluimos los **tipos de funciones**. Pon a prueba lo que aprendiste sobre dominio, recorrido y gráficas de funciones lineales, cuadráticas, racionales y de raíz.

<EvaluacionModulo
  titulo="Test Integrador: Tipos de Funciones Reales"
  :preguntas="[
    {
      pregunta: '¿Por qué el dominio de la función constante f(x) = 15 es igual a todos los números reales (ℝ)?',
      opciones: [
        'Porque no tiene variable x en un denominador ni dentro de una raíz par, por lo tanto no hay restricciones matemáticas.',
        'Porque al ser constante, su recorrido abarca desde el -15 hasta el +15.',
        'Porque la gráfica es una línea inclinada sin fin.',
        'Porque el número 15 es positivo.'
      ],
      correcta: 'Porque no tiene variable x en un denominador ni dentro de una raíz par, por lo tanto no hay restricciones matemáticas.',
      explicacion: 'Sin restricciones de división por cero o raíces negativas, cualquier número real puede entrar en la máquina.'
    },
    {
      pregunta: 'Si la pendiente (a) de una función lineal f(x) = ax + b es negativa, su gráfica es una línea recta que decrece. ¿Qué significa esto en un problema real de estanque de agua?',
      opciones: [
        'Que el estanque se está llenando a un ritmo acelerado.',
        'Que el nivel de agua se mantiene igual con el paso del tiempo.',
        'Que el estanque está perdiendo agua de manera constante a medida que pasa el tiempo.',
        'Que el estanque alcanzó su volumen máximo y se rompió.'
      ],
      correcta: 'Que el estanque está perdiendo agua de manera constante a medida que pasa el tiempo.',
      explicacion: 'Una función decreciente significa que al avanzar la variable x (el tiempo), la variable y (el volumen de agua) se hace cada vez menor.'
    },
    {
      pregunta: 'Para calcular el vértice de una función cuadrática f(x) = ax² + bx + c, ¿qué fórmula debes aplicar obligatoriamente en el primer paso?',
      opciones: [
        'x = -b / a',
        'y = mx + b',
        'Xv = -b / 2a',
        'Igualar la función a cero y factorizar.'
      ],
      correcta: 'Xv = -b / 2a',
      explicacion: 'El primer paso para encontrar el vértice es calcular su coordenada horizontal (Xv) mediante la fórmula -b / (2a). Luego, ese valor se evalúa en la función original para hallar Yv.'
    },
    {
      pregunta: 'Al calcular el Dominio de una función raíz cuadrada como f(x) = √(5x - 20), ¿qué inecuación debes plantear para evitar errores matemáticos?',
      opciones: [
        '5x - 20 = 0',
        '5x - 20 ≠ 0',
        '5x - 20 ≥ 0',
        '5x - 20 ≤ 0'
      ],
      correcta: '5x - 20 ≥ 0',
      explicacion: 'El interior de una raíz de índice par (el radicando) nunca puede ser negativo. Se debe exigir estrictamente que sea mayor o igual a cero.'
    },
    {
      pregunta: 'En la función racional f(x) = (2x + 5) / (x - 4), ¿cuál de los siguientes números NO pertenece al Dominio?',
      opciones: [
        '0',
        '2',
        '4',
        '-5'
      ],
      correcta: '4',
      explicacion: 'Si x = 4, el denominador se vuelve (4 - 4) = 0. Como la división por cero no existe, el número 4 está excluido del dominio.'
    }
  ]"
/>

---

## 6. Resumen de las tres familias

| Función | Restricción principal | Cómo sale el recorrido |
|:---|:---|:---|
| **Valor absoluto** $\lvert g(x)\rvert$ | Ninguna (salvo que $g$ tenga restricción) | Nunca negativo; el mínimo es $0$ si $g$ cruza el cero. Un signo menos delante voltea la V. |
| **Raíz cuadrada** $\sqrt{g(x)}$ | Radicando $\ge 0$ | Nunca negativo, y se calcula a partir del recorrido del radicando. |
| **Racional** $\frac{N(x)}{M(x)}$ | $M(x)\neq 0$ | Reescribe como número más fracción, o despeja $x$. El valor que nunca se alcanza es la asíntota horizontal. |

**Recordatorio final:** cuando el dominio es un intervalo, no basta con evaluar en los extremos. Hay que revisar si el extremo está **incluido o excluido**, porque eso decide si su valor entra al recorrido. Y cada vez que multiplicas por un número negativo, **las desigualdades se invierten**.
