// 프로그래머스 프린터 문제
function solution(priorities, location) {
  let answer = 0;
  while (priorities.length > 0) {
    const target = priorities.shift();
    if (priorities.filter((ele) => ele > target).length) {
      priorities.push(target);
      if (location === 0) {
        location = priorities.length - 1;
      } else {
        location--;
      }
    } else {
      answer++;
      if (location === 0) {
        break;
      } else {
        location--;
      }
    }
  }
  return answer;
}

// 다른 풀이
// ⭐️ Array.some 또는 Array.every 메소드
// ⭐️ location 값을 Object의 속성값으로 넣어서 구별하면 깔끔해짐
function otherSolution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  var count = 0;
  while (true) {
    var cur = list.splice(0, 1)[0];
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
