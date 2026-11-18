# 5.3 Ecuaciones e Inecuaciones Exponenciales y Logarítmicas

Una **ecuación logarítmica** tiene una o más incógnitas dentro de un logaritmo. Una **ecuación exponencial** tiene la incógnita en un exponente.

> **Regla de oro (Restricciones):** Antes de resolver ecuaciones logarítmicas, revisa los dominios: el argumento de un logaritmo debe ser **estrictamente positivo** ($>0$), y la base debe ser positiva y distinta de $1$. Las soluciones que no cumplen las restricciones se descartan al final.

---

## 1. Ecuaciones

**Estrategia típica para logaritmos.**
1. Escribir las restricciones (argumentos $>0$).
2. Usar las propiedades para juntar los logaritmos en uno solo.
3. Igualar los argumentos (si las bases son iguales) o usar la definición para pasar a exponencial.
4. Resolver la ecuación algebraica resultante y verificar contra las restricciones.

<details>
<summary><strong>Ejemplo 1.1 · Resolver log(x−2) + log(x+1) + 1 = log 40</strong></summary>

**Enunciado.** Resuelva la ecuación $\log(x-2) + \log(x+1) + 1 = \log 40$.

**Paso 1: restricciones.** Los argumentos deben ser positivos:
$$
\begin{aligned}
x-2 &> 0 \implies x>2 \\
x+1 &> 0 \implies x>-1
\end{aligned}
$$
Ambas se cumplen si $x>2$. El conjunto de restricción es $]2,+\infty[$.

**Paso 2: escribir el $1$ como logaritmo.** Como el logaritmo es de base $10$, $1=\log 10$:
$$ \log(x-2)+\log(x+1)+\log 10 = \log 40 $$

**Paso 3: juntar los logaritmos.** Con la propiedad del producto:
$$ \log\big((x-2)(x+1)\cdot 10\big) = \log 40 $$

**Paso 4: igualar los argumentos.** 
$$ 10(x-2)(x+1) = 40 $$

**Paso 5: resolver la ecuación algebraica.**
$$
\begin{aligned}
(x-2)(x+1) &= 4 \\
x^2 - x - 2 &= 4 \\
x^2 - x - 6 &= 0 \\
(x-3)(x+2) &= 0
\end{aligned}
$$
Entonces $x=3$ o $x=-2$.

**Paso 6: verificar restricciones.** $x=-2$ no cumple $x>2$, así que se descarta. $x=3$ sí cumple.

**Conclusión.** La única solución es $x=3$.
</details>

<details>
<summary><strong>Ejemplo 1.2 · Ecuación exponencial reducida a cuadrática</strong></summary>

**Enunciado.** Resuelva la ecuación exponencial $4^x - 20\cdot 2^x + 64 = 0$.

**Paso 1: reescribir $4^x$.** Como $4=2^2$, entonces $4^x=(2^x)^2$.
$$ (2^x)^2 - 20\cdot 2^x + 64 = 0 $$

**Paso 2: variable auxiliar.** Sea $u=2^x$ (siempre $u>0$):
$$ u^2 - 20u + 64 = 0 $$

**Paso 3: factorizar.** Dos números que multipliquen $64$ y sumen $-20$:
$$ (u-16)(u-4) = 0 \implies u=16 \quad\text{o}\quad u=4 $$

**Paso 4: volver a $x$.**
* $2^x=16=2^4 \implies x=4$.
* $2^x=4=2^2 \implies x=2$.

**Verificación.** Con $x=2$: $4^2-20\cdot 2^2+64 = 16-80+64=0$ ✓. Con $x=4$: $4^4-20\cdot 2^4+64 = 256-320+64=0$ ✓.
</details>

---

## 2. Inecuaciones

Al resolver una inecuación con logaritmos o exponenciales, la **base** decide el sentido de la desigualdad:
* **Base mayor que $1$:** la función es creciente, así que la desigualdad **conserva** su sentido.
* **Base entre $0$ y $1$:** la función es decreciente, así que la desigualdad **se invierte**.

<details>
<summary><strong>Ejemplo 2.1 · Resolver log_{1/2}(x²−1) ≤ 2 (Invirtiendo desigualdad)</strong></summary>

**Enunciado.** Resuelva $\log_{\frac12}(x^2-1)\leq 2$.

**Paso 1: restricciones.** El argumento debe ser positivo:
$$ x^2-1>0 \iff |x|>1 \iff x\in\,]-\infty,-1[\,\cup\,]1,+\infty[ $$

**Paso 2: despejar.** La base $\frac12$ está entre $0$ y $1$, así que la función es **decreciente**: al pasar a exponentes, **la desigualdad se invierte**.
$$
\begin{aligned}
\log_{\frac12}(x^2-1) &\leq 2 \\
x^2-1 &\geq \left(\tfrac12\right)^2 \qquad \text{(invertimos la desigualdad)} \\
x^2-1 &\geq \tfrac14 \\
x^2 &\geq \tfrac54 \\
|x| &\geq \tfrac{\sqrt5}{2}
\end{aligned}
$$

**Paso 3: intersectar.** $\frac{\sqrt5}{2}\approx 1{,}118>1$, así que la condición $|x|\geq \frac{\sqrt5}{2}$ ya cumple con la restricción inicial $|x|>1$.
$$ S = \,]-\infty,\,-\tfrac{\sqrt5}{2}\,]\ \cup\ [\,\tfrac{\sqrt5}{2},\,+\infty[ $$

<GraficoFuncion
  titulo="f(x) = log_{1/2}(x² − 1)  (corte con y = 2 en x = ±√5/2)"
  expresion="Math.log(x*x - 1)/Math.log(0.5)"
  :dominio="[']-4, -1[', ']1, 4]']"
  :x-min="-4" :x-max="4" :y-min="-4" :y-max="4"
  :puntos="[
    { x: -1.118, y: 2, label: '(−√5/2, 2)' },
    { x: 1.118, y: 2, label: '(√5/2, 2)' }
  ]"
/>
</details>

<details>
<summary><strong>Ejemplo 2.2 · Resolver dos desigualdades encadenadas</strong></summary>

**Enunciado.** Resuelva $\log_{\frac13}\!\big(\log_5(x^2-4)\big)>2$.

**Paso 1: restricciones.** 
* Argumento interior: $x^2-4>0$.
* Argumento exterior: $\log_5(x^2-4)>0 \implies x^2-4>5^0 \implies x^2-4>1 \implies x^2>5$. Esta es más restrictiva.

**Paso 2: despejar el logaritmo exterior.** Base $\frac13$ (entre 0 y 1), se **invierte**:
$$ \log_5(x^2-4) < \left(\tfrac13\right)^2 = \tfrac19 $$

**Paso 3: despejar el logaritmo interior.** Base $5$ (mayor a 1), se **conserva**:
$$
\begin{aligned}
x^2-4 &< 5^{1/9} \\
x^2 &< 4+5^{1/9}
\end{aligned}
$$

**Paso 4: intersectar.** Juntamos las restricciones $x^2>5$ con $x^2<4+5^{1/9}$:
$$ 5 < x^2 < 4+5^{1/9} $$

Por lo tanto (recordando que son tanto las raíces positivas como negativas):
$$ S = \,]-\sqrt{4+5^{1/9}},\,-\sqrt5\,[\ \cup\ ]\,\sqrt5,\ \sqrt{4+5^{1/9}}\,[ $$
</details>

<details>
<summary><strong>Ejemplo 2.3 · Inecuación con base variable</strong></summary>

**Enunciado.** Resuelva $\log_{3x}(9x)+\log_3(x^3)\leq 2$.

**Paso 1: restricciones.**
* Argumentos: $9x>0$ y $x^3>0 \implies x>0$.
* Base $3x$: $3x>0$ y $3x\neq 1 \implies x\neq\frac13$.
Entonces $x\in\,]0,\tfrac13[\ \cup\ ]\tfrac13,+\infty[$.

**Paso 2: sustitución.** Sea $u=\log_3 x$.
* $\log_3(9x) = \log_3(9)+\log_3(x) = 2+u$.
* $\log_3(3x) = 1+u$. 
* Por cambio de base: $\log_{3x}(9x)=\dfrac{2+u}{1+u}$.
* $\log_3(x^3)=3u$.

La desigualdad queda:
$$ \frac{2+u}{1+u}+3u\leq 2 $$

**Paso 3: juntar en una fracción.** Restamos $2$:
$$
\begin{aligned}
\frac{2+u+3u(1+u)-2(1+u)}{1+u} &\leq 0 \\
\frac{3u^2+2u}{1+u} &\leq 0 \\
\frac{u(3u+2)}{1+u} &\leq 0
\end{aligned}
$$

**Paso 4: resolver para $u$.** Puntos críticos en $-1, -2/3, 0$. Por análisis de signos, la solución en $u$ es:
$$ u<-1 \quad\text{o}\quad -\tfrac23\leq u\leq 0 $$

**Paso 5: volver a $x$.** Como $u=\log_3 x \implies x=3^u$:
* Si $u<-1$: $x<3^{-1}=\frac13$.
* Si $-\frac23\leq u\leq 0$: $3^{-2/3}\leq x\leq 1$.

**Paso 6: intersectar con restricciones ($x>0, x\neq 1/3$).**
$$ S = \,]0,\tfrac13[\ \cup\ \big[\,3^{-2/3},\ 1\,\big] $$

<GraficoFuncion
  titulo="f(x) = log_{3x}(9x) + log₃(x³)  (cumple ≤ 2 en S)"
  expresion="Math.log(9*x)/Math.log(3*x) + Math.log(x*x*x)/Math.log(3)"
  :dominio="[']0, 0.3333[', ']0.3333, 1.2]']"
  :x-min="0" :x-max="1.2" :y-min="-6" :y-max="6"
  :puntos="[
    { x: 1, y: 2, label: '(1, 2)' },
    { x: 0.4807, y: 2, label: '(3^(−2/3), 2)' }
  ]"
