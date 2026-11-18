# 8. Taller de Ejercicios Resueltos

Esta es tu zona de entrenamiento. Aquí encontrarás ejercicios extraídos de talleres universitarios reales, clasificados por tema. 

Intenta resolverlos por tu cuenta en un cuaderno usando la **Guía Estratégica (Módulo 7)**. Luego, despliega la respuesta para comparar tu desarrollo paso a paso.

---

## I. Dominio y Recorrido

<details>
<summary><strong>Ejercicio 1 · Raíz cuadrada con función cuadrática interna</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x) = \sqrt{x^2 - 2x - 3}$

**1. Cálculo del Dominio:**
Como hay una raíz cuadrada, el interior debe ser mayor o igual a cero:
$$ x^2 - 2x - 3 \geq 0 $$
Factorizamos buscando dos números que multiplicados den $-3$ y sumados den $-2$:
$$ (x - 3)(x + 1) \geq 0 $$
Los puntos críticos son $x=3$ y $x=-1$. Evaluando los signos en los intervalos, la inecuación es positiva (o cero) en los extremos.
* **$Dom(f) = \,]-\infty, -1] \cup [3, \infty[$**

**2. Cálculo del Recorrido:**
Como es una función de raíz cuadrada pura (sin números sumando por fuera), su resultado mínimo es cuando el interior se hace cero (lo cual ocurre en $x=3$ o $x=-1$). 
A medida que la $x$ crece hacia el infinito, el resultado de la raíz también crece al infinito.
* **$Rec(f) = [0, \infty[$**

</details>

<br><hr><br>

<details>
<summary><strong>Ejercicio 2 · Función racional clásica</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x) = \dfrac{x + 3}{x - 2}$

**1. Cálculo del Dominio:**
El denominador no puede ser cero.
$$ x - 2 \neq 0 \implies x \neq 2 $$
* **$Dom(f) = \mathbb{R} - \{2\}$**

**2. Cálculo del Recorrido:**
Escribimos $y = f(x)$ y despejamos $x$:
$$ y = \frac{x + 3}{x - 2} $$
Pasamos multiplicando el denominador:
$$ y(x - 2) = x + 3 $$
$$ yx - 2y = x + 3 $$
Juntamos las $x$ a la izquierda:
$$ yx - x = 2y + 3 $$
Factorizamos la $x$:
$$ x(y - 1) = 2y + 3 $$
Despejamos:
$$ x = \frac{2y + 3}{y - 1} $$
Ahora miramos el nuevo denominador: $y - 1 \neq 0 \implies y \neq 1$.
* **$Rec(f) = \mathbb{R} - \{1\}$**

</details>

<br><hr><br>

## II. Análisis de Funciones "Bien Definidas"

<details>
<summary><strong>Ejercicio 3 · Problema de Codominio insuficiente</strong></summary>

**Problema:** ¿La siguiente función está bien definida? 
$f: [0, 10] \to [1, 3]$
$x \mapsto x^2 - 7$

**Análisis:**
Para que esté bien definida, todos los resultados de evaluar el dominio $[0, 10]$ deben caber dentro del codominio propuesto $[1, 3]$.
Calculemos los extremos usando el dominio:
* Si entra $x=0 \implies f(0) = 0^2 - 7 = -7$.
* Si entra $x=10 \implies f(10) = 10^2 - 7 = 93$.
El recorrido real de esta función en ese dominio es $[-7, 93]$. 

**Respuesta:**
**La función está mal definida.** El conjunto $[-7, 93]$ no cabe dentro de $[1, 3]$. El codominio se quedó cortísimo.

</details>

<br><hr><br>

<details>
<summary><strong>Ejercicio 4 · Problema con función por tramos</strong></summary>

**Problema:** ¿La siguiente función está bien definida?
$f: \mathbb{R} \to [14, \infty[$
$$ f(x) = \begin{cases} \frac{2}{4-x} & \text{si } x < 4 \\ 3x+2 & \text{si } 4 \le x \end{cases} $$

**Análisis:**
El dominio dado es $\mathbb{R}$. Todo parece estar cubierto por los tramos (menores a 4, y mayores/iguales a 4). 
Pero veamos qué resultados arroja. Probemos un número cualquiera menor a 4, por ejemplo $x=2$:
$$ f(2) = \frac{2}{4-2} = \frac{2}{2} = 1 $$
La máquina escupió el número $1$. Sin embargo, el codominio que nos prometieron era $[14, \infty[$. El número $1$ no pertenece a ese conjunto.

**Respuesta:**
**La función está mal definida.** El resultado $f(2)=1$ no pertenece al codominio exigido $[14, \infty[$.

</details>

<br><hr><br>

## III. Composición de Funciones

<details>
<summary><strong>Ejercicio 5 · Composición estricta con raíces</strong></summary>

**Problema:** Dadas las funciones:
$f: \mathbb{R}_0^+ \to [-1, \infty[$, con $f(x) = \sqrt{x} - 1$
$g: [1, \infty[ \to \mathbb{R}$, con $g(x) = x + 5$
Definir $(g \circ f)(x)$ y calcular su dominio riguroso.

**1. Cálculo de la fórmula:**
$$ (g \circ f)(x) = g(f(x)) = g(\sqrt{x} - 1) = (\sqrt{x} - 1) + 5 = \sqrt{x} + 4 $$

**2. Cálculo del Dominio de Composición:**
Se aplican las reglas de los "dos peajes":
* **Peaje 1 ($x \in D_f$):** El dominio de $f$ es $\mathbb{R}_0^+$, es decir, **$x \geq 0$**.
* **Peaje 2 ($f(x) \in D_g$):** El resultado de $f(x)$ debe ser aceptado por $g$. Como el dominio de $g$ es $[1, \infty[$, exigimos:
  $$ \sqrt{x} - 1 \geq 1 $$
  $$ \sqrt{x} \geq 2 $$
  Elevando al cuadrado: **$x \geq 4$**.

Intersectamos las dos condiciones ($x \ge 0$ y $x \ge 4$). La condición más restrictiva gana.
* **Respuesta: $(g \circ f)(x) = \sqrt{x} + 4$, con $Dom(g \circ f) = [4, \infty[$.**

</details>

<br><hr><br>

## IV. Verdadero o Falso Matemático

<details>
<summary><strong>Ejercicio 6 · Dominio de Composición (Trampa visual)</strong></summary>

**Problema:** Verdadero o Falso. "Si $f(x) = x^2 - 1$ y $g(x) = \sqrt{x + 1}$, entonces el $Dom(f \circ g) = \mathbb{R}$". Justifique.

**Análisis:**
Mucha gente compone la fórmula primero para ver qué pasa:
$$ (f \circ g)(x) = f(\sqrt{x + 1}) = (\sqrt{x + 1})^2 - 1 = x + 1 - 1 = x $$
Al mirar el resultado final ($x$), parece que el dominio son todos los reales ($\mathbb{R}$). ¡Pero esto es una trampa! 

Debemos aplicar la regla de los peajes de composición:
* El número $x$ debe pasar primero por $g(x) = \sqrt{x + 1}$. 
* Por lo tanto, exigimos $x + 1 \geq 0 \implies x \geq -1$. 

Cualquier número menor a $-1$ (por ejemplo $x = -5$) rompe la primera máquina, así que nunca llegará a convertirse en $x$.

**Respuesta:**
**Falso.** El dominio no es $\mathbb{R}$, es $[-1, \infty[$.

</details>

<details>
<summary><strong>Ejercicio 7 · Optimización de Cuadráticas</strong></summary>

**Problema:** Verdadero o Falso. "El valor mínimo de la función $f(x) = x(x - 3)$ es $-\dfrac{9}{4}$". Justifique.

**Análisis:**
Primero expandimos la función:
$$ f(x) = x^2 - 3x $$
Esto es una parábola cóncava hacia arriba (porque $a=1$, positivo), así que efectivamente tiene un mínimo en su vértice.
Calculamos la coordenada $X$ del vértice ($X_v = \frac{-b}{2a}$):
$$ X_v = \frac{-(-3)}{2(1)} = \frac{3}{2} $$
Para hallar el valor mínimo (la altura $Y_v$), reemplazamos $3/2$ en la función original:
$$ Y_v = f\left(\frac{3}{2}\right) = \left(\frac{3}{2}\right)^2 - 3\left(\frac{3}{2}\right) $$
$$ Y_v = \frac{9}{4} - \frac{9}{2} $$
Amplificamos la segunda fracción por 2:
$$ Y_v = \frac{9}{4} - \frac{18}{4} = -\frac{9}{4} $$

**Respuesta:**
**Verdadero.** El cálculo del vértice lo confirma.

</details>