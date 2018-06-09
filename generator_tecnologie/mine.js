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

var result_element_2 = function(g, n, setacci, psv, psp) {
    var start = '<div class="card"><div class="card-body"><h6 class="card-subtitle mb-2 text-muted">1 componente da '+g+' gr, num setacci'+n+'<br/></h6><table class="table table-sm table-bordered table-striped"><thead><tr><td>Apertura</td><td>Peso set. vuoto</td><td>Peso set. pieno</td></tr></thead><tbody>';
    var end = '</tbody></table></div></div>'

    var rows = new Array(n-1);
    for (var i = 0; i < n-1; i++)
        rows[i] = '<tr><td>'+ setacci[i] +'</td><td>'+ psv[i] +'</td><td>'+ psp[i] +'</td></tr>';
    rows[n-1] = '<tr><td>FONDO</td><td>'+ psv[n-1] +'</td><td>'+ psp[n-1] +'</td></tr>';

    var result = start;
    for (var i = 0; i < n; i++)
        result = result + rows[i];
    return result + end;
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

var gendoub = function(a, b) {
    var p_int = genrand(a, b);
    var p_decimal = genrand(0, 99);
    p = p_int + (p_decimal / 100);
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

var terzo = function() {

    var range_setacci = [[1000, 800], [500, 300], [200, 90], [89, 70], [69, 50]];

    var n_setacci = new Array(genrand(4,5));
    for (var i = 0; i < n_setacci.length-1; i++)
        n_setacci[i] = genrand(range_setacci[i][1], range_setacci[i][0])
    // fondo
    n_setacci[n_setacci.length-1] = -1;
    
    var psv = new Array(n_setacci.length);
    var f_el = gendoub(400, 600);
    var first = f_el;
    var next_decr = 0;
    for (var i = 0; i < psv.length-1; i++) {
        psv[i] = f_el - next_decr; 
        f_el = psv[i];
        next_decr = gendoub(15, 55);
    }
    // fondo
    psv[psv.length-1] = psv[0] - gendoub(10,30);

    var psp = new Array(n_setacci.length);
    var f_elp = first + gendoub(0,2);
    next_decr = 0;
    for (var i = 0; i < psv.length-1; i++) {
        while ((f_elp - next_decr) < psv[i])
            next_decr = gendoub(15,55);
        psp[i] = f_elp - next_decr; 
        f_elp = psp[i];
        next_decr = gendoub(15, 55);
    }
    // fondo
    psp[psp.length-1] = psv[psv.length-1] + gendoub(10,15);

    console.log(n_setacci)
    console.log(psv)
    console.log(psp)

    var g = gendoub(70,120);

    $('#tb10').append(result_element_2(g, n_setacci.length, n_setacci, psv, psp));
    i += 1;
}