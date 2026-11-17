# 1.2 Definición de Función

Ya sabemos que una relación conecta elementos de un conjunto de partida $A$ con un conjunto de llegada $B$. Una **función** es un tipo especial de relación que tiene reglas de comportamiento mucho más estrictas y predecibles.

## 1. Las Dos Reglas de Oro de una Función
Para que una relación $f$ entre un conjunto $A$ y un conjunto $B$ sea considerada una **función**, debe cumplir obligatoriamente estas dos condiciones:

1. **Regla de Existencia (Nadie se queda sin pareja en $A$):**
   Todos y cada uno de los elementos del conjunto de salida $A$ deben estar conectados con algún elemento de $B$. No pueden sobrar elementos sin usar en $A$.
2. **Regla de Unicidad (Prohibido ser "infiel" en $A$):**
   A cada elemento de $A$ le corresponde **un único** elemento en $B$. De un mismo elemento de salida $x$ **jamás** pueden salir dos flechas hacia resultados distintos.

> **¿Qué sí está permitido?**
> * En el conjunto de llegada $B$ **sí pueden sobrar** elementos sin recibir flechas.
> * Dos elementos distintos de $A$ **sí pueden apuntar al mismo** resultado en $B$ (compartir llegada).

### Notación Matemática
Cuando $f$ es una función de $A$ en $B$, se escribe:
$$ f: A \rightarrow B $$
$$ x \mapsto y = f(x) $$

Donde:
* $x$ es la **variable independiente** (el dato que elegimos).
* $y$ es la **variable dependiente** (el resultado que depende de $x$).

---

## 2. ¿Cómo identificar si una relación es función?

<EjercicioResuelto titulo="Caso 1: Análisis mediante Conjuntos y Pares Ordenados">

Dados $A = \{1, -2, 3, -4, 5\}$ y $B = \{-1, 0, 2, 3\}$, analicemos tres relaciones distintas:

**Relación A:** $f_1 = \{(1, 0), (-2, 0), (3, 0), (-4, 3), (5, 3)\}$
* ¿Están todos los elementos de $A$ ($1, -2, 3, -4, 5$) como primera componente? **Sí.**
* ¿Se repite alguna primera componente con distinto resultado? No ($1$ va solo al $0$, $-2$ va solo al $0$, etc.).
* **Conclusión:** **SÍ es función** (no importa que en $B$ sobren el $-1$ y el $2$, ni que varios apunten al $0$).

**Relación B:** $f_2 = \{(1, -1), (-2, 3), (3, 2)\}$
* Faltan los elementos $-4$ y $5$ del conjunto $A$. No tienen pareja en $B$.
* **Conclusión:** **NO es función** (viola la regla de existencia).

**Relación C:** $f_3 = \{(1, 0), (1, 2), (-2, 1), (3, 2), (-4, 3), (5, 3)\}$
* El número $1$ aparece dos veces con resultados diferentes: $(1,0)$ y $(1,2)$.
* **Conclusión:** **NO es función** (viola la regla de unicidad).

</EjercicioResuelto>

---

## 3. El Criterio Gráfico de la Recta Vertical
Cuando tenemos el dibujo de una curva en el plano cartesiano, existe un truco visual infalible para saber si es una función: **la prueba de la recta vertical**.

Si trazas líneas verticales imaginarias a lo largo de todo el gráfico:
* Si **cada línea vertical toca la curva en un solo punto** (o ninguno), entonces **SÍ es una función**.
* Si existe **al menos una línea vertical que corta la curva en dos o más puntos**, entonces **NO es una función** (porque significa que para ese mismo valor de $x$ hay dos alturas $y$ diferentes).

<GraficoFuncion 
  titulo="Prueba de la Recta Vertical: y² = x NO es función"
  :expresion="['Math.sqrt(x)', '-Math.sqrt(x)']"
  :x-min="-1" :x-max="6" :y-min="-3" :y-max="3"
  :puntos="[
    { x: 4, y: 2, label: '(4, 2)' },
    { x: 4, y: -2, label: '(4, -2)' }
  ]"
/>

Observa en el gráfico superior que si nos paramos en $x = 4$ y miramos hacia arriba y hacia abajo, tocamos la curva verde dos veces: en $(4, 2)$ y en $(4, -2)$. Por eso las parábolas horizontales **no son funciones**.

---

## 4. Evaluación de Funciones
Evaluar una función consiste simplemente en reemplazar la letra $x$ por un número o expresión específica para calcular qué resultado entrega la función.

**Ejemplo:** Dada la función $f(x) = 2x + 3$, calculemos su valor para $x = 0$, $x = 4$ y $x = -2$:
* Para $x = 0 \implies f(0) = 2(0) + 3 = 0 + 3 = 3$
* Para $x = 4 \implies f(4) = 2(4) + 3 = 8 + 3 = 11$
* Para $x = -2 \implies f(-2) = 2(-2) + 3 = -4 + 3 = -1$