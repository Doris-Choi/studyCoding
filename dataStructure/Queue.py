# -*- coding: utf-8 -*-
# Queue.py

class Node():
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue():
    def __init__(self):
        self.front = None # 꼬리는 rear
        self.count = 0

    def push(self, data):
        if self.front == None:
            self.front = Node(data)
            self.count += 1
        else:
            cur = self.front
            while cur.next:
                cur = cur.next
            cur.next = Node(data)
            self.count += 1

    def pop(self):
        if self.front == None:
            print("empty Queue")
        else:
            cur = self.front
            self.front = cur.next
            self.count -= 1
            print(cur.data)
            return cur.data

    def show(self):
        if self.front == None:
            print("empty Queue")
        else:
            cur = self.front
            print("front ->", end = ' ')
            while cur.next:
                print(cur.data, end = ' ')
                cur = cur.next
            print(cur.data, "<- rear")



if __name__ == "__main__":
    q = Queue()
    q.push(1)
    q.push(2)
    q.push(3)
    q.push(4)
    q.push(5)
    q.show()
    q.pop()
    q.pop()
    q.pop()
    q.pop()
    q.pop()
    q.pop()
    q.show()