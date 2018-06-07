var farmaci = [
    "Pravastatina",
    "Montelukast",
    "Perindopril/indapamide",
    "Telmisartan/idroclorotiazide",
    "Alfuzosina",
    "Levotiroxina",
    "Ramipril/Amlodipina",
    "Brinzolamide",
    "Rabeprazolo",
    "Rosuvastatina",
    "Brimonidina",
    "Piperacillina/tazobactam",
    "Interferone alfa 2B",
    "Rotigotina",
    "Calcio carbonato/colecalciferolo",
    "Buserelin",
    "Venlafaxina",
    "Mesalazina",
    "Rosuvastatina",
    "Rabeprazolo",
    "Losartan",
    "Amoxicillina",
    "Glucosio",
    "Mometasone",
    "Ossigeno",
    "Amisulpride",
    "Fluconazolo",
    "Montelukast",
    "Fentanil",
    "Sodio risedronato",
    "Verapamil",
    "Venlafaxina",
    "Ranitidina",
    "Ramipril/idroclorotiazide",
    "Disopiramide",
    "Ossigeno",
    "Mesalazina",
    "Losartan",
    "Ramipril",
    "Amoxicillina/acido clavulanico",
    "Paroxetina",
    "Acarbosio",
    "Rivastigmina",
    "Cefoxitina",
    "Olanzapina",
    "Aciclovir",
    "Pregabalin",
    "Vancomicina",
    "Acido ursodesossicolico",
    "Finasteride"
];




var i = 0;
var result_element = function(nome_p, p, nome_x, x, s, e) {
    var element = '<div class="card">' +
                    '<div class="card-body"><h6 class="card-subtitle mb-2 text-muted">Dati:<br/></h6>'+
                    '<p>'+
                          nome_p + ' ' + p +'%<br/>' +
                          nome_x + 'qb ' + x + ' mg<br/>' +
                          'sensibilità '+ s +' mg<br/>' +
                          'errore max '+e+'%'+
                    '</p>'+
                      '<a class="card-link collapsed" data-toggle="collapse" href="#mp1" role="button" aria-expanded="false" aria-controls="collapseExample">Soluzione</a>'+
                      '<div class="collapse" id="myp1">'+
                      '<p class="pt-3">Boh.</p>'+
                    '</div></div></div>';
    return element;
}

var genrand = function(start, limit) {
    return start + Math.floor(Math.random() * limit);
}

var gennum = function(a, b, c, d) {
    var p_int = genrand(a, b);
    var p_decimal = genrand(c, d);
    var p;
    if (Math.random() > 0.5)
        p = p_int + (p_decimal / 100);
    else
        p = p_int
    return p;
}

var primo = function() {

    var p = gennum(4, 22, 0, 99);
    var x = gennum(60, 480, 0, 99);
    var e = gennum(1, 5, 0, 99);

    var s_int = genrand(0, 3);
    var s_decimal = genrand(0, 99);
    var s;
    do {
    if (Math.random() > 0.5)
        s = s_int + (s_decimal / 100);
    else
        s = s_int
    } while (s == 0.0)


    var nome_x = farmaci[genrand(0, farmaci.length)];
    var nome_p = farmaci[genrand(0, farmaci.length)];
    while (nome_p == nome_x)
        nome_p = farmaci[genrand(0, farmaci.length)];

    
    $('#fb10').append(result_element(nome_p, p, nome_x, x, s, e));
    i += 1;
}