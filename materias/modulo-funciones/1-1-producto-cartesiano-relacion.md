# 1.1 Producto Cartesiano y Relación

Antes de hablar de funciones, debemos entender cómo se ubican los datos en el espacio y cómo se conectan dos grupos de información.

## 1. El Plano Cartesiano y el Par Ordenado
Imagina un mapa o el plano de un predio agrícola dividido por dos calles principales que se cruzan en ángulo recto:
* **Eje $X$ (Abscisas):** Es la línea horizontal. Representa normalmente la variable independiente (lo que nosotros controlamos o medimos primero, como los días transcurridos o los kilos de fertilizante).
* **Eje $Y$ (Ordenadas):** Es la línea vertical. Representa la variable dependiente (el resultado que observamos, como la altura de la planta).

Para ubicar un punto exacto en este mapa usamos un **par ordenado** $(x, y)$. Se llama *ordenado* porque el orden importa estrictamente:
* El primer número siempre se busca en el eje horizontal ($X$).
* El segundo número siempre se busca en el eje vertical ($Y$).

> **¡Cuidado!** El punto $(2, 5)$ no es el mismo lugar que $(5, 2)$. En el primero avanzas 2 pasos a la derecha y subes 5; en el segundo avanzas 5 a la derecha y subes 2.

---

## 2. Producto Cartesiano ($A \times B$)
Si tienes dos conjuntos (grupos de elementos) llamados $A$ y $B$, el **producto cartesiano** $A \times B$ (se lee *"A cruz B"*) es el conjunto de **todas las combinaciones posibles** de pares ordenados $(x, y)$ que puedes armar tomando el primer elemento desde $A$ y el segundo desde $B$.

$$ A \times B = \{(x,y) \mid x \in A \wedge y \in B\} $$

### Ejemplo paso a paso
Supongamos que en un ensayo agrícola tenemos dos variedades de semillas y tres tipos de sustrato:
* Conjunto $A = \{1, 2, 3\}$ (3 elementos)
* Conjunto $B = \{2, 3\}$ (2 elementos)

Para armar $A \times B$, tomamos cada elemento de $A$ y lo combinamos con todos los elementos de $B$:
* Con el $1$: $(1, 2)$ y $(1, 3)$
* Con el $2$: $(2, 2)$ y $(2, 3)$
* Con el $3$: $(3, 2)$ y $(3, 3)$

El resultado completo es un conjunto con $3 \times 2 = 6$ pares ordenados:
$$ A \times B = \{(1,2), (1,3), (2,2), (2,3), (3,2), (3,3)\} $$

<GraficoFuncion 
  titulo="Ubicación gráfica de los 6 pares ordenados de A × B"
  :x-min="0" :x-max="4" :y-min="0" :y-max="4"
  :puntos="[
    { x: 1, y: 2, label: '(1,2)' },
    { x: 1, y: 3, label: '(1,3)' },
    { x: 2, y: 2, label: '(2,2)' },
    { x: 2, y: 3, label: '(2,3)' },
    { x: 3, y: 2, label: '(3,2)' },
    { x: 3, y: 3, label: '(3,3)' }
  ]"
/>

### Propiedades importantes
1. **No es conmutativo ($A \times B \neq B \times A$):** Si calculamos $B \times A$, el primer número sale de $B$ y el segundo de $A$, dando pares distintos: $\{(2,1), (2,2), (2,3), (3,1), (3,2), (3,3)\}$.
2. **Si uno de los conjuntos está vacío ($\emptyset$):** No se puede armar ninguna pareja, por lo tanto $A \times \emptyset = \emptyset$.

---

## 3. ¿Qué es una Relación?
En la vida diaria, una **relación** es simplemente una regla que conecta elementos de un grupo con elementos de otro (por ejemplo: *"a cada parcela le corresponde su superficie"*).

Matemáticamente, una **relación $\mathcal{R}$** es un subconjunto no vacío del producto cartesiano $A \times B$. Es decir, de todas las parejas posibles que armamos en $A \times B$, **filtramos y nos quedamos solo con las que cumplen una condición específica**.

<EjercicioResuelto titulo="Ejemplo Resuelto: Filtrando una Relación">

Sean los conjuntos $A = \{1, 2\}$ y $B = \{2, 3, -1\}$.
Construya la relación $\mathcal{R}_1$ formada por los pares ordenados $(x, y) \in A \times B$ que cumplan la condición de que **$x$ sea menor que $y$** ($x < y$).

**Paso 1: Armar todas las combinaciones posibles ($A \times B$)**
$$ A \times B = \{(1,2), (1,3), (1,-1), (2,2), (2,3), (2,-1)\} $$

**Paso 2: Aplicar el filtro ($x < y$) pareja por pareja**
* $(1, 2) \rightarrow$ ¿Es $1 < 2$? **Sí**, entra.
* $(1, 3) \rightarrow$ ¿Es $1 < 3$? **Sí**, entra.
* $(1, -1) \rightarrow$ ¿Es $1 < -1$? **No**, se descarta.
* $(2, 2) \rightarrow$ ¿Es $2 < 2$? **No** (son iguales), se descarta.
* $(2, 3) \rightarrow$ ¿Es $2 < 3$? **Sí**, entra.
* $(2, -1) \rightarrow$ ¿Es $2 < -1$? **No**, se descarta.

**Resultado:**
$$ \mathcal{R}_1 = \{(1, 2), (1, 3), (2, 3)\} $$

</EjercicioResuelto>