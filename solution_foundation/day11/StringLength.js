// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
    var answer = [];
    var upperCase = Array(26).fill().map((v, i) => String.fromCharCode(i + 97));
    var lowerCase = Array(26).fill().map((v, i) => String.fromCharCode(i + 65));
    var result = [];
    for(a = 0; a < 52; a++) {
        result.push(0);
    }
    answer = [...lowerCase, ...upperCase];
    
    for(a = 0; a < my_string.length; a++) {
        answer.map((item, index) => {
            if(my_string[a] == item) {
                console.log(item, index);
                result[index] += 1;
            }
        })
    }
    
    return result;
}