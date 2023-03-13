
// 1-	Create array that accept  number only

let numericArray: number[] = [1,32,3];
// 2-	Create array that accept string and number only and print all items

let stringNumberArray: (string | number)[] = [1, 2, 'ayaat'];

for (let i = 0; i < stringNumberArray.length; i++)
{
  console.log(stringNumberArray[i]);
}
console.log("--------------------------------------------");

// 3-	Create a variable that accept number and Boolean only

let numderBooleanVariable: (boolean | number) = 5;
numderBooleanVariable = true;
console.log(numderBooleanVariable);
console.log("--------------------------------------------");


// 4-	Create function with two parameter

function sum(param1: number, param2)
{
    return param1 + param2;
}
console.log("sum of two parameters :", sum(3, 4));


console.log("--------------------------------------------");

/*
5-	Create class Employee implement IEmployee using this object as implementation
 {"id": 1,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz","address": {"street": "Kulas Light","suite": "Apt. 556","city": "Gwenborough","zipcode": "92998-3874","geo": {"lat": "-37.3159","lng": "81.1496"}}
a.	Id is read only 
b.	Username private
c.	Address public
*/

interface IEmployee {
    getId(): number;
    name: string;
    getUserName(): string;
    email: string;
    address: {
        street: string,
       
        city: string;
        
    };
}

class Employee implements IEmployee {
    constructor(
        private id: number,
        public name: string,
        private userName: string,
        public email: string,
        public address: {
            street: string;
            city: string;
           
        }) { }
    getId(): number {
        return this.id;
    }
    getUserName(): string {
        return this.userName;
    }
    show(): void {
        console.log(this.name);
        console.log(this.email);
        console.log(this.address);
    }
}

let emp = new Employee(1, "ayaat adel", "ayaat", "ayaat@gmail.com",
    {
        street: "Kulas Light",
   
        city: "Gwenborough",
       
    });

console.log("id: "+emp.getId());
console.log("userName: "+emp.getUserName());
emp.show();

class Manager extends Employee {
    constructor(
        id: number,
        name: string,
        userName: string,
        email: string,
        address: {
            street: string;
       
            city: string;
           
        }) {
        super(id, name, userName, email, address);
    }

    view_employee_address(): void {
        console.log(this.address);
    }
}

let man = new Manager(2, "Leanne Graham2", "Bret2", "Sincere2@april.biz",
    {
        street: "Kulas Light2",
      
        city: "Gwenborough2",
       
    });

man.view_employee_address();

console.log("--------------------------------------------");
/**
 *  1- create an interface (IProduct)(have)
 *      -- id  ---> number
 *      -- productName --> string
 *      -- price --> number
 *      -- description -- string
 *      -- hasDiscount ethod return boolean
 *      -- discount method return number --> if a product has a dicount -- 10%
 *      -- show method --> return string
 * ========================================================
 *
 *      -- create class Product implement IProduct
 *      -- take an object from product ... show the product details
 *================================================================
 *
 *
 * showDetails(a=Iproduct[]){
 * // make loop to show all products
 * =====================
 * }
 */
interface IProduct {
    id: number,
    productName: string,
    price: number,
    description: string,
    hasDiscount(): boolean,
    discount(price: number): number,
    show(): string
}

class Product implements IProduct {

    constructor(public id: number, public productName: string, public price: number, public description: string) { }

    hasDiscount(): boolean {
        return true;
    }
    discount(): number {
        return this.price - (this.price * .1);
    }
    show(): string {
        let details: string = "id: " + this.id + " ,productName: " + this.productName + " ,price: " + this.price + " description: " + this.description;
        return details;
    }

}

function showDetails(arr: Product[]): void {
    console.log("from function");
    for (let obj of arr) {
        console.log("id: " + obj.id + " ,productName: " + obj.productName + " ,price: " + obj.price + " description: " + obj.description);
    }
}

let obj = new Product(1, "test", 200, "this first product");
let obj2 = new Product(2, "test2", 300, "this secound product");

if (obj.hasDiscount()) {
    console.log("price after discount: " + obj.discount());
}
console.log(obj.show());

let arr: Product[] = [obj, obj2];
showDetails(arr);