def towerOfHanoi(n, source, aux, dest):
    if n==0: return;
    towerOfHanoi(n-1, source, dest, aux);
    print("Moving from " + source + " to " + dest)
    towerOfHanoi(n-1, aux, source, dest);
towerOfHanoi(3, "A", "B", "C")
