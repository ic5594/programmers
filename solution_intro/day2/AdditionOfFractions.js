// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let a = numer1 * denom2 + numer2 * denom1;
    let b = denom1 * denom2;
    const gcd = (i, j) => (i % j === 0 ? j : gcd(j, i % j));
    const min = gcd(a, b);
    console.log(min)
    a = a / min;
    b = b / min;
    answer.push(a, b);
    return answer;
}


