# Classi Point2D e TimeSeries

Si vuole creare un programmino in `C++` per generare, manipolare e analizzare delle serie temporali (_time series_). Una serie temporale può essere espressa come una sequenza di punti in uno spazio 2D. Per esempio, la seguente sequenza

```
(0,23), (1,42), (2,-3), (3,11), (4,5)
```

rappresenta una serie temporale di 5 osservazioni (dall'istante temporale 0 all'istante temporale 4). La sua rappresentazione visuale è la seguente:

![](timeseries.png)

Il programmino deve permettere di:

- creare e manipolare dei punti in 2D,
- creare e manipolare una serie temporale,
- effettuare diverse analisi su di una serie temporale.

L'implementazione è distinta in diverse parti (da fare insieme a tutoraggio oppure da soli) e non tutte le parti sono _attualmente_ disponibili. Saranno disponibili man mano durante gli incontri di tutoring.

## Parte 1: la classe Point2D.h

La classe `Point2D` modella un punto in 2D. Nello specifico, un punto `p` è rappresentato da due coordinate `(x,y)`. In questa implementazione, `x` è una coordinata intera, mentre `y` può essere definita come intera o razionale (`float` o `double`).