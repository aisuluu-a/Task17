
/*
function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	let position   = employee[3];
	let salary     = employee[4];
}*/

/*Задача 1

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );


function func([name, surname, department, position, salary]) {
	console.log(name);
    console.log(surname);
    console.log(department);
    console.log( position);
    console.log(salary);
    
}
*/
/*Задача 2

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );


function func([name, surname, ...info]) {
	console.log(name);
    console.log(surname);
    console.log(info);
    
}*/


/*Задача 3

func( ['Иван', 'Иванов', 'отдел разработки'] );


function func([name, surname, department, position ='джуниор']) {
		console.log(name);
    console.log(surname);
    console.log(department);
    console.log( position);
    
}*/


/*Задача 4

func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] );


function func(department, [name, surname], hired=[year,month,day]) {
		console.log(name);
    console.log(surname);
    console.log(department);
    console.log(hired)
    //console.log(year);  
//console.log(month); 
//console.log(day);

}*/

/*Задача 5
func( {color: 'red', width: 400, height: 500} );

function func({color, width, height}) {
console.log(color);  
console.log(width); 
console.log(height);
}
*/


/*Задача 6
func( { width: 400, height: 500} );

function func({color="red", width, height}) {
console.log(color);  
console.log(width); 
console.log(height);
}*/
