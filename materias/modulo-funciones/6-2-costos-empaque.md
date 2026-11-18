# 6.2 Modelación de Costos de Empaque

Uno de los problemas más clásicos e importantes en operaciones agroindustriales es la minimización de costos logísticos y de embalaje.

Cuando un objeto tridimensional tiene dimensiones desconocidas pero debe cumplir con un **volumen fijo** (por requerimientos del producto), ese dato de volumen nos permite eliminar una variable espacial. Así, logramos que la función de costo dependa de una sola dimensión, abriendo la puerta a la optimización matemática.

> **Cómo usar esta página:** cada ejemplo está plegado. Haz clic en el título para desplegar la resolución completa.

---

<details>
<summary><strong>Ejemplo 1.1 · Minimizar el costo de una caja de embalaje con volumen de 252 cm³</strong></summary>

**Enunciado.** Se desea construir una caja con tapa, de base cuadrada, para embalaje de frutas de exportación. El volumen interior debe ser estrictamente de $252\text{ cm}^3$, y el área de la base no puede superar los $100\text{ cm}^2$ por normativas de pallets. Los costos de los materiales son:
* Tapa: $\$2$ por $\text{cm}^2$.
* Base: $\$5$ por $\text{cm}^2$ (material reforzado).
* Lados (las 4 caras): $\$3$ por $\text{cm}^2$.

Exprese el costo total de la caja $C$ como función del lado de la base $x$, determine su dominio y encuentre el costo mínimo.

**Paso 1: Definir variables.**
* Sea $x$ el lado de la base cuadrada (en cm).
* Sea $y$ la altura de la caja (en cm).

**Paso 2: Calcular el costo de cada pieza por separado.**
* **Tapa:** Es un cuadrado de lado $x$. Su área es $x^2$. Como cuesta $\$2$, su costo es **$2x^2$**.
* **Base:** Es un cuadrado de lado $x$. Su área es $x^2$. Como cuesta $\$5$, su costo es **$5x^2$**.
* **Lados:** Son cuatro rectángulos idénticos, cada uno con base $x$ y altura $y$. El área de los cuatro juntos es $4(xy)$. Como cuestan $\$3$, su costo es $3 \cdot (4xy) =$ **$12xy$**.

**Paso 3: Sumar el costo total de la caja.**
$$ C = 2x^2 + 5x^2 + 12xy = 7x^2 + 12xy $$
Esta función tiene dos variables ($x$ e $y$). Necesitamos eliminar la $y$.

**Paso 4: Eliminar $y$ utilizando el dato de volumen fijo.**
El volumen de un prisma es "Área de la base $\times$ altura".
$$ V = x^2 \cdot y = 252 $$
Despejamos $y$:
$$ y = \frac{252}{x^2} $$

**Paso 5: Obtener la función final de costo $C(x)$.**
Sustituimos la $y$ que acabamos de despejar en la ecuación de costo:
$$
\begin{aligned}
C(x) &= 7x^2 + 12x \left(\frac{252}{x^2}\right) \\
C(x) &= 7x^2 + \frac{3024}{x}
\end{aligned}
$$

**Paso 6: Determinar el Dominio (restricciones físicas).**
Hay dos restricciones lógicas en el problema:
1. Las longitudes no pueden ser cero ni negativas: $x > 0$.
2. El área de la base no supera los $100\text{ cm}^2$: $x^2 \leq 100 \implies x \leq 10$.
Por lo tanto, el dominio válido es $D_C = \,]0,\,10]$.

**Paso 7: Tabla de valores y búsqueda del mínimo.**
Evaluamos distintos tamaños de base dentro del dominio válido:

| $x$ (Lado de base en cm) | $2$ | $4$ | $6$ | $8$ | $10$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $y$ (Altura requerida) | $63$ | $15{,}75$ | $7$ | $3{,}94$ | $2{,}52$ |
| $C(x)$ (Costo total en \$) | $\$1540$ | $\$868$ | $\$756$ | $\$826$ | $\$1002{,}4$ |

La tabla muestra claramente un comportamiento cuadrático: el costo baja a medida que la base crece, alcanza un valle, y vuelve a subir cuando la base se hace demasiado grande. El mínimo costo aparente es $\$756$, que ocurre cuando la base mide $6\text{ cm}$.

<GraficoFuncion
  titulo="C(x) = 7x² + 3024/x  (El costo mínimo óptimo se da en x = 6)"
  expresion="7*x*x + 3024/x"
  dominio="[2, 10]"
  :x-min="2" :x-max="10" :y-min="0" :y-max="1600"
  :puntos="[
    { x: 6, y: 756, label: 'Costo Mínimo (6cm, $756)' },
    { x: 2, y: 1540, label: '(2cm, $1540)' },
    { x: 10, y: 1002.4, label: '(10cm, $1002,4)' }
  ]"
/>

**Conclusión Operativa.**
La caja más económica que cumple con la exigencia de contener exactamente $252\text{ cm}^3$ de volumen y no exceder los topes de tamaño debe tener una base cuadrada de **$6 \times 6\text{ cm}$** y una altura de **$7\text{ cm}$**. Producir esta caja específica minimizará los gastos de la empresa, costando exactamente **$\$756$** por unidad.

</details>