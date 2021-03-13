/**
 * Builds a regexp to match phone-numbers.
 *
 * ### Example (es module)
 * ```js
 * import phoneRegex from 'phone-regex-ts'
 * console.log(phoneRegex().test('11234567890'))
 * // => true
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var phoneRegex = require('phone-regex-ts');
 * console.log(phoneRegex().test('11234567890'))
 * // => true
 * ```
 * @param indian [false] - match Indian phone numbers
 * @param exact [false] - perform an exact match
 */
export const buildRegex = ({ indian = false, exact = false } = {}) => {
  const regexBase =
    '(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?';
  const indianRegexBase =
    '(?:(?:\\+|0{0,2})91(\\s*[\\ -]\\s*)?|[0]?)?[789]\\d{9}|(\\d[ -]?){10}\\d';

  if (indian) {
    if (exact) {
      return new RegExp('^' + indianRegexBase + '$');
    } else {
      return new RegExp('\\s*' + indianRegexBase + '\\s*', 'g');
    }
  } else {
    if (exact) {
      return new RegExp('^' + regexBase + '$');
    } else {
      return new RegExp('\\s*' + regexBase + '\\s*', 'g');
    }
  }
};

export default buildRegex;
