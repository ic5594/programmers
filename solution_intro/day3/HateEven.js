// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    var answer = [];
    for(a = 0; a <= n; a++) {
        if (a % 2 == 1) {
            answer.push(a)
        }
    }
    return answer;
}

solution();