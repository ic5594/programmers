// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(poly) {
    const splited = poly.split(' + ')
    
    let xArr = splited.filter(x => x.includes('x')).map(x => x.split('x')[0] ? x.split('x')[0] : 1);
    
    let constArr = splited.filter((v) => !v.includes("x"));
    
    if (xArr.length && constArr.length) {
    xArr = xArr.reduce((a, b) => +a + +b);
    constArr = constArr.reduce((a, b) => +a + +b);
    return xArr == 1 ? `x + ${constArr}` : `${xArr}x + ${constArr}`;

  } else {
    if (xArr.length) {
      xArr = xArr.reduce((a, b) => +a + +b);
      return xArr == 1 ? "x" : `${xArr}x`;
    }
    if (constArr.length) {
      constArr = constArr.reduce((a, b) => +a + +b);
      return constArr + "";
    }
  }
}