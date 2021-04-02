def ropeCutting(a, b, c, n):
    if n==0:  return 0
    if n<0: return -1
    res =  max(ropeCutting(a, b, c, n-a) , 
                ropeCutting(a, b, c, n-b), 
                ropeCutting(a, b, c, n-c))
    if res == -1:
        return -1
    return res+1
n, a, b, c = map(int, input("Enter n, a, b, c").split(" "))
print(ropeCutting(a, b, c, n))
