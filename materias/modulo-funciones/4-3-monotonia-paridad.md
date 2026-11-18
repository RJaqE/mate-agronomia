# 4.3 Monotonía, Paridad y Tipos de Funciones

Para finalizar la clasificación de funciones, estudiaremos las propiedades que describen su crecimiento, simetría y eventual repetición a lo largo del plano cartesiano.

> **Cómo usar esta página:** cada ejemplo está plegado. Haz clic en el título para desplegar la resolución completa.

---

## 1. Monotonía

Una función puede **crecer**, **decrecer** o alternar. Estas propiedades se describen con dos valores $a<b$ del dominio:

| Tipo | Condición | Lo que se ve |
|:---|:---|:---|
| **Creciente** | $a<b \Rightarrow f(a)\leq f(b)$ | La gráfica sube (o se queda plana) |
| **Decreciente** | $a<b \Rightarrow f(a)\geq f(b)$ | La gráfica baja (o se queda plana) |
| **Estrictamente creciente** | $a<b \Rightarrow f(a)<f(b)$ | La gráfica sube siempre sin detenerse |
| **Estrictamente decreciente** | $a<b \Rightarrow f(a)>f(b)$ | La gráfica baja siempre sin detenerse |

**Relación con la inyectividad:** Si $f$ es estrictamente creciente o estrictamente decreciente en un conjunto $A$, entonces $f$ es **inyectiva** en $A$. 

<details>
<summary><strong>Ejemplo 1.1 · f(x) = ∛x es estrictamente creciente</strong></summary>

**Enunciado.** Demuestre que $f(x)=\sqrt[3]{x}$ es estrictamente creciente en $\mathbb{R}$.

**Demostración por contradicción.** Sean $a<b$ y supongamos que $\sqrt[3]{a}\geq\sqrt[3]{b}$. Elevando al cubo (que conserva el orden, porque la función cúbica es creciente), obtenemos $a\geq b$. Eso contradice $a<b$. Por lo tanto $\sqrt[3]{a}<\sqrt[3]{b}$, y $f$ es estrictamente creciente, y en particular inyectiva.

<GraficoFuncion
  titulo="f(x) = ∛x  (estrictamente creciente)"
  expresion="Math.cbrt(x)"
  :x-min="-8" :x-max="8" :y-min="-3" :y-max="3"
  :puntos="[
    { x: 8, y: 2, label: '(8, 2)' },
    { x: -8, y: -2, label: '(−8, −2)' }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 1.2 · Demostrar que f(x)=mx+b es estrictamente decreciente si m<0</strong></summary>

**Demostración.** Sean $u<v$. Como $m<0$, al multiplicar la desigualdad por $m$ se invierte el sentido:
$$
\begin{aligned}
u &< v \\
mu &> mv \qquad \text{(multiplicamos por }m<0\text{, se invierte)} \\
mu+b &> mv+b \qquad \text{(sumamos } b\text{)} \\
f(u) &> f(v)
\end{aligned}
$$
Por lo tanto $f$ es estrictamente decreciente.

<GraficoFuncion
  titulo="f(x) = −2x + 5  (estrictamente decreciente)"
  expresion="-2*x + 5"
  :x-min="-1" :x-max="4" :y-min="-3" :y-max="8"
  :puntos="[
    { x: 0, y: 5, label: '(0, 5)' },
    { x: 2, y: 1, label: '(2, 1)' }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 1.3 · f(x)=x² es creciente en [0,∞[ y decreciente en ]−∞,0]</strong></summary>

**Paso 1: intuición.** El vértice está en $x=0$. A la derecha del vértice, la parábola sube; a la izquierda, baja.

