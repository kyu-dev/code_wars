# def get_count(sentence):
#     vowels = {"a", "e", "i", "o", "u"}
#     count = 0
#     for char in sentence:
#         if char in vowels:
#             count += 1
#     return count

def get_count(sentence):
    return sum(char in 'aeiou' for char in sentence)



    