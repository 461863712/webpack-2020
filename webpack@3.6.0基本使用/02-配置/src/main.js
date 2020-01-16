//打包：webpack或者npm run build

//commonJS引入
const {add,mul} = require('./mathUtl.js');

console.log(add(1,2));
console.log(mul(1,2));

//ES6引入
import {name,age,height} from './info';
console.log(name);
console.log(age);
console.log(height);