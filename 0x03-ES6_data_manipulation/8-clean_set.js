/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @returns a string of all the set values that start.
 * with a specific string (startString)
 */
export default function cleanSet(set, startString) {
  const arts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        arts.push(valueSubStr);
      }
    }
  }
  return arts.join('-');
}
