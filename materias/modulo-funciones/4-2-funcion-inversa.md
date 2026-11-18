# 4.2 Función Inversa

Una función $f:A\to B$ tiene **inversa** $f^{-1}:B\to A$ si "deshace" lo que hace $f$:

$$ f^{-1}(y)=x \iff y=f(x) $$

**Teorema clave.** $f$ es invertible si y solo si $f$ es **biyectiva**. Si no es inyectiva, dos entradas darían la misma salida y la inversa no sabría a cuál volver. Si no es sobreyectiva, habría valores de $B$ sin preimagen y la inversa no estaría definida en ellos.

**Cómo calcular la inversa:**
1. Escribir $y=f(x)$.
2. Despejar $x$ en función de $y$.
3. Intercambiar las letras: $x$ pasa a ser la variable de entrada, $y$ la de salida, y la fórmula resultante es $f^{-1}(x)$.

**Propiedades.**
* $(f^{-1})^{-1}=f$.
* $(g\circ f)^{-1}=f^{-1}\circ g^{-1}$ (el orden se invierte, como al ponerse los calcetines y los zapatos).

**Relación gráfica.** Las gráficas de $f$ y $f^{-1}$ son **simétricas respecto a la recta $y=x$**.

> **Cómo usar esta página:** cada ejemplo está plegado. Haz clic en el título para desplegar la resolución completa.

---

<details>
<summary><strong>Ejemplo 2.1 · Verificar inyectividad y calcular la inversa de f(x)=3x−2</strong></summary>

**Enunciado.** Sea $f(x)=3x-2$. Verifique si es inyectiva y determine su inversa.

**Parte 1: inyectividad.** Asumimos $f(a)=f(b)$:
$$
\begin{aligned}
3a-2 &= 3b-2 \\
3a &= 3b \\
a &= b
\end{aligned}
$$
Como $f(a)=f(b)$ implica $a=b$, la función **es inyectiva**.

**Parte 2: inversa.** Escribimos $y=3x-2$ y despejamos $x$:
$$
\begin{aligned}
y+2 &= 3x \\
x &= \frac{y+2}{3}
\end{aligned}
$$
Intercambiamos las letras:
$$ f^{-1}(x) = \frac{x+2}{3} $$

**Parte 3: verificación.** Calculemos $f(f^{-1}(x))$:
$$ f\!\left(\frac{x+2}{3}\right) = 3\cdot\frac{x+2}{3}-2 = x+2-2 = x $$
Así que la verificación es correcta ✓.

<GraficoFuncion
  titulo="f(x) = 3x − 2  y  f⁻¹(x) = (x+2)/3"
  :expresion="['3*x - 2', '(x + 2)/3']"
  :x-min="-3" :x-max="5" :y-min="-3" :y-max="10"
  :puntos="[
    { x: 1, y: 1, label: 'punto fijo (1, 1)' }
  ]"
/>

</details>

<details>
<summary><strong>Ejemplo 2.2 · Inversa de f(x)=(3x+2)/(x−2)</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}-\{2\}\to\mathbb{R}-\{3\}$, $f(x)=\dfrac{3x+2}{x-2}$. Encuentre $f^{-1}$.

Ya demostramos en el submódulo anterior que esta función racional es biyectiva en esos dominios. 

**Paso 1: escribir $y=f(x)$.**
$$ y = \frac{3x+2}{x-2} $$

**Paso 2: quitar el denominador y agrupar las x.**
$$ 
\begin{aligned}
y(x-2) &= 3x+2 \\
xy - 2y &= 3x + 2 \\
xy - 3x &= 2y + 2 \\
x(y-3) &= 2y+2
\end{aligned}
$$

**Paso 3: despejar $x$ e intercambiar letras.**
$$ x = \frac{2y+2}{y-3} \implies f^{-1}(x) = \frac{2x+2}{x-3} $$
con dominio $\mathbb{R}-\{3\}$ (que es el recorrido de $f$) y recorrido $\mathbb{R}-\{2\}$ (que es el dominio de $f$).

**Verificación.** Con $x=0$: $f(0)=\frac{2}{-2}=-1$, y $f^{-1}(-1)=\frac{-2+2}{-1-3}=0$ ✓.

</details>

<details>
<summary><strong>Ejemplo 2.3 · Inversa de f(x)=x² (x>2), f(x)=x+2 (x≤2)</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}\to\mathbb{R}$ definida por $f(x)=x^2$ si $x>2$, y $f(x)=x+2$ si $x\leq 2$. Determine $f^{-1}$.

Este ejemplo es biyectivo y tiene inversa completa en todo $\mathbb{R}$.

**Paso 1: calcular el recorrido de cada tramo y su inversa.**
*Tramo 1, $x>2$:* $y=x^2$ con $x>2$. Entonces $y>4$ y $x=\sqrt{y}$. La inversa en este tramo es $\sqrt{x}$, válida para $x>4$.
*Tramo 2, $x\leq 2$:* $y=x+2$ con $x\leq 2$. Entonces $y\leq 4$ y $x=y-2$. La inversa en este tramo es $x-2$, válida para $x\leq 4$.

