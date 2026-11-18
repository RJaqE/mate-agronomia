# 3.1 Operaciones con Funciones

Muchas funciones complejas se construyen a partir de funciones más simples: sumando, restando, multiplicando o dividiendo dos funciones. Esta sección enseña a hacer estas operaciones y, sobre todo, a encontrar el **dominio** de la función resultante, que es donde ocurren la mayoría de los errores.

> **Cómo usar esta página:** cada ejemplo está plegado. Haz clic en el título para desplegar la resolución completa.

---

## 1. Definición de Operaciones Básicas

Sean $f$ y $g$ dos funciones. Para todos los valores de $x$ donde $f(x)$ y $g(x)$ están definidas al mismo tiempo, se definen cuatro operaciones aritméticas:

| Operación | Definición Matemática | ¿Cómo calcular el Dominio? |
|:---|:---|:---|
| **Suma** | $(f+g)(x) = f(x) + g(x)$ | Intersecar dominios: $D_f \cap D_g$ |
| **Diferencia** | $(f-g)(x) = f(x) - g(x)$ | Intersecar dominios: $D_f \cap D_g$ |
| **Producto** | $(f\cdot g)(x) = f(x)\cdot g(x)$ | Intersecar dominios: $D_f \cap D_g$ |
| **Cociente** | $\left(\dfrac{f}{g}\right)(x) = \dfrac{f(x)}{g(x)}$ | Intersecar dominios ($D_f \cap D_g$) **excluyendo** los $x$ donde $g(x)=0$ |

**¿Por qué la intersección ($\cap$)?** Para que $(f+g)(x)$ exista, tanto la máquina $f$ como la máquina $g$ deben poder procesar el número $x$. Si $x$ rompe una de las dos máquinas, la suma completa se arruina.
**¿Por qué excluir los ceros de $g$ en el cociente?** Porque en la división, la función $g(x)$ va en el denominador, y dividir por cero está prohibido en matemáticas.

---

## 2. Ejemplos Resueltos

<details>
<summary><strong>Ejemplo 2.1 · Evaluar operaciones aritméticas en números específicos</strong></summary>

**Enunciado.** Sean $f(x)=2x^2-4$ y $g(x)=6x-3$. Calcule:
a) $(f+g)(3)$  b) $(f\cdot g)(-1)$  c) $\left(\dfrac{f}{g}\right)(-3)$

**a) Suma en $x=3$, de dos formas.**
*Forma A (evaluar cada función primero):*
* $f(3) = 2(3)^2-4 = 18-4 = 14$
* $g(3) = 6(3)-3 = 18-3 = 15$
* $(f+g)(3) = 14+15 = 29$

*Forma B (sumar primero las fórmulas, luego evaluar):*
* $(f+g)(x) = (2x^2-4)+(6x-3) = 2x^2+6x-7$
* $(f+g)(3) = 2(9)+6(3)-7 = 18+18-7 = 29$ ✓

**b) Producto en $x=-1$.** (Usando Forma A)
* $f(-1) = 2(-1)^2-4 = 2-4 = -2$
* $g(-1) = 6(-1)-3 = -6-3 = -9$
* $(f\cdot g)(-1) = (-2)\cdot(-9) = 18$

**c) Cociente en $x=-3$.** 
Primero verificamos que el denominador $g(-3)$ no sea cero: $g(-3)=6(-3)-3=-21$. ¡Podemos dividir!
* $f(-3) = 2(-3)^2-4 = 2(9)-4 = 14$
* $\left(\frac{f}{g}\right)(-3) = \frac{14}{-21} = -\frac{2}{3}$

</details>

<details>
<summary><strong>Ejemplo 2.2 · Funciones racionales y el peligro de la simplificación</strong></summary>

**Enunciado.** Sean $f(x)=\dfrac{3x}{x+4}$ y $g(x)=\dfrac{x}{x-4}$. Calcule la expresión del cociente $\left(\dfrac{f}{g}\right)(x)$ y determine su dominio.

**Paso 1: dominios originales.**
* $D_f$: $x+4 \neq 0 \implies x\neq -4$. Entonces $D_f=\mathbb{R}-\{-4\}$.
* $D_g$: $x-4 \neq 0 \implies x\neq 4$. Entonces $D_g=\mathbb{R}-\{4\}$.

**Paso 2: Expresión del cociente.** 
Multiplicamos la primera fracción por el inverso de la segunda:
$$
\left(\frac{f}{g}\right)(x) = \frac{\frac{3x}{x+4}}{\frac{x}{x-4}} = \frac{3x}{x+4}\cdot\frac{x-4}{x} = \frac{3x(x-4)}{x(x+4)} = \frac{3(x-4)}{x+4}
$$
> **¡Atención!** Al simplificar la $x$ del numerador con la del denominador, **perdemos de vista** la restricción $x\neq 0$ en la fórmula final. Sin embargo, ese valor debe quedar excluido del dominio igualmente, porque la función original $g(x)$ vale cero si $x=0$, y estaba en el denominador principal.

**Paso 3: Dominio del cociente.**
Intersecamos dominios ($D_f \cap D_g$) y **excluimos** donde $g(x)=0$:
$$ D_{f/g} = \mathbb{R}-\{-4,\,4\} - \{0\} $$
$$ D_{f/g} = \mathbb{R}-\{-4,\,0,\,4\} $$

</details>

<details>
<summary><strong>Ejemplo 2.3 · Dominio de un producto con una raíz cuadrada</strong></summary>

**Enunciado.** Sean $f(x)=\sqrt{4-x^2}$ y $g(x)=3x+1$. Encuentre la función $(f\cdot g)(x)$ y su dominio.

**Paso 1: Dominios originales.**
* $D_f$: el radicando debe ser positivo o cero: $4-x^2\geq 0 \implies x^2\leq 4$. Esto significa que $x$ debe estar entre $-2$ y $2$. $D_f=[-2,\,2]$.
* $D_g$: $\mathbb{R}$, porque una función lineal no tiene restricciones.

**Paso 2: Expresión del producto.**
Simplemente multiplicamos las fórmulas. No se puede simplificar más:
$$ (f\cdot g)(x)=(3x+1)\sqrt{4-x^2} $$

**Paso 3: Dominio del producto.**
La regla dice que es la intersección $D_f \cap D_g$.
Intersecar $[-2, 2]$ con Todos los Reales ($\mathbb{R}$) da como resultado el conjunto más pequeño:
$$ D_{f\cdot g} = [-2, 2] $$

</details>