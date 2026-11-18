# 3.3 Composición por Tramos y Evaluación

Componer funciones definidas por tramos es el nivel más avanzado de esta unidad, porque debes verificar qué regla se aplica dependiendo de los resultados intermedios.

---

## 1. El Método para Funciones por Tramos

Cuando $f$ y $g$ tienen múltiples reglas condicionadas (tramos), no basta con meter la $x$ en una fórmula. Debes rastrear el "viaje" del número:
1. ¿En qué tramo de $f$ cae la $x$ inicial?
2. ¿Qué valor $f(x)$ produce ese tramo?
3. Sabiendo el valor de $f(x)$, ¿en qué tramo de $g$ encaja ese resultado?

<details>
<summary><strong>Ejemplo 1.1 · Composición compleja g∘f con reglas condicionadas</strong></summary>

**Enunciado.** Sean:
$$
f(x)=\begin{cases}\sqrt{x-1} & \text{si } x>1 \\ x^3 & \text{si } x\le 1\end{cases}
\qquad
g(x)=\begin{cases} x^2 & \text{si } x>0 \\ 2x+1 & \text{si } x\le 0\end{cases}
$$
Determine la función compuesta $(g\circ f)(x)$.

**Paso 1: Analizar el Caso A ($x>1$).**
* Si $x>1$, la primera máquina usa la regla $f(x) = \sqrt{x-1}$.
* Como la raíz cuadrada de números mayores a $1$ siempre da resultados **positivos**, el número $f(x)$ que entra a la segunda máquina es positivo ($>0$).
* Por lo tanto, la segunda máquina $g$ usará obligatoriamente su regla de los positivos ($g(u) = u^2$).
* *Composición del Caso A:* $(g\circ f)(x) = \left(\sqrt{x-1}\right)^2 = x-1$.

**Paso 2: Analizar el Caso B ($x\le 1$).**
* Si $x\le 1$, la primera máquina usa la regla $f(x) = x^3$.
* Aquí el resultado $x^3$ podría ser positivo o negativo, dependiendo de la $x$. Debemos dividir este caso en dos sub-casos para saber qué regla usará $g$:
  * **Sub-caso B1 (si $x^3 > 0$, o sea $0 < x \le 1$):** El resultado es positivo, así que $g$ usa su regla $u^2$.
    *Composición:* $(g\circ f)(x) = (x^3)^2 = x^6$.
  * **Sub-caso B2 (si $x^3 \le 0$, o sea $x \le 0$):** El resultado es negativo, así que $g$ usa su regla $2u+1$.
    *Composición:* $(g\circ f)(x) = 2(x^3)+1 = 2x^3+1$.

**Resultado Final Consolidado:**
Juntando las tres ramas que descubrimos, la función compuesta final queda así:
$$
(g\circ f)(x) = \begin{cases}
x-1 & \text{si } x>1 \\
x^6 & \text{si } 0<x\le 1 \\
2x^3+1 & \text{si } x\le 0
\end{cases}
$$
</details>

<br>
<hr>
<br>

## 2. Evaluación del Módulo 3

Pon a prueba tu comprensión sobre las operaciones aritméticas y la composición de funciones analizando los dominios y el orden de evaluación.

<EvaluacionModulo 
  titulo="Test de Comprobación: Álgebra y Composición"
  :preguntas="[
    {
      pregunta: 'Al calcular (f / g)(x), ¿por qué el dominio resultante excluye los valores donde g(x) = 0?',
      opciones: [
        'Porque si g(x) = 0, el numerador se anula y la función se vuelve constante.',
        'Porque en una función racional, el denominador g(x) no puede ser cero, ya que la división por cero no está definida matemáticamente.',
        'Porque f(x) siempre debe ser mayor a g(x).',
        'Porque g(x) = 0 significa que la función es impar.'
      ],
      correcta: 'Porque en una función racional, el denominador g(x) no puede ser cero, ya que la división por cero no está definida matemáticamente.',
      explicacion: 'Al dividir funciones, la segunda función pasa al denominador. Cualquier valor de x que haga cero ese denominador destruye la operación.'
    },
    {
      pregunta: 'Si f(x) = 2x y g(x) = x + 3. ¿Cuál es el resultado matemático de la composición (f ∘ g)(x)?',
      opciones: [
        '2x + 3',
        'x² + 3x',
        '2x + 6',
        '3x + 3'
      ],
      correcta: '2x + 6',
      explicacion: 'Recuerda el orden (se lee de derecha a izquierda). Primero aplicas g(x), que es (x+3). Luego metes eso dentro de f(x), quedando: 2(x+3) = 2x + 6.'
    },
    {
      pregunta: 'Utilizando las mismas funciones de la pregunta anterior, f(x) = 2x y g(x) = x + 3, ¿cuál es el resultado de la composición inversa (g ∘ f)(x)?',
      opciones: [
        '2x + 6',
        '2x + 3',
        'x + 6',
        '3x'
      ],
      correcta: '2x + 3',
      explicacion: 'Primero aplicas f(x), que es 2x. Luego metes ese 2x donde está la x en g(x), quedando simplemente: 2x + 3. Esto demuestra que la composición no es conmutativa.'
    },
    {
      pregunta: 'Para encontrar el Dominio de una función compuesta g(f(x)), ¿cuál es la regla rigurosa de las dos condiciones simultáneas?',
      opciones: [
        'El dominio final es simplemente la suma de los dominios de f y g.',
        'Solo se considera el dominio de g(x).',
        'El valor x debe pertenecer al dominio de f, y el resultado f(x) debe pertenecer al dominio de g.',
        'El resultado f(x) debe ser siempre positivo.'
      ],
      correcta: 'El valor x debe pertenecer al dominio de f, y el resultado f(x) debe pertenecer al dominio de g.',
      explicacion: 'El número x debe poder sobrevivir a la primera máquina f. Luego, el producto de esa máquina f(x) debe poder entrar sano y salvo a la segunda máquina g.'
    }
  ]"
/>