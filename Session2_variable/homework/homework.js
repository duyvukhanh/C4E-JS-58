// homework 1
console.log("Bài 1");
let r = prompt("Nhập bán kính hình tròn :");
let banKinh = Number(r)
let chuVi1 = 2 * Math.PI * banKinh;
let dienTich1 = Math.PI * (banKinh ** 2);
let output1 = "Chu vi hình tròn là " + chuVi1.toFixed(2) + ", diện tích hình tròn là " + dienTich1.toFixed(2);
console.log(output1);


// homework 2
console.log("Bài 2");
let dai = prompt("Nhập chiều dài hình chữ nhật :");
let rong = prompt("Nhập chiều rộng hình chữ nhật :");
let chieuDai = Number(dai);
let chieuRong = Number(rong);
let chuVi2 = 2 * (chieuDai + chieuRong);
let dienTich2 = chieuDai * chieuRong;
let output2 = "Chu vi hình chữ nhật là " + chuVi2.toFixed(2) + ", diện tích hình chữ nhật là " + dienTich2.toFixed(2)
console.log(output2);


// homework3
console.log("Bài 3");
let xInput = prompt("Nhập giá trị của x :");
let x = Number(xInput)
let y1 = 4 * (Math.pow(x, 2) + 10 * x * Math.sqrt(x) + 3 * x + 1);
let y2Tuso = Math.sin(Math.PI * Math.pow(x, 2)) + Math.sqrt(Math.pow(x, 2) + 1);
let y2Mauso = Math.exp(x * 2) + Math.cos((Math.PI / 4) * x);
let y2 = y2Tuso / y2Mauso;
console.log("y1 = "+y1)
console.log("y2 = "+y2)


// homework4
console.log("Bài 4");
let input = prompt("Nhập số tiền (VNĐ) :");
let lenInput = input.length;

numberOf100k = Math.floor(Number(input)/100000);

a = input.substring(lenInput - 1 - 4,lenInput);
numberOf50k = Math.floor(Number(a)/50000);

x = Number(a) - numberOf50k*50000;
numberOf20k = Math.floor(Number(x/20000));

y = Number(a) - numberOf50k*50000 - numberOf20k*20000;
numberOf10k = Math.floor(Number(y/10000));

output4 = input + " vnđ = " + numberOf100k + " tờ 100k + " + numberOf50k + " tờ 50k + "   + numberOf20k + " tờ 20k + " + numberOf10k + " tờ 10k";
console.log(output4);



// homework5
console.log("Bài 5");
let numbInput = prompt("Nhập số 3 chữ số:");
let sum = Number(numbInput[0]) +Number(numbInput[1])+Number(numbInput[2]);
console.log("Số " + numbInput + " có tổng các chữ số là " + sum);



// Optional homework
console.log("BTVN")
let inputName = prompt("Tên bạn là gì?");
let output5 = "Xin chào " + inputName;
console.log(output5);

let inputAge = prompt("Bạn bao nhiêu tuổi?");
let output6 = "Xin chào " + inputName + " , bạn " + inputAge + " tuổi";
console.log(output6);

let inputYOB = prompt("Bạn sinh năm bao nhiêu?");
let now = new Date();
let thisYear = now.getFullYear();

let age = thisYear - Number(inputYOB);
let output7 = "Xin chào " + inputName + " , bạn " + age + " tuổi";
console.log(output7);