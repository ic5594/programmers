// boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.

// (x1 ∨ x2) ∧ (x3 ∨ x4)

function solution(x1, x2, x3, x4) {
    var answer = true;
    answer = calculation(calculation(x1, x2, 'down'), calculation(x3, x4, 'down'), 'up')  
    return answer;
}

const calculation = (a, b, set) => {
    if(set == 'down') {
        if(a == false && b == false) return false
        return true
    } else {
        if(a == true && b == true) return true
        return false
    }
}