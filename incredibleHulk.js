incredibleHulk = n => {
    let ans = 0;
  
    while (n > 0) {
        n = n & (n - 1);
        ans++;
    }
    
    console.log(ans);
}

incredibleHulk(13);
