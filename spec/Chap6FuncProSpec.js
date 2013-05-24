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

        expect(processParagraph("% The Book of Programming"))
            .toEqual({type:'h1', content:[{type:'normal', contnent:'The Book of Programming'}]});

        expect(processParagraph("%% Language"))
            .toEqual({type:'h2', content:[{type:'normal', contnent:'Language'}]});

        expect(processParagraph("Short Sayings"))
            .toEqual({ type:'p', content:[{type:'normal', contnent:'Short Sayings'}]});
    });

    it("should only count the % from the begining of the paragraphs", function() {

        expect(processParagraph("%% Language%"))
            .toEqual({type:'h2', content:[{type:'normal', contnent :'Language%'}]});
    });
});

describe("splitParagraph", function() {
    it("If the paragraph starts with an asterisk, take off the emphasised part and store it.", function() {

        var paragraph = "A student had been sitting motionless behind his computer for hours,\n"+
            "frowning darkly. He was trying to write a beautiful solution to a\n"+
            "difficult problem, but could not find the right approach. Fu-Tzu hit\n"+
            "him on the back of his head and shouted '*Type something!*' The student\n"+
            "started writing an ugly solution. After he had finished, he suddenly\n"+
            "understood the beautiful solution.\n";

        expect(splitParagraph(paragraph)).toContain({type:"emphasised", content:"Type something!"});
    });

    it("", function() {});

    it("If the paragraph starts with an opening brace, take off the footnote and store it.", function() {
        var paragraph =     "Fu-Tzu had written a small program that was full of global state and\n"+
            "dubious shortcuts. Reading it, a student asked 'You warned us against\n"+
            "these techniques, yet I find them in your program. How can this be?'\n"+
            "Fu-Tzu said 'There is no need to fetch a water hose when the house is\n"+
            "not on fire.'{This is not to be read as an encouragement of sloppy\n"+
            "programming, but rather as a warning against neurotic adherence to\n"+
            "rules of thumb.}\n";

        expect(splitParagraph(paragraph)).toContain({type:'footnote', content:'This is not to be read as an encouragement of sloppy\n'
                            + 'programming, but rather as a warning against neurotic adherence to\n'
                            + 'rules of thumb.'});
    });

    it("if the opening brace or asterisk does not have a closing then it should throw an error", function() {
	var paraBrace = "I have no closing {brace";

	expect(function() {splitParagraph(paraBrace);}).toThrow("Missing closing '}'");
    });
});