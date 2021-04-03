def binarySearchRecursive(arr, k, l, r):
    m = (l+r)//2
    if l<r:
        if arr[m] == k:
            return m
        elif arr[m]<k:
            binarySearchRecursive(arr, k, m+1, r)
        else:
            binarySearchRecursive(arr, k, l, m)
    return -1
arr = [1, 2, 3, 4, 5]
k = 3
print(binarySearchRecursive(arr, k, 0, 4))