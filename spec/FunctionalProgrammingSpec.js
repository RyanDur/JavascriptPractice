describe("forEach", function() {
    it("should itarete over an array and perform the action given upon each element", function() {
        var i = 0;

        forEach([1,2,3,4], function(j) {
            i += j;
        });

        expect(i).toBe(10);
    });
});

describe("sum", function() {
    it("should return the sum of numbers in an array", function() {
        expect(sum([1,2,3,4])).toBe(10);
        expect(sum([1,10,100])).toBe(111);
    });
});

describe("add", function() {
    it("should return the sum of two numbers", function() {
        expect(add(2,2)).toBe(4);
        expect(add(2,3)).toBe(5);
        expect(add(3,2)).toBe(5);
    });
});

describe("reduce", function() {
    it("should return the result of the function passed in based on the the base and array given", function() {
        expect(reduce(add,0,[1,2,3,4])).toBe(10);
    });
});

describe("countZeros", function() {
    it("should return the number of zeros in an array", function() {
	expect(countZeros([1,0,0,0])).toBe(3);
    });
});
