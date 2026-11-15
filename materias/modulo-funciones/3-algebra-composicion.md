# 3. Álgebra y Composición de Funciones

Muchas funciones complejas que modelan sistemas reales se construyen a partir de funciones más simples. En esta sección aprenderemos a operar matemáticamente con ellas y a combinarlas.

## 3.1 Operaciones Básicas con Funciones
Para todos los valores de $x$ donde las funciones $f(x)$ y $g(x)$ están definidas, podemos realizar las cuatro operaciones fundamentales:

* **Suma:** $(f + g)(x) = f(x) + g(x)$
* **Diferencia:** $(f - g)(x) = f(x) - g(x)$
* **Producto:** $(f \cdot g)(x) = f(x) \cdot g(x)$
* **Cociente:** $\left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)} \quad \text{siempre que } g(x) \neq 0$

**Dominio de las operaciones:**
El dominio resultante para la suma, diferencia y producto es simplemente la **intersección** de los dominios originales ($D_f \cap D_g$). Para el cociente, es la misma intersección, pero excluyendo los valores de $x$ que hacen que el denominador $g(x)$ sea cero.

<br>

<EjercicioResuelto titulo="Ejemplo 1: Cálculo y Operatoria">

Dadas las funciones $f(x) = 2x^2 - 4$ y $g(x) = 6x - 3$. Calculemos el valor de la suma evaluada en $x = 3$.

Se nos pide $(f+g)(3)$. Podemos hacerlo de dos formas:

**Forma A (Evaluando primero):**
1. $f(3) = 2(3)^2 - 4 = 18 - 4 = 14$
2. $g(3) = 6(3) - 3 = 18 - 3 = 15$
3. $(f+g)(3) = 14 + 15 = 29$

**Forma B (Sumando la función general primero):**
1. $(f+g)(x) = (2x^2 - 4) + (6x - 3) = 2x^2 + 6x - 7$
2. $(f+g)(3) = 2(3)^2 + 6(3) - 7 = 18 + 18 - 7 = 29$

</EjercicioResuelto>

## 3.2 Composición de Funciones
La composición es un proceso en el que tomamos los elementos del rango (resultados) de una función y los usamos como el dominio (datos de entrada) de otra función.

Dadas dos funciones $f$ y $g$, la función compuesta $g \circ f$ se define como:

$$ (g \circ f)(x) = g(f(x)) $$

> **Regla del Dominio:** El dominio de la función compuesta $g \circ f$ está formado por todas las $x$ en el dominio de $f$ tales que su imagen $f(x)$ esté dentro del dominio de la función $g$.

<br>

<EjercicioResuelto titulo="Ejemplo 2: Armando la Composición">

Si $f(x) = \sqrt{x^2 - 9}$ y $g(x) = \sqrt{4 - x}$, calculemos $(f \circ g)(x)$.

Por definición sabemos que $(f \circ g)(x) = f(g(x))$.

Sustituimos $g(x)$ dentro de $f$:
$$ f(\sqrt{4-x}) = \sqrt{(\sqrt{4-x})^2 - 9} $$

Simplificamos eliminando la raíz con el cuadrado:
$$ \sqrt{4 - x - 9} = \sqrt{-5 - x} $$

Por lo tanto, $(f \circ g)(x) = \sqrt{-5 - x}$.

</EjercicioResuelto>

<br>

<QuizInteractivo 
  pregunta="Si f(x) = 2x y g(x) = x + 3. ¿Cuál es el resultado de la composición (f ∘ g)(x)?" 
  :opciones="['2x + 3', '2x + 6', 'x^2 + 3x', '3x + 3']" 
  respuesta-correcta="2x + 6" 
/>