describe("Person", function(){

    var johnDoe;

    beforeEach(function() {
        johnDoe = Person({firstName:"John", lastName:"Doe", age:40});
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

    it("should not have publc properties", function() {
        expect(johnDoe.firstName).toBeUndefined();
        expect(johnDoe.lastName).toBeUndefined();
    });

    it("should have public getters and setters", function() {
        expect(johnDoe.setFirstName).toBeDefined();
        expect(johnDoe.getName).toBeDefined();
        expect(johnDoe.setLastName).toBeDefined();
    });


    it("should be defined when created", function() {
        expect(johnDoe).toBeDefined();
    });

    xit("Should have the correct first name", function() {
        expect(johnDoe.firstName).toBe("John");
    });

    xit("should have the correct age", function() {
        expect(johnDoe.age).toBe(40);
    });

    xit("should have the correct last name", function() {
        expect(johnDoe.lastName).toBe("Doe");
    });

    xit("should be editable", function() {
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

    it("should have the full name", function() {
        expect(johnDoe.getName()).toBe("John Doe");
    });

    xit("should reflect change in full name when editied", function() {
        johnDoe.lastName = "Smith";
        expect(johnDoe.getName()).toBe("John Smith");
    });

    it("should have undefined prperties", function() {
        expect(johnDoe.isMale).toBeUndefined();
        expect(johnDoe.dateOfBirth).toBeUndefined();
    });
});