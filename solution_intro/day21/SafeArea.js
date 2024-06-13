// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// image.png
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

function solution(board) {
    let dxy = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    if(board.length == 1 && board[0][0] == 1) return 0;
    return board.reduce((ans, arr, x) => {
        return ans + arr.reduce((i, a, y) => {
            return i + !dxy.some(d => !(!(x + d[0] >= 0 && y + d[1] >= 0 && x + d[0] < board.length && y + d[1] < board.length) || board[x][y] + board[x + d[0]][y + d[1]] == 0));
        }, 0);
    },0) 
}