# 7. Guía Estratégica de Resolución

En los exámenes y talleres de matemáticas, los problemas de funciones suelen repetirse bajo ciertos patrones. Esta guía es tu "hoja de trucos" o estrategia definitiva para saber exactamente qué hacer cuando te enfrentas a una pregunta en blanco.

---

## 1. ¿Cómo encontrar el Dominio $D_f$?
El Dominio es el conjunto de números que la máquina acepta sin romperse. Solo debes buscar **tres peligros matemáticos**. Si no hay ninguno de estos tres, el dominio es $\mathbb{R}$.

1. **Fracciones:** El denominador **NUNCA** puede ser cero.
   * *Qué hacer:* Toma todo lo que está abajo, igualalo a cero, resuelve, y saca esos números de $\mathbb{R}$.
2. **Raíces Pares (Cuadradas, cuartas):** El interior (radicando) **NUNCA** puede ser negativo.
   * *Qué hacer:* Toma todo lo que está adentro, ponle $\geq 0$ y resuelve la inecuación.
3. **Logaritmos:** El argumento **DEBE** ser estrictamente positivo.
   * *Qué hacer:* Toma el interior del logaritmo, ponle $> 0$ (sin el igual) y resuelve.

---

## 2. ¿Cómo encontrar el Recorrido $R_f$?
El Recorrido es lo que sale de la máquina. Hay dos métodos infalibles dependiendo de la función:

**Método General (Despejar la $x$):**
1. Escribe $y = f(x)$.
2. Haz todo el álgebra necesaria para dejar la $x$ sola a un lado.
3. Analiza la $y$ resultante buscando los "tres peligros" (fracciones, raíces, logaritmos) del paso anterior.

**Método Visual (Para Cuadráticas y Raíces):**
* **Parábolas ($ax^2+bx+c$):** Calcula la altura del vértice $Y_v$. Si se abre hacia arriba ($a>0$), el recorrido es $[Y_v, +\infty[$. Si se abre hacia abajo ($a<0$), es $]-\infty, Y_v]$.
* **Raíces ($\sqrt{\dots}$):** Por definición, el resultado de una raíz par principal es siempre positivo o cero. El recorrido suele empezar desde $0$ hacia el infinito: $[0, +\infty[$.

---

## 3. ¿Cómo saber si una función está "Bien Definida"?
A veces te darán un problema escrito así: $f: A \to B$. 
Para que esté bien definida, debes auditar dos cosas:
1. **Auditar el Dominio ($A$):** Revisa si algún número del conjunto $A$ rompe la máquina (ej. genera división por cero). Si hay uno solo, la función está mal definida.
2. **Auditar el Codominio ($B$):** Calcula el Recorrido real ($R_f$) usando el conjunto $A$. El recorrido resultante **debe caber completamente** dentro del conjunto $B$ que te dieron. Si la máquina escupe un número que no está en $B$, está mal definida.

---

## 4. El Dominio de una Composición ($g \circ f$)
El error más común es calcular el dominio mirando la fórmula final ya compuesta. ¡Eso está mal! Debes aplicar la regla de "los dos peajes":

1. **Primer Peaje:** La variable $x$ debe pertenecer al dominio de la máquina interna ($x \in D_f$).
2. **Segundo Peaje:** El resultado de la primera máquina debe ser aceptable para la segunda ($f(x) \in D_g$).
3. **Paso final:** Resuelve ambas inecuaciones e **intersecta** los resultados. Solo los números que sobreviven a ambos peajes son el dominio final.