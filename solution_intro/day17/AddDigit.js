// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
    var answer = [...n.toString()];
    return answer.map(x => x = parseInt(x)).reduce((acc, cur) => {
        return acc + cur;
    });
}