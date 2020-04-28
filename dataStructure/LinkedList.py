# -*- coding: utf-8 -*-
# LinkedList.py

class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self, data):
        self.head = Node(data)
        self.idx = 0

    # 맨 뒤에 데이터 추가
    def add(self, data):
        if self.head == None:
            self.head = Node(data)
            self.idx = 0
        else:
            cur = self.head
            while cur.next:
                cur = cur.next
            cur.next = Node(data)
            self.idx += 1

    # 맨 앞에 데이터 추가
    def addFront(self, data):
        if self.head == None:
            self.head = Node(data)
            self.idx = 0
        else:
            node = self.head
            self.head = Node(data)
            self.head.next = node
            self.idx += 1

    # 맨 앞에 데이터 삭제
    def deleteFront(self):
        if self.head == None:
            print('overflow 발생')
        else:
            self.head = self.head.next
            self.idx -= 1

    # 특정 위치에 데이터 추가
    # def insertAt(self, data, idx):

    # 특정 위치에 데이터 삭제
    # def deleteAt(self, idx):

    # 특정 값을 갖는 데이터의 첫 번째 위치 반환
    def search(self, data):
        ith = 0
        if self.head == None:
            print("해당 리스트가 비어있습니다.")
            return False

        if self.head.data == data:
            return ith

        cur = self.head
        while cur.next:
            if cur.data == data:
                return ith
            else:
                ith += 1

    # linked list 출력
    def showAll(self):
        if self.head == None:
            print('해당 리스트가 비어있습니다.')
        else:
            cur = self.head
            while cur.next:
                print(cur.data, end=' ')
                cur = cur.next
            print(cur.data)

if __name__ == "__main__":
    ll = LinkedList(4)
    # test add
    ll.add(3)
    ll.add(2)
    ll.showAll()
    # test addFront
    ll.addFront(1)
    ll.addFront(0)
    ll.showAll()
    # test deleteFront
    ll.deleteFront()
    ll.showAll()
    # test deleteFront with empty LinkedList
    ll.deleteFront()
    ll.deleteFront()
    ll.deleteFront()
    ll.deleteFront()
    ll.deleteFront()
    # test showAll with empty LinkedList
    ll.showAll()

    ll.add(4)
    ll.showAll()
    print(ll.idx)
