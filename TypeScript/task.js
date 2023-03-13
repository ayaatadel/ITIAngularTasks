// 1-	Create array that accept  number only
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var numericArray = [1, 32, 3];
// 2-	Create array that accept string and number only and print all items
var stringNumberArray = [1, 2, 'ayaat'];
for (var i = 0; i < stringNumberArray.length; i++) {
    console.log(stringNumberArray[i]);
}
console.log("--------------------------------------------");
// 3-	Create a variable that accept number and Boolean only
var numderBooleanVariable = 5;
numderBooleanVariable = true;
console.log(numderBooleanVariable);
console.log("--------------------------------------------");
// 4-	Create function with two parameter
function sum(param1, param2) {
    return param1 + param2;
}
console.log("sum of two parameters :", sum(3, 4));
console.log("--------------------------------------------");
var Employee = /** @class */ (function () {
    function Employee(id, name, userName, email, address) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.address = address;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.getUserName = function () {
        return this.userName;
    };
    Employee.prototype.show = function () {
        console.log(this.name);
        console.log(this.email);
        console.log(this.address);
    };
    return Employee;
}());
var emp = new Employee(1, "ayaat adel", "ayaat", "ayaat@gmail.com", {
    street: "Kulas Light",
    city: "Gwenborough"
});
console.log("id: " + emp.getId());
console.log("userName: " + emp.getUserName());
emp.show();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, userName, email, address) {
        return _super.call(this, id, name, userName, email, address) || this;
    }
    Manager.prototype.view_employee_address = function () {
        console.log(this.address);
    };
    return Manager;
}(Employee));
var man = new Manager(2, "Leanne Graham2", "Bret2", "Sincere2@april.biz", {
    street: "Kulas Light2",
    city: "Gwenborough2"
});
man.view_employee_address();
console.log("--------------------------------------------");
var Product = /** @class */ (function () {
    function Product(id, productName, price, description) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.description = description;
    }
    Product.prototype.hasDiscount = function () {
        return true;
    };
    Product.prototype.discount = function () {
        return this.price - (this.price * .1);
    };
    Product.prototype.show = function () {
        var details = "id: " + this.id + " ,productName: " + this.productName + " ,price: " + this.price + " description: " + this.description;
        return details;
    };
    return Product;
}());
function showDetails(arr) {
    console.log("from function");
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var obj_1 = arr_1[_i];
        console.log("id: " + obj_1.id + " ,productName: " + obj_1.productName + " ,price: " + obj_1.price + " description: " + obj_1.description);
    }
}
var obj = new Product(1, "test", 200, "this first product");
var obj2 = new Product(2, "test2", 300, "this secound product");
if (obj.hasDiscount()) {
    console.log("price after discount: " + obj.discount());
}
console.log(obj.show());
var arr = [obj, obj2];
showDetails(arr);
