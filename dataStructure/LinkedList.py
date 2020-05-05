# -*- coding: utf-8 -*-
# LinkedList.py

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.idx = -1

    # 맨 앞에 데이터 추가
    def insertFront(self, data):
        if self.head == None:
            self.head = Node(data)
            self.idx += 1
        else:
            node = self.head
            self.head = Node(data)
            self.head.next = node
            self.idx += 1

    # 맨 뒤에 데이터 추가
    def insertEnd(self, data):
        if self.head == None:
            self.head = Node(data)
            self.idx += 1
        else:
            cur = self.head
            while cur.next:
                cur = cur.next
            cur.next = Node(data)
            self.idx += 1

    # 특정 위치 데이터 추가
    def insertAt(self, data, index=0):
        if index > self.idx + 1:
            print('INDEX:: out of range')
        elif index == 0:
            cur = self.head
            self.head = Node(data)
            self.head.next = cur
            self.idx += 1
        elif index == self.idx + 1:
            cur = self.head
            while cur.next:
                cur = cur.next
            cur.next = Node(data)
            self.idx += 1
        else:
            cur = self.head
            for _ in range(index-1):
                cur = cur.next
            node = cur.next
            cur.next = Node(data)
            cur.next.next = node
            self.idx += 1


    # 맨 앞에 데이터 삭제
    def deleteFront(self):
        if self.head == None:
            print('empty List')
        else:
            node = self.head
            self.head = node.next
            del node
            self.idx -= 1

    # 맨 뒤에 데이터 삭제
    def deleteEnd(self):
        if self.head == None:
            print('empty List')
        else:
            cur = self.head
            for _ in range(self.idx-1):
                cur = cur.next
            node = cur.next
            del node
            cur.next = None
            self.idx -= 1

    # 특정 위치 데이터 삭제
    def deleteAt(self, index=0):
        if self.head == None:
            print('empty List')
        elif index > self.idx:
            print('INDEX:: out of range')
        elif index == 0:
            node = self.head
            self.head = node.next
            del node
            self.idx -= 1
        elif index == self.idx:
            cur = self.head
            for _ in range(self.idx-1):
                cur = cur.next
            node = cur.next
            del node
            cur.next = None
            self.idx -= 1
        else:
            cur = self.head
            for _ in range(index-1):
                cur = cur.next
            node = cur.next
            cur.next = node.next
            del node
            self.idx -= 1


    # 특정 값을 갖는 데이터의 첫 번째 인덱스 반환
    def searchIndex(self, data):
        if self.head == None:
            print("empty List")
        else:
            cur = self.head
            ith = 0
            while ith <= self.idx:
                if cur.data == data:
                    return ith
                else:
                    cur = cur.next
                    ith += 1

            # 동일한 값이 없는 경우
            return -1

    # 특정 인덱스의 값을 반환
    def searchData(self, index):
        if self.head == None:
            print('empty List')
        else:
            cur = self.head
            for _ in range(index):
                cur = cur.next
            return cur.data

    # linked list 출력
    def showAll(self):
        if self.head == None:
            print('empty List')
        else:
            cur = self.head
            while cur.next:
                print(cur.data, '->', end=' ')
                cur = cur.next
            print(cur.data)


if __name__ == "__main__":
    ll = LinkedList()

    # test insert
    ll.insertEnd(3)
    ll.insertFront(2)
    print(ll.idx)
    ll.showAll()
    ll.insertAt(4, index=4)
    ll.insertAt(1)
    ll.insertAt(5, index=3)
    ll.insertAt(4, index=3)
    ll.showAll()
    print()

    # test delete
    ll.deleteFront()
    ll.showAll()
    ll.deleteEnd()
    ll.showAll()
    ll.deleteAt()
    ll.showAll()
    ll.deleteAt(index=4)
    ll.insertFront(1)
    ll.deleteAt(index=1)
    ll.showAll()
    print()

    # test search
    ll.insertEnd(4)
    ll.insertEnd(3)
    ll.insertEnd(4)
    ll.insertEnd(2)
    ll.insertEnd(7)
    ll.showAll()
    print(ll.searchIndex(4))
    ll.deleteAt(ll.searchIndex(4))
    ll.showAll()
    print(ll.searchData(ll.searchIndex(4)))
