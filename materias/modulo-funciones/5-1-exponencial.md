# 5.1 Función Exponencial

En ciencias agrícolas, muchos fenómenos no cambian a un ritmo constante, sino de forma acelerada (la población de un hongo que se duplica) o desacelerada (la concentración de un pesticida que se degrada). Para modelar estos casos usamos las **funciones exponenciales** y su inversa, las **funciones logarítmicas**.

> **Cómo usar esta página:** cada ejemplo está plegado. Haz clic en el título para desplegar la resolución completa, con tablas de valores y gráficas.

---

## 1. Función exponencial

Para cada base $a\in\mathbb{R}^+$ con $a\neq 1$, la **función exponencial** es

$$ f(x)=a^x, \qquad D_f=\mathbb{R},\quad R_f=\mathbb{R}^+ $$

**Comportamiento según la base:**
* Si $a>1$, la función es **estrictamente creciente**. Ejemplo: duplicación de bacterias.
* Si $0<a<1$, la función es **estrictamente decreciente**. Ejemplo: decaimiento de un pesticida.

Ambos casos son inyectivos (por la monotonía), así que tienen inversa (la función logarítmica).

**Propiedades (teorema 3.7.1).** Sean $a,b\in\mathbb{R}^+$ y $x,y\in\mathbb{R}$:

| Propiedad | Fórmula |
|:---|:---|
| Potencia cero | $a^0=1$ |
| Producto de potencias de igual base | $a^{x+y}=a^x\cdot a^y$ |
| Cociente de potencias de igual base | $\dfrac{a^x}{a^y}=a^{x-y}$ |
| Potencia de potencia | $(a^x)^y=a^{xy}=(a^y)^x$ |
| Exponente negativo | $a^{-x}=\dfrac{1}{a^x}$ |
| Producto de bases | $(ab)^x=a^x\cdot b^x$ |
| Cociente de bases | $\left(\dfrac{a}{b}\right)^x=\dfrac{a^x}{b^x}$ |

---

<details>
<summary><strong>Ejemplo 1.1 · Simplificar expresiones con potencias</strong></summary>

**Enunciado.** Simplifique cada expresión:
a) $(3^3)(3^4)$  b) $\dfrac{2^5}{2^3}$  c) $(3^x)^4$  d) $\left(\dfrac13\right)^x$

**a) $(3^3)(3^4)$.** Misma base, se suman los exponentes:
$$ (3^3)(3^4) = 3^{3+4} = 3^7 = 2187 $$

**b) $\dfrac{2^5}{2^3}$.** Misma base, se restan los exponentes:
$$ \frac{2^5}{2^3} = 2^{5-3} = 2^2 = 4 $$

**c) $(3^x)^4$.** Potencia de potencia: se multiplican los exponentes.
$$ (3^x)^4 = 3^{4x} $$
Verificación con $x=1$: $(3^1)^4=3^4=81$, y $3^{4\cdot 1}=81$ ✓.

**d) $\left(\dfrac13\right)^x$.** Escribimos $\frac13=3^{-1}$:
$$ \left(\frac13\right)^x = \left(3^{-1}\right)^x = 3^{-x} $$
Verificación con $x=2$: $\left(\frac13\right)^2=\frac19$, y $3^{-2}=\frac19$ ✓.

**Tabla de verificación.**

| $x$ | $(3^x)^4$ | $3^{4x}$ | $\left(\frac13\right)^x$ | $3^{-x}$ |
|:---:|:---:|:---:|:---:|:---:|
| $0$ | $1$ | $1$ | $1$ | $1$ |
| $1$ | $81$ | $81$ | $\frac13$ | $\frac13$ |
| $2$ | $6561$ | $6561$ | $\frac19$ | $\frac19$ |

**Conclusión.** $(3^3)(3^4)=3^7$, $\frac{2^5}{2^3}=2^2$, $(3^x)^4=3^{4x}$ y $\left(\frac13\right)^x=3^{-x}$.
</details>

<details>
<summary><strong>Ejemplo 1.2 · f(x)=2ˣ (creciente) y g(x)=(1/2)ˣ (decreciente)</strong></summary>

**Enunciado.** Grafique $f(x)=2^x$ y $g(x)=\left(\frac12\right)^x$. Determine el dominio, el recorrido y el comportamiento de cada una.

**Paso 1: tabla de valores.**

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)=2^x$ | $\frac14$ | $\frac12$ | $1$ | $2$ | $4$ | $8$ |
| $g(x)=\left(\frac12\right)^x$ | $4$ | $2$ | $1$ | $\frac12$ | $\frac14$ | $\frac18$ |

Observa que $g(x)=\left(\frac12\right)^x=2^{-x}$, así que $g$ es la reflexión de $f$ respecto al eje $Y$.

**Paso 2: dominio y recorrido.** Ambas tienen $D=\mathbb{R}$ y $R=\mathbb{R}^+$. Nunca son cero ni negativas.

**Paso 3: comportamiento.**
* $f$ es estrictamente creciente, porque $2>1$.
* $g$ es estrictamente decreciente, porque $0<\frac12<1$.

<GraficoFuncion
  titulo="f(x) = 2ˣ (creciente)  y  g(x) = (1/2)ˣ (decreciente)"
  :expresion="['Math.pow(2, x)', 'Math.pow(0.5, x)']"
  :x-min="-3" :x-max="4" :y-min="0" :y-max="8"
  :puntos="[
    { x: 0, y: 1, label: '(0, 1)' },
    { x: 1, y: 2, label: '(1, 2)' },
    { x: 1, y: 0.5, label: '(1, 1/2)' }
  ]"
/>

**Conclusión.** Ambas pasan por $(0,1)$ (porque $a^0=1$), nunca tocan el eje $X$ y tienen recorrido $\mathbb{R}^+$.
</details>

<details>
<summary><strong>Ejemplo 1.3 · Crecimiento de bacterias y degradación de un pesticida</strong></summary>

**Enunciado.** Una población de bacterias se duplica cada hora. Si al inicio hay $100$ bacterias, la población después de $t$ horas es:
$$ N(t)=100\cdot 2^t $$
Un pesticida se degrada en un $20\%$ cada día. Si la dosis inicial es de $50$ mg, la cantidad después de $t$ días es:
$$ C(t)=50\cdot (0{,}8)^t $$

**a) Bacterias.** Calculamos $N(t)$ para algunos valores:

| $t$ (horas) | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $N(t)$ | $100$ | $200$ | $400$ | $800$ | $1600$ |
Cada hora se duplica: la función es exponencial creciente con base $2$.

**b) Pesticida.** Calculamos $C(t)$:

| $t$ (días) | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $C(t)$ (mg) | $50$ | $40$ | $32$ | $25{,}6$ |
Cada día queda el $80\%$ del día anterior: la función es exponencial decreciente con base $0{,}8$.

<GraficoFuncion
  titulo="C(t) = 50·(0,8)ᵗ  (decaimiento exponencial)"
  expresion="50*Math.pow(0.8, x)"
  :x-min="0" :x-max="8" :y-min="0" :y-max="55"
  :puntos="[
    { x: 0, y: 50, label: '(0, 50)' },
    { x: 1, y: 40, label: '(1, 40)' }
  ]"
/>

**Conclusión.** Las exponenciales modelan crecimientos y decrecimientos que se multiplican en cada paso, no que se suman.
</details>