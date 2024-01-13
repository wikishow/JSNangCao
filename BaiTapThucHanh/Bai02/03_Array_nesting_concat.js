let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Mảng lồng nhau

// Làm tổ quả bên trong quả
fruits.push(berries);

// truy cập 'blueberry' bằng cách sau
x = fruits[3][1];

// Tạo một biến mới và lồng cả hai mảng
const allFruits = [fruits, berries];

x = allFruits[1][2];

// concat() - Nối mảng
x = fruits.concat(berries);

// spread operator (...) - Nối với
x = [...fruits, ...berries];

// flat() - Làm phẳng một mảng
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

//Các phương thức tĩnh của đối tượng Array

// isArray() - Kiểm tra là một mảng
x = Array.isArray(fruits);

// from() - Tạo một mảng từ một mảng như giá trị
x = Array.from('12345');

// of() - Tạo một mảng từ một tập hợp các giá trị
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);