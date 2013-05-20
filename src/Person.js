function Person(properties) {

    "user strict";

    if(!(this instanceof Person)) {
        return Object.create(Person,properties);
    };

    var that = {}, firstName, lastName, age, isMale, dateOfBirth;

    if(properties) {
        firstName = properties.firstName;
        lastName = properties.lastName,
        age = properties.age;
        isMale = properties.isMale;
        dateOfBirth = properties.dateOfBirth;
    };

    that.setFirstName = function setFirstName(value) {
	firstName = value;
    };

    that.setLastName = function setLastName(value) {
	lastName = value;
    };

    that.getName = function getName() {
        return (firstName || "") + " " + (lastName || "");
    };

    return that;
};