**Paso 2: demostración en $[0,+\infty[$.** Sean $0\leq a<b$. Como $a\geq 0$ y $b>a$:
$$ b^2-a^2 = (b-a)(b+a) > 0 $$
porque $b-a>0$ y $b+a>0$. Entonces $b^2>a^2$, así que $f$ es estrictamente creciente en $[0,+\infty[$.

**Paso 3: demostración en $]-\infty,0]$.** Sean $a<b\leq 0$. Entonces $-a>-b\geq 0$, y como $x^2$ es creciente en $[0,\infty[$:
$$ a^2 = (-a)^2 > (-b)^2 = b^2 $$
Por lo tanto $f(a)>f(b)$, y $f$ es estrictamente decreciente en $]-\infty,0]$.

<GraficoFuncion
  titulo="f(x) = x²  (decreciente en ]−∞,0], creciente en [0,+∞[)"
  expresion="x*x"
  :x-min="-3" :x-max="3" :y-min="-1" :y-max="9"
  :puntos="[
    { x: 0, y: 0, label: 'vértice (0, 0)' },
    { x: 2, y: 4, label: '(2, 4)' },
    { x: -2, y: 4, label: '(−2, 4)' }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 1.4 · g∘f es creciente si f y g lo son</strong></summary>

**Enunciado.** Sean $f(x)=x+1$ (creciente) y $g(x)=x^3$ (creciente). Verifique que $g\circ f$ es creciente.

**Paso 1: calcular la composición.**
$$ (g\circ f)(x) = g(x+1) = (x+1)^3 $$

**Paso 2: demostración general.** Si $x<y$, entonces $f(x)<f(y)$ porque $f$ es creciente. Y como $g$ también es creciente, $g(f(x))<g(f(y))$. Por lo tanto $(g\circ f)(x)<(g\circ f)(y)$.

<GraficoFuncion
  titulo="(g∘f)(x) = (x + 1)³  (creciente)"
  expresion="(x+1)*(x+1)*(x+1)"
  :x-min="-3" :x-max="2" :y-min="-8" :y-max="8"
  :puntos="[
    { x: -1, y: 0, label: '(−1, 0)' },
    { x: 1, y: 8, label: '(1, 8)' }
  ]"
/>
</details>

---

## 2. Periodicidad

Una función $f:\mathbb{R}\to\mathbb{R}$ es **periódica de período $p>0$** si $p$ es el menor número positivo que cumple:
$$ f(x+p)=f(x) \qquad \text{para todo } x\in\mathbb{R} $$

> **Observación importante:** Una función periódica **no es inyectiva** (en $\mathbb{R}$), porque múltiples entradas distintas dan la misma salida. Por eso las funciones periódicas no son biyectivas sobre $\mathbb{R}$.

<details>
<summary><strong>Ejemplo 2.1 · Periodicidad de la función coseno</strong></summary>

**Enunciado.** Considere $f(x)=\cos(x)$. Verifique que tiene período $2\pi$ y que no es inyectiva en $\mathbb{R}$.

**Paso 1: periodicidad.** Sabemos que $\cos(x+2\pi)=\cos(x)$ para todo $x$. Así que $p=2\pi$ es un período.

**Paso 2: no inyectiva.** Tomemos $0$ y $2\pi$:
$$ \cos(0)=1 \qquad \cos(2\pi)=1 $$
Como $0\neq 2\pi$ dan el mismo resultado, la función no es inyectiva en $\mathbb{R}$.

<GraficoFuncion
  titulo="f(x) = cos(x)  (período 2π)"
  expresion="Math.cos(x)"
  :x-min="-7" :x-max="7" :y-min="-1.5" :y-max="1.5"
  :puntos="[
    { x: 0, y: 1, label: '(0, 1)' },
    { x: 6.2832, y: 1, label: '(2π, 1)' }
  ]"
/>
</details>

---

## 3. Paridad

Sea $A$ un conjunto simétrico respecto al origen (si $x\in A$ entonces $-x\in A$).
* **Función par:** $f(-x)=f(x)$. Es simétrica respecto al **eje $Y$**. Ejemplo: $f(x)=x^2$.
* **Función impar:** $f(-x)=-f(x)$. Es simétrica respecto al **origen**. Ejemplo: $f(x)=x^3$.

<details>
<summary><strong>Ejemplo 3.1 · Demostrar que f(x)=4x⁴−3x²+8 es par</strong></summary>

**Paso 1: calcular $f(-x)$.** Reemplazamos $x$ por $-x$:
$$ f(-x) = 4(-x)^4 - 3(-x)^2 + 8 $$
**Paso 2: simplificar.** Las potencias pares eliminan el signo:
$$ f(-x) = 4x^4 - 3x^2 + 8 = f(x) $$
**Conclusión.** $f$ es par.

<GraficoFuncion
  titulo="f(x) = 4x⁴ − 3x² + 8  (par, simétrica respecto al eje Y)"
  expresion="4*x*x*x*x - 3*x*x + 8"
  :x-min="-2.5" :x-max="2.5" :y-min="0" :y-max="70"
  :puntos="[
    { x: 2, y: 60, label: '(2, 60)' },
    { x: -2, y: 60, label: '(−2, 60)' }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 3.2 · Demostrar que f(x)=3x⁵−4x³+2x es impar</strong></summary>

**Paso 1: calcular $f(-x)$.**
$$ f(-x) = 3(-x)^5 - 4(-x)^3 + 2(-x) $$
**Paso 2: aplicar las reglas de signos.** Las potencias impares conservan el signo:
$$
\begin{aligned}
f(-x) &= 3(-x^5) - 4(-x^3) + 2(-x) \\
&= -3x^5 + 4x^3 - 2x \\
&= -(3x^5 - 4x^3 + 2x) = -f(x)
\end{aligned}
$$
**Conclusión.** $f$ es impar.

