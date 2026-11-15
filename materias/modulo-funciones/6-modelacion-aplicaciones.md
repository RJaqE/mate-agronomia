# 6. Modelación Matemática y Aplicaciones

Modelar matemáticamente una situación de la vida cotidiana se refiere a identificar una expresión matemática (una función o ecuación) que represente las variables de un problema real. Esto nos permite predecir comportamientos, obtener información futura o encontrar puntos óptimos (máximos y mínimos).

En el ámbito agronómico y comercial, la modelación es fundamental para calcular costos de empaque, maximizar el área de plantación y proyectar ganancias.

## 6.1 Modelación de Costos e Impuestos
Las funciones lineales son perfectas para modelar impuestos o costos fijos.

**Ejemplo:** Si el impuesto a la venta de un artículo agrícola (IVA) es del 19%, y $x$ representa el valor neto del artículo, la función del impuesto es:
$$ T(x) = \frac{19}{100} \cdot x = 0.19x $$

Si el impuesto ya está incluido en el precio final pagado ($P$), el modelo cambia a:
$$ P(x) = x + 0.19x = 1.19x $$

## 6.2 Modelación de Áreas y Geometría
A menudo necesitamos expresar el área de un terreno en función de una sola variable para luego poder optimizarla.

<EjercicioResuelto titulo="Caso Práctico: Costo de Cajas de Empaque (Volumen Fijo)">

**Problema:**
Se desea construir una caja con tapa y base cuadrada para embalaje de frutas. Se sabe que el volumen debe ser de $252 \text{ cm}^3$. 
* El costo del material de la tapa es de $\$2 \text{ por cm}^2$.
* El costo de la base es de $\$5 \text{ por cm}^2$.
* El costo de los lados (caras laterales) es de $\$3 \text{ por cm}^2$.

Expresemos el costo total $C$ en función de la longitud del lado de la base ($x$).

**Desarrollo:**
1. Al ser base cuadrada, el área de la tapa es $x^2$ y el de la base es $x^2$. Los cuatro lados tienen área $x \cdot y$ (donde $y$ es la altura).
2. Costo de la tapa: $2x^2$
3. Costo de la base: $5x^2$
4. Costo de los 4 lados: $4 \cdot (3xy) = 12xy$

El costo total sería:
$$ C = 2x^2 + 5x^2 + 12xy = 7x^2 + 12xy $$

Como la función depende de dos variables ($x$ e $y$), usamos el dato del volumen ($V = 252$) para despejar $y$.
El volumen de la caja es área de la base por la altura:
$$ V = x^2 \cdot y = 252 \implies y = \frac{252}{x^2} $$

Reemplazamos $y$ en la función de costo:
$$ C(x) = 7x^2 + 12x \left(\frac{252}{x^2}\right) $$

Simplificando, obtenemos el modelo matemático del costo:
$$ C(x) = 7x^2 + \frac{3024}{x} $$

</EjercicioResuelto>

<br>

<QuizInteractivo 
  pregunta="Al modelar matemáticamente el área de un terreno rectangular donde se sabe que su perímetro fijo es de 100 metros (Perímetro = 2x + 2y = 100), ¿cuál sería la función correcta del Área A(x) dependiente solo del lado x?" 
  :opciones="['A(x) = 100x - x^2', 'A(x) = x(50 - x)', 'A(x) = 50x + x^2', 'A(x) = x(100 - x)']" 
  respuesta-correcta="A(x) = x(50 - x)" 
/>