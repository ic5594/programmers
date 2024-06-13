// 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
    var len = num_list.length;
    return num_list.sort((a, b) => {
        if(a < b) return -1;
        else if (a == b) return 0;
        else return 1;
    }).slice(5, len)
}