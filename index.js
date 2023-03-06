//question one
//the difference between mutatinh and non-mutating array method is that mutable array methods alters the original array it's being called on while the non-mutable doesn't alter the original array but returns a new array after operating on the existing array
//1. mutating array methods
//- array.push()
//- array.pop()
//- array.shift()
//- array.unshift()
//- array.reverse()

//2. non-mutating array methods
//- array.map()
//- array.concat()
//- array.slice()
//- array.filter()
//- array.entries()


//question two
const  languages=['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
//1
languages.push('Kotlin');
//2
languages.splice(3,0,'Java');
//3
languages.shift()
//4
languages.splice(0,0,'Scala','Swift');
//5
languages.splice(5,1,'Go','Rust');

//question three
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
// the value of fruits after the function call will be: ['apple','mango','orange'];
console.log(changeFruit(fruit));

//question four
function maximumNumberInArray(arr){
    return Math.max(...arr);
}

console.log(maximumNumberInArray([2,4,9,10,20,0,3,50]))

//question five
function valTimesIndex(arrValue){
const newContainer=arrValue.map((elem,index)=>{
    return elem*index

})
return newContainer
}


console.log(valTimesIndex([2,1,3,3,4]))
