# -*- coding: utf-8 -*-
# DFS.py
# 그래프 구현은 dictionary, list 활용
# 깊이우선 탐색 활용 자료구조: 스택, 큐
def DFS(graph, start, is_sort=True):
    stack = [start]
    visit = []

    while stack:
        node = stack.pop()
        if node not in visit:
            visit.append(node)
            graph[node].sort(reverse=is_sort)
            stack.extend(graph[node])

    return visit

if __name__ == "__main__":
    graph = dict()
    graph['A'] = ['B', 'C']
    graph['B'] = ['A', 'D']
    graph['C'] = ['A', 'G', 'H', 'I']
    graph['D'] = ['B', 'E', 'F']
    graph['E'] = ['D']
    graph['F'] = ['D']
    graph['G'] = ['C']
    graph['H'] = ['C']
    graph['I'] = ['C', 'J']
    graph['J'] = ['I']

    print(DFS(graph, 'A', is_sort=True))
    print(DFS(graph, 'A', is_sort=False))