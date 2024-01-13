let x;

const num = new Number(5);

// toString() - trả về một chuỗi biểu diễn số
x = num.toString();
// To get the length
x = num.toString().length;

// toFixed() -trả về một chuỗi biểu diễn số có số thập phân được chỉ định
x = num.toFixed(2);

// toPrecision() - trả về một số có độ dài được chỉ định
x = num.toPrecision(3);

// toExponential() -  chuyển đổi một số thành ký hiệu số mũ và trả về giá trị của nó dưới dạng chuỗi
x = num.toExponential(2);

// toLocaleString() - trả về một chuỗi biểu diễn số, sử dụng ngôn ngữ hiện tại
x = num.toLocaleString('en-US');

// valueOf - Get value
x = num.valueOf();

// Largest and smallest possible number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);