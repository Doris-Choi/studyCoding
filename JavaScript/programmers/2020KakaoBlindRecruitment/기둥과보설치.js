// 📒 프로그래머스: (2020 KAKAO BLIND RECRUITMENT) 기둥과 보 설치
function solution(n, build_frame) {
  // 체크
  const validation = (currFrame, x, y, frame) => {
    if (frame === 0) {
      // 기둥인 경우
      if (y >= n) return false;
      //1. 바닥에 있음 y === 0
      if (y === 0) return true;
      //2. [x, y-1]에 기둥
      if (
        currFrame.some((ele) => {
          return ele[0] === x && ele[1] === y - 1 && ele[2] === 0;
        })
      )
        return true;
      // 3. [x-1, y]에 보 설치 또는 4. [x, y]에 보 설치
      if (
        currFrame.some((ele) => {
          return (
            (ele[0] === x - 1 && ele[1] === y && ele[2] === 1) ||
            (ele[0] === x && ele[1] === y && ele[2] === 1)
          );
        })
      )
        return true;
    } else {
      // 보인 경우
      //1. y가 0이 아닌 경우
      if (y === 0 || x >= n) return false;
      //2. [x, y-1]이나 [x+1, y-1]에 기둥이 설치되어 있는 경우
      if (
        currFrame.some((ele) => {
          return (
            (ele[0] === x && ele[1] === y - 1 && ele[2] === 0) ||
            (ele[0] === x + 1 && ele[1] === y - 1 && ele[2] === 0)
          );
        })
      )
        return true;
      //3. [x-1, y]과 [x+1, y]에 보가 설치되어 있는 경우
      if (
        currFrame.some(
          (ele) => ele[0] === x - 1 && ele[1] === y && ele[2] === 1,
        ) &&
        currFrame.some(
          (ele) => ele[0] === x + 1 && ele[1] === y && ele[2] === 1,
        )
      )
        return true;
    }
    return false;
  };
  // 설치
  const build = (currFrame, x, y, frame) => {
    if (validation(currFrame, x, y, frame)) {
      currFrame.push([x, y, frame]);
      console.log(`[${x},${y},${frame}] 설치`);
    }
    return;
  };
  // 삭제
  const destroy = (currFrame, x, y, frame) => {
    let idx = currFrame.findIndex((ele) => {
      return ele[0] === x && ele[1] === y && ele[2] === frame;
    });
    if (idx === -1) return;

    currFrame.splice(idx, 1);
    if (
      currFrame.every((ele, _, arr) => validation(arr, ele[0], ele[1], ele[2]))
    ) {
      console.log(`[${x},${y},${frame}] 삭제`);
      return;
    } else {
      currFrame.push([x, y, frame]);
      return;
    }
  };

  // sort
  const sortRule = (a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      if (a[1] < b[1]) {
        return -1;
      } else if (a[1] > b[1]) {
        return 1;
      } else {
        return a[2] - b[2];
      }
    }
  };

  // 퍼즐 시작!
  let currFrame = [];
  for (let i = 0, len = build_frame.length; i < len; i++) {
    let [x, y, frame, isBuild] = build_frame[i];
    if (isBuild === 1) {
      build(currFrame, x, y, frame);
    } else if (isBuild === 0) {
      destroy(currFrame, x, y, frame);
    }
  }

  currFrame.sort(sortRule);
  return currFrame;
}
