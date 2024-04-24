// 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

// 단, arr에 2가 없는 경우 [-1]을 return 합니다.

function solution(arr) {
    var answer = [];
    let array = [];
    arr.map((item, index) => {
        if(item == 2) array.push(index);
    });
    const length = array.length;
    if(length == 0) return [-1];
    else if(length == 1) return [2];
    return arr.slice(array[0], array[length - 1] + 1);
}