# 2.1 Función Constante y Función Lineal

Cuando analizamos datos en ciencias o economía, buscamos patrones. Los patrones más simples son aquellos que no cambian (constantes) o que cambian a un ritmo perfectamente parejo (lineales).

A continuación, desmenuzaremos estas dos funciones, aprenderemos a calcular su Dominio y Recorrido, y veremos cómo dibujarlas paso a paso.

---

## 1. La Función Constante

Imagina que arriendas un tractor por el día. El costo del arriendo es de $\$50.000$, sin importar cuántas horas lo uses. Si lo usas 1 hora, pagas $50.000$. Si lo usas 8 horas, pagas $50.000$.

La función constante es una máquina que **ignora el valor de entrada ($x$)** y siempre arroja el mismo resultado fijo. 

$$ f(x) = k $$
*(Donde $k$ es un número real fijo y conocido).*

### Análisis de Dominio y Recorrido
* **Dominio ($D_f$):** ¿Qué valores puedo meter en la variable $x$? Como en la fórmula $f(x) = k$ no hay divisiones por cero ni raíces cuadradas, no hay ninguna restricción matemática. Puedes evaluar $f(1)$, $f(-1000)$ o $f(0)$. Por lo tanto, el dominio son todos los números reales: **$D_f = \mathbb{R}$**.
* **Recorrido ($R_f$):** ¿Qué valores salen realmente de la máquina? Sin importar qué número introduzcas, el único resultado posible que sale es el número $k$. Por lo tanto, el recorrido es un conjunto de un solo elemento: **$R_f = \{k\}$**.

<GraficoFuncion 
  titulo="Función Constante: f(x) = 3. (Línea horizontal infinita en y = 3)"
  expresion="3"
  :x-min="-5" :x-max="5" :y-min="-1" :y-max="5"
  :puntos="[
    { x: -2, y: 3, label: '(-2, 3)' },
    { x: 4, y: 3, label: '(4, 3)' }
  ]"
/>

---

## 2. La Función Lineal (y Afín)

La función lineal modela cosas que crecen o disminuyen a un ritmo constante. Por ejemplo, el cobro del agua: hay un cargo fijo (se paga siempre) y un cobro variable (se paga por cada metro cúbico extra).

Su estructura algebraica (ecuación principal de la recta) es:
$$ f(x) = mx + n $$

### Las piezas de la máquina lineal:
1. **$m$ (La Pendiente):** Es el número que multiplica a la $x$. Nos indica la inclinación de la recta. Representa la "tasa de cambio" (cuánto cambia $y$ por cada paso que damos en $x$).
2. **$n$ (El Coeficiente de Posición):** Es el número que está solo (sumando o restando). Nos indica en qué altura exacta la recta choca y cruza el eje vertical $Y$. Matemáticamente, es el valor de $y$ cuando $x = 0$.

### Funciones Crecientes vs Decrecientes
El signo de la pendiente ($m$) define el comportamiento de la recta:

* **Si $m > 0$ (Positiva): La función es CRECIENTE.** 
  Al avanzar a la derecha en el eje $X$, la recta sube.
  * *Ejemplo agronómico:* Crecimiento de una planta. $f(x) = 2x + 1$ (crece 2 cm por cada día que pasa).
* **Si $m < 0$ (Negativa): La función es DECRECIENTE.**
  Al avanzar a la derecha en el eje $X$, la recta baja.
  * *Ejemplo agronómico:* Vaciado de un estanque de agua. $f(x) = -3x + 10$ (pierde 3 litros por cada minuto).

<GraficoFuncion 
  titulo="Comparación: Creciente (2x+1) vs Decreciente (-3x+5)"
  :expresion="['2*x + 1', '-3*x + 5']"
  :x-min="-2" :x-max="5" :y-min="-2" :y-max="8"
  :puntos="[
    { x: 1, y: 3, label: 'Creciente' },
    { x: 1, y: 2, label: 'Decreciente' }
  ]"
/>

