# 프로그래머스 주식가격 문제
def solution(prices):

    answer = []
    n = len(prices)
    for i in range(n-1) :
        time = 0
        for j in range(i+1,n) :
            time +=1
            if prices[i] > prices[j] :
                break
        answer.append(time)
    answer.append(0)

    return answer