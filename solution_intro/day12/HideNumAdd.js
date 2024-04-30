// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    var answer = [...my_string]
    answer = answer.filter(x => !isNaN(x)).map(Number).reduce((acc, cur) => acc + cur)
    return answer;
}