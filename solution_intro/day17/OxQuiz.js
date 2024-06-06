// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(quiz) {
    var answer = [];
    for(var i = 0; i < quiz.length; i++){
        var list = quiz[i].split(" ")
        
        var result = list[list.length-1]
        var val = Number(list[0])
        console.log(list, result, val)
        for(var k = 1; k < list.length; k +=2){
            if(list[k] == "-"){
                val -= Number(list[k+1])
            }else if(list[k] == "+"){
                val += Number(list[k+1])
            }
        }val == result ? answer.push("O") : answer.push("X")
    }return answer;
}