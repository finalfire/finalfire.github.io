# Come leggere da standard input senza un "tappo"

In C++ (avendo `#include <string>` e `using namespace std`):
````c++
string temp;
//  getline legge fino ad ogni \n
while (getline(cin, temp)) {
    /* questo while gira fino
     * a quando il contenuto da
     * leggere non termina */
     
    // do something...
}
````
oppure

````c++
string temp;
// cin legge fino ad ogni spazio
while (cin >> temp) {
    /* questo while gira fino
     * a quando il contenuto da
     * leggere non termina */
     
    // do something...
}
````

In Java (avendo `import java.util.Scanner`):
````java
Scanner s = new Scanner(System.in);
while (s.hasNextLine()) {
    String a = s.nextLine();
	// do something...
}
````