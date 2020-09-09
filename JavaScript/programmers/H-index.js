// 🧹 프로그래머스: (정렬) H-index
function solution(citations) {
  citations.sort((a, b) => b - a);
  let h = 0;
  for (let i = 0, len = citations.length; i < len; i++) {
    if (citations[i] > i) {
      h++;
    } else {
      break;
    }
  }
  return h;
}
