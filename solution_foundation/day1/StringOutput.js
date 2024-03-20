// 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.

const readline = require('readline');
const rl = readline.createInterface({       //입력 함수
    input: process.stdin,
    output: process.stdout
});

let input = [];                             //input 배열 선언

rl.on('line', function (line) {             //문자열 출력
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str)
});