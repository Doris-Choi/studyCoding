// 🧹 프로그래머스: (정렬) 가장 큰 수
function solution(numbers) {
  let answer = numbers
    .map((v) => v + '')
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join('');

  return answer[0] === '0' ? '0' : answer;
}

// 와 이거 씹소름...
