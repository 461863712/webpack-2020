//打包：webpack或者npm run build

//commonJS引入
const {add,mul} = require('./js/mathUtl.js');

console.log(add(1,2));
console.log(mul(1,2));

//ES6引入
import {name,age,height} from './js/info';
console.log(name);
console.log(age);
console.log(height);

require('./css/normal.css');

require('./css/specia.less');
