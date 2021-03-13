import test from 'ava';

import phone from './phone-regex';

test('exact: should find a (XXX) XXX-XXXX phone number when it exists', (t) => {
  t.assert(phone({ exact: true }).test('(123) 456-7890'));
});

test('exact: should find a phone XXXXXXXXXX number when it exists', (t) => {
  t.assert(phone({ exact: true }).test('1234567890'));
});

test('exact: should find a phone XXXXXXXXXXX number when it exists', (t) => {
  t.assert(phone({ exact: true }).test('11234567890'));
});

test('exact: should find a phone XXX XXX XXXX number when it exists', (t) => {
  t.assert(phone({ exact: true }).test('123 456 7890'));
});

test('exact: should find a phone X XXX XXX XXXX number when it exists', (t) => {
  t.assert(phone({ exact: true }).test('1 123 456 7890'));
});

test('exact: should find a phone X-XXX-XXX-XXXX number when it exists', (t) => {
  t.assert(phone({ exact: true }).test('1 123 456 7890'));
});

test('exact: should not find a phone number if it is not exact', (t) => {
  t.assert(phone({ exact: true }).test('apples 1 123 456 7890'));
});

test('exact: should not find a phone number if there is leading whitespace', (t) => {
  t.assert(phone({ exact: true }).test(' 1 123 456 7890'));
});

test('exact: should not find a phone number if there is trailing whitespace', (t) => {
  t.assert(phone({ exact: true }).test('1 123 456 7890 '));
});

test('indian: should find an Indian phone number when it exists', (t) => {
  t.assert(phone({ indian: true }).test('mangoes +91 9744142626'));
});

test('indian: should find all Indian phone numbers in a string', (t) => {
  const numbers = '+91 9744142626 orange 04842 274162'
  t.is(numbers.match(phone({ indian: true }))?.length, 2);
});

test('indian: should not find phone numbers when they do not exist', (t) => {
  t.is('pineapples'.match(phone({ indian: true })), null);
});

test('indian:,exact: should find a (+91 XXXXXXXXXX) phone number when it exists', (t) => {
  t.is(phone({ indian: true, exact: true }).test('+91 9744142626'), true);
});

test('indian:,exact: should find a (XXXXX XXXXXX) phone number when it exists', (t) => {
  t.is(phone({ indian: true, exact: true }).test('04842 274162'), true);
});

test('indian:,exact: should find a (XXXXXXXXXX) phone number when it exists', (t) => {
  t.is(phone({ indian: true, exact: true }).test('9744142626'), true);
});

test('indian:,exact: should find a (XXXX - XXXXXXXXXX) phone number when it exists', (t) => {
  t.is(phone({ indian: true, exact: true }).test('0091 - 9744142626'), true);
});

test('should find a phone number when it exists', (t) => {
  t.is(phone().test('apples 1 123 456 7890'), true);
});

test('should find all phone numbers in a string', (t) => {
  t.is('1 123 456 7890 orange (123) 456-7890'.match(phone())?.length, 2);
});

test('should not find phone numbers when they do not exist', (t) => {
  t.is('pineapples'.match(phone()), null);
});