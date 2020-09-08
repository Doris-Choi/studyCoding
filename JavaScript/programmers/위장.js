// #️⃣ 프로그래머스: (해시) 위장
function solution(clothes) {
  var answer = 1;
  const clothSet = {};
  for (let i = 0, len = clothes.length; i < len; i++) {
    const cloth = clothes[i];
    clothSet[cloth[1]] = ++clothSet[cloth[1]] || 1;
  }

  for (let k in clothSet) {
    answer *= clothSet[k] + 1;
  }
  return answer - 1;
}
