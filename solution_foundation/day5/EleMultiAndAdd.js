// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
    var multiArr = 0;
    var pluSquare = 0;
    multiArr = num_list.reduce((arr, cur) => {
        return arr * cur;
    });
    pluSquare = num_list.reduce((arr, cur) => {
        return (arr + cur);
    });
    
    console.log(multiArr, pluSquare ** 2)
    
    if (multiArr < pluSquare ** 2) return 1
    return 0;
}