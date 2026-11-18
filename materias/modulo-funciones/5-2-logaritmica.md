# 5.2 Función Logarítmica

La **función logaritmo en base $a$** (con $a>0$ y $a\neq 1$) es la **inversa** de la exponencial en esa base:

$$ \log_a x = y \iff a^y = x $$

Dicho de otra forma: $\log_a x$ es el exponente al que hay que elevar $a$ para obtener $x$.

**Dominio y recorrido.** $D=\mathbb{R}^+ =\,]0,+\infty[$ (no se puede calcular el logaritmo de cero ni de negativos) y $R=\mathbb{R}$.

**Monotonía.**
* Si $a>1$, $\log_a$ es **estrictamente creciente**.
* Si $0<a<1$, $\log_a$ es **estrictamente decreciente**.

**Notación.** Si la base no aparece, normalmente se entiende que es $10$: $\log x=\log_{10}x$.

**Gráfica.** Como es la inversa de $a^x$, su gráfica es la reflexión de la de $a^x$ respecto a la recta $y=x$.

<GraficoFuncion
  titulo="f(x) = log₂(x)  (dominio ]0, +∞[)"
  expresion="Math.log2(x)"
  dominio="]0, 8]"
  :x-min="0" :x-max="8" :y-min="-3" :y-max="3"
  :puntos="[
    { x: 1, y: 0, label: '(1, 0)' },
    { x: 2, y: 1, label: '(2, 1)' },
    { x: 8, y: 3, label: '(8, 3)' }
  ]"
/>

---

<details>
<summary><strong>Ejemplo 1.1 · Evaluar log₁₀(10³) y log₂(1)</strong></summary>

**Enunciado.** Calcule:
a) $\log_{10} 10^3$  b) $\log_2 1$

**a)** Usamos la definición: $\log_{10}(10^3)=y \iff 10^y=10^3$. Entonces $y=3$.
Comprobación: $10^3=1000$. Por lo tanto $\log_{10}1000=3$ ✓.

**b)** $\log_2 1=y \iff 2^y=1$. Como $2^0=1$, entonces $y=0$.
Esto también se deduce de la propiedad $\log_a 1=0$ (para cualquier base).

**Tabla resumen.**

| Expresión | Forma exponencial | Resultado |
|:---|:---|:---:|
| $\log_{10}1000$ | $10^3=1000$ | $3$ |
| $\log_2 1$ | $2^0=1$ | $0$ |
| $\log_2 8$ | $2^3=8$ | $3$ |
</details>

<details>
<summary><strong>Ejemplo 1.2 · Encontrar y en log₂8, la base a en log_a(1/16) y el argumento x en log₃x</strong></summary>

**Enunciado.** Resuelva:
a) $y=\log_2 8$.
b) $\log_a\!\left(\frac{1}{16}\right)=4$, con $a>0$.
c) $\log_3 x=-2$.

**a) $y=\log_2 8$.** Traducimos a forma exponencial: $2^y=8=2^3$. Entonces $y=3$.

**b) Encontrar la base.** Traducimos: $a^4=\frac{1}{16}$. Como $\frac{1}{16}=\left(\frac12\right)^4$, la base es $a=\frac12$ (descartamos negativas).

**c) Encontrar el argumento.** Traducimos: $x=3^{-2}=\frac{1}{9}$.

**Tabla resumen.**

| Literal | Forma exponencial | Solución |
|:---|:---|:---:|
| a) $\log_2 8=y$ | $2^y=8$ | $y=3$ |
| b) $\log_a\frac1{16}=4$ | $a^4=\frac1{16}$ | $a=\frac12$ |
| c) $\log_3 x=-2$ | $3^{-2}=x$ | $x=\frac19$ |
</details>

---

## 2. Propiedades fundamentales de los logaritmos

Para $a>0$, $a\neq 1$, y $x,y>0$, $r\in\mathbb{R}$:

| Propiedad | Fórmula | ¿Por qué? |
|:---|:---|:---|
| **Producto** | $\log_a(xy)=\log_a x+\log_a y$ | Multiplicar es sumar exponentes |
| **Cociente** | $\log_a\!\left(\frac xy\right)=\log_a x-\log_a y$ | Dividir es restar exponentes |
| **Potencia** | $\log_a(x^r)=r\log_a x$ | Elevar a potencia es multiplicar exponentes |
| **Logaritmo de 1** | $\log_a 1=0$ | Porque $a^0=1$ |
| **Logaritmo de la base** | $\log_a a=1$ | Porque $a^1=a$ |
| **Inversa** | $\log_a(a^r)=r$ y $a^{\log_a x}=x$ | Por definición de inversa |
| **Igualdad** | $\log_a x=\log_a y \iff x=y$ | Porque $\log_a$ es inyectiva |

<details>
<summary><strong>Ejemplo 2.1 · Desarrollar log₁₀(x²y) y simplificar log₂(√x)</strong></summary>

**Enunciado.** Desarrolle:
a) $\log_{10}(x^2y)$  b) $\log_2\!\left(\sqrt{x}\right)$

**a) $\log_{10}(x^2y)$.** Usamos la propiedad del producto y la de la potencia (con $x,y>0$):
$$
\begin{aligned}
\log_{10}(x^2y) &= \log_{10}(x^2)+\log_{10}(y) \\
&= 2\log_{10}x + \log_{10}y
\end{aligned}
$$

**b) $\log_2\!\left(\sqrt{x}\right)$.** Escribimos la raíz como potencia, $\sqrt{x}=x^{1/2}$, y aplicamos la propiedad de la potencia:
$$ \log_2\!\left(x^{1/2}\right) = \frac12\log_2 x $$
</details>

<details>
<summary><strong>Ejemplo 2.2 · Teorema del cambio de base y su uso práctico</strong></summary>

**Teorema.** Para $a,b>0$ con $a,b\neq 1$, y $x>0$:
$$ \log_b x = \frac{\log_a x}{\log_a b} $$

**Aplicación.** Las calculadoras normalmente solo tienen $\log$ (base $10$) y $\ln$ (base $e$). Para calcular $\log_2 5$:
$$ \log_2 5 = \frac{\log 5}{\log 2} = \frac{0{,}69897}{0{,}30103} \approx 2{,}3219 $$

Comprobación: $2^{2{,}3219}\approx 5$ ✓.

**Tabla de verificación.**

| Valor | Cálculo | Resultado |
|:---|:---|:---:|
| $\log_2 5$ | $\frac{\log 5}{\log 2}$ | $\approx 2{,}3219$ |
| $\log_5 2$ | $\frac{\log 2}{\log 5}$ | $\approx 0{,}4307$ |
| $\log_2 5\cdot \log_5 2$ | producto | $\approx 1$ |

El producto de un logaritmo y su recíproco siempre da $1$, lo que confirma el resultado.
</details>