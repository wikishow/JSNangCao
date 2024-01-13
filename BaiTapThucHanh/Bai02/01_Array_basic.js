let x;

// Mảng co bản
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Trình tạo mảng
const fruits = new Array('apple', 'grape', 'orange');

// Nhận giá trị theo chỉ mục
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';
fruits[3] = 'strawberry';

// Sử dụng độ dài làm chỉ mục sẽ luôn thêm vào cuối
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);