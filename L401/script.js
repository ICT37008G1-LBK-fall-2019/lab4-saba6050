function Min(a, b, c) {
    let box = a;
    if (b < a && b < c) {
        box = b;
    } else if (c < a && c < b) {
        box = c
    }

    alert(box)
}

console.log(Min(8, 10, 1));