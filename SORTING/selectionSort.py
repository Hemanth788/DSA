def selectionSort(arr):
    for i in range(len(arr)):
        mini = i
        for j in range(i+1, len(arr)):
            if arr[mini]>arr[j]:
                mini = j
        arr[mini], arr[i] = arr[i], arr[mini]
    return arr
    
    
    
arr = [3,7,1,8,5]
print(selectionSort(arr))