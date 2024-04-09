// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.

// 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
// 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.

function solution(arr, queries) {
    var answer = [];
    for(a = 0; a < queries.length; a++) {
        var setArray = [];
        arr.map((item, index) => {
            if(index >= queries[a][0] && index <= queries[a][1]) {
                setArray.push(item)
            }
        })   
        const min = Math.min(...setArray.filter((x) => x > queries[a][2]));
        const result = min == Infinity ? -1 : min;
        answer.push(result)
    }
    
    return answer;
}