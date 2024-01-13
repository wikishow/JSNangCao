let amount = 'hello';


amount = parseInt(amount);
amount = +amount;
amount = Number(amount);
// Chuyển chuỗi thành số
amount = amount.toString();
amount = String(amount);

// String => số thập phân
amount = parseFloat(amount);

//  number => boolean
amount = Boolean(amount);

// cách để có được NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);