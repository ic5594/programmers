// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

function solution(s) {
    var answer = 0;
    var array = [...s.split(' ')];
    array.map((item, index) => {
        if (item.toString() == 'Z') {
            answer -= array[index - 1];
        } else {
           answer += parseInt(item); 
        }
    });
    return answer
}