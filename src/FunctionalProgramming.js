function forEach(array, func) {
    for(var i = 0; i < array.length; i++ ) {
        func(array[i]);
    }
}

function add(a, b) {
    return a + b;
}

function sum(numbers) {
    return reduce(add,0,numbers);
}

function reduce(combine, base, array) {
    forEach(array, function(element) {
        base = combine(base, element);
    });

    return base;
}

function count(test, array) {

}

function countZeros(numbers) {
    return reduce(function(a,b) {
        return (b === 0) ? add(1,a) : a;
    }, 0, numbers);
}
