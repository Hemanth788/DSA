def sumOfDigits(n):
    if n==0: return 0
    return sumOfDigits(n//10) + (n%10)
n = int(input("Enter n "))
print(sumOfDigits(n))