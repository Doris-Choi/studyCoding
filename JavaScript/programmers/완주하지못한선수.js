// #️⃣ 프로그래머스: (해시) 완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (var i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
  return participant[participant.length - 1];
}

// 다른 풀이
var otherSolution = (participant, completion) => {
  participant.find(
    (name) => !completion[name]--,
    completion.map((name) => (completion[name] = (completion[name] | 0) + 1)),
  );
};
