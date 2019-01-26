var i = 0;
var result_element = function(ph, ka_int, ka_exp, pka, sol) {
    var element = '<div class="card">' +
                    '<div class="card-body">'+
                    '<p>Regolare una soluzionea pH = '+ ph +' usando tampone di SOSTANZA_S e SOSTANZA_A; che rapporto approssimativo di S e A serve?<br/>Sappiamo che ka = '+ ka_int +' * 10^('+ka_exp+')</p>'+
                    '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#myp'+i+'" aria-expanded="false" aria-controls="myp'+i+'">Soluzione</button>'+
                    '<div class="collapse" id="myp'+i+'">'+
                      '<p class="pt-3">pKa = '+ pka +', S/A = '+ sol +'</p>'+
                    '</div></div></div>';
    return element;
}

var result_element_2 = function(mol_1, mol_2, pkb, sol) {
    var element = '<div class="card">' +
                    '<div class="card-body">'+
                    '<p>Qual è il pH di una soluzione contenente '+mol_1+' efedrina a '+mol_2+' di efedrina colidrato per litro di soluzione? pKb = '+pkb+'</p>'+
                    '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#my2'+i+'" aria-expanded="false" aria-controls="my2'+i+'">Soluzione</button>'+
                    '<div class="collapse" id="my2'+i+'">'+
                      '<p class="pt-3">pH = '+ sol +'</p>'+
                    '</div></div></div>';
    return element;
}

var result_element_3 = function(mol, pm_sol, nome_sol, moli_b, x_a, x_b) {
    var element = '<div class="card"><div class="card-body">' +
        '<p>Soluzione A '+mol+' molali, calcolare le frazioni molari di '+nome_sol+' e A, sapendo che PM '+nome_sol+'='+pm_sol+'. Tenere conto che in 1 kg di solvente '+nome_sol+' ci sono '+mol+' moli di A.</p>'+
        '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#my3'+i+'" aria-expanded="false" aria-controls="my3'+i+'">Soluzione</button>'+
        '<div class="collapse" id="my3'+i+'">'+
            '<p class="pt-3">XA = '+ x_a +'<br/>X'+nome_sol+' = '+x_b+'</p>'+
        '</div></div></div>';
    
    return element;
}

var result_element_4 = function(mol, pm_a, perc_a) {
    var element = '<div class="card"><div class="card-body">' +
        '<p>Calcolare percentuale massa di una soluzione di A '+mol+' moli; massa H2O = 1000g; massa A = '+mol+' e PM(A) = '+pm_a+'</p>'+
        '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#my4'+i+'" aria-expanded="false" aria-controls="my4'+i+'">Soluzione</button>'+
        '<div class="collapse" id="my4'+i+'">'+
            '<p class="pt-3">% masssa = '+perc_a+'</p>'+
        '</div></div></div>';
    
    return element;
}


var result_element_5 = function(mol, mol_b, pm_b, massa_b, mol_a) {
    var element = '<div class="card"><div class="card-body">' +
        '<p>Calcolare molalità di una soluzione di A la cui frazione molare è '+mol+' sapendo che 1 mole di soluzione contiene '+mol+' di A e che: Frazione molare totale - frazione molare A = frazione molare B, dove PM(B) = '+pm_b+'</p>'+
        '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#my5'+i+'" aria-expanded="false" aria-controls="my5'+i+'">Soluzione</button>'+
        '<div class="collapse" id="my5'+i+'">'+
            '<p class="pt-3">frazione molare B = '+mol_b+'<br/>Massa B = '+massa_b+'<br/>Molalità A = '+mol_a+'</p>'+
        '</div></div></div>';
    
    return element;
}

var result_element_6 = function(mol_a, density_base, density_exp, pm_a, massa_a, massa_tot, V, M) {
    var element = '<div class="card"><div class="card-body">' +
        '<p>Calcolare la molarità in una soluzione di '+mol_a+' molali di A in H2O con densità = '+density_base+' * 10^('+density_exp+') g/l. PM(A) = '+pm_a+'. Sappiamo che M = mol/V(l) e che M = moli/kg_solvente e che in 1 kg di soluzione ci sono '+mol_a+' di A.</p>'+
        '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#my6'+i+'" aria-expanded="false" aria-controls="my6'+i+'">Soluzione</button>'+
        '<div class="collapse" id="my6'+i+'">'+
            '<p class="pt-3">Massa A = '+massa_a+'<br/>Massa tot = '+massa_tot+'<br/>V = '+V+'<br/>M = '+M+'</p>'+
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

var gen_3 = function() {
    var mol = genrand(1,99) / 100;
    var pm_sol = 0;
    var nome_sol = '';
    if (Math.random() >= 0.5) {
        pm_sol = 18; // acqua
        nome_sol = 'acqua';
    } else {
        pm_sol = genrand(10,40);
        nome_sol = 'B';
    }

    var moli_b = 1000 / pm_sol;
    var x_a = mol / (mol + moli_b);
    var x_b = moli_b / (mol + moli_b);

    $('#tb10').append(result_element_3(mol, pm_sol, nome_sol, moli_b, x_a, x_b));
    i += 1;
}

var gen_4 = function() {
    var mol = genrand(1,99) / 100;
    var pm_a = gennum(160,185,0,99);

    var perc_a = ((pm_a * mol) / (1000 + (pm_a * mol))) * 100;

    $('#fthb10').append(result_element_4(mol, pm_a, perc_a));
    i += 1;
}

var gen_5 = function() {
    var mol = genrand(10,50) / 100;
    var mol_b = 1-mol;
    var pm_b = genrand(5,20);
    var massa_b = (mol_b * pm_b) * 10**(-3);
    var mol_a = mol / massa_b;

    
    $('#f5b10').append(result_element_5(mol, mol_b, pm_b, massa_b, mol_a));
    i += 1;
}

var gen_6 = function() {
    var mol_a = genrand(100,300) / 1000;
    var density_base = 1 + (genrand(10,88) / 1000);
    var density_exp = -2;
    if (Math.random() >= 0.5)
        density_exp = -3;
    var pm_a = gennum(60,80,10,90);
    var massa_a = mol_a * pm_a;

    var massa_tot = 1000 + massa_a;
    var V = massa_tot / (density_base * 10^(density_exp));
    var M = mol_a / V;

    $('#f6b10').append(result_element_6(mol_a, density_base, density_exp, pm_a, massa_a, massa_tot, V, M));
}