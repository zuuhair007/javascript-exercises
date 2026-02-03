const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Zouhair', () => {
    expect(values.firstName).toEqual('Zouhair');
  });
  test('lastName is Sahtout', () => {
    expect(values.lastName).toEqual('Sahtout');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 1997', () => {
    expect(values.birthYear).toEqual(1997);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Zouhair Sahtout and I am 29 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Zouhair Sahtout', () => {
    expect(values.fullName).toEqual('Zouhair Sahtout');
  });
  test('age is 29', () => {
    expect(values.age).toEqual(29);
  });
});
