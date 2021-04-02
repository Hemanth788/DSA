def insertionSort(arr):
    for i in range(1, len(arr)):
        min = arr[i]
        j = i-1
        while min<arr[j] and j>=0:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = min 
    return arr
arr = [3,7,1,8,5]
print(insertionSort(arr))