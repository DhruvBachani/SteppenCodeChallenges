#Checks if the binary string is 'good' or not 
def isGoodstring(binstr):
    if(binstr.count('1') == binstr.count('0')):
        for x in range(1, len(binstr)+1):
            if(binstr[0:x].count('1') < binstr[0:x].count('0')):
                return False
        return True

    else:
        return False

#Checks if the string is binary or not
def isBinary(binstr):
    for x in binstr:
        if (x != '1' and x != '0'):
            return False
    return True

#Returns all the good strings inside the given good string with starting and ending index
def getAllGoodstrings(binstr):
    leftIndex = 0
    rightIndex = len(binstr) - 1

    allGoodstrings = []

    while(leftIndex < len(binstr)-2):
        if(rightIndex <= leftIndex):
            rightIndex = len(binstr) - 1
            leftIndex += 1
        if(isGoodstring(binstr[leftIndex: rightIndex+1])):
            allGoodstrings.append(
                (leftIndex, rightIndex, binstr[leftIndex:rightIndex+1]))
        rightIndex -= 1
    return allGoodstrings

#Returns the good string with max base-19 value possible after rearranging the consecutive strings
def getMaxValueGoodstring(binstr):

    if(not isBinary(binstr) or not isGoodstring(binstr)):
        return "Given string is invalid"

    while True:
        possibleSwaps = getAllGoodstrings(binstr)
        swapFound = False
        for x in range(0, len(possibleSwaps)):
            for y in range(x+1, len(possibleSwaps)):
                if(possibleSwaps[x][1]+1 == possibleSwaps[y][0] and int(possibleSwaps[x][2], 2) < int(possibleSwaps[y][2], 2)):
                    swapFound = True
                    binstr = binstr[:possibleSwaps[x][0]] + possibleSwaps[y][2] + possibleSwaps[x][2] + binstr[possibleSwaps[y][1]+1:]
                    break
            if(swapFound):
                break
        if(not swapFound):
            break
    return binstr


#case 1
output = getMaxValueGoodstring('1010111000')
expectedOutput = '1110001010'
print("input: 1010111000  --  output: "+ output +"  -- expected output: " + expectedOutput+ "  --  match: " + str(output == expectedOutput))

#case 2
output = getMaxValueGoodstring('11011000')
expectedOutput = '11100100'
print("input: 11011000  --  output: "+ output +"  -- expected output: " + expectedOutput+ "  --  match: " + str(output == expectedOutput))

#case 3
output = getMaxValueGoodstring('1100')
expectedOutput = '1100'
print("input: 1100  --  output: "+ output +"  -- expected output: " + expectedOutput+ "  --  match: " + str(output == expectedOutput))

#case 4
output = getMaxValueGoodstring('1101001100')
expectedOutput = '1101001100'
print("input: 1101001100  --  output: "+ output +"  -- expected output: " + expectedOutput+ "  --  match: " + str(output == expectedOutput))

