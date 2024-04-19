// 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(n, k) {
    var answer = [];
    
    for(a = k; a <= n; a += k) {
        answer.push(a)
    }
    return answer;
}