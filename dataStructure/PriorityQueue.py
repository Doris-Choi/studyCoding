# -*- coding: utf-8 -*-
# PriorityQueue.py

# Priority Queue
class PriorityQueue:
    def __init__(self):
        self.heap = []
        self.count = 0

    def push(self, data):
        self.heap += [data]
        now = self.count
        par = (self.count-1)//2
        # 상향식으로 힙을 구성
        while now > 0 and self.heap[now] > self.heap[par]:
            self.heap[now], self.heap[par] = self.heap[par], self.heap[now]
            now = par
            par = (par - 1) // 2
        self.count += 1


    def pop(self):
        if self.count <= 0:
            print("Empty Queue!")
            return -9999
        res = self.heap[0]
        self.count -= 1
        self.heap[0] = self.heap[self.count]
        now = 0
        left_child = 1
        right_child = 2
        target = now
        # 하향식으로 힙 구성
        while left_child < self.count:
            if self.heap[target] < self.heap[left_child]: target = left_child
            if self.heap[target] < self.heap[right_child] and right_child < self.count: target = right_child
            if target == now: break
            else:
                self.heap[now], self.heap[target] = self.heap[target], self.heap[now]
                now = target
                left_child = now*2 + 1
                right_child = now*2 + 2
        print(res)
        return res

if __name__ == "__main__":
    pq = PriorityQueue()
    pq.push(5)
    pq.push(4)
    pq.push(8)
    pq.push(7)
    pq.push(9)
    pq.pop()
    pq.pop()
    pq.pop()
    pq.pop()
    pq.pop()
    pq.pop()

