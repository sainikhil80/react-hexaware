class Employee{
    empId;
    firstName;
    lastName;
    email;


    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

class FullTimeEmployee extends Employee{
    annualSalary;

}

class PartTimeEmployee extends Employee{
    hourSalary;
}

let fte = new FullTimeEmployee();
