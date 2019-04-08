# Classe `string` e parserizzazione dell'input in C++: un (piccolissimo) tutorial

Lo scopo del seguente documento è fornire un *quick'n'dirty* tutorial sulla manipolazione e parserizzazione di stringhe in C++.
Il tutorial è diviso in due parti:

* **manipolazione**: come definire, utilizzare e modificare istanze della classe `string`;
* **parserizzazione**: come parserizzare (*to parse*) del contenuto informativo rappresentato da stringhe.

Ovviamente questo documento non è (e non vuole essere) *esplicativo*. Tutti i concetti presentati **dovrebbero** (è consigliato farlo, NdR) essere integrati con delle ricerche personali e/o valutative.
Due siti consigliati: [https://en.cppreference.com/w/](cpprefernce.com) e [http://www.cplusplus.com/reference/](cplusplus.com). Per chi preferisce il cartaceo, consiglio Stroustrup, B. *The C++ programming language*. Pearson Education, 2013.

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

// Da string a c string
const char* s2_in_cstr = s2.c_str();

// Estrarre da stream (stdin in questo caso) una stringa
string from_cin;
cin >> from_cin;

// s.substr(idx, k) estrae una sottostringa di s a partire dall'indice idx lunga k caratteri
string hello = hello_world.substr(0, 5);    // "Hello"
string world = hello_world.substr(7, 5);    // "World"

// s.find(x) restituisce l'indice della prima occorrenza di x in s
unsigned idx_comma = hello_world.find(',');     // 5
unsigned idx_world = hello_world.find(world);   // 7

// Avendo operator[] possiamo trattare una istanza di string come se fosse un array
for (int i = hello_world.size()-1; i >= 0; i--)
    cout << hello_world[i] << endl;


/* Acquisire una stringa da stdin.*/
string temp;
string temp1, temp2;

// getline permette di leggere il contenuto dello stream cin fino all'endline (quindi una riga intera)
getline(cin, temp);
// cin, utilizzato con operator>>, permette invece di leggere il contenuto fino al primo spazio oppure endline
cin >> temp1 >> temp2;
````

## Parsing di una stringa

Con parsing intendiamo l'interpretazione del contenuto di una stringa.

````cpp
// Esempio: da stringa a intero.
string s = "42";

// SOLO C++11: si può usare std::stoi(string)
int x = std::stoi(s);   // 42

// C++98/03: si può usare un oggetto istringstream (input string stream) (#include <sstream>)
// Essenzialmente, un istringstream permette di manipolare una stringa come se fosse uno stream
// Ricordate che cin converte automaticamente ad intero?
int y = 0;
// in stdin possiamo inserire un intero (che sarà letto come stringa)
// che sarà poi interpretato in un intero, e y conterrà il valore inserito in stdin.
cin >> y;
// Ecco, con uno istringstream possiamo essenzialmente fare la stessa cosa:
int z = 0;
istringstream iss(s);
iss >> z;   // z conterrà 42

// Tutte le caratteristiche di cin restano invariate:
int a[3] = {0, 0, 0};
string p = "5 8 13";
istringstream take(p);
take >> a[0] >> a[1] >> a[2];   // 5, 8, 13

// C++SeProprioVogliamoFarciMale: possiamo usare atoi(const char*)
int q = atoi(s.c_str());
````