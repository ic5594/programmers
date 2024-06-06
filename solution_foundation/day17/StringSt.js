// 문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
    var answer = [];
    var count = 0;
    while(count <= myString.length) {
        if (myString.indexOf(pat, count) > -1) {
            answer.push(myString.indexOf(pat, count));
        }
        count+=1;
    }
    return [...new Set(answer)].length;
}