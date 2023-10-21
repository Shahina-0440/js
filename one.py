def x():
    a=10
    def y():
        return a
    return y
d=x()
print(d())
print(a)
