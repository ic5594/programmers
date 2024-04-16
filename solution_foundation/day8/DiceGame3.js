// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.



function solution(a, b, c, d) {
    var answer = 0;
    var array = [];
    
    array.push(a,b,c,d)
    
    const result = array.reduce((accu, curr) => { 
        accu[curr] = (accu[curr] || 0) + 1; 
        return accu;
    }, {});
    
    var key = Object.keys(result);
    var value = Object.values(result);
    console.log(key, value);
    if(key.length == 1) return 1111 * key[0];
    else if (key.length == 2) {
        if(value.includes(3)) {
            var q = 0;
            value.map((item, index) => {
                if(item == 3) q = index;
            }) 
            return (10 * Number(key[q]) + Number(key[1-q])) ** 2;
        } else if (value.includes(2)) {
            return (Number(key[1]) + Number(key[0])) * Math.abs(Number(key[1]) - Number(key[0]))
        }
    } else if (key.length == 3) {
        var q = [];
        value.map((item, index) => {
            if(item == 1) q.push(index);
        })
        return key[q[0]] * key[q[1]];
    } else {
        return Math.min(...array);
    }
    return answer;
}