// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
    var answer = [];
    var setStr = [...my_str]
    for(a = 0; a < setStr.length; a+=n) {
        answer.push(setStr.slice(a, a + n).join(''))
    }
    return answer;
}