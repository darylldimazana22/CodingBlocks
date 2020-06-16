magicalPark = (a, m, n, k, s) => {
    let success = true;
  
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let ch = a[i][j];
            
            if (s < k) {
                success = false;
                break;
            }
            
            if (ch == '*') {
                s += 5;
            } else if (ch == '.') {
                s -= 2;
            } else {
                break;
            }
            
            if (j != n - 1) {
            s--;
            }
        }
    }

    if (success) {
        console.log("Yes");
        console.log(s);
    } else {
        console.log("No");
    }
}

magicalPark([
    [".", ".", "*", "."], 
    [".", "#", ".", "."],
    ["*", "*", ".", "."],
    [".", "#", "*", "*"]],
    4, 4, 5, 20);
