function Person(firstName, lastName, age, isMale, dateOfBirth) {

    "user strict";

    this.firstName = firstName;
    this.lastName = lastName,
    this.age = age;
    this.isMale = isMale;
    this.dateOfBirth = dateOfBirth;

    this.getName = function getName() {
	return (this.firstName || "") + " " + (this.lastName || "");
    };
};