
console.log(100);
console.log('Hello World');
console.log(20, 'Hello', true);
const x = 100;
console.log(x);

// Lỗi và cảnh báo bảng điều khiển
console.error('Alert');
console.warn('Warning');
// Log object như bảng
console.table({ name: 'Brad', email: 'brad@gmail.com' });

// Lệnh console nhóm
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Thêm CSS vào log
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);