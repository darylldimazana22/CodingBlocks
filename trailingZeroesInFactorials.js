trailingZeroesInFactorials = n => {
    let ans = 0;
    let pow = 5;

    while ((n / pow) > 0) {
        ans += Math.floor(n / pow);
        pow *= 5;
    }

    console.log(ans);
}

trailingZeroesInFactorials(96);

// might have margin of error with ultra large numbers
