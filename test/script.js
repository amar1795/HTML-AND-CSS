// let weakMap = new WeakMap();

// (function () {
//   let obj = { key: 'value' };
//   weakMap.set(obj, 'associated data');
// })();

// At this point, the 'obj' variable is out of scope and no longer accessible.
// The key-value pair in the WeakMap can be garbage collected.

(function () {
  var x=1;
  // console.log(x)
 
})()

var z=2;
// console.log(z)
var y="new";
// console.log(y)


 let range = {
  start: 0,
  end: 5,
  [Symbol.iterator]() {
    let that = this; // this line is very important
    let i = this.start;
    return { // iterator object
      next: function () {
        return { value: i, done: i++ > that.end };

      }
    };
  },
}; 

// let iterator = range[Symbol.iterator]();

// console.log(range.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

let arr = "Hello"

let iterator = arr[Symbol.iterator]();

for (const key of iterator) {
    // console.log(key)
}


// map

let map=new Map();
map.set(1,"hello");
map.set("1","hello string");

const person={
  name:"amar",
}


const profession={
  profession:"software engineer" 

}
map.set(person,profession);
// console.log(map.values(person))


let x  = 3 // shadowed variable
{
  // overshadowwing  original x=3 as x=1
  let x = 1;
  // console.log(x)
}

// console.log(x)

q=3;
// console.log(q) // valid


for(var i=0;i<5;i++){
  setTimeout(
    ()=>console.log(i),
    1000) 
} 



// {
//   var i=0;
//   setTimeout(
//     ()=>console.log(i),
//     1000) 
  
// }
// {
//   var i=1;
//   setTimeout(
//     ()=>console.log(i),
//     1000) 
  
// }
// {
//   var i=2;
//   setTimeout(
//     ()=>console.log(i),
//     1000) 
  
// }
// {
//   var i=3;
//   setTimeout(
//     ()=>console.log(i),
//     1000) 
  
// }
// {
//   var i=4;
//   setTimeout(
//     ()=>console.log(i),
//     1000) 
//     i++;
  
// }





function sayHi(name) {

  const n= "hi";

  function greet() {
    return(n + name +" is created")
    
  }

  return greet
  
}


let cl=sayHi("john")

console.log(cl())


function counter() {
  let count=0;
  return function innerCount() {
    console.log(count++)
    console.log(count++)  
    count++;
    
  }

  
}


let count1=counter();
count1();
count1();
count1();


// let count2=counter();
// count2();
// count2();
// count2();










