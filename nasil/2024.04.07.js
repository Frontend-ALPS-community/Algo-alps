// 최대공약수 구하기
function 최대공약수(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 최소공배수
function 최소공배수(a, b) {
  return (a * b) / 최대공약수(a, b);
}

function solution(n, m) {
  let answer = [];
  let greatestCommonDivisor = 최대공약수(n, m);
  let leastCommonMultiple = 최소공배수(n, m);
  answer.push(greatestCommonDivisor);
  answer.push(leastCommonMultiple);

  return answer;
}
