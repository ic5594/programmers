// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.


function solution(array) {
    var adb = {};
    array.forEach((value) => {
        if(!adb[value]) {
            adb[value] = 1
        } else {
            adb[value] += 1
        }
    })
    console.log(Object.entries(adb), adb)
    const idxSet = Object.entries(adb).map(([key, value]) => {
        return {idx: key, count: value}
    });
    idxSet.sort((a,b) => b.count - a.count);
    // console.log(idxSet);
    return idxSet[0].count === idxSet[1]?.count ? -1 : Number(idxSet[0].idx);
}

solution([1,2,3,12,3,13,21,3,2,1])