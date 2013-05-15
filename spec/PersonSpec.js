describe("Person", function(){

    it("Should have the correct first name", function() {

	var johnDoe = new Person("John", "Doe", 40);

	expect(johnDoe.firstName).toBe("John");
    });
});