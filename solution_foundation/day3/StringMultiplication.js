// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, k) {
    var answer = '';
    for (a = 0; a < k; a++) {
        answer += my_string
    }
    return answer;
}

solution(1,3)