// 문자열 str과 정수 n이 주어집니다.
// str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

const readline = require('readline');
const rl = readline.createInterface({       //입력 함수
    input: process.stdin,
    output: process.stdout
});

let input = [];     //input배열 선언
let data = '';      //data 문자열 선언
rl.on('line', function (line) {
    input = line.split(' ');    //띄어쓰기로 나누기
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    for(a = 0; a < n; a++) {
        data += str             //data객체에 문자열 넣기
    }
    console.log(data)
});