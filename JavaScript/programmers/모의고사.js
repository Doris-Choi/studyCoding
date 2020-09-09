// 🔎 프로그래머스: (완전탐색) 모의고사
function solution(answers) {
  let correct = [0, 0, 0];
  const sheet2 = [1, 3, 4, 5];
  const sheet3 = [3, 1, 2, 4, 5];
  for (let i = 0, len = answers.length; i < len; i++) {
    let compr = answers[i];
    if ((i % 5) + 1 === compr) correct[0]++;

    if (i % 2 === 0 && compr === 2) {
      correct[1]++;
    } else if (i % 2 === 1 && sheet2[((i - 1) / 2) % 4] === compr) {
      correct[1]++;
    }

    if (sheet3[parseInt((i % 10) / 2)] === compr) correct[2]++;
  }
  let answer = [];
  correct.forEach((ele, idx) => {
    if (ele === Math.max(...correct)) answer.push(idx + 1);
  });
  return answer;
}
// =====> for문 내용
// const sheet2 = [2, 1, 2, 3, 2, 4, 2, 5];
// const sheet3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
// for (let i = 0, len = answers.length; i < len; i++) {
//     let compr = answers[i];
//     if (i%5+1 === compr) correct[0]++;
//     if (sheet2[i%8] === compr) correct[1]++;
//     if (sheet3[i%10] === compr) correct[2]++;
// }

// 다른 풀이
// 이 왕 답안 저장하여 for할거면 차라리 깔끔하게 전체를 초기 선언하여 쓰는 방법이 깔끔하다.
function otherSolution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) answer.push(1);
  if (a2c === max) answer.push(2);
  if (a3c === max) answer.push(3);

  return answer;
}
