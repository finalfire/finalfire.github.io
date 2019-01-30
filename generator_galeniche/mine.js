var els = [
    ["acido nitroso", "HNO2", 5.1, -1],
    ["acido selenidrico", "H2Se", 1.7, -4],
    ["ione cromico", "Cr(H2O)3+6", 1.5, -4],
    ["acido benzoico", "C6H5COOH", 6.6, -5],
    ["ione biossalato", "HOOCOO-", 5.5, -5],
    ["acido acetico", "CH3COOH", 1.8, -5],
    ["ione alluminio", "AI(H2O)3+6", 1.4, -5],
    ["acido carbonico", "H2CO3", 4.4, -7],
    ["acido solfidrico", "H2S", 1.0, -7],
    ["ione fostato biacido", "H2PO-4", 6.3, -8],
    ["ione bisolfito", "HSO-3", 6.2, -8],
    ["ione ammonio", "NH+4", 5.7, -10],
    ["ione bicarbonato", "HCO-3", 4.7, -11],
    ["ione telluridrato", "HTe-", 1.0, -11]
];

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
        '<p>Calcolare percentuale massa di una soluzione di A '+mol+' moli; massa H2O = 1000g; PM(A) = '+pm_a+'</p>'+
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

var result_element_7 = function(beta, ph, pka_v, pka, ka, num_ratio, cs_ca, ph_u, C, CA, CS) {
    var element = '<div class="card"><div class="card-body">' +
        '<p>acido A pKa = '+pka+'<br/>Rapporto sale/acido a produrre un ph = '+ph+' è stato trovato nell\'esempio ='+num_ratio+'/1; beta = '+beta+'</p>'+
        '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#my7'+i+'" aria-expanded="false" aria-controls="my7'+i+'">Soluzione</button>'+
        '<div class="collapse" id="my7'+i+'">'+
            '<p class="pt-3">CS/CA = '+cs_ca+'<br/>C = '+C+'<br/>CA = '+CA+'<br/>CS = '+CS+'</p>'+
        '</div></div></div>';
    
    return element;
}

var result_element_8 = function(e_name, e_comp, e_value, e_exp, ph, beta) {
    var element = '<div class="card"><div class="card-body">' +
        '<p>'+e_name+' '+e_comp+', ka = '+e_value+' * 10^('+e_exp+'), pH='+ph+', beta='+beta+'</p>'+
        '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#my8'+i+'" aria-expanded="false" aria-controls="my8'+i+'">Soluzione</button>'+
        '<div class="collapse" id="my8'+i+'">'+
            '<p class="pt-3">No solution sgringhi <3</p>'+
        '</div></div></div>';
    
    return element;
}

var result_element_9 = function(ph, mol_1, mol_2, sol) {
    var element = '<div class="card"><div class="card-body">' +
        '<p>Calcolare la capacità tamponante beta di una soluzione con ph='+ph+' e costituita da '+mol_1+' moli di CH3COOH e '+mol_2+' moli di CH3COONa. Volume = 1 l</p>'+
        '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#my9'+i+'" aria-expanded="false" aria-controls="my9'+i+'">Soluzione</button>'+
        '<div class="collapse" id="my9'+i+'">'+
            '<p class="pt-3">beta = '+sol+' M</p>'+
        '</div></div></div>';
    
    return element;
}

var result_element_10 = function(mol, mod, ka_base, ka_exp, pm) {
    var element = '<div class="card"><div class="card-body">' +
        '<p>Un tampone contiene '+mol+' di X e '+mol+' di Y. A questo tampone '+mod+'. Trovare beta e ph. ka = '+ka_base+' * 10^'+ka_exp+';  Volume = 1 l, peso molecolare = '+pm+'</p>'+
        '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#my10'+i+'" aria-expanded="false" aria-controls="my10'+i+'">Soluzione</button>'+
        '<div class="collapse" id="my10'+i+'">'+
            '<p class="pt-3">Troppi ca**i sgringhiiiiii <3</p>'+
        '</div></div></div>';
    
    return element;
}

var result_element_11 = function(gl, ph, ka_b, ka_e) {
    var element = '<div class="card"><div class="card-body">' +
        '<p>VITC PM 176,2, la soluzione contiene sale acido ascobico '+hl+' g/l. Rapporto molare tra coso e coso? %? A pH = '+ph+', e ka = '+ka_b+' * 10^'+ka_e+'.</p>'+
        '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#my11'+i+'" aria-expanded="false" aria-controls="my11'+i+'">Soluzione</button>'+
        '<div class="collapse" id="my11'+i+'">'+
            '<p class="pt-3">Troppi ca**i sgringhiiiiii <3</p>'+
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
    var density_exp = -3;
    var pm_a = gennum(60,80,10,90);
    var massa_a = mol_a * pm_a;

    var massa_tot = 1000 + massa_a;
    var V = massa_tot / (density_base) / 1000;
    var M = mol_a / V;

    $('#f6b10').append(result_element_6(mol_a, density_base, density_exp, pm_a, massa_a, massa_tot, V, M));
    i += 1;
}

var gen_7 = function() {
    var beta = genrand(1,10) / 10;
    var ph = genrand(4,7);
    var pka_v = genrand(15,30) / 10;
    var pka = ph - pka_v;
    var ka = 10**(-1 * pka);
    var num_ratio = ka;

    var cs_ca = 10**(pka_v);
    var ph_u = 10**(-1 * ph);

    var C = beta / (2.3 * ((ka * ph_u)/((ka + ph_u)**2)));
    var CA = C / (num_ratio + 1);
    var CS = num_ratio + CA;

    $('#f7b10').append(result_element_7(beta, ph, pka_v, pka, ka, num_ratio, cs_ca, ph_u, C, CA, CS));
    i += 1;
}

var gen_8 = function() {
    var idx = genrand(0, els.length-1);
    var e_name = els[idx][0];
    var e_comp = els[idx][1];
    var e_value = els[idx][2];
    var e_exp = els[idx][3];
    
    var beta = genrand(1,9) / 100;
    var pka = Math.log10(e_value * 10**(e_exp)) * -1;
    console.log(pka);
    var ph = Math.ceil(pka + 1);

    $('#f8b10').append(result_element_8(e_name, e_comp, e_value, e_exp, ph, beta));
    i += 1;
}

var gen_9 = function() {
    var ph = 4 + (genrand(40,80) / 100);
    var mol = genrand(10,99) / 100;
    var sol = 2.3 * ((mol + mol) / 4);

    $('#f9b10').append(result_element_9(ph, mol, mol, sol));
    i += 1;
}

var gen_10 = function() {
    var idx = genrand(0, 6);
    var mol = genrand(1, 9) / 10;
    var geq = genrand(1,9) / 100;

    var base_or_acid = genrand(1,2);
    var mod = '';
    if (base_or_acid == 1)
        mod = 'si aggiungono ' + geq + ' di BASE B';
    else
        mod = 'si aggiungono ' + geq + ' di ACIDO A';
    
    var pm = genrand(30,40);

    $('#f10b10').append(result_element_10(mol, mod, els[idx][2], els[idx][3], pm));
    i += 1;
}

var gen_11 = function() {
    var gl = genrand(50, 60);
    var ph = 5 + (genrand(1, 9) / 10);
    var ka_b = 0.0; var ka_e = 0.0;
    if (Math.random() >= .5) {
        ka_b = 4 + (genrand(10,80) / 10);
        ka_e = -4;
    } else {
        ka_b = 5 + (genrand(10,80) / 10);
        ka_e = -5;
    }

    $('#f11b10').append(result_element_11(gl, ph, ka_b, ka_e));
    i += 1;
}