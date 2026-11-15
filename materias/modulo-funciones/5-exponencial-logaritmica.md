# 5. Funciones Trascendentes: Exponenciales y Logarítmicas

En ciencias agrícolas, muchos fenómenos no cambian a una tasa constante, sino de manera acelerada (como la propagación de un hongo) o desacelerada. Para modelar estos casos utilizamos funciones trascendentes.

## 5.1 Función Exponencial
Para cada base $a \in \mathbb{R}^+$ y $a \neq 1$, se define la función exponencial como:

$$ f(x) = a^x $$

* Si $a > 1$, la función es **estrictamente creciente** (ej: multiplicación de bacterias).
* Si $0 < a < 1$, la función es **estrictamente decreciente** (ej: decaimiento de la concentración de un pesticida).

**Propiedades Claves:**
1. $a^0 = 1$
2. $a^{x+y} = a^x \cdot a^y$
3. $a^{-x} = \frac{1}{a^x}$
4. $(a^x)^y = a^{x \cdot y}$

## 5.2 Función Logarítmica
La función logaritmo en base $a$ ($\log_a$) es la **función inversa** de la exponencial. Es vital cuando necesitamos despejar una incógnita que se encuentra en el exponente.

$$ \log_a(x) = y \iff a^y = x $$

**Propiedades Fundamentales:**
1. **Producto:** $\log_a(x \cdot y) = \log_a(x) + \log_a(y)$
2. **Cociente:** $\log_a\left(\frac{x}{y}\right) = \log_a(x) - \log_a(y)$
3. **Potencia:** $\log_a(x^r) = r \cdot \log_a(x)$
4. **Cambio de base:** $\log_b(x) = \frac{\log_a(x)}{\log_a(b)}$

<br>

<EjercicioResuelto titulo="Ejemplo Resuelto: Ecuación Logarítmica">

Resolvamos la siguiente ecuación aplicando propiedades y evaluando sus restricciones:
$$ \log(x-2) + \log(x+1) + 1 = \log(40) $$

**1. Restricciones del dominio:**
El argumento de un logaritmo siempre debe ser mayor a cero.
* $x - 2 > 0 \Rightarrow x > 2$
* $x + 1 > 0 \Rightarrow x > -1$
Por lo tanto, la solución debe ser estrictamente **$x > 2$**.

**2. Desarrollo algebraico:**
Sabemos que en base 10, $1 = \log(10)$. Reemplazamos:
$$ \log(x-2) + \log(x+1) + \log(10) = \log(40) $$

Aplicamos la propiedad de la suma de logaritmos (se multiplican los argumentos):
$$ \log((x-2)(x+1) \cdot 10) = \log(40) $$

Como tenemos logaritmo en base 10 a ambos lados, igualamos los argumentos:
$$ (x-2)(x+1) \cdot 10 = 40 $$

Dividimos por 10 y desarrollamos el binomio:
$$ (x-2)(x+1) = 4 $$
$$ x^2 - x - 2 = 4 $$
$$ x^2 - x - 6 = 0 $$

Factorizamos la ecuación cuadrática:
$$ (x-3)(x+2) = 0 $$

Las posibles soluciones son $x = 3$ y $x = -2$. 
Sin embargo, revisando nuestra restricción inicial ($x > 2$), descartamos el -2. **La única solución válida es $x = 3$**.

</EjercicioResuelto>

<br>

<QuizInteractivo 
  pregunta="De acuerdo con el Teorema del Cambio de Base, ¿cuál de las siguientes igualdades es la correcta para transformar un logaritmo de base 'b' a base 'a'?" 
  :opciones="['log_b(x) = log_a(x) * log_a(b)', 'log_b(x) = log_a(x) / log_a(b)', 'log_b(x) = log_x(a) / log_b(a)', 'log_b(x) = log_a(x) - log_a(b)']" 
  respuesta-correcta="log_b(x) = log_a(x) / log_a(b)" 
/>