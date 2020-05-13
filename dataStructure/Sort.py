# -*- coding: utf-8 -*-
# Sort.py

# 선택 정렬
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

# 삽입 정렬
def insertion_sort(arr):
    for i in range(1, len(arr)):
        j = i-1
        while j>=0 and arr[j+1] < arr[j]:
            arr[j+1], arr[j] = arr[j], arr[j+1]
            j -= 1
    return arr

# 퀵 정렬
def quick_sort(arr):
    if len(arr) <= 1: return arr
    pivot = arr[len(arr)//2]
    less, equal, greater = [], [], []
    for n in arr:
        if n < pivot: less.append(n)
        elif n == pivot: equal.append(n)
        else: greater.append(n)
    return quick_sort(less) + equal + quick_sort(greater) 

# 계수 정렬
def counting_sort(arr):
    # 0, 양의 정수 배열 가정
    max_value = arr[0]
    for a in arr:
        if a > max_value:
            max_value = a
    # bucket
    bucket = [0]*(max_value+1)
    for a in arr:
        bucket[a] += 1
    # 정렬된 배열
    sorted_arr = []
    for i in range(len(bucket)):
        sorted_arr += [i] * bucket[i]
    return sorted_arr

# 기수 정렬
def radix_sort(arr):
    # 가장 큰 수 찾기
    max_value = arr[0]
    for x in arr:
        if x > max_value:
            max_value = x
    # 기수 정렬 start
    exp = 1
    while max_value//exp > 0:
        bucket = [0] * 10
        res = [0] * len(arr)
        for x in arr: bucket[x//exp%10] += 1
        for i in range(1,10): bucket[i] += bucket[i-1]
        for i in range(len(arr)-1,-1,-1):
            res[bucket[arr[i]//exp%10]-1] = arr[i]
            bucket[arr[i]//exp%10] -= 1
        arr = res
        exp *= 10
    return arr

if __name__ == "__main__":
    # 입력 받기: 각 숫자를 '띄어쓰기'로 구분하여 입력 받은 후 리스트(arr)로 처리
    # arr = [int(x) for x in input().split(' ')]
    arr = [35, 5, 11, 2, 9, 65, 4, 734, 5]
    print(arr)
    # 선택 정렬 확인
    print("Selection Sort:", end = ' ')
    for n in selection_sort(arr):
        print(n, end = ' ')
    print()

    # 삽입 정렬 확인
    print("Insertion Sort:", end=' ')
    for n in insertion_sort(arr):
        print(n, end=' ')
    print()

    # 퀵 정렬 확인
    print("Quick Sort:", end=' ')
    for n in quick_sort(arr):
        print(n, end=' ')
    print()

    # 계수 정렬 확인
    print("Counting Sort:", end=' ')
    for n in counting_sort(arr):
        print(n, end=' ')
    print()

    # 기수 정렬 확인
    print("Radix Sort:", end=' ')
    for n in radix_sort(arr):
        print(n, end=' ')
    print()