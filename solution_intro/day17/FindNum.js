// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(num, k) {
    var answer = 0;
    return num.toString().indexOf(k) + 1 > 0 ? num.toString().indexOf(k) + 1 : -1;
}