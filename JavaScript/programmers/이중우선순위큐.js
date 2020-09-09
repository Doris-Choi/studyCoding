// 🌴 프로그래머스: (힙) 이중우선순위큐
function solution(operations) {
  let arr = [];
  while (operations.length > 0) {
    const operation = operations.shift();
    const oper = operation[0];
    const val = parseInt(operation.slice(2));

    if (oper === 'I') {
      arr.push(val);
      arr.sort((a, b) => a - b);
      cnt++;
    } else {
      if (val > 0) {
        arr.pop();
      } else if (val < 0) {
        arr.shift();
      }
    }
  }

  if (arr.length === 0) {
    return [0, 0];
  } else if (arr.length === 1) {
    return [arr[0], arr[0]];
  } else {
    return [arr.pop(), arr.shift()];
  }
}

// 다른 풀이
function otherSolution(arg) {
  var list = [];
  arg.forEach((t) => {
    if (t[0] === 'I') {
      list.push(+t.split(' ')[1]);
    } else {
      if (!list.length) return;

      var val = (t[2] === '-' ? Math.min : Math.max)(...list);
      var delIndex = list.findIndex((t) => t === val);

      list.splice(delIndex, 1);
    }
  });

  return list.length ? [Math.max(...list), Math.min(...list)] : [0, 0];
}
// I가 operator로 들어오면 우선 list에 넣음
// +문자 => 숫자
// D가 들어온 경우 list의 길이가 0이면 그냥 끝
// 40번 줄 처럼 함수를 적용할 수도 있음
// max 또는 min의 index를 찾아서 list에서 삭제
