function getChange (totalPayable, cashPaid) {
  var coinArray = [200, 100, 50, 20, 10, 5, 2, 1];
  var resultArray = [];
  if(typeof totalPayable !== 'number' || typeof cashPaid !== 'number' || totalPayable < 0 || cashPaid < 0) {
    return ['All args should be positive integers you moron.'];
  }
  if(totalPayable - cashPaid > 0) {
    return [-1];
  }
  var totalChange = cashPaid - totalPayable;

  coinArray.forEach(function(coin) {
    while (totalChange >= coin) {
      totalChange -= coin;
      resultArray.push(coin)
    }
  })
  return resultArray;
}
