# 6.3 Composición y Aplicaciones Complejas

El poder definitivo de la modelación aparece cuando debemos anidar diferentes modelos matemáticos. Esto ocurre en la vida real cuando una variable A depende de la variable B, y la variable B depende de una variable C. 

Para resolverlo, utilizamos el concepto de **composición de funciones**, sustituyendo una ecuación dentro de la otra.

> **Cómo usar esta página:** cada ejemplo está plegado. Haz clic en el título para desplegar la resolución completa.

---

<details>
<summary><strong>Ejemplo 1.1 · Modelación con Composición: El Equilibrista</strong></summary>

**Enunciado.** Un equilibrista comienza a bajar por una cuerda tensada inclinada desde el punto más alto de un poste, moviéndose a una velocidad constante de $1{,}5$ pies por segundo. El poste mide $40$ pies de alto, el extremo inferior de la cuerda está anclado a $2$ pies sobre el suelo, y la distancia horizontal entre la base del poste y el anclaje es de $50$ pies. 
Exprese la altura exacta $h$ del equilibrista sobre el suelo como una función dependiente del tiempo $t$.

**Paso 1: Función de la distancia sobre la cuerda (Distancia vs Tiempo).**
Por física elemental (Movimiento Rectilíneo Uniforme), la distancia es velocidad por tiempo.
$$ d(t) = v \cdot t = 1{,}5t $$

**Paso 2: Calcular el largo total de la cuerda ($L$).**
Tenemos un triángulo rectángulo formado por la cuerda, el poste (descontando los 2 pies del suelo) y el ancho. Cateto horizontal = $50$. Cateto vertical = $40-2=38$.
$$ L = \sqrt{50^2 + 38^2} = \sqrt{2500 + 1444} = \sqrt{3944} = 2\sqrt{986} \approx 62{,}8\text{ pies} $$

**Paso 3: Relación de Semejanza de Triángulos (Altura vs Distancia).**
Los triángulos formados por la posición del equilibrista y la cuerda total son semejantes (comparten ángulos). 
Relacionamos la altura que ha bajado el equilibrista con la distancia que ha caminado:
$$ \frac{38}{40-h} = \frac{L}{d} $$

**Paso 4: Despejar la Altura $h(d)$.**
$$
\begin{aligned}
38d &= (40-h)L \\
38d &= 40L - hL \\
hL &= 40L - 38d \\
h(d) &= 40 - \frac{38d}{L}
\end{aligned}
$$
Sustituyendo el valor exacto de $L = 2\sqrt{986}$:
$$ h(d) = 40 - \frac{19d}{\sqrt{986}} $$

**Paso 5: La Composición $h(t) = (h \circ d)(t)$.**
Tenemos $h(d)$ y tenemos $d(t)$. Las fusionamos, sustituyendo la distancia $d$ por la fórmula de tiempo $1{,}5t$:
$$ h(t) = 40 - \frac{19(1{,}5t)}{\sqrt{986}} = 40 - \frac{28{,}5t}{\sqrt{986}} \approx 40 - 0{,}9076t $$

**Paso 6: Dominio (Restricciones Temporales).**
La función es válida solo mientras el equilibrista esté en la cuerda. Su recorrido termina cuando su altura es igual a $2$ pies.
$$ 40 - 0{,}9076t = 2 \implies 38 = 0{,}9076t \implies t \approx 41{,}86\text{ segundos} $$
El dominio es $t \in [0,\, 41{,}86]$.

<GraficoFuncion
  titulo="h(t) = 40 − 28,5t/√986  (Altura del equilibrista en el tiempo)"
  expresion="40 - 28.5*x/Math.sqrt(986)"
  dominio="[0, 41.86]"
  :x-min="0" :x-max="45" :y-min="0" :y-max="42"
  :puntos="[
    { x: 0, y: 40, label: 'Poste Inicial (0s, 40 pies)' },
    { x: 41.86, y: 2, label: 'Llega al fin de la cuerda (41,86s, 2 pies)' }
  ]"
