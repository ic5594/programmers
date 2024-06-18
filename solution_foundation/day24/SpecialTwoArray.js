// 정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.

// arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.

function solution(n) {
    let twoDm = create2DArray(n)
    for(a = 0; a < n; a++) {
        for(b = 0; b < n; b++) {                        
            if(a == b){
                twoDm[a][b] = 1
            } else {
                twoDm[a][b] = 0
            }
        }
    }
    
    return twoDm
}

function create2DArray(rows, columns) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
}

console.log(solution(3))