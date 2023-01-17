// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.



function findCombinations(k, n) {
    const result = [];
    function retrace(start, k, n, join) {
      if (join.length === k && n === 0) {
          result.push(join.slice());
          return;
      }
      for (let i = start; i <= 9; i++) {
          join.push(i);
          retrace(i + 1, k, n - i, join);
          join.pop();
      }
    }
    retrace(1, k, n, []);
    return result;
  }
  