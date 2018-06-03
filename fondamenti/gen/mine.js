var i = 0;

var result_element = function(n, b, r, start_b) {

    var x = '<div class="card">' +
    '<div class="card-body">' + 
      '<h6 class="card-subtitle mb-2 text-muted">Convertire ('+ n +')'+start_b+' in base '+ b +'.</h6>' +
      '<a class="card-link collapsed" data-toggle="collapse" href="#myp'+i+'" role="button" '+
            'aria-expanded="false" aria-controls="collapseExample">Soluzione</a>' +
      '<div class="collapse" id="myp'+i+'"><p class="pt-3">Il risultato è ('+r+')'+b+'.</p></div></div>' +
    '</div></div>';

    return x;
}

var genrand = function(start, limit) {
    return start + Math.floor(Math.random() * limit);
}

var to_base_n = function(n, b) {
    return n.toString(b);
}

var random_base_from_list = function() {
    var bases = [2, 3, 8, 16];
    return bases[Math.floor(Math.random() * bases.length)];
}

var from_base_10 = function() {
    var n = genrand(1, 16384);
    var b = random_base_from_list();
    var r = to_base_n(n, b);

    $('#fb10').append(result_element(n, b, r, 10));
    i += 1;
}

var to_base_10 = function() {
    var n = genrand(1, 16384);
    var b = random_base_from_list();
    var r = to_base_n(n, b);

    $('#tb10').append(result_element(r, 10, n, b));
    i += 1;
}