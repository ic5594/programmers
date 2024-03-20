// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

const readline = require('readline');
const rl = readline.createInterface({       //입력 함수
    input: process.stdin,
    output: process.stdout
});

let input = [];                             //iput배열 선언
let array = [];

rl.on('line', function (line) {             
    input = [line];
}).on('close',function(){
    str = input[0];
    for (a = 0; a < str.length; a++) {
        if (isAllLowerCase(str[a])) array.push(str[a].toLowerCase())    //대문자일떄 소문자     
        else array.push(str[a].toUpperCase())                           //소문자일때 대문자
    }
    console.log(array.join(''))
});

function isAllLowerCase(str) {          //대문자 감지
    return str === str.toUpperCase();
}