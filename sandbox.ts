class Person {
    name: string; // public is the default visibility
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    toString(): string {
        return "Name: " + this.name;
    }
}
var olli: Person = new Person("Olli", 42);
console.log(olli.name);
// olli.age; => Error: The property 'age' does not exist on value of type 'Person'

olli.name = "Olli der große";
console.log(olli.name);

//class Customer extends Person {
//    private id: number;
//    constructor(name: string, age: number, id: number) {
//        super(name, age);
//        this.id = id;
//    }
//    toString(): string {
//        return super.toString() + ", id: " + this.id;
//    }
//}
//
//var c1: Customer = new Customer("Oma", 88, 47);
//console.log(c1.toString());

class Customer extends Person {
    private static sequence: number = 1;

    public static nextNumber(): number {
        return Customer.sequence++;
    }

    private id: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.id = Customer.nextNumber();
    }
    toString(): string {
        return super.toString() + ", id: " + this.id;
    }
}
var c1: Customer = new Customer("Oma", 88);
console.log(c1.toString());
