# 4. Clasificación y Características de las Funciones

Para entender el comportamiento de los modelos matemáticos (como ciclos de temperatura a lo largo del año o tasas de crecimiento), es necesario clasificar las funciones según sus características y simetrías.

## 4.1 Inyectividad, Sobreyectividad y Biyectividad

* **Función Inyectiva (Uno a Uno):** Cada elemento del recorrido proviene de un único elemento del dominio. No hay dos valores de $x$ distintos que den el mismo resultado en $y$.
  $$ f(a) = f(b) \Rightarrow a = b $$

* **Función Sobreyectiva (Epiyectiva):** Todos los elementos del conjunto de llegada ($B$) son imagen de algún elemento del dominio. Es decir, el recorrido es exactamente igual al conjunto de llegada.
  $$ Rec(f) = B $$

* **Función Biyectiva:** Una función es biyectiva si y solo si es **inyectiva y sobreyectiva al mismo tiempo**.

## 4.2 Función Inversa ($f^{-1}$)
Si una función $f: A \rightarrow B$ es biyectiva, entonces existe su función inversa $f^{-1}: B \rightarrow A$. Esta función básicamente "deshace" la operación de la función original.

$$ f^{-1}(y) = x \iff y = f(x) $$

<br>

<EjercicioResuelto titulo="Ejemplo 1: Demostrar Inyectividad y Calcular Inversa">

Dada la función lineal $f(x) = 3x - 2$, verifiquemos si es inyectiva y busquemos su inversa.

**1. ¿Es inyectiva?**
Asumimos que $f(a) = f(b)$ y desarrollamos algebraicamente:
$$ 3a - 2 = 3b - 2 $$
Sumamos 2 a ambos lados:
$$ 3a = 3b $$
Dividimos por 3:
$$ a = b $$
Como llegamos de forma estricta a $a = b$, la función **sí es inyectiva**.

**2. Cálculo de la inversa:**
Igualamos la expresión de la función a $y$:
$$ y = 3x - 2 $$
Ahora, el objetivo es despejar la variable $x$:
$$ y + 2 = 3x $$
$$ x = \frac{y + 2}{3} $$
Por lo tanto, intercambiando las variables para la notación final, la función inversa es:
$$ f^{-1}(x) = \frac{x + 2}{3} $$

</EjercicioResuelto>

<br>

## 4.3 Monotonía y Paridad

Podemos describir cómo cambia una función observando su monotonía:
* **Estrictamente Creciente:** Si aumentamos $x$, el valor de $y$ siempre aumenta. $a < b \Rightarrow f(a) < f(b)$.
* **Estrictamente Decreciente:** Si aumentamos $x$, el valor de $y$ siempre disminuye. $a < b \Rightarrow f(a) > f(b)$.

También podemos observar su simetría o **paridad**:
* **Función Par:** Es simétrica respecto al eje Y (como si fuera un espejo). Cumple que $f(-x) = f(x)$. Ejemplo clásico: $f(x) = x^2$.
* **Función Impar:** Es simétrica respecto al origen. Cumple que $f(-x) = -f(x)$. Ejemplo clásico: $f(x) = x^3$.

<br>

<QuizInteractivo 
  pregunta="Para que una función matemática posea una función inversa válida (f⁻¹), ¿qué condición estricta e indispensable debe cumplir?" 
  :opciones="['Debe ser una función de grado par', 'Debe ser únicamente inyectiva', 'Debe ser biyectiva (inyectiva y sobreyectiva a la vez)', 'Debe ser estrictamente creciente en todo su dominio']" 
  respuesta-correcta="Debe ser biyectiva (inyectiva y sobreyectiva a la vez)" 
/>