/>
</details>

<br>
<hr>
<br>

## 2. Resumen y Evaluación Final

| Problema Típico | Variable Principal | Relación Clave | Restricción del Dominio |
|:---|:---|:---|:---|
| **Impuesto (IVA)** | Valor neto $x$ | $T=0{,}19x$ ; $P=1{,}19x$ | $x > 0$ |
| **Caja con Volumen Fijo** | Lado de la base $x$ | $V = x^2y = 252$ | Físicas y de material ($x > 0$) |
| **Movimientos (Composición)**| Tiempo $t$ | Composición $h \circ d$ | Cuando termina el recorrido |

**La Regla de Oro del Modelaje:** Un buen modelo no solo arroja resultados precisos; también especifica claramente sus propios límites. Las restricciones del Dominio son la conexión que evita que las matemáticas arrojen resultados físicamente absurdos.

<EvaluacionModulo 
  titulo="Evaluación Final: Modelación Matemática y Aplicaciones"
  :preguntas="[
    {
      pregunta: 'Al modelar el área de un terreno rectangular donde el perímetro fijo es de 100 metros (Perímetro = 2x + 2y = 100), ¿cuál sería la función correcta del Área A(x) dependiente solo del lado x?',
      opciones: [
        'A(x) = 100x - x²',
        'A(x) = 50x + x²',
        'A(x) = x(50 - x)',
        'A(x) = x(100 - x)'
      ],
      correcta: 'A(x) = x(50 - x)',
      explicacion: 'Despejando y del perímetro: 2y = 100 - 2x -> y = 50 - x. Como Área = x * y, reemplazamos quedando A(x) = x(50 - x).'
    },
    {
      pregunta: 'Si el precio final pagado por un artículo (con IVA del 19% ya incluido) es de $119, ¿cuál era su valor neto sin impuesto?',
      opciones: [
        '$100',
        '$19',
        '$119',
        '$96.39'
      ],
      correcta: '$100',
      explicacion: 'El precio final es P(x) = 1.19x. Si 119 = 1.19x, entonces x = 119 / 1.19 = 100. El valor neto es $100 y el impuesto $19.'
    },
    {
      pregunta: 'Al modelar el costo de construcción de una caja agrícola, encontramos que su fórmula es C(x) = 7x² + 3024/x. ¿Por qué el dominio matemático válido NUNCA puede incluir el cero o números negativos?',
      opciones: [
        'Porque la función es cuadrática y las cuadráticas solo admiten dominios positivos.',
        'Porque la variable x representa la dimensión física de la base de la caja (longitud en cm), la cual debe ser estrictamente mayor que cero en el mundo real.',
        'Porque si x = 0 el costo sería de cero pesos.',
        'Porque el volumen fijado al inicio era 252.'
      ],
      correcta: 'Porque la variable x representa la dimensión física de la base de la caja (longitud en cm), la cual debe ser estrictamente mayor que cero en el mundo real.',
      explicacion: 'Un modelo matemático aplicado debe someterse a las reglas de la física; no existen cajas con bases de longitud cero o negativa. Además, matemáticamente x=0 generaría una división por cero (3024/0).'
    },
    {
      pregunta: '¿Cuál es el paso clave o eslabón que permite transformar una función de Área con dos variables (Base x Altura) en un modelo optimizable de una sola variable?',
      opciones: [
        'Calcular inmediatamente la recta tangente.',
        'Elevar ambas variables al cuadrado.',
        'Buscar un dato fijo o constante del problema (como un volumen estricto o un perímetro limitante) para despejar una variable en términos de la otra.',
        'Graficar la función asumiendo que ambas variables valen lo mismo.'
      ],
      correcta: 'Buscar un dato fijo o constante del problema (como un volumen estricto o un perímetro limitante) para despejar una variable en términos de la otra.',
      explicacion: 'Para optimizar matemáticamente, debes llevar tu ecuación a una sola incógnita sustituyendo el dato duro que restringe el sistema (como V=252 cm³ en la caja).'
    }
  ]"
/>