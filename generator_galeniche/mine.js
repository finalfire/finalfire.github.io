var i = 0;
var result_element = function(ph, ka_int, ka_exp, pka, sol) {
    var element = '<div class="card">' +
                    '<div class="card-body">'+
                    '<p>Regolare una soluzionea pH = '+ ph +' usando tampone di SOSTANZA_S e SOSTANZA_A; che rapporto approssimativo di S e A serve?<br/>Sappiamo che ka = '+ ka_int +' * 10^('+ka_exp+')</p>'+
                    '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#myp'+i+'" aria-expanded="false" aria-controls="mp'+i+'">Soluzione</button>'+
                    '<div class="collapse" id="myp'+i+'">'+
                      '<p class="pt-3">pKa = '+ pka +', S/A = '+ sol +'</p>'+
                    '</div></div></div>';
    return element;
}

var result_element_2 = function(mol_1, mol_2, pkb, sol) {
    var element = '<div class="card">' +
                    '<div class="card-body">'+
                    '<p>Qual è il pH di una soluzione contenente '+mol_1+' efedrina a '+mol_2+' di efedrina colidrato per litro di soluzione? pKb = '+pkb+'</p>'+
                    '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#myb'+i+'" aria-expanded="false" aria-controls="mp'+i+'">Soluzione</button>'+
                    '<div class="collapse" id="myb'+i+'">'+
                      '<p class="pt-3">pH = '+ sol +'</p>'+
                    '</div></div></div>';
    return element;
}

var genrand = function(min, max) {
    //return start + Math.floor(Math.random() * limit);
    return Math.floor(Math.random()*(max-min+1)+min);
}

var gennum = function(a, b, c, d) {
    var p_int = genrand(a, b);
    var p_decimal = genrand(c, d);
    var p;
    //if (Math.random() > 0.75)
        p = p_int + (p_decimal / 100);
    //else
        //p = p_int
    return p;
}

var gendoub = function(a, b) {
    var p_int = genrand(a, b);
    var p_decimal = genrand(0, 99);
    p = p_int + (p_decimal / 100);
    return p;
}

var gen_1 = function() {

    var ph = gennum(7, 8, 10, 99);
    var ka_int = gennum(3, 5, 10, 99);
    var ka_exp = genrand(9, 10);

    console.log(ka_exp);

    var pka = -1 * Math.log10(ka_int * 10**(-1 * ka_exp));
    var sol = 10**(ph-pka);

    
    $('#fb10').append(result_element(ph, ka_int, -1 * ka_exp, pka, sol));
    i += 1;
}

var gen_2 = function() {
    var mol_1 = genrand(1,9) / 10;
    var mol_2 = genrand(1,9) / 100;
    var pkb = gennum(4,6, 10, 99);

    console.log(pkb);

    var ph = 14 - pkb + Math.log10(mol_1/mol_2);

    $('#sb10').append(result_element_2(mol_1, mol_2, pkb, ph));
    i += 1;
}