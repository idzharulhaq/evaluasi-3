// nama : izharul haq

// soal 1:
document.write('<br>')

for (let y = 1; y < 10; y++) {
    for (let x = 1; x < 10; x++) {
        if ((y == 5) || (x == 5)) {
            document.write(' ' + (x + x - 1) + "")
        } else if ((y + x == 10) || (y == x)) {
            document.write(' ' + (x + x - 2) + "")
        } else {
            document.write(' ~ ')
        }
    }
    document.write('<br>')
}

// soal 2
document.write('<br>')

for (let y = 1; y < 10; y++) {
    for (let x = 1; x < 10; x++) {
        if (x <= y) {
            document.write('' + (x + x - 1) + "")
        } else {
            document.write(' ~ ')
        }
    }
    document.write('<br>')
}

// soal  3
document.write('<br>')

for (let y = 9; y > 0; y--) {
    for (let x = 1; x < 10; x++) {
        if (x >= y) {
            document.write('' + (y + y - 2) + "")
        } else {
            document.write(' ~ ')
        }
    }
    document.write('<br>')
}

// soal 4
document.write('<br>')

for (let y = 1; y < 10; y++) {
    for (let x = 1; x < 10; x++) {
        if (y == x) {
            document.write('' + (x + x - 1) + "")
        } else if (y + x == 10) {
            document.write('' + (x + x - 2) + "")
        } else if (y + x >= 10 && y >= x) {
            document.write(' B ')
        } else if ((y + x <= 10 && y <= x)) {
            document.write(' A ')
        } else {
            document.write(' ~ ')
        }
    }
    document.write('<br>')
}

// soal 5
document.write('<br>')

for (let y = 1; y < 10; y++) {
    for (let x = 1; x < 10; x++) {
        if (y == x) {
            document.write('' + (x + x - 1) + "")
        } else if (y + x == 10) {
            document.write('' + (x + x - 2) + "")
        } else if (y + x <= 10 && y >= x) {
            document.write(' A ')
        } else if ((y + x >= 10 && y <= x)) {
            document.write(' B ')
        } else {
            document.write(' ~ ')
        }
    }
    document.write('<br>')
}