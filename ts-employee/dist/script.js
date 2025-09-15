var Department;
(function (Department) {
    Department["HR"] = "Human Resources";
    Department["IT"] = "Information Technology";
    Department["SALES"] = "Sales";
    Department["MARKETING"] = "Marketing";
    Department["FINANCE"] = "Finance";
})(Department || (Department = {}));
const deptPat = {
    id: 1,
    name: "Patricia Relente",
    age: 21,
    department: Department.IT,
    salary: 12000,
    print: function () {
        console.log(`--- Employee Profile ${this.id} ---`);
        console.log(`Employee Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: $${this.salary}`);
    },
};
deptPat.print();
export {};
//# sourceMappingURL=script.js.map