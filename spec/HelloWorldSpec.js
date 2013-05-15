// Suite
describe("Hello Jasmine", function() {

    // Spec (or test)
    it("says hello", function() {

	// what is being tested
	function helloWorld() {
	    return "Hello World!";
	}

	// Expectation, how we express what we expect should happen.

	// Our Matcher which expects the result of our function
	// to equal "Hello World!"
	expect(helloWorld()).toEqual("Hello World!");
    });
});