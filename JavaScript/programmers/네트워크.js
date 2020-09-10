// 🧮 프로그래머스: (깊이/너비 우선 탐색) 네트워크
function solution(n, computers) {
  // BFS로 풀고 싶었음
  const data = computers.map((ele1, idx1) => {
    const neighbor = [];
    ele1.forEach((ele2, idx2) => {
      if (ele2 === 1 && idx1 !== idx2) neighbor.push(idx2);
    });
    return {
      isVisit: false,
      neighbor: neighbor,
    };
  });

  let i = 0;
  let answer = neighbor1;
  let queue = [];
  while (true) {
    if (!data[i].isVisit) {
      queue = queue.concat(data[i].neighbor);
      data[i].isVisit = true;
    }

    if (queue.length === 0) {
      i = data.findIndex((ele) => !ele.isVisit);
      if (i === -1) break;
      answer++;
    } else {
      i = queue.shift();
    }
  }
  return answer;
}

// 다른 풀이
// 사람들은 DFS로 많이 풀었던데, 나는 DFS를 완전 이해하지 못하고 있는지 더 복잡해보인다.
function otherSolution(n, computers) {
  var answer = 0;
  var isVisited = [];

  for (var i = 0; i < n; i++) {
    isVisited.push(false);
  }

  var DFS = function (computers, i) {
    console.log('DFS excuted');
    if (isVisited[i]) {
      return;
    }
    isVisited[i] = true;
    console.log(isVisited);

    for (var j = 0; j < computers.length; j++) {
      if (computers[i][j] === 1) {
        console.log(i + ', ' + j);
        console.log('connected');
        DFS(computers, j);
      }
    }
  };

  for (var i = 0; i < n; i++) {
    if (!isVisited[i]) {
      answer++;
      console.log(isVisited, '도입부');
      console.log(answer);
      DFS(computers, i);
    }
  }

  return answer;
}
