// 3️⃣ 프로그래머스: (level3) 멀리뛰기
function solution(n) {
  const arr = [0, 1, 2];
  if (n < 3) return arr[n];
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return dp[n];
}

// 다른 풀이
function otherSolution(j) {
  if (j === 1) return 1;
  if (j === 2) return 2;
  return jump(j - 1) + jump(j - 2);
}
// 좋은 방법이지만, 과거에만 가능했던 것 같음
// 현재는 1234567을 매 단계마다 나누어야 함
