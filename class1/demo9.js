// old dyntax
function add(a, b) {
  return a + b;
}
console.log(add(10, 20)); // 30

// new array syntax
let add2 = (x, y) => x + y;
console.log(add2(100, 200)); // 300

console.log(typeof add2);

let hello = name => 'hello' + name;
console.log(hello('Mark'))

let sayHello = () => 'welcome guest';
console.log(sayHello())