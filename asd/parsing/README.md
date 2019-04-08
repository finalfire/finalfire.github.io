# Manipolazione di stringhe e parserizzazione dell'input in C++: un (piccolissimo) tutorial

Lo scopo del seguente documento è fornire un *quick'n'dirty* tutorial sulla manipolazione e parserizzazione di stringhe in C++.
Il tutorial è diviso in due parti:

* **manipolazione**: come definire, utilizzare e modificare istanze della classe `string`;
* **parserizzazione**: come parserizzare (*to parse*) del contenuto informativo rappresentato da stringhe.

Ovviamente questo documento non è (e non vuole essere) *esplicativo*. Tutti i concetti presentati **dovrebbero** (è consigliato farlo, NdR) essere integrati con delle ricerche personali e/o valutative.
Due siti consigliati: [https://en.cppreference.com/w/](cpprefernce.com) e [http://www.cplusplus.com/reference/](cplusplus.com). Per chi preferisce il cartaceo, consiglio il libro Stroustrup, B. *The C++ programming language*. Pearson Education, 2013.

## La classe `string`

Inclusa con `#include <string>`, rappresenta una stringa (e.g., sequenza di simboli).