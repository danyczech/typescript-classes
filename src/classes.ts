class Department {
    //public name: string;
    //private readonly id: string;
    private employees: string[] = [];

    constructor(public name: string, private readonly id: string) {
       // this.name = n;
        //this.id = id;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting', 'd1');

accounting.addEmployee('Dana');
accounting.addEmployee('Adam');

//accounting.employees[2] = 'Anna';

console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation();



//const accountingCopy = { name: 'IT', describe: accounting.describe }; 7Ksd5ecd

//accountingCopy.describe();