**Paso 2: juntar.**
$$
f^{-1}(x) = \begin{cases}
\sqrt{x} & \text{si } x>4 \\
x-2 & \text{si } x\leq 4
\end{cases}
$$

**Verificación.**
* $f(3)=9$ (tramo 1), y $f^{-1}(9)=\sqrt9=3$ ✓.
* $f(2)=4$ (tramo 2), y $f^{-1}(4)=4-2=2$ ✓ (la inversa usa $x-2$ porque $4\leq 4$).

</details>

<details>
<summary><strong>Ejemplo 2.4 · Dominio máximo, recorrido y inversa de f(x)=√(x³−1)</strong></summary>

**Enunciado.** Sea $f:A\to B$, $f(x)=\sqrt{x^3-1}$. Determine el dominio máximo $A$ y el recorrido $B$ para que $f$ sea biyectiva, y luego encuentre $f^{-1}$.

**Paso 1: dominio máximo.** El radicando debe ser $\geq 0$:
$$ x^3-1 \geq 0 \implies x^3 \geq 1 \implies x \geq 1 $$
Entonces $A=[1,+\infty[$.

**Paso 2: recorrido.** Sea $y=\sqrt{x^3-1}$. Como la raíz no es negativa, $y\geq 0$. Elevamos al cuadrado: 
$$ y^2=x^3-1 \implies x^3=y^2+1 \implies x=\sqrt[3]{y^2+1} $$
Esta $x$ existe para todo $y\geq 0$. Por lo tanto $B=[0,+\infty[$.

**Paso 3: inversa.** Intercambiamos letras en $x=\sqrt[3]{y^2+1}$:
$$ f^{-1}(x) = \sqrt[3]{x^2+1}, \qquad x\geq 0 $$

<GraficoFuncion
  titulo="f(x) = √(x³ − 1)  con dominio [1, +∞["
  expresion="Math.sqrt(x*x*x - 1)"
  dominio="[1, 4]"
  :x-min="0" :x-max="4" :y-min="0" :y-max="8"
  :puntos="[
    { x: 1, y: 0, label: '(1, 0)' },
    { x: 2, y: 2.646, label: '(2, √7)' }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 2.5 · Dominio máximo, recorrido y inversa de f(x)=1/√(1−x)</strong></summary>

**Enunciado.** Sea $f:A\to B$, $f(x)=\dfrac{1}{\sqrt{1-x}}$. Determine $A$ y $B$ maximales para que exista $f^{-1}$, y encuentre $f^{-1}$.

**Paso 1: dominio máximo.** Dos condiciones:
* El radicando debe ser positivo (porque está en el denominador, no puede ser cero): $1-x>0 \iff x<1$.
* Entonces $A=\,]-\infty,\,1[$.

**Paso 2: recorrido.** Sea $y=\dfrac{1}{\sqrt{1-x}}$. Como la raíz es positiva, $y>0$. Despejamos:
$$
\begin{aligned}
y^2 &= \frac{1}{1-x} \\
1-x &= \frac{1}{y^2} \\
x &= 1-\frac{1}{y^2}
\end{aligned}
$$
Esta $x$ existe para todo $y>0$. Entonces $B=\,]0,+\infty[$.

**Paso 3: inversa.** Intercambiamos letras:
$$ f^{-1}(x) = 1-\frac{1}{x^2}, \qquad x>0 $$

<GraficoFuncion
  titulo="f(x) = 1/√(1 − x)  con dominio ]−∞, 1["
  expresion="1/Math.sqrt(1 - x)"
  dominio="]-6, 1["
  :x-min="-6" :x-max="2" :y-min="0" :y-max="3"
  :puntos="[
    { x: 0, y: 1, label: '(0, 1)' },
    { x: -3, y: 0.5, label: '(−3, 1/2)' }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 2.6 · Propiedad (g∘f)⁻¹ = f⁻¹∘g⁻¹ con f(x)=2x y g(x)=x+3</strong></summary>

**Enunciado.** Sean $f(x)=2x$ y $g(x)=x+3$. Verifique que $(g\circ f)^{-1}=f^{-1}\circ g^{-1}$.

**Paso 1: calcular $g\circ f$ y su inversa.**
$$ (g\circ f)(x) = g(2x) = 2x+3 $$
Escribimos $y=2x+3$ y despejamos:
$$ x = \frac{y-3}{2} \implies (g\circ f)^{-1}(x)=\frac{x-3}{2} $$

**Paso 2: calcular $f^{-1}\circ g^{-1}$.**
* $f^{-1}(x)=\dfrac{x}{2}$.
* $g^{-1}(x)=x-3$.
Primero se aplica $g^{-1}$, luego $f^{-1}$:
$$ (f^{-1}\circ g^{-1})(x) = f^{-1}(x-3) = \frac{x-3}{2} $$

**Conclusión.** Ambas expresiones coinciden perfectamente.

<GraficoFuncion
  titulo="(g∘f)(x) = 2x + 3  y  (g∘f)⁻¹(x) = (x − 3)/2"
  :expresion="['2*x + 3', '(x - 3)/2']"
  :x-min="-5" :x-max="5" :y-min="-5" :y-max="8"
/>
</details>