// Data Types
var name='Vaibhav'
var age=20
var place='Goa'

let gender='male'

const institute='X-Workz'
document.writeln(age)

// -----------------------------------------------------------------
// 3 Types Of Objects can Create
let emp1={id:12,empName:'vai',salary:100000}

let emp2=new Object();
emp2.id=13;
emp2.empName='vaib';
emp2.salary=10003;

function emp3(id, empName,salary){
this.id=id;
this.empName=empName;
this.salary=salary;
}
// -----------------------------------------------------------------
let Obj3=emp3();