def binarySearch(arr, k):
    l = 0
    r = len(arr)-1
    while l<r:
        mid = (l+r)//2
        if arr[mid] == k:
            return mid
        elif arr[mid]<k:
            l = mid+1
        else:
            r = mid
        return -1 
    
arr = [1, 2, 3, 4, 5]
k = 1234
print(binarySearch(arr, k))