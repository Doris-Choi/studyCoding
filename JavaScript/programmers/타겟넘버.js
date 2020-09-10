// 🧮 프로그래머스: (깊이/너비 우선 탐색) 타겟 넘버
function solution(numbers, target) {
  let answer = 0;
  const dfs = (numbers, target, n) => {
    if (n === numbers.length) {
      if (target === numbers.reduce((acc, cur) => acc + cur)) {
        answer++;
      }
    } else {
      numbers[n] *= 1;
      dfs(numbers, target, n + 1);

      numbers[n] *= -1;
      dfs(numbers, target, n + 1);
    }
  };
  dfs(numbers, target, 0);
  return answer;
}
