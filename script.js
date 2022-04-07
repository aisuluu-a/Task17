//let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

/*let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];*/


/*Задача 1
let [name, surname, department, position, salary] = arr;

console.log(name);
console.log(surname);*/

/*Задача 2
function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [name, surname, department, position, salary] = func();

console.log(func());*/



/*Задача 3

let [,, department, position, ] = arr
console.log(department);
console.log(position);*/

/* Задача 4
let [name, surname, ...etc] = arr;
console.log(name);
console.log(surname);
console.log(etc);*/

/* Задача 5
let arr = ['Иван', 'Иванов', 'отдел разработки',];
let [name, surname, department, position="junior"] = arr;

console.log(position)*/

/*Задача 6*/
let arr = [ , ,2];
function y() {
    let year1 = new Date().getYear();
    return year1;
}

function m() {
    let month1 = new Date().getMonth();
    return month1;
}
function d() {
    let date1= new Date().getDate();
    return date1;
}

let [year= y(), month=m(), day=d()] = arr;

console.log(year);  
console.log(month); 
console.log(day); 