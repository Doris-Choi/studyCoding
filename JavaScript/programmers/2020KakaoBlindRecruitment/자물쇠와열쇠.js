// 📒 프로그래머스: (2020 KAKAO BLIND RECRUITMENT) 자물쇠와 열쇠
function solution(key, lock) {
  // sheet 만들기
  let sheet = [];
  let n = lock.length;
  let m = key.length;
  for (let i = 0; i < n + 2 * m - 2; i++) {
    let row = [];
    for (let j = 0; j < n + 2 * m - 2; j++) {
      if (i < m - 1 || i >= n + m - 1) {
        row.push(0);
      } else if (j < m - 1 || j >= n + m - 1) {
        row.push(0);
      } else {
        row.push(lock[i - m + 1][j - m + 1]);
      }
    }
    sheet.push(row);
  }

  if (scan(key, sheet)) {
    return true;
  } else if (scan(rotateKey(key), sheet)) {
    return true;
  } else if (scan(rotateKey(key, 2), sheet)) {
    return true;
  } else if (scan(rotateKey(key, 3), sheet)) {
    return true;
  } else {
    return false;
  }
}

const scan = (key, sheet) => {
  let m = key.length;
  for (let i = 0, len = sheet.length - m + 1; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let dup = sheet.map((ele) => ele.slice());
      for (let a = 0; a < m; a++) {
        for (let b = 0; b < m; b++) {
          dup[i + a][j + b] += key[a][b];
        }
      }

      let sum = 0;
      for (let a = m - 1; a < len; a++) {
        for (let b = m - 1; b < len; b++) {
          if (dup[a][b] === 1) sum++;
        }
      }

      if (sum === (len - m + 1) * (len - m + 1)) return true;
    }
  }
  return false;
};

const rotateKey = (key, n = 1) => {
  let rKey = [];
  n = n % 4;
  let m = key.length;
  if (n === 1) {
    for (let i = 0; i < m; i++) {
      let row = [];
      for (let j = 0; j < m; j++) {
        row.push(key[m - 1 - j][i]);
      }
      rKey.push(row);
    }
    return rKey;
  } else if (n === 2) {
    rKey = rotateKey(key);
    return rotateKey(rKey);
  } else if (n === 3) {
    rKey = rotateKey(key, 2);
    return rotateKey(rKey);
  } else {
    return key;
  }
};
