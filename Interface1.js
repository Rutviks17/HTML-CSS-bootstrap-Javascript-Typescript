var Employee = /** @class */ (function () {
    function Employee(salary) {
        var _this = this;
        this.getPerson = function (name, age) {
            _this.name = name;
            _this.age = age;
            return "Employee Name is: " + name + ', age is: ' + age + ' and salary is: ' + _this.salary;
        };
        this.salary = salary;
    }
    return Employee;
}());
var emp1 = new Employee(75000);
console.log(emp1.getPerson('Shashank', 21));
var emp2 = new Employee(100000);
console.log(emp2.getPerson('Jatin', 29));
