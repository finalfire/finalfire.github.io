# Manipolazione di stringhe e parserizzazione dell'input in C++: un (piccolissimo) tutorial

Lo scopo del seguente documento è fornire un *quick'n'dirty* tutorial sulla manipolazione e parserizzazione di stringhe in C++.
Il tutorial è diviso in due parti:

* **manipolazione**: come definire, utilizzare e modificare istanze della classe `string`;
* **parserizzazione**: come parserizzare (*to parse*) del contenuto informativo rappresentato da stringhe.

Ovviamente questo documento non è (e non vuole essere) *esplicativo*. Tutti i concetti presentati **dovrebbero** (è consigliato farlo, NdR) essere integrati con delle ricerche personali e/o valutative.
Due siti consigliati: [https://en.cppreference.com/w/](cpprefernce.com) e [http://www.cplusplus.com/reference/](cplusplus.com). Per chi preferisce il cartaceo, consiglio il libro Stroustrup, B. *The C++ programming language*. Pearson Education, 2013.

## La classe `string`

Inclusa con `#include <string>`, rappresenta una stringa (e.g., sequenza di simboli).

````cpp
string s1;              // vuota
string s2("hello");     // "hello"
string s3(s2);          // costruttore di copia
string s4 = s2 + s3;    // concatenazione

unsigned len_s2 = s2.size();    // lunghezza (5)

char h = s2[0];         // accesso
s2[1] = 'a';            // accesso + modifica

// da string a c string
const char* s2_in_cstr = s2.c_str();

// estrarre da stream (stdin in questo caso) una stringa
string from_cin;
cin >> from_cin;

// s.substr(idx, k) estrae una sottostringa di s a partire dall'indice idx lunga k caratteri
string hello = hello_world.substr(0, 5);    // "Hello"
string world = hello_world.substr(7, 5);    // "World"

// s.find(x) restituisce l'indice della prima occorrenza di x in s
unsigned idx_comma = hello_world.find(',');     // 5
unsigned idx_world = hello_world.find(world);   // 7

````