// 문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.


function solution(binomial) {
    var answer = binomial.split(' ');
    let result
    let a, b
    answer.map((item, index) => {  
        if(index == 0) a = parseInt(item)
        else if(index == 2) b = parseInt(item)
    });
    if(answer[1] == '+') result = a + b;
    else if(answer[1] == '-') result = a - b;
    else result = a * b;
    return result;
}