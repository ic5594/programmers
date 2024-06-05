// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, num1, num2) {
    var answer = [...my_string];
    let temp;
    temp = answer[num1];
    answer[num1] = answer[num2];
    answer[num2] = temp;
    return answer.join('');
}