# Come leggere da standard input senza un "tappo"

In C++:
````c++
string temp;
//  getline legge fino ad ogni \n
while (getline(cin, temp)) {
    /* questo while gira fino
     * a quando le righe da
     * leggere non terminano */
     
     // do something...
}
````
oppure

````c++
string temp;
// cin legge fino ad ogni spazio
while (cin >> temp)) {
    /* questo while gira fino
     * a quando le righe da
     * leggere non terminano */
     
     // do something...
}
````