# -*- coding: utf-8 -*-
# BinarySearchTree.py

# Node
class Node:
    def __init__(self, data):
        self.data = data
        self.left_child = None
        self.right_child = None

# BinarySearchTree
class BinarySearchTree:
    def __init__(self):
        self.root = None

    # ------------- 삽입 -----------------
    # 부모-자식: 이진 탐색 트리 삽입
    def _insert_node(self, node, data):
        if node == None:
            node = Node(data)
        else:
            if data < node.data:
                node.left_child = self._insert_node(node.left_child, data)
            else:
                node.right_child = self._insert_node(node.right_child, data)
        return node

    # 이진 탐색 트리 삽입
    def insert(self, data):
        self.root = self._insert_node(self.root, data)
        return self.root is not None

    # ------------- 탐색 -----------------
    # 부모-자식: 이진 탐색 트리 탐색
    def _search_data(self, node, data):
        if node == None: return None
        if node.data == data: return node
        elif node.data > data: self._search_data(node.left_child, data)
        else: self._search_data(node.right_child, data)

    # 이진 탐색 트리 탐색
    def search(self, data):
        return self._search_data(self.root, data)

    # ------------- 삭제 ----------------- ==> 다시
    # node부터 가장 작은 값 찾는 함수
    def _find_min(self, node):
        while node.left_child is not None:
            node = node.left_child
        return node

    # 부모-자식: 이진 탐색 트리 삭제
    def _delete_data(self, node, data):
        if node == None: return

        delete_flag = False
        if node.data > data:
            self._delete_data(node.left_child, data)
        elif node.data < data:
            self._delete_data(node.right_child, data)
        else:
            delete_flag = True
            if node.left_child is not None and node.right_child is not None:
                temp = self._find_min(node.right_child)
                node.data = temp.data
                node.right_child = self._delete_data(node.right_child, node.data)
            elif node.left_child is not None or node.right_child is not None:
                node = node.left_child or node.right_child
            else:
                node = None
        return node, delete_flag

    # 이진 탐색 트리 탐색
    def delete(self, data):
        self.root, deleted = self._delete_data(self.root, data)
        return deleted

    # ------------- 순회 -----------------
    # 부모-자식 이진 탐색 트리 순회 (전위 순회 방식) traverse
    def _preorder(self, node):
        if node == None: return
        print(node.data, end = ' ')
        self._preorder(node.left_child)
        self._preorder(node.right_child)

    # 전위 순회
    def preorder(self):
        self._preorder(self.root)

    # 부모-자식 이진 탐색 트리 순회 (중위 순회 방식)
    def _inorder(self, node):
        if node == None: return
        self._inorder(node.left_child)
        print(node.data, end = ' ')
        self._inorder(node.right_child)

    # 중위 순회
    def inorder(self):
        self._inorder(self.root)

    # 부모-자식 이진 탐색 트리 순회 (후위 순회 방식)
    def _postorder(self, node):
        if node == None: return
        self._postorder(node.left_child)
        self._postorder(node.right_child)
        print(node.data, end = ' ')

    # 후위 순회
    def postorder(self):
        self._postorder(self.root)

if __name__ == "__main__":
    bt = BinarySearchTree()
    bt.insert(30)
    bt.insert(17)
    bt.insert(48)
    bt.insert(5)
    bt.insert(23)
    bt.insert(37)
    bt.insert(50)
    bt.insert(1)

    # test: search
    print(bt.search(23))
    print(bt.search(2))

    # # test: delete
    # print(bt.delete(17))
    # bt.inorder()
    # print(bt.delete(55))
    # bt.inorder()

    # test: order
    bt.preorder()
    print()
    bt.inorder()
    print()
    bt.postorder()
    print()