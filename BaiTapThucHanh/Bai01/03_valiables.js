//khai báo biến

let firstName = 'John';
const lastName = 'Doe';
let age = 30;
// Quy ước đặt tên
// - Chỉ chữ cái, số, dấu gạch dưới và ký hiệu đô la
// - Không thể bắt đầu bằng số

// Định dạng nhiều từ
// FirstName = CamelCase
// first_name = gạch dưới
// FirstName = PascalCase
// tên = chữ thường

//có thể gán lại các biến `let`. Nếu bạn thay đổi `age` thành `const`, bạn sẽ gặp lỗi
console.log(age);
age = 31;
console.log(age);

// Với let,  có thể khai báo một giá trị mà không cần gán giá trị
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// không thể gán lại biến const
// x = 200 // Sẽ báo lỗi
// vẫn có thể thao tác với mảng và đối tượng bằng const
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: 'Brad',
};
person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);