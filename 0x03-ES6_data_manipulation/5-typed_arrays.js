/**
 * Creates a buffer array with a given position set to a given value.
 * @returns a new Arraywith an Int8 value at a specific position
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buff = new DataView(new ArrayBuffer(length));
  buff.setInt8(position, value);
  return buff;
}
