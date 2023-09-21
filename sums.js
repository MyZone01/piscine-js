const sums = (number) => {
    const dp = new Array(number + 1).fill(null).map(() => []);
    dp[0] = [[]];

    for (let i = 1; i<= number; i++) {
        for (let j = i; j <= number; j++) {
            dp[j] = dp[j]
            .concat(
                dp[j - i]
                .map(partition => [...partition, i])
            );
        }
    }
  
    return dp[number].slice(0, -1);
}
