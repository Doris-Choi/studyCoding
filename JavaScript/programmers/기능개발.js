// 프로그래머스 기능개발 문제
function solution(progresses, speeds) {
  const answer = [];
  let progress = progresses.shift();
  let speed = speeds.shift();
  let days = 1;
  let count = 0;
  while (progress) {
    if (progress + speed * days >= 100) {
      count++;
      progress = progresses.shift();
      speed = speeds.shift();
    } else {
      days++;
      if (count > 0) {
        answer.push(count);
        count = 0;
      }
    }
  }
  answer.push(count);
  return answer;
}

// 다른 사람 풀이
// ⭐️ 먼저 남은 날짜(days)를 구해놓고 시작
function otherSolution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index]),
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
