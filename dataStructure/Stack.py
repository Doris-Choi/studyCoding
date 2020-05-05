# -*- coding: utf-8 -*-
# Stack.py

class Node():
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack():
    def __init__(self):
        self.top = None

    def push(self, data):
        if self.top == None:
            self.top = Node(data)
        else:
            cur = self.top
            self.top = Node(data)
            self.top.next = cur

    def pop(self):
        if self.top == None:
            print("empty Stack")
        else:
            cur = self.top
            self.top = cur.next
            print(cur.data)
            return cur.data

    def show(self):
        if self.top == None:
            print("empty Stack")
        else:
            cur = self.top
            print("top ->", end = ' ')
            while cur.next:
                print(cur.data, end = ' ')
                cur = cur.next
            print(cur.data)


if __name__ == "__main__":
    s = Stack()
    s.push(1)
    s.push(2)
    s.push(3)
    s.push(4)
    s.show()
    s.pop()
    s.pop()
    s.pop()
    s.pop()
    s.pop()
    s.show()