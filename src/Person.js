function Person(properties) {

    "user strict";

    if(properties) {
	this.firstName = properties.firstName;
	this.lastName = properties.lastName,
	this.age = properties.age;
	this.isMale = properties.isMale;
	this.dateOfBirth = properties.dateOfBirth;
    };

    this.getName = function getName() {
	return (this.firstName || "") + " " + (this.lastName || "");
    };
};