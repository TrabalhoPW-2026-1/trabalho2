def make_counter(start=0, step=1):
    start = -99
    def counter():
        nonlocal start
        start += step
        return start
    return counter

counter1 = make_counter()
print(counter1())  # Output: 1
print(counter1())  # Output: 2

counter2 = make_counter(10, 2)
print(counter2())  # Output: 12
print(counter2())  # Output: 14

