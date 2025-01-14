interface User {
    name: string;
    age: number;
    email:string;
    isActive?: boolean; // optional property, with a questionmark it becomes boolean or undefined
}

let newUser: User = {
    name: 'Nike',
    age: 33,
    email: 'nike@gmail.com',
    isActive: true
}

let anotherUser: User = {
    name: 'Anna',
    age: 35,
    email: 'nike@gmail.com',
   
}

interface Employee extends User {
    employeeId: number;
    department: string;

}

let newEmployee: Employee = {
    name: 'Kerstin',
    age: 55,
    email: 'happy@gmail.com',
    employeeId: 123,
    department: 'Engineering'

}