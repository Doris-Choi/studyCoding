# -*- coding: utf-8 -*-
# DoublyLinkedList.py

class Node():
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

class DoublyLinkedList():
    def __init__(self):
        self.head = None
        self.tail = None

    # 맨 앞에 데이터 추가
    def insertFront(self, data):
        if self.head == None:
            self.head = Node(data)
            self.tail = self.head
        else:
            cur = self.head
            self.head = Node(data)
            self.head.next = cur
            cur.prev = self.head

    # 맨 뒤에 데이터 추가
    def insertEnd(self, data):
        if self.tail == None:
            self.tail = Node(data)
            self.head = self.tail
        else:
            cur = self.tail
            self.tail = Node(data)
            self.tail.prev = cur
            cur.next = self.tail

    # print 리스트
    def showAll(self):
        if self.head == None:
            print("empty List")
        else:
            cur = self.head
            while cur != self.tail:
                print(cur.data, '<->', end = ' ')
                cur = cur.next
            print(cur.data)

    def showReverse(self):
        if self.tail == None:
            print("empty List")
        else:
            cur = self.tail
            while cur != self.head:
                print(cur.data, '<->', end = ' ')
                cur = cur.prev
            print(cur.data)




if __name__ == "__main__":
    dl = DoublyLinkedList()
    dl.insertFront(3)
    dl.insertFront(4)
    dl.showAll()
    dl.showReverse()