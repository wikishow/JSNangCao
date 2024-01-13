let x;

// gán vào 1 chuỗi
x = 5 + '5';

x = 5 + Number('5');

// gán vào 1 số
x = 5 * '5';

// null bị ép về 0 vì nó là giá trị `false`
x = 5 + null;

x = Number(null);

x = Number(true);
x = Number(false);

// true is coerced to a 1
x = 5 + true;

// false is coerced to 0 (falsy)
x = 5 + false;

// Undefined is coerced to 0 (falsy)
x = 5 + undefined;

console.log(x, typeof x);