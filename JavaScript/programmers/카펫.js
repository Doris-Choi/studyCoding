// 🔎 프로그래머스: (완전탐색) 카펫
function solution(brown, yellow) {
  let answer;

  // 2w + 2(h-2) = yellow
  // (w-2)(h-2) = brown
  // w > h
  // => wh = brown + yellow, w+h = (brown-4)/2
  for (let h = 1; h <= (brown + 4) / 4; h++) {
    let w = (brown + 4) / 2 - h;
    if (w * h === brown + yellow) {
      answer = [w, h];
      break;
    }
  }
  return answer;
}
