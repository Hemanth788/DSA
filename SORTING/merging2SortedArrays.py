def merging2SortedArrays(arr1, arr2):
    arr = []
    i = j = 0
    while i < len(arr1) and j<len(arr2):
        if arr1[i]<arr2[j]:
            arr.append(arr1[i])
            i += 1
        else:
            arr.append(arr2[j])
            j += 1
    while i<len(arr1):
        arr.append(arr1[i])
        i += 1
    while j<len(arr2):
        arr.append(arr2[j])
        j += 1
    return arr

arr1 = [10, 15, 20, 40]
arr2 = [5, 6, 6, 10, 15]
print(merging2SortedArrays(arr1, arr2))
    