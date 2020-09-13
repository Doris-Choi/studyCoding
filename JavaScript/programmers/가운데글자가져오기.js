// 1️⃣ 프로그래머스: (level1) 가운데 글자 가져오기
function solution(s) {
  let answer = '';
  if (s.length % 2 === 0) {
    return s.substr(parseInt(s.length / 2) - 1, 2);
  } else {
    return s.substr(parseInt(s.length / 2), 1);
  }
  return answer;
}