### Análisis de Dominio y Recorrido
* **Dominio ($D_f$):** En la fórmula $mx + n$ no hay divisiones por $x$ ni raíces cuadradas. No hay peligro de romper las reglas matemáticas. Por lo tanto, el dominio es **$D_f = \mathbb{R}$**.
* **Recorrido ($R_f$):** Para hallar el recorrido, despejamos $x$. 
  $y = mx + n \implies y - n = mx \implies x = \frac{y - n}{m}$.
  Como la pendiente $m$ nunca es cero en una función lineal (si lo fuera, sería constante), el denominador es un número seguro. La variable $y$ queda libre de restricciones (no está en un denominador ni en una raíz). Por lo tanto, el recorrido es **$R_f = \mathbb{R}$**.

---

## 3. ¿Cómo graficar una Función Lineal?

Existen dos métodos infalibles para dibujar una recta sin equivocarse. Usaremos como ejemplo la función **$f(x) = 2x - 1$**.

### Método 1: Usando una Tabla de Valores (Dos puntos)
Para trazar una recta, solo necesitas conocer dos puntos por donde pasa.
1. **Paso 1:** Elige dos valores fáciles para $x$ (por ejemplo, $x=0$ y $x=2$).
2. **Paso 2:** Evalúa esos números en la función para hallar sus imágenes ($y$).
   * Si $x = 0 \implies f(0) = 2(0) - 1 = -1$. (Tenemos el punto **$A(0, -1)$**).
   * Si $x = 2 \implies f(2) = 2(2) - 1 = 4 - 1 = 3$. (Tenemos el punto **$B(2, 3)$**).
3. **Paso 3:** Ubica los puntos $(0, -1)$ y $(2, 3)$ en el plano cartesiano y únelos con una regla.

### Método 2: Usando el Coeficiente de Posición y la Pendiente
Este método es más rápido porque no requiere calcular nada extra.
1. **Paso 1: Ubica el punto de partida ($n$).**
   Mira el coeficiente de posición. En $f(x) = 2x - 1$, tenemos $n = -1$. Esto significa que la recta corta el eje $Y$ en el $-1$. Dibuja un punto ahí: $(0, -1)$.
2. **Paso 2: Usa la pendiente ($m$) como un mapa.**
   La pendiente es $2$. Todo número entero está dividido por $1$, así que $m = \frac{2}{1}$.
   * El número de arriba (numerador $= +2$) te dice cuántos pasos dar en el eje $Y$ (si es positivo, subes).
   * El número de abajo (denominador $= +1$) te dice cuántos pasos dar en el eje $X$ (hacia la derecha).
   * **Instrucción:** Párate en tu punto inicial $(0, -1)$, sube 2 cuadritos y avanza 1 cuadrito a la derecha. Llegarás al punto $(1, 1)$. Marca el punto y traza la recta.

---

## 4. Ejercicios Resueltos

<EjercicioResuelto titulo="Ejercicio 1: Encontrar la función a partir de dos puntos (Modelo de Costos)">

Un agrónomo sabe que si produce $10$ litros de biofertilizante, su costo es de $\$35.000$. Si produce $30$ litros, su costo sube a $\$75.000$. Suponiendo un comportamiento lineal, encuentre la función de costo $C(x)$.

**Desarrollo:**
Tenemos dos pares ordenados: $(x_1, y_1) = (10, 35000)$ y $(x_2, y_2) = (30, 75000)$.

**Paso 1: Calcular la pendiente ($m$)**
La fórmula de la pendiente entre dos puntos es $m = \frac{y_2 - y_1}{x_2 - x_1}$.
$$ m = \frac{75000 - 35000}{30 - 10} = \frac{40000}{20} = 2000 $$
Esto significa que el costo variable es de $\$2.000$ por cada litro extra.

**Paso 2: Encontrar el coeficiente de posición ($n$)**
Tomamos la ecuación general $y = mx + n$, reemplazamos la $m$ que acabamos de hallar y elegimos cualquiera de los dos puntos (ej. el primero: $x=10, y=35000$):
$$ 35000 = 2000(10) + n $$
$$ 35000 = 20000 + n $$
$$ n = 35000 - 20000 = 15000 $$
El costo fijo es $\$15.000$.

**Respuesta:** La función de costo es **$C(x) = 2000x + 15000$**.
</EjercicioResuelto>