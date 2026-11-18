# 3.2 Composición de Funciones

La composición es un proceso donde tomamos el **resultado** (salida) de una función y lo metemos directamente como **entrada** en otra función. Es como conectar dos máquinas en cadena.

Dadas $f$ y $g$, la función compuesta $g\circ f$ (que se lee "$g$ compuesta con $f$") se define algebraicamente como:

$$ (g\circ f)(x) = g\big(f(x)\big) $$

> **Regla de Oro (Orden de lectura):** Se lee de derecha a izquierda. Primero se aplica la función que está más cerca de la $x$ (en este caso, $f$), y luego la función externa ($g$) se aplica sobre ese resultado.

---

## 1. El desafío del Dominio en la Composición

El dominio de $g\circ f$ es el conjunto de números que logran sobrevivir al paso por **ambas** máquinas.
Se define como todos los valores $x$ que cumplen **dos condiciones simultáneas**:
1. El número $x$ debe poder entrar en la primera máquina: **$x \in D_f$**.
2. El resultado que escupe la primera máquina, $f(x)$, debe ser aceptable para la segunda máquina: **$f(x) \in D_g$**.

> **Dato Clave:** La composición no es conmutativa. En el 99% de los casos, $(g\circ f)(x) \neq (f\circ g)(x)$. Tienen fórmulas distintas y dominios distintos.

---

## 2. Ejemplos Resueltos

<details>
<summary><strong>Ejemplo 2.1 · Evaluar y componer f∘g y g∘f (El orden importa)</strong></summary>

**Enunciado.** Sean $f(x)=2x$ y $g(x)=x+3$. Calcule $(f\circ g)(1)$ y $(g\circ f)(1)$.

**a) Calculando $(f\circ g)(1)$:**
1. Evaluamos la función interna ($g$) primero: $g(1) = 1 + 3 = 4$.
2. Evaluamos la función externa ($f$) usando ese $4$: $f(4) = 2(4) = 8$.
Resultado: **$8$**.

**b) Calculando $(g\circ f)(1)$:**
1. Evaluamos la función interna ($f$) primero: $f(1) = 2(1) = 2$.
2. Evaluamos la función externa ($g$) usando ese $2$: $g(2) = 2 + 3 = 5$.
Resultado: **$5$**.

*Conclusión:* Como $8 \neq 5$, queda demostrado numéricamente que el orden altera completamente el resultado de la composición.
</details>

<details>
<summary><strong>Ejemplo 2.2 · Composición de una función consigo misma tres veces (f∘f∘f)</strong></summary>

**Enunciado.** Sea $f:\mathbb{R}-\{0\}\to\mathbb{R}$, $f(x)=\dfrac{1}{x}$. Calcule $f\circ f$ y $f\circ f\circ f$.

**Paso 1: Calcular $f\circ f$.** 
Sustituimos $f(x)$ dentro de su propia fórmula:
$$ (f\circ f)(x) = f(f(x)) = f\left(\frac{1}{x}\right) = \frac{1}{\frac{1}{x}} = x $$

**Paso 2: Dominio de $f\circ f$.**
Para que la primera $f$ funcione, $x\neq 0$. El resultado $\frac{1}{x}$ entrará a la segunda máquina, la cual tampoco acepta ceros. Pero $\frac{1}{x}$ nunca puede ser cero, así que la segunda máquina está a salvo.
Dominio: $D_{f\circ f} = \mathbb{R}-\{0\}$.

**Paso 3: Calcular $f\circ f\circ f$.** 
Tomamos el resultado anterior ($x$) y lo volvemos a pasar por la máquina $f$:
$$ (f\circ f\circ f)(x) = f\big((f\circ f)(x)\big) = f(x) = \frac{1}{x} $$

*Conclusión matemática curiosa:* Si compones esta función un número par de veces, regresas a $x$. Si la compones un número impar de veces, regresas a $\frac{1}{x}$.
</details>

<details>
<summary><strong>Ejemplo 2.3 · Cálculo formal del Dominio de f∘g usando Inecuaciones</strong></summary>

**Enunciado.** Sean $f(x)=\sqrt{x^2-9}$ y $g(x)=\sqrt{4-x}$. Calcule $(f\circ g)(x)$ y determine su dominio exacto.

**Paso 1: Dominios de las funciones originales.**
* $D_f$: $x^2-9\geq 0 \implies x^2\geq 9 \implies x \in \,]-\infty,-3]\cup[3,+\infty[$.
* $D_g$: $4-x\geq 0 \implies 4\geq x \implies x \in \,]-\infty,4]$.

**Paso 2: Componer $(f\circ g)(x)$.**
Sustituimos la fórmula de $g(x)$ donde haya una $x$ en la fórmula de $f$:
$$ (f\circ g)(x) = f\big(\sqrt{4-x}\big) = \sqrt{\big(\sqrt{4-x}\big)^2-9} = \sqrt{(4-x)-9} = \sqrt{-5-x} $$

**Paso 3: Calcular el Dominio rigurosamente.**
Se deben cumplir dos reglas a la vez:
1. $x$ debe pertenecer a $D_g$: **$x \leq 4$**.
2. El resultado $g(x)$ debe pertenecer a $D_f$. Esto significa que $\sqrt{4-x}$ debe ser menor a $-3$ (imposible, las raíces cuadradas son positivas) o mayor a $3$:
$$ \sqrt{4-x} \geq 3 $$
Elevamos al cuadrado ambos lados:
$$ 4-x \geq 9 \implies -x \geq 5 \implies x \leq -5 $$

**Conclusión del dominio:** Debemos intersecar $x \leq 4$ y $x \leq -5$. La condición más restrictiva gana, por lo tanto, el dominio final es:
$$ D_{f\circ g} = \,]-\infty, -5] $$

</details>