// 다음과 같이 출력하도록 코드를 작성해 주세요.
// ex) !@#$%^&*(\'"<>?:;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    const answer = `!@#$%^&*(\\'"<>?:;`         // \부분은 누락됨으로 \를 한번더 붙혀야한다.
    console.log(answer);
});