// 정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
    var answer = [];
    var length = arr.length;
    var a = 1;
    while(length > a) {
        a *= 2;
    }
    var count = a - length;
    for(a = 0; a < count; a++) {
        arr.push(0)
    }
    return arr;
}