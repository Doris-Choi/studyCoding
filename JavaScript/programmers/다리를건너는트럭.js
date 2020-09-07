// 📚 프로그래머스: (스택/큐) 다리를 건너는 트럭
function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
  let cross = [truck_weights[0]];
  let bridge = truck_weights.shift();
  let leftTime = [bridge_length];
  while (cross.length > 0) {
    answer++럭
    for (let i in leftTime) {
      leftTime[i]--;
    }

    // 다리 다 건넌 트럭 빼기
    if (leftTime[0] === 0) {
      bridge -= cross.shift();
      leftTime.shift();
    }

    // 다리에 트럭 추가하기 (무게가 가능할 때!)
    if (bridge + truck_weights[0] <= weight) {
      cross.push(truck_weights[0]);
      leftTime.push(bridge_length);
      bridge += truck_weights.shift();
    }
  }

  return answer;
}
//☠️ while문 안에 for문 대신 leftTime = leftTime.map(ele => ele--)로 했을 때 시간 초과가 되는 이유는?
