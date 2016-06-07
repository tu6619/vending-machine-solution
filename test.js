// This is what a simple unit test looks like:
test('This sample test should always pass!', function(assert) {
  var result = 1 + 1;
  assert.equal(result, 2); // just so we know everything loaded ok
});
// A failing test will be RED:
test('This is what a failing test looks like!', function(assert) {
  var result = [1,2,3].indexOf(1);  // this should be 0
  assert.equal(result, 0); // we *expect* this to fail
});

test('Should return empty array', function(assert) {
  var result = getChange(1, 1);
  var expected = [];
  assert.deepEqual(result, expected);
})

test('Payable is less than cash paid should return [-1]', function(assert) {
  var result = getChange(2, 1);
  var expected = [-1];
  assert.deepEqual(result, expected);
})

test('All args of getChange should be integers', function(assert) {
  var result = getChange('string', 1);
  var expected = ['All args should be positive integers you moron.'];
  assert.deepEqual(result, expected, 'All args should be integers you moron.');
  result = getChange(-1, 1);
  expected = ['All args should be positive integers you moron.'];
  assert.deepEqual(result, expected, 'All integer args are positive.')
})

test('if cash paid is one more than total payable, should return [1]', function(assert){
  var result = getChange(0,1);
  var expected = [1];
  assert.deepEqual(result, expected, 'change given is onepence')
})

test('if cash paid is 3 more than total payable, should return [2, 1]', function(assert){
  var result = getChange(3,6);
  var expected = [2, 1];
  assert.deepEqual(result, expected, 'change given is thrupence')
})

test('if cash paid is 5 more than total payable, should return [5]', function(assert){
  var result = getChange(30,35);
  var expected = [5];
  assert.deepEqual(result, expected, 'change given is 5p')
})


test('if cash paid is 13 more than total payable, should return [10, 2, 1]', function(assert){
  var result = getChange(30,43);
  var expected = [10, 2, 1];
  assert.deepEqual(result, expected, 'change given is 10, 2, 1p')
})

test('if cash paid is 23 more than total payable, should return [20, 2, 1]', function(assert){
  var result = getChange(20,43);
  var expected = [20, 2, 1];
  assert.deepEqual(result, expected, 'change given is 20, 2, 1p')
})
