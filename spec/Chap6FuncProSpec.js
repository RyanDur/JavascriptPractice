describe("sum", function() {
    it("should return the sum of n numbers in an array", function() {
        expect(sum([1, 10, 100])).toBe(111);
        expect(sum([2,2])).toBe(4);
    });
});

describe("countZeros", function() {
    it("should return the number of zeros in an array", function() {
        expect(countZeros([0,0,0])).toBe(3);
        expect(countZeros([0,0,0,0,5])).toBe(4);
    });
});

describe("processParagraph", function() {
    it("should take a paragraph and return an object with the header type and content", function() {
        expect(processParagraph("% The Book of Programming")).toEqual({type:'h1', content:'The Book of Programming'});
        expect(processParagraph("%% Language")).toEqual({type:'h2', content:'Language'});
	expect(processParagraph("Short Sayings")).toEqual({type:'p' ,content:'Short Sayings'});
    });

    it("should only count the % from the begining of the paragraphs", function() {
	expect(processParagraph("%% Language%")).toEqual({type:'h2', content:'Language%'});
    });

});