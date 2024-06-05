// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    var answer = [1, n];
    var count = 2;
    while(count < n / 2) {
        if(n % count == 0) answer.push(count, n / count)
        count += 1;
    }
    return [...new Set(answer)].sort((a, b) => {
        if(a < b) return -1;
        else if(a = b) return 0;
        else return 1;
    });
}