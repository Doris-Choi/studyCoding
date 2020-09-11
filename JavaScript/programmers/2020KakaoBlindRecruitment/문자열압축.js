// 📒 프로그래머스: (2020 KAKAO BLIND RECRUITMENT) 문자열 압축
function solution(s) {
  let min = s.length;
  for (let i = 1, len = s.length; i < len; i++) {
    let str = '';
    let cnt = 1;
    for (let j = 0; j < len; j += i) {
      if (s.substr(j, i) === s.substr(j + i, i)) {
        cnt++;
      } else if (cnt > 1) {
        str += cnt + s.substr(j, i);
        cnt = 1;
      } else {
        str += s.substr(j, i);
      }
    }

    if (min > str.length) min = str.length;
    str = '';
  }
  return min;
}
