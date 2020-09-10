// 🧮 프로그래머스: (깊이/너비 우선 탐색) 단어 변환
function solution(begin, target, words) {
  // target이 words에 없는 경우 return 0;
  if (!words.some((ele) => ele === target)) return 0;
  // begin의 neighbor를 stack에 넣음 ** begin이 graph에 연결되지 않은 경우 return 0;
  let start = [].concat(findChild(begin, words));
  if (start.length === 0) return 0;

  // 그래프 자료 만들기
  let nodes = words.map((word, _, arr) => {
    return {
      isVisit: false,
      neighbor: findChild(word, arr),
      isTarget: word === target,
    };
  });

  let answer = words.length;
  while (start.length > 0) {
    let stack = [start.pop()];
    let route = [];
    while (stack.length > 0) {
      let cur = stack.pop();
      if (!nodes[cur].isVisit) {
        nodes[cur].isVisit = true;
        route.push(cur);
        stack.push(...nodes[cur].neighbor);
      }

      if (nodes[cur].isTarget) {
        answer = answer > route.length ? route.length : answer;
        break;
      }
    }
  }
  return answer;
}

// n-1개의 글자가 같으면 index를 Array로 반환하는 함수
function findChild(word, arr) {
  const idxs = [];
  arr.forEach((ele, idx) => {
    let n = 0;
    for (let i = 0, len = word.length; i < len; i++) {
      if (ele[i] === word[i]) n++;
    }
    if (n === word.length - 1) idxs.push(idx);
  });
  return idxs;
}
