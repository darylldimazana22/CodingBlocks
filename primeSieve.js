// Sieve of Eratosthenes implementation
primeSieve = n => {
    let arr = new Array(n).fill(0);
    let s = "";

    // assume all odd numbers are prime
    for (let i = 3; i <= n; i += 2) {	
        arr[i] = 1;
    }

    // sieve
    for (let i = 3; i <= n; i += 2) {
        // if marked as prime
        if (arr[i] == 1) {
            // mark all multiples of it as not prime
            for (let j = i * i; j <= n; j = j + i) {
                arr[j] = 0;
            }
        }
    }

    // special cases
    arr[2] = 1;
    arr[1] = arr[0] = 0;

    for (let i = 0; i <= n; i++) {
        if (arr[i] == 1) {
            s += i + " ";
        }
    }

    console.log(s);
}

primeSieve(100);
