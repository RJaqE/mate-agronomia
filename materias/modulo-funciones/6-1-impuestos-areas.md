# 6.1 Modelación de Impuestos y Áreas

Modelar una situación real es traducirla a una expresión matemática (una función o una ecuación) que represente sus variables. Con ese modelo podemos predecir comportamientos, calcular valores futuros o encontrar el punto óptimo (el máximo o el mínimo).

> **Cómo usar esta página:** cada ejemplo está plegado. Haz clic en el título para desplegar la resolución completa, con tablas de valores y gráficas.

---

## 1. Pasos generales para modelar

Casi todos los problemas de aplicación matemática siguen este mismo esquema lógico:

1. **Identificar las variables:** Asigna una letra a cada cantidad que cambia (ej. $x$ para distancia, $t$ para tiempo).
2. **Escribir la relación:** Usa fórmulas conocidas (área, volumen, precio por unidad, teorema de Pitágoras).
3. **Reducir a una sola variable:** Si el modelo tiene dos variables, usa un dato del problema (un volumen fijo, un perímetro) para eliminar una de ellas.
4. **Determinar el dominio:** Las restricciones físicas o económicas (longitudes siempre positivas, cantidades enteras, tiempos limitados) restringen el dominio puramente matemático.
5. **Analizar y responder:** Calcula lo que se pide (un valor, un máximo, un mínimo) y verifica que tenga sentido en el contexto real.

---

## 2. Modelación de Impuestos y Precios

Las funciones lineales sirven perfectamente para modelar impuestos y costos proporcionales. Un error frecuente es confundir el valor neto con el valor total pagado.

* **IVA (Impuesto sobre el valor neto):** Si el impuesto es del $19\%$ y $x$ es el valor **sin** impuesto (neto):
  $$ T(x) = \frac{19}{100} \cdot x = 0{,}19x \qquad (x > 0) $$
* **Precio final (con el impuesto incluido):** Si $P$ es el precio final que paga el cliente:
  $$ P(x) = x + 0{,}19x = 1{,}19x $$

<details>
<summary><strong>Ejemplo 2.1 · Calcular el IVA desde el precio neto y desde el precio final</strong></summary>

**Enunciado.** Un artículo agrícola cuesta $\$200$ sin IVA. Calcule el impuesto. Luego suponga que $\$200$ es el precio final pagado (con IVA incluido) por otro insumo y calcule su valor neto y su impuesto.

**Parte A: Precio original sin IVA (Neto = 200).**
Usamos la función del impuesto $T(x)=0{,}19x$:
$$ T(200) = 0{,}19 \cdot 200 = 38 $$
El impuesto es $\$38$, y el precio final a pagar es $200+38 = \$238$.

**Parte B: Precio original con IVA incluido (Total = 200).**
Ahora conocemos el precio total $P=200$, que equivale a $1{,}19x$, y queremos descubrir el neto $x$:
$$ 200 = 1{,}19x \implies x = \frac{200}{1{,}19} \approx 168{,}07 $$
El valor neto es aproximadamente $\$168{,}07$. El impuesto cobrado es la diferencia:
$$ T = 200 - 168{,}07 = 31{,}93 $$
*(Observa que el impuesto NO es $38$ en este caso, porque el $19\%$ se calcula sobre un neto más pequeño).*

**Tabla comparativa.**

| Situación | Valor neto $x$ | Impuesto $T$ | Precio final pagado |
|:---|:---:|:---:|:---:|
| Se cobran $\$200$ sin IVA | $\$200$ | $\$38$ | $\$238$ |
| Se pagan $\$200$ con IVA incluido | $\approx \$168{,}07$ | $\approx \$31{,}93$ | $\$200$ |

<GraficoFuncion
  titulo="T(x) = 0,19x  (Cálculo del impuesto según el valor neto)"
  expresion="0.19*x"
  :x-min="0" :x-max="300" :y-min="0" :y-max="60"
  :puntos="[
    { x: 200, y: 38, label: 'Neto 200 → Impuesto 38' }
  ]"
/>
</details>

---

## 3. Modelación de Áreas y Geometría

A menudo, el área de una figura geométrica depende de dos variables (largo y ancho). El objetivo matemático es usar los datos del problema para escribir esa área dependiendo de **una sola variable**, permitiendo así graficarla y buscar su punto máximo.

<details>
<summary><strong>Ejemplo 3.1 · Área de un rectángulo inscrito en una elipse</strong></summary>

**Enunciado.** Considere un rectángulo inscrito en la elipse $9x^2+4y^2=36$. Sea $z$ la distancia entre el centro y un lado vertical del rectángulo. Determine el área del rectángulo en función de $z$, expresando claramente su dominio de validez.

**Paso 1: Longitudes de los lados.**
Por la simetría de la figura en el plano, el rectángulo tiene un ancho total de $2z$ y una altura de $2y$.
* Área = $\text{base} \times \text{altura} = (2z) \cdot (2y) = 4zy$.

**Paso 2: Eliminar la variable $y$.**
El vértice superior del rectángulo choca con la elipse, por lo que debe cumplir su ecuación: $9z^2+4y^2=36$. Despejamos $y$:
$$
\begin{aligned}
4y^2 &= 36-9z^2 \\
y^2 &= \frac{36-9z^2}{4} = \frac{9}{4}(4-z^2) \\
y &= \frac{3}{2}\sqrt{4-z^2} \qquad \text{(tomamos raíz positiva porque es una distancia)}
\end{aligned}
$$

**Paso 3: Área en función de $z$.**
Reemplazamos $y$ en la fórmula del área original:
$$ A(z) = 4z \cdot \left(\frac32\sqrt{4-z^2}\right) = 6z\sqrt{4-z^2} $$

**Paso 4: Dominio (Restricciones).**
* $z > 0$ (es una distancia física).
* El interior de la raíz debe ser positivo: $4-z^2 > 0 \implies z^2 < 4 \implies z < 2$.
Por lo tanto, el dominio es un intervalo abierto: $D_A = \,]0,\,2[\,$.

<GraficoFuncion
  titulo="A(z) = 6z√(4 − z²)  (Área máxima ocurre en z = √2)"
  expresion="6*x*Math.sqrt(4 - x*x)"
  dominio="]0, 2["
  :x-min="0" :x-max="2.5" :y-min="0" :y-max="14"
  :puntos="[
    { x: 1.4142, y: 12, label: 'Área Máxima (√2, 12)' }
  ]"
/>
</details>