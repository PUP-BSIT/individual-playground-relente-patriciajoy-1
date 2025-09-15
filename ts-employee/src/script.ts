enum Department {
    HR = "Human Resources",
    IT = "Information Technology",
    SALES = "Sales",
    MARKETING = "Marketing",
    FINANCE = "Finance",
}

type Employee = {
    id: number;
    name: string;
    age?: number; //optional
    department: Department; //required from enum
    salary: number;
    print: () => void; //required function
};

const deptPat: Employee = {
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