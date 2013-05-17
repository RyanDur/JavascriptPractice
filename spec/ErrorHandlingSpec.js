describe("ErrorHandling", function() {

    var errorHandler;

    beforeEach(function() {
        errorHandler = new ErrorHandling();
    });

    describe("between", function() {

        it("should return the content specified", function() {
            expect(errorHandler
                   .between("born 15/11/2003 (mother Spot): White Fang",
                            "(mother ", ")"))
                .toBe("Spot");
            expect(errorHandler
                   .between("bu ] boo [ bah ] gzz", "[ ", " ]"))
                .toBe("bah");
        });

        it("should return undefined if between conditons do not exist",
           function() {
               expect(errorHandler.between("Your mother!", "{-", "-}"))
                   .toBe(undefined);
           });
    });


    describe("lastElement", function() {
        it("should return the last element of an array", function() {
            var array = [1,2,3,4];
            expect(errorHandler.lastElement(array)).toBe(4);
            var array1 = [9];
            expect(errorHandler.lastElement(array1)).toBe(9);
        });

        it("should throw an error if given an empty array", function() {
            expect(function(){errorHandler.lastElement([]);})
                .toThrow("Can not take the last element of an empty array.");
        });
    });
});