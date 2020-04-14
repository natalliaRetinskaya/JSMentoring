/**
 * implement class Person with:
 * 1) properties firstName and lastName
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
//put your code here

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

/**
 * implement class Student that extends Person with:
 * 1) property grade
 * 2) constructor that pass grade to the object
 * 3) method getGrade that returns property grade
 * 4) static method compareGrades that pass two instances of Student and compare their grades,
 *    1 if first greater
 *    0 if equal
 *    -1 if second greater
 */
class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName,lastName)
        this.grade = grade
    };
    getGrade() {
        return this.grade
    }
    static compareGrades(studentA, studentB) {
        if(studentA.grade > studentB.grade) {
            return 1
        }
        if (studentA.grade === studentB.grade){
            return 0
        }
        if (studentA.grade < studentB.grade){
            return -1
        }
    }
};

const person = new Person('Ann', 'Smith');
const student = new Student('Ann', 'Smith',5);

module.exports = {
    person,
    student
};