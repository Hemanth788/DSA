def nToOne(n):
    if n==0:
        return
    print(n)
    nToOne(n-1)
n = int(input("Enter n"))
nToOne(n)