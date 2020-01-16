//打包：webpack ./src/main.js ./dist/bundle.js

//commonJS引入
const {add,mul} = require('./mathUtl.js');

console.log(add(1,2));
console.log(mul(1,2));

//ES6引入
import {name,age,height} from './info';
console.log(name);
console.log(age);
console.log(height);