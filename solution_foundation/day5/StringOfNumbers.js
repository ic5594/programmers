// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
    var answer = 0;
    var even = 0;
    var odd = 0;
    for(a = 0; a < num_list.length; a++) {
        if (num_list[a] % 2 == 0) {
            even += num_list[a].toString()
        } else {
            odd += num_list[a].toString()
        }
    }
    console.log(even, odd);
    answer = Number(even) + Number(odd)
    return answer
}