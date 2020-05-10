# -*- coding: utf-8 -*-
# Sort.py

# 선택정렬
def selectionSort(arr):
    for i in range(len(arr)-1):
        # arr의 i번째부터 끝까지 숫자 중 가장 작은 숫자의 arr index 찾기
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[min_idx] > arr[j]:
                min_idx = j

        # arr의 위치 바꾸기
        tmp = arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx] = tmp
    return arr


if __name__ == "__main__":
    # 입력 받기: 각 숫자를 '띄어쓰기'로 구분하여 입력 받은 후 리스트(arr)로 처리
    arr = list(map(int, input().split(' ')))
    for n in selectionSort(arr):
        print(n, end = " ")