<GraficoFuncion
  titulo="f(x) = 3x⁵ − 4x³ + 2x  (impar, simétrica respecto al origen)"
  expresion="3*x*x*x*x*x - 4*x*x*x + 2*x"
  :x-min="-2" :x-max="2" :y-min="-80" :y-max="80"
  :puntos="[
    { x: 1, y: 1, label: '(1, 1)' },
    { x: -1, y: -1, label: '(−1, −1)' }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 3.3 · Función que no es par ni impar f(x)=x²+x</strong></summary>

**Paso 1: calcular $f(-x)$.** $f(-x)=(-x)^2+(-x)=x^2-x$.

**Paso 2: comparar.**
* ¿Es par? $x^2-x\neq x^2+x$. **No es par.**
* ¿Es impar? $-f(x)=-x^2-x$. $x^2-x\neq -x^2-x$. **No es impar.**
</details>

---

## 4. Tipos de funciones y características

<details>
<summary><strong>Ejemplo 4.1 · f(x)=x³ es inyectiva e impar</strong></summary>
* **Inyectividad:** Si $a^3=b^3$, entonces $a^3-b^3=(a-b)(a^2+ab+b^2)=0$. Como el segundo factor es $\geq 0$ y solo vale $0$ si $a=b=0$, obtenemos $a=b$. $f$ es inyectiva.
* **Sobreyectividad:** Para todo $y\in\mathbb{R}$, existe $x=\sqrt[3]{y}$. $R_f=\mathbb{R}$.
* **Paridad:** $f(-x)=(-x)^3=-x^3=-f(x)$. Es impar.
</details>

<details>
<summary><strong>Ejemplo 4.2 · f(x)=[x] (función parte entera)</strong></summary>
La parte entera de $x$ es el mayor entero menor o igual que $x$.
* **Inyectividad:** $f(0)=f(0{,}5)=0$. Dos entradas distintas dan la misma salida, así que **no es inyectiva**.
* **Recorrido:** Solo toma valores enteros: $R_f=\mathbb{Z}$.
* **Paridad:** $f(0{,}5)=0$ y $f(-0{,}5)=-1$. No es par ni impar.

<GraficoFuncion
  titulo="f(x) = [x]  (escalones; puntos clave)"
  :x-min="-3" :x-max="3" :y-min="-3" :y-max="3"
  :puntos="[
    { x: 2.7, y: 2, label: '[2,7]=2' },
    { x: -2.7, y: -3, label: '[−2,7]=−3' },
    { x: 0.5, y: 0, label: '[0,5]=0' }
  ]"
/>
</details>

---

## 5. Resumen General

| Función | Dominio | Recorrido | Inyectiva | Paridad |
|:---|:---|:---|:---:|:---|
| **Lineal** ($mx+b$, $m\neq 0$) | $\mathbb{R}$ | $\mathbb{R}$ | Sí | Impar si $b=0$; si no, ninguna |
| **Constante** ($b$) | $\mathbb{R}$ | $\{b\}$ | No | Par |
| **Cuadrática** ($ax^2+bx+c$) | $\mathbb{R}$ | $[y_v,+\infty[$ o $]-\infty,y_v]$ | No | Par si $b=0$ |
| **Valor absoluto** ($\lvert x\rvert$) | $\mathbb{R}$ | $[0,+\infty[$ | No | Par |
| **Raíz cuadrada** ($\sqrt{x}$) | $[0,+\infty[$ | $[0,+\infty[$ | Sí | N/A (dominio no simétrico) |
| **Cúbica** ($x^3$) | $\mathbb{R}$ | $\mathbb{R}$ | Sí | Impar |

<br>
<hr>
<br>

## 6. Evaluación del Módulo 4

<EvaluacionModulo 
  titulo="Test Integrador: Clasificación de Funciones"
  :preguntas="[
    {
      pregunta: 'Para que una función matemática posea una función inversa válida (f⁻¹), ¿qué condición estricta e indispensable debe cumplir?',
      opciones: [
        'Debe ser una función de grado par',
        'Debe ser únicamente inyectiva',
        'Debe ser biyectiva (inyectiva y sobreyectiva a la vez)',
        'Debe ser estrictamente creciente en todo su dominio'
      ],
      correcta: 'Debe ser biyectiva (inyectiva y sobreyectiva a la vez)',
      explicacion: 'Una función debe ser inyectiva (para que cada salida provenga de un solo origen) y sobreyectiva (para que la inversa tenga preimágenes en todo el conjunto). Al cumplir ambas, es biyectiva y por ende invertible.'
    },
    {
      pregunta: '¿Cuál es la paridad de la función f(x) = x³?',
      opciones: [
        'Par',
        'Impar',
        'Ni par ni impar',
        'Constante'
      ],
      correcta: 'Impar',
      explicacion: 'Al evaluar f(-x), el resultado es (-x)³ = -x³. Como -x³ es exactamente el negativo de la función original (-f(x)), la función tiene simetría de origen, es decir, es impar.'
    }
  ]"
/>