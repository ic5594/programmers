// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

function solution(n) {
    var answer = 0;
    var array = [];
    
    for(a = 0; a <= n; a++) {
       if (n % 2 == 1 && a % 2 == 1) {
           array.push(a)
       } else if (n % 2 == 0 && a % 2 == 0){
           array.push(a)
       }
    }
    
    if (n % 2 == 1) {
        answer = array.reduce((acc, cur) => {
            return acc + cur;
        })
    } else {
        const arr = [];
        for(a = 0; a < array.length; a++) {
            arr.push(array[a] * array[a]);
        }
        answer = arr.reduce((acc, cur) => {
            return acc + cur;
        })
    }
    
    return answer;
}