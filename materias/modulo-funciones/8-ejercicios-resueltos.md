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
- **$Dom(f) = \,]-\infty, -1] \cup [3, \infty[$**

**2. Cálculo del Recorrido:**
Como es una función de raíz cuadrada pura (sin números sumando por fuera), su resultado mínimo es cuando el interior se hace cero (lo cual ocurre en $x=3$ o $x=-1$). 
A medida que la $x$ crece hacia el infinito, el resultado de la raíz también crece al infinito.
- **$Rec(f) = [0, \infty[$**

</details>

<br><hr><br>

<details>
<summary><strong>Ejercicio 2 · Función racional clásica</strong></summary>

**Problema:** Encontrar el dominio y recorrido de $f(x) = \dfrac{x + 3}{x - 2}$

**1. Cálculo del Dominio:**
El denominador no puede ser cero.
$$ x - 2 \neq 0 \implies x \neq 2 $$
- **$Dom(f) = \mathbb{R} - \{2\}$**

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
- **$Rec(f) = \mathbb{R} - \{1\}$**

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
- Si entra $x=0 \implies f(0) = 0^2 - 7 = -7$.
- Si entra $x=10 \implies f(10) = 10^2 - 7 = 93$.
El recorrido real de esta función en ese dominio es $[-7, 93]$. 

**Respuesta:**
**La función está mal definida.** El conjunto $[-7, 93]$ no cabe dentro de $[1, 3]$. El codominio se quedó cortísimo.

</details>

<br><hr><br>

<details>
<summary><strong>Ejercicio 4 · Problema con función por tramos</strong></summary>

**Problema:** ¿La siguiente función está bien definida?
$f: \mathbb{R} \to [11, \infty[$
$$ f(x) = \begin{cases} \frac{2}{4-x} & \text{si } x < 4 \\ 3x+2 & \text{si } 4 \le x \end{cases} $$

**Análisis:**
El dominio dado es $\mathbb{R}$. Todo parece estar cubierto por los tramos (menores a 4, y mayores/iguales a 4). 
Pero veamos qué resultados arroja. Probemos un número cualquiera menor a 4, por ejemplo $x=2$:
$$ f(2) = \frac{2}{4-2} = \frac{2}{2} = 1 $$
La máquina escupió el número $1$. Sin embargo, el codominio que nos prometieron era $[11, \infty[$. El número $1$ no pertenece a ese conjunto.

**Respuesta:**
**La función está mal definida.** El resultado $f(2)=1$ no pertenece al codominio exigido $[11, \infty[$.

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
- **Peaje 1 ($x \in D_f$):** El dominio de $f$ es $\mathbb{R}_0^+$, es decir, **$x \geq 0$**.
- **Peaje 2 ($f(x) \in D_g$):** El resultado de $f(x)$ debe ser aceptado por $g$. Como el dominio de $g$ es $[1, \infty[$, exigimos:
  $$ \sqrt{x} - 1 \geq 1 $$
  $$ \sqrt{x} \geq 2 $$
  Elevando al cuadrado: **$x \geq 4$**.

Intersectamos las dos condiciones ($x \ge 0$ y $x \ge 4$). La condición más restrictiva gana.
- **Respuesta: $(g \circ f)(x) = \sqrt{x} + 4$, con $Dom(g \circ f) = [4, \infty[$.**

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
- El número $x$ debe pasar primero por $g(x) = \sqrt{x + 1}$. 
- Por lo tanto, exigimos $x + 1 \geq 0 \implies x \geq -1$. 

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

---

## V. Ejercicios restantes del PDF «Clase 1 taller»

Los ejercicios 1(c), 1(g), 3(a), 3(e), 7(a) y 12(a)-(b) ya aparecen desarrollados arriba. A continuación se completan los demás apartados del PDF. En los ejercicios de composición se indican siempre las restricciones de dominio antes de dar la fórmula final.

### 1. Dominio y recorrido

<details>
<summary><strong>Ejercicio 1 · Apartados restantes</strong></summary>

**(a)** $f(x)=\dfrac1x$. Se excluye el cero tanto como entrada como salida:
$$Dom(f)=\mathbb{R}\setminus\{0\},\qquad Rec(f)=\mathbb{R}\setminus\{0\}.$$

**(b)** $f(x)=3x^2-9x+3=3(x-\frac32)^2-\frac{15}{4}$. La parábola abre hacia arriba:
$$Dom(f)=\mathbb{R},\qquad Rec(f)=\left[-\frac{15}{4},\infty\right[.$$

**(d)** $f(x)=2x^2+16x+1=2(x+4)^2-31$:
$$Dom(f)=\mathbb{R},\qquad Rec(f)=[-31,\infty[.$$

**(e)** $f(x)=-2x^2-16x-1=-2(x+4)^2+31$:
$$Dom(f)=\mathbb{R},\qquad Rec(f)=]-\infty,31].$$

**(f)** $f(x)=\dfrac{2}{x-1}$. El denominador no puede anularse y la fracción nunca vale cero:
$$Dom(f)=\mathbb{R}\setminus\{1\},\qquad Rec(f)=\mathbb{R}\setminus\{0\}.$$

**(h)** $f(x)=\dfrac{x^2-1}{x-1}=x+1$, con $x\ne1$. La simplificación no devuelve el valor que correspondería a $x=1$:
$$Dom(f)=\mathbb{R}\setminus\{1\},\qquad Rec(f)=\mathbb{R}\setminus\{2\}.$$

**(i)** $f(x)=\dfrac{x^2-1}{x+3}=x-3+\dfrac8{x+3}$. Los extremos se obtienen cuando $x+3=\pm2\sqrt2$:
$$Dom(f)=\mathbb{R}\setminus\{-3\},\quad Rec(f)=]-\infty,-6-4\sqrt2]\cup[-6+4\sqrt2,\infty[.$$

**(j)** $f(x)=\dfrac{(x-1)^2-9}{x^2-4x-21}$. El denominador se anula en $x=-3,7$. Al despejar $y=f(x)$ como ecuación cuadrática en $x$, su discriminante debe ser no negativo:
$$25y^2-33y+9\ge0.$$
Por tanto,
$$Dom(f)=\mathbb{R}\setminus\{-3,7\},\quad Rec(f)=\left]-\infty,\frac{33-3\sqrt{21}}{50}\right]\cup\left[\frac{33+3\sqrt{21}}{50},\infty\right[.$$

**(k)** $f(x)=\dfrac2{x-1}+\dfrac1{x-3}$. El dominio excluye los polos $1$ y $3$. En cada intervalo de su dominio, la función es continua; entre los polos tiende a $+\infty$ al acercarse a $1$ por la derecha y a $-\infty$ al acercarse a $3$ por la izquierda. Así toma todos los valores reales:
$$Dom(f)=\mathbb{R}\setminus\{1,3\},\qquad Rec(f)=\mathbb{R}.$$

**(l)** $f(x)=\sqrt{\dfrac{x}{|x|-1}}$. Se exige que el radicando sea no negativo y que $|x|-1\ne0$. El análisis por signos da:
$$Dom(f)=]-1,0]\cup]1,\infty[,\qquad Rec(f)=[0,\infty[.$$

</details>

<br><hr><br>

### 2. Determinar los conjuntos de entrada o salida

<details>
<summary><strong>Ejercicio 2 · Apartados (a), (b) y (c)</strong></summary>

**(a)** $f(x)=2+\sqrt{x-1}$ debe tomar valores en $[10,\infty[$. La raíz exige $x\ge1$ y el codominio exige $2+\sqrt{x-1}\ge10$:
$$\sqrt{x-1}\ge8\iff x\ge65.$$
Así, el conjunto máximo es $A=[65,\infty[$.

**(b)** $f(x)=\dfrac{x-1}{x+2}$ para $x\in[-1,6]$. Como $f'(x)=\dfrac3{(x+2)^2}>0$, es creciente en todo el intervalo. Sus extremos son $f(-1)=-2$ y $f(6)=\frac58$:
$$B=\left[-2,\frac58\right].$$

**(c)** $f(x)=\dfrac{x^2+1}{x^2-4}$ debe pertenecer a $[2,\infty[$. Con $x\ne\pm2$,
$$f(x)\ge2\iff\frac{9-x^2}{x^2-4}\ge0.$$
El cuadro de signos, incluyendo los ceros $x=\pm3$ y excluyendo los polos, da:
$$A=[-3,-2[\cup]2,3].$$

</details>

<br><hr><br>

### 3. Funciones bien definidas

<details>
<summary><strong>Ejercicio 3 · Apartados (b), (c), (d) y (f)</strong></summary>

**(b)** $f:[-1,4]\to[2,9]$, $f(x)=2+\sqrt{3-x}$. El dominio indicado incluye valores mayores que $3$, para los que la raíz no es real. Por ejemplo, $x=3.5$ produce $2+\sqrt{-0.5}$. **Está mal definida**; su dominio de entrada tendría que restringirse a $[-1,3]$.

**(c)** $f:]-\infty,0[\to[0,1]$, $f(x)=2^x$. Para cada $x<0$, $0<2^x<1$. El recorrido es $]0,1[$, contenido en el codominio. **Está bien definida.**

**(d)** $f:\mathbb R\to\mathbb R$, con $f(x)=1-x^2$ si $x<3$ y $f(x)=2\sqrt{1+x}$ si $x\ge3$. Ambos tramos son reales en los intervalos asignados; sus recorridos son $]-\infty,1]$ y $[4,\infty[$. Su unión está contenida en $\mathbb R$, por lo tanto **está bien definida**.

**(f)** $f:\mathbb R\to[1,\infty[$, con $f(x)=(x+1)^2$ si $|x|>1$ y $f(x)=2-x$ si $|x|\le1$. Para $x=-\frac32$, se usa el primer tramo y $f(-\frac32)=\frac14<1$. **Está mal definida** porque ese resultado no pertenece al codominio.

</details>

<br><hr><br>

### 4. Dominio, recorrido y gráficos

<details>
<summary><strong>Ejercicio 4 · Apartados (a)-(d)</strong></summary>

**(a)** $f(x)=x$ si $x<1$ y $f(x)=2x$ si $x\ge1$. El primer tramo recorre $]-\infty,1[$ y el segundo $[2,\infty[$:
$$Dom(f)=\mathbb R,\qquad Rec(f)=]-\infty,1[\cup[2,\infty[.$$
Para graficar, dibuja las rectas $y=x$ a la izquierda de $1$ (círculo abierto en $(1,1)$) y $y=2x$ desde $1$ inclusive (punto cerrado en $(1,2)$).

**(b)** $f(x)=(x+1)^2$ si $|x|>1$ y $f(x)=2-x$ si $|x|\le1$. El tramo central tiene recorrido $[1,3]$; los tramos exteriores aportan $(0,\infty)$. Por tanto:
$$Dom(f)=\mathbb R,\qquad Rec(f)=]0,\infty[.$$
Grafica la parábola $y=(x+1)^2$ para $x<-1$ y $x>1$, y la recta $y=2-x$ para $-1\le x\le1$.

**(c)** $f(x)=\sqrt{x-1}$ para $1\le x\le5$ y $f(x)=-x+7$ para $x>5$:
$$Dom(f)=[1,\infty[,\qquad Rec(f)=]-\infty,2].$$
La raíz va desde $(1,0)$ hasta $(5,2)$; la recta continúa desde valores menores que $2$ para $x>5$.

**(d)** $f(x)=x-1$ si $x<0$ y $f(x)=x+2$ si $x\ge0$:
$$Dom(f)=\mathbb R,\qquad Rec(f)=]-\infty,-1[\cup[2,\infty[.$$
Grafica ambas rectas, con círculo abierto en $(0,-1)$ y punto cerrado en $(0,2)$.

</details>

<br><hr><br>

### 5. Transformaciones de gráficos

<details>
<summary><strong>Ejercicio 5 · Traslación y cambio de escala</strong></summary>

La función base es $f(x)=1-x^2$, una parábola hacia abajo con vértice $(0,1)$.

**(a)** $y=f(2x-1)=1-(2x-1)^2$. El vértice ocurre cuando $2x-1=0$, es decir, $(\frac12,1)$. Sus ceros son $x=0$ y $x=1$; su recorrido es $]-\infty,1]$.

**(b)** $y=f(x)-4=-x^2-3$. Es la parábola original desplazada cuatro unidades hacia abajo: vértice $(0,-3)$ y recorrido $]-\infty,-3]$.

</details>

<br><hr><br>

### 7. Composición de funciones

<details>
<summary><strong>Ejercicio 7 · Apartados (b) y (c)</strong></summary>

**(b)** $f(x)=(x-3)^2$ y $g(x)=\sqrt{x-2}+3$, con $x\in[2,\infty[$ para $g$.

$$ (g\circ f)(x)=\sqrt{(x-3)^2-2}+3,\quad (x-3)^2\ge2,$$
por lo que $Dom(g\circ f)=]-\infty,3-\sqrt2]\cup[3+\sqrt2,\infty[$.

Para $f\circ g$, el dominio de $g$ ya garantiza que $g(x)\in\mathbb R$, donde $f$ está definida:
$$ (f\circ g)(x)=(\sqrt{x-2})^2=x-2,\quad Dom(f\circ g)=[2,\infty[.$$

**(c)** $f(x)=\dfrac{x+1}{x-2}$, $Dom(f)=\mathbb R\setminus\{2\}$, y $g(x)=1-\sqrt{x+3}$, $Dom(g)=[-3,\infty[$.

Para $g\circ f$, se requiere $f(x)+3\ge0$:
$$f(x)+3=\frac{x+1}{x-2}+3=\frac{4x-5}{x-2}>0.$$
Al intersectar con $x\ne2$, el dominio es $]-\infty,\frac54[\cup]2,\infty[$ y
$$ (g\circ f)(x)=1-\sqrt{\frac{4x-5}{x-2}}.$$

Para $f\circ g$, se exige $x>-3$ y $g(x)\ne2$. Como $g(x)=1-\sqrt{x+3}\le1$, nunca toma el valor $2$; no se excluyen entradas adicionales. Por tanto:
$$ (f\circ g)(x)=\frac{2-\sqrt{x+3}}{-1-\sqrt{x+3}},\quad Dom(f\circ g)=]-3,\infty[.$$

</details>

<br><hr><br>

### 8. Composición y evaluación

<details>
<summary><strong>Ejercicio 8 · Definir $g\circ f$ y calcular $(g\circ f)(4)$</strong></summary>

$f(x)=4-x$ con dominio $]-2,\infty[$; $g(x)=-x^2+1$ con dominio $]-1,\infty[$. Para componer se necesita $x>-2$ y $f(x)>-1$, es decir $4-x>-1\iff x<5$.

$$ (g\circ f)(x)=-(4-x)^2+1,\quad Dom(g\circ f)=]-2,5[.$$
Como $4$ pertenece al dominio, $(g\circ f)(4)=-(0)^2+1=1$.

</details>

<br><hr><br>

### 9. Dominio de las dos composiciones

<details>
<summary><strong>Ejercicio 9 · Calcular $g\circ f$ y $f\circ g$</strong></summary>

$f(x)=|2x-1|+x^2$ y $g(x)=\dfrac1{\sqrt{x+3}}$, cuyo dominio es $]-3,1[$ (según el intervalo indicado en el taller).

Para $g\circ f$ se necesita $-3<f(x)<1$. Como $f(x)\ge0$, basta $f(x)<1$. Por tramos:
$$f(x)<1\iff 0<x<\sqrt3-1.$$
Entonces
$$ (g\circ f)(x)=\frac1{\sqrt{|2x-1|+x^2+3}},\quad Dom(g\circ f)=]0,\sqrt3-1[.$$

Para $f\circ g$, se exige solamente $x\in]-3,1[$, pues $f$ acepta todo real:
$$ (f\circ g)(x)=\left|\frac2{\sqrt{x+3}}-1\right|+\frac1{x+3},\quad Dom(f\circ g)=]-3,1[.$$

</details>

<br><hr><br>

### 10. Composición con una función por tramos

<details>
<summary><strong>Ejercicio 10 · Calcular $f\circ g$</strong></summary>

$g(x)=\sqrt{x^2+1}$ siempre está definida y cumple $g(x)\ge1$. La rama $x<-9$ de $f$ nunca se activa. Si $g(x)>9$, entonces $|x|>\sqrt{80}=4\sqrt5$; en los demás casos se aplica $u^2-|u|$ con $u=g(x)$:
$$ (f\circ g)(x)=\begin{cases}
2\sqrt{x^2+1}+5,& |x|>4\sqrt5,\\
x^2+1-\sqrt{x^2+1},& |x|\le4\sqrt5.
\end{cases}$$
El dominio es $\mathbb R$.

</details>

<br><hr><br>

### 11. Composición de funciones por tramos

<details>
<summary><strong>Ejercicio 11 · Encontrar $A$ y $h$ para $g\circ f$</strong></summary>

$f(x)=x$ si $x<0$ y $f(x)=2x$ si $x\ge0$; $g(u)=u^2$ si $u<1$ y $g(u)=\sqrt u$ si $u\ge1$. Ambas funciones admiten todos los valores que produce la otra, así que $A=\mathbb R$. Al separar en los puntos $x=0$ y $2x=1$:
$$ h(x)=(g\circ f)(x)=\begin{cases}
x^2,&x<0,\\
4x^2,&0\le x<\frac12,\\
\sqrt{2x},&x\ge\frac12.
\end{cases}$$

</details>