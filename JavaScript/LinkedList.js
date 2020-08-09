// Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    // Javascript의 경우 next가 다음 node 클래스를 가리킨다.
  }
}

// Linked List
class LinkedList {
  constructor() {
    this._head = null;
    this._count = 0;
  }

  // 링크드리스트 node 개수 불러오기
  get count() {
    return this._count;
  }

  // 링크드리스트 맨 뒤에 node 추가
  append = (data) => {
    const node = new Node(data);

    if (this._count === 0) {
      // head가 빈 경우
      this._head = node;
    } else {
      // 그 외
      let curr = this._head;

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = node;
    }

    // 개수 추가
    this._count++;
  };

  // 링크드리스트 맨 앞에 node 추가
  push = (data) => {
    const node = new Node(data);

    if (!this._head) {
      // head가 빈 경우
      this._head = node;
    } else {
      // 그 외
      node.next = this._head;
      this._head = node;
    }

    // 개수 증가
    this._count++;
  };

  // 링크드리스트 특정 위치 node 제거
  removeAt = (idx) => {
    let curr = this._head;

    if (idx >= this._count - 1 || idx < 0) {
      // 인덱스가 벗어난 경우
      console.log("*removeAt* Denied: Index is out of range");
    } else if (idx === 0) {
      // index가 0인 경우
      this._head = curr.next;
    } else {
      // 그 외
      let prev = curr;
      curr = curr.next;

      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
    }
  };
}

const linkedList = new LinkedList();
console.log(linkedList);
console.log(linkedList.append(34));
console.log(linkedList.append(32));
console.log(linkedList.push(31));
console.log(linkedList.count);
console.log(linkedList.removeAt(4));
console.log(linkedList);
