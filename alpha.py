my_str = input("Your string: ")

words = [word.lower() for word in my_str.split()]

words.sort()

print("The sorted sequence is: ")
for word in words:
    print(word)
