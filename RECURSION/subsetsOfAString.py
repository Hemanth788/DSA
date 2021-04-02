def subsetsOfAString(string, res="", index = 0):
    if index == len(string):
        if res == "":
            print("Empty string")
        else:
            print(res) 
        return
    subsetsOfAString(string, res+string[index], index+1)
    subsetsOfAString(string, res, index+1)
string = input("Enter String")
subsetsOfAString(string)