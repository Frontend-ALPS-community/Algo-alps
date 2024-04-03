// 프로그래머스 문제풀이

/*
놀이기구의 이용료가 처음에는 price원이고, 
두 번째부터는 이용 횟수에 따라 price의 배수가 됨
그리고 현재 가진 금액이 주어졌을 때, 
놀이기구를 count번 타게 되면 얼마가 모자라는지를 계산하는 문제


*/

function solution(price, money, count) {
  let totalCost = 0;

  for (let i = 1; i <= count; i++) {
    totalCost += price * i;
  }

  return totalCost > money ? totalCost - money : 0;
}

// 테스트
console.log(solution(3, 20, 4)); // 출력 결과: 10

// 다른사람의 풀이

function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
