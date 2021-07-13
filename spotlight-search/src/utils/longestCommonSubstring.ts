// Function to return the count of characters in the longest common substring
// @param word: string - available word
// @param value: string - current input value
// @return the length of the longest common substring
const longestCommonSubstring = (word: string, value: string) => {
  // Dynamic programming lookup table
  const dp: number[][] = new Array(word.length + 1)
    .fill(false)
    .map(() => new Array(2).fill(0));

  let res = 0;
  for (let i = 1; i < word.length + 1; ++i) {
    for (let j = 1; j < value.length + 1; +j) {
      if (word[i - 1] === value[j - 1]) {
        dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
        if (dp[i % 2][j] > res) res = dp[i % 2][j];
      } else dp[i % 2][j] = 0;
    }
  }

  return res;
};

export default longestCommonSubstring;
