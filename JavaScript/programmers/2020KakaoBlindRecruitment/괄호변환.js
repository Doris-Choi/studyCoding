// 📒 프로그래머스: (2020 KAKAO BLIND RECRUITMENT) 괄호 변환
function solution(p) {
  const pair = (p) => {
    if (p.length === 0) return '';

    let [u, v] = balance(p);

    let str;
    if (isCorr(u)) {
      str = u;
      str += pair(v);
    } else {
      str = '(';
      str += pair(v);
      str += ')';
      str += reverseStr(u.slice(1, u.length - 1));
    }
    return str;
  };

  const answer = pair(p);
  return answer;
}

function balance(p) {
  let u = '';
  let v = '';
  let open = 0;
  let close = 0;
  for (let i = 0, len = p.length; i < len; i++) {
    if (p[i] === '(') {
      open++;
    } else {
      close++;
    }

    if (open === close) {
      u = p.slice(0, open * 2);
      v = p.slice(i + 1);
      break;
    }
  }
  return [u, v];
}

function isCorr(p) {
  let open = 0;
  let close = 0;
  for (let i = 0, len = p.length; i < len; i++) {
    if (p[i] === '(') {
      open++;
    } else {
      close++;
    }

    if (open < close) return false;
  }
  return true;
}

function reverseStr(p) {
  let str = '';
  for (let i = 0, len = p.length; i < len; i++) {
    if (p[i] === '(') {
      str += ')';
    } else {
      str += '(';
    }
  }
  return str;
}
