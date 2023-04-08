const employee = {
  empid: 1,
  firstName: "Mark",
  lastName: "Smith",
  email: "m@gmail.com",
};

// let empId = employee.empid;
// let firstName = employee.firstName;
// let lastName = employee.lastName;
// let email = employee.email;

// destruturing
let { empid, firstName, lastName, email } = employee;
console.log(firstName)

function getScores(){
    return [70, 80, 90]
}

let scores = getScores();
console.log(scores[0])
console.log(scores[1])
console.log(scores[2])

// destructing
let [x, y, z] = getScores()
console.log(x)
console.log(y)
console.log(z)




