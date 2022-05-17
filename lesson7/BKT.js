// Câu 1==============================================
const student = (name, age, address) => ({name, age, address})
console.log(student('An', 16, 'viettri'))

// Câu 2===============================================
var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];

var returnPrice = (sm) => {
    return sm.map(e=>e.price)
}

console.log(returnPrice(smartPhones))

// Câu 3================================================
let foo = (x,y,z) => {
	console.log( x, y, z );
}
foo = () => {
	alert('Hello')
}
foo = (a,b) =>{
	let m = a+b*100
	return m
}

console.log(foo)