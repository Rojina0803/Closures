//Nested Function and closures

// function addSquares(a, b) {
//     function square(x) {
//       return x * x;
//     }
//     return square(a) + square(b);
//   }
  
//   console.log(addSquares(2, 3)); 
//   console.log(addSquares(3, 4)); 
//   console.log(addSquares(4, 5)); 
  

// function add(x,y){
//     function subs(i){
//         return i*i;
//     }
//     return subs(x) * subs(y);
// }

// closure

// console.log(add(2, 3)); 
// console.log(add(3, 4)); 
// console.log(add(4, 5)); 

// function outer(i,o){
//     function inner(p,q){
//         return i+o+p+q;
//     }
//     return inner;
// }
// console.log
// message="Konnichiwa"
// function greeting(){
//     let message="Te amo";
//     // {
//     //     let message="Konbanwa  "
//     //     console.log("Greeting:"+  message);
//     // }
//     {
//     let c= function hello(){
//         console.log("I am Me: " + message);
//     }
//     return c;
//     }
// }
//  c= greeting();
//  c();

//  function foo(){
//      let name="Mozzerella";
//     function displayname(){
//         console.log(name);

//     }
//     name="RETURNNN!!"
//     return displayname;
//  }
// let a= foo();
// a();

function dfc(){
    const x=()=>{
        let a =11
            console.log(a)
        const y=()=>{
            let a =13
            console.log(a)
            let z=()=>{
                let a =14
                console.log(a)
            }
            z(23);
           
        }
     y(22)
    }
    return x;
}
// let clos = dfc();
// clos();


function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); 

  // Name conflict

  function outside() {
    const x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  console.log(outside()(10)); 
  
  