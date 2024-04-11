// 문자열을 공백을 기준으로 단어 배열로 분리하기
// 짝수/홀수 알파벳 구분하기
// -> 배열로 변환해서 구볗하기
// 다시 문자열로 변환해서 반환하기

function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char, index) => {
          // 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 변환
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        .join("");
    })
    .join(" "); // 단어 배열 -> 문자열로 합쳐 반환(+공백구별)
}
