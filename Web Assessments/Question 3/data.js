
const fs = require('fs');
class employee{
    constructor(name, address, salary){
        this.empName = name;
        this.empAddress = address;
        this.empSalary = salary;
    }
}

let employees = [];
employees.push(new employee("Sidhanta", "Rourkela", 30000));
employees.push(new employee("Raj", "Berhampur",25000));
employees.push(new employee("Kalyan", "Chennai", 70000));
employees.push(new employee("Rahul", "Nepal", 100000));


let jsonData = JSON.stringify(employees);
console.log(jsonData);

function saveData(jsonData) {
    const filename = "data.json";
    fs.writeFileSync(filename, jsonData, 'utf-8');
    console.log("Data is saved as JSON");    
}

function loadData() {
    const filename = "data.json";
    const data = fs.readFileSync(filename, "utf-8");
    employees = JSON.parse(data);
}
saveData(jsonData);





