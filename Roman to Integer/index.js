let romanToInt = function (s) {
  const romanSymbolValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; I++) {
    const firstSymbolValue = romanSymbolValue[s[i]];
    const secondSymbolValue = romanSymbolValue[s[i + 1]];

    if (firstSymbolValue < secondSymbolValue) {
      result += secondSymbolValue - firstSymbolValue;
      i++;
    } else {
      result += firstSymbolValue;
    }
  }
  return result;
};
