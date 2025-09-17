console.log("========== DAY 3 ==========");   //advance functions of array MAP & FILTER

console.log("Map -->Advance function of array, USECASES: 1.for iteration & 2.for transformation")
console.log("Iteration")
let numbers=[1,2,3,4,5,6];        //input array
numbers.map((num) => console.log(num));            // => it is arrow function

console.log("Array map")
console.log("Transformation");
let square=numbers.map((num) => num*2)
console.log(square);


console.log("String map")
let studentName=['sai','mai','ovi'];
let uppercase=studentName.map((uppercasename) => uppercasename.toUpperCase());
let lowercase=studentName.map((lowercasename) => lowercasename.toLowerCase());
console.log(uppercase);
console.log(lowercase);


console.log("object map")
let products=[
               {id:1, name:'pen', price:10},
               {id:2, name:'book', price:50},
                {id:3, name:'notebook', price:100}
             ];
let capitalProductName=products.map((product) => product.name.toUpperCase());
console.log(capitalProductName);

let updatedProducts=products.map((product) => ({...product, name:product.name.toUpperCase()}))   //...spread opertor for keep old data as it is
console.log(updatedProducts);

let updatedProductOrPrice=products.map((product) => ({...product, name:product.name.toUpperCase() ,  price:product.price*0.9}))
console.log(updatedProductOrPrice);


console.log("FILTER....");
let price=products.filter((product) => product.price>=50);
console.log(price);


