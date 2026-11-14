# 1. Fundamentos de Relaciones y Funciones

Para comprender cómo modelar fenómenos agronómicos (como el crecimiento de un cultivo o el costo de fertilizantes), primero debemos sentar las bases matemáticas de las relaciones y funciones.

## 1.1 Producto Cartesiano
El producto cartesiano de dos conjuntos $A$ y $B$ es otro conjunto $(A \times B)$ formado por pares ordenados $(x,y)$ tal que la primera componente "$x$" pertenece al conjunto $A$ ($x \in A$); y la segunda componente "$y$" pertenece al conjunto $B$ ($y \in B$).

Este conjunto se nota por $A \times B$ y se lee: "A cruz B".

$$ A \times B = \{(x,y) / x \in A \wedge y \in B\} $$

## 1.2 Relación y Función
Una **relación** es simplemente un subconjunto no vacío del producto cartesiano $A \times B$. Sin embargo, una **función** es una relación mucho más estricta.

Es un subconjunto del producto cartesiano $A \times B$, tal que se cumplen dos condiciones fundamentales:
1. $\forall x \in A, \exists y \in B$ tal que $(x,y) \in f$
2. Si $(x,y) \in f$ y $(x,z) \in f \rightarrow y = z$

> **En palabras simples:** Todo elemento del conjunto de salida (Dominio) debe tener **una y solo una** imagen en el conjunto de llegada (Codominio). No puede existir un elemento en la salida que apunte a dos resultados diferentes.

### Notación Clásica
$$ f: A \rightarrow B $$
$$ x \rightarrow y = f(x) $$

---

## 1.3 Dominio y Recorrido

* **Dominio ($D_f$):** Es el conjunto formado por todos los $x \in A$, tal que existe un $y \in B$, donde $y = f(x)$.
  $$ D_f = \{x \in A / (x,y) \in f\} $$

* **Recorrido o Rango ($R_f$):** Es el conjunto formado por todos los $y \in B$, que son imágenes de $x \in A$ por la ley $f$.
  $$ R_f = \{y \in B / y = f(x) \wedge x \in A\} $$

<br>

<EjercicioResuelto titulo="Ejemplo 1: Análisis de una Relación">

Dados los conjuntos $A = \{1, -2, 3, -4, 5\}$ y $B = \{-1, 0, 2, 3\}$.
La relación $f = \{(1, 0), (1, 2), (-2, 1), (3, 2), (-4, 3), (5, 3)\}$ **¿Es una función?**

**Solución:**
La relación $f$ **no es función**. No cumple con la segunda condición fundamental:
$$(x,y) = (x,z) \rightarrow y = z$$

Al elemento `1` le corresponden dos imágenes distintas del conjunto de llegada: $(1, 0)$ y $(1, 2)$. Como $0 \neq 2$, se rompe la regla de unicidad de la imagen.

</EjercicioResuelto>

<br>

<QuizInteractivo 
  pregunta="Si tenemos la relación f = {(-2, 3), (3, 0), (-4, 0), (-4, 3), (5, 3)} entre el conjunto A y B. ¿Esta relación es una función?" 
  :opciones="['Sí, porque todos los elementos de A tienen imagen en B.', 'Sí, porque las imágenes en B no se repiten.', 'No, porque el elemento -4 tiene dos imágenes distintas (0 y 3).', 'No, porque faltan elementos en el dominio.']" 
  respuesta-correcta="No, porque el elemento -4 tiene dos imágenes distintas (0 y 3)." 
/>