// 🧹 프로그래머스: (정렬) K번째수
function solution(array, commands) {
  let answer = [];
  while (commands.length > 0) {
    const comm = commands.shift();
    const sliceArr = array.slice(comm[0] - 1, comm[1]);
    sliceArr.sort((a, b) => a - b);

    answer.push(sliceArr[comm[2] - 1]);
  }
  return answer;
}

// 다른 풀이
function solution(array, commands) {
  var answer = [];

  answer = commands.map((a) => {
    return array.slice(a[0] - 1, a[1]).sort((b, c) => b - c)[a[2] - 1];
  });
  return answer;
}
// map을 잘 활용한 답안으로 보임
