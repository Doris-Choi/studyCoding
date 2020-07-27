# -*- coding: utf-8 -*-
# BFS.py
# 그래프 구현은 dictionary, list 활용
# 너비 우선 탐색 활용 자료구조: 큐
def BFS(graph, start, is_sort=True):
    queue = [start]
    visit = []

    while queue:
        node = queue.pop(0)
        if node not in visit:
            visit.append(node)
            graph[node].sort(reverse=not is_sort)
            queue.extend(graph[node])

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

    print(BFS(graph, 'A', is_sort=True))
    print(BFS(graph, 'A', is_sort=False))