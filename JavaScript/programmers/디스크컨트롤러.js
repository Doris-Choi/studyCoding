// 🌴 프로그래머스: (힙) 디스크 컨트롤러
function solution(jobs) {
  let answer = 0;
  const len = jobs.length;
  jobs.sort((a, b) => a[0] - b[0]);

  let now = 0;
  let standby = [];
  let curr;
  while (true) {
    // 1. jobs가 남은 경우 && standby가 없는 경우
    if (jobs.length > 0 && standby.length === 0) {
      standby.push(jobs.shift());
      // 같은 시간에 요청이 들어온 경우에 대해 처리 시간이 짧은 것을 먼저 처리하기 위함
      while (jobs.length > 0) {
        if (standby[0][0] === jobs[0][0]) {
          standby.push(jobs.shift());
        } else {
          break;
        }
      }
      standby.sort((a, b) => a[1] - b[1]);
      now = standby[0][0];
    } else if (standby.length > 0) {
      // 2. standby가 있는 경우
      curr = standby.shift();
      now += curr[1];
      answer += now - curr[0];

      // 2-1. curr이 진행되는 동안 대기열
      while (jobs.length > 0) {
        if (jobs[0][0] <= now) {
          standby.push(jobs.shift());
        } else {
          break;
        }
      }
      if (standby.length > 0) {
        standby.sort((a, b) => a[1] - b[1]);
      }
    } else {
      // 3. jobs가 없는 경우 && standby가 없는 경우
      break;
    }
  }

  return parseInt(answer / len);
}

// 헤맨 부분
// - jobs가 남고 standby가 없는 경우에 대한 처리
