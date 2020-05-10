# -*- coding: utf-8 -*-
# Sort.py

# 선택정렬
def selection_sort(arr):
    for i in range(len(arr)-1):
        # arr의 i번째부터 끝까지 숫자 중 가장 작은 숫자의 arr index 찾기
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[min_idx] > arr[j]:
                min_idx = j

        # arr의 위치 바꾸기
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# 삽입정렬
def insertion_sort(arr):
    for i in range(1, len(arr)):
        j = i-1
        while j>=0 and arr[j+1] < arr[j]:
            arr[j+1], arr[j] = arr[j], arr[j+1]
            j -= 1
    return arr

if __name__ == "__main__":
    # 입력 받기: 각 숫자를 '띄어쓰기'로 구분하여 입력 받은 후 리스트(arr)로 처리
    arr = [int(x) for x in input().split(' ')]
    # 선택 정렬 확인
    print("Selection Sort:", end = ' ')
    for n in selection_sort(arr):
        print(n, end = ' ')
    print()
    # 삽입 정렬 확인
    print("Insertion Sort:", end=' ')
    for n in insertion_sort(arr):
        print(n, end=' ')