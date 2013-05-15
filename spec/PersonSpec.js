describe("Person", function(){

    var johnDoe;

    beforeEach(function() {
	johnDoe = new Person("John", "Doe", 40);
    });

    describe("Null Person", function() {
	var nullyDoe;

	beforeEach(function() {
	    nullyDoe = null;
	});

	it("outer person should be defined", function() {
	    expect(johnDoe).toBeDefined();
	});

	it("inner person to be defined", function() {
	    expect(nullyDoe).toBeDefined();
	});

	it("created inner person should not be null", function() {
	    nullyDoe = johnDoe;
	    expect(nullyDoe).not.toBeNull();
	});

	it("inner person should be null", function() {
	    expect(nullyDoe).toBeNull();
	});
    });

    it("should be defined when created", function() {
        expect(johnDoe).toBeDefined();
    });

    it("Should have the correct first name", function() {
        expect(johnDoe.firstName).toBe("John");
    });

    it("should have the correct age", function() {
	expect(johnDoe.age).toBe(40);
    });

    it("should have the correct last name", function() {
	expect(johnDoe.lastName).toBe("Doe");
    });

    it("should be editable", function() {
	johnDoe.age = 34;
	expect(johnDoe.age).not.toBe(40);
	expect(johnDoe.age).toBe(34);
	johnDoe.firstName = "Ryan";
	expect(johnDoe.firstName).not.toBe("John");
	expect(johnDoe.firstName).toBe("Ryan");
	johnDoe.lastName = "Durling";
	expect(johnDoe.lastName).not.toBe("Doe");
	expect(johnDoe.lastName).toBe("Durling");
    });
});