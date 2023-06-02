a = 100;
100
b = 100;
100
console.log(a===b);
VM136:1 true
 
object 1 = { message: 'Hello' };
VM253:1 Uncaught SyntaxError: Unexpected number
object1 = { message: 'Hello' };
{message: 'Hello'}
object2 = { message: 'Hello' };
{message: 'Hello'}
console.log(object1 === object2);
VM456:1 false
 
object1 = object2;
{message: 'Hello'}
console.log(object1 === object2);
VM535:1 true
 
console.log(object2.message);
VM658:1 Hello
 
object1 = { message: 'Hello', price: 100 }
{message: 'Hello', price: 100}
const {message} = object1;
 
console.log(message);
VM970:1 Hello
 
const { price } = object1;
 
console.log(price);
VM1086:1 100
 
