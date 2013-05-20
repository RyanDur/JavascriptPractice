function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

function oldSum(numbers) {
    var total = 0;
    forEach(numbers, function (number) {
        total += number;
    });
    return total;
}

//------------------------------------

function reduce(combine, base, array) {
    forEach(array, function (element) {
        base = combine(base, element);
    });
    return base;
}

function add(a, b) {
    return a + b;
}

function sum(numbers) {
    return reduce(add, 0, numbers);
}

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

function oldCountZeros(array) {
    function counter(total, element) {
	return total + (element === 0 ? 1 : 0);
    }

    return reduce(counter, 0, array);
}

//------------------------------------

function count(test, array) {
    return reduce(function(total, element) {
	return total + (test(element) ? 1 : 0);
    }, 0, array);
}

function equals(x) {
    return function(element) {return x === element;};
}

function countZeros(array) {
    return count(equals(0), array);
}

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

function map(func, array) {
  var result = [];
  forEach(array, function (element) {
    result.push(func(element));
  });
  return result;
}

function getHeading(hCount, par) {
    var headings = ['h1','h2','h3','h4'];
    par = par.replace(/%*/, "");
    return {type:(hCount === 0 ? 'p' : headings[hCount -1]), content:par.trim()};
}

function processParagraph(par) {
    var headerCount = count(equals('%'), par);
    return getHeading(headerCount, par);
}