/>
</details>

<br>
<hr>
<br>

## 3. Resumen y Evaluación

| Concepto | Lo importante |
|:---|:---|
| **Exponencial $a^x$** | Creciente si $a>1$, decreciente si $0<a<1$, siempre positiva |
| **Logaritmo $\log_a x$** | Inversa de $a^x$; dominio $]0,+\infty[$; recorrido $\mathbb{R}$ |
| **Cambio de base** | $\log_b x=\dfrac{\log_a x}{\log_a b}$ |
| **Restricciones** | Argumentos de los logaritmos siempre positivos; base positiva y distinta de $1$ |
| **Inecuaciones** | Si la base está entre $0$ y $1$, la desigualdad se **invierte** al quitar el logaritmo |

<EvaluacionModulo 
  titulo="Test Integrador: Funciones Trascendentes"
  :preguntas="[
    {
      pregunta: 'De acuerdo con el Teorema del Cambio de Base, ¿cuál de las siguientes igualdades es la correcta para transformar un logaritmo de base b a base a?',
      opciones: [
        'log_b(x) = log_a(x) * log_a(b)',
        'log_b(x) = log_a(x) / log_a(b)',
        'log_b(x) = log_x(a) / log_b(a)',
        'log_b(x) = log_a(x) - log_a(b)'
      ],
      correcta: 'log_b(x) = log_a(x) / log_a(b)',
      explicacion: 'El teorema del cambio de base permite calcular logaritmos en cualquier base dividiendo el logaritmo del argumento por el logaritmo de la antigua base, usando una nueva base común.'
    },
    {
      pregunta: '¿Cuál es el valor exacto de log₂(8)?',
      opciones: [
        '2',
        '3',
        '4',
        '8'
      ],
      correcta: '3',
      explicacion: 'El logaritmo busca el exponente. 2 elevado a qué número da 8? Como 2³ = 8, entonces log₂(8) = 3.'
    },
    {
      pregunta: 'Al resolver una inecuación logarítmica, ¿qué sucede si la base del logaritmo es 0.5 (es decir, está entre 0 y 1)?',
      opciones: [
        'La inecuación no tiene solución real.',
        'El sentido de la desigualdad se conserva exactamente igual.',
        'El sentido de la desigualdad se invierte (de mayor cambia a menor, y viceversa).',
        'El resultado siempre es negativo.'
      ],
      correcta: 'El sentido de la desigualdad se invierte (de mayor cambia a menor, y viceversa).',
      explicacion: 'Las funciones exponenciales y logarítmicas con base entre 0 y 1 son estrictamente decrecientes. Por lo tanto, al aplicar o quitar el logaritmo/exponencial, el orden se invierte.'
    },
    {
      pregunta: '¿Cuál es el primer paso OBLIGATORIO antes de resolver cualquier ecuación o inecuación logarítmica?',
      opciones: [
        'Multiplicar todo por 10.',
        'Factorizar el polinomio.',
        'Determinar el dominio, exigiendo que todos los argumentos de los logaritmos sean estrictamente mayores a cero.',
        'Cambiar todas las bases a base 10.'
      ],
      correcta: 'Determinar el dominio, exigiendo que todos los argumentos de los logaritmos sean estrictamente mayores a cero.',
      explicacion: 'Si no determinas las restricciones iniciales, podrías obtener soluciones matemáticas ("soluciones falsas") que al reemplazarlas generen el logaritmo de un número negativo, lo cual no existe en los reales.'
    }
  ]"
/>