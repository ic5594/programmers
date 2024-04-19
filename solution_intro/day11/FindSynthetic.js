// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    let base = Array.from(Array(n), (v,i) => i+1)
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        base = base.filter(el => el%i != 0 || el <= i)
    }
    return n - base.length
}