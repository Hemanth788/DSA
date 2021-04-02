def oneToN(n):
    if n==0:
        return
    oneToN(n-1)
    print(n)
n = int(input("Enter n"))
oneToN(n)