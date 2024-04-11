import ClassRoom from './0-classroom';

/**
 * Creates an array of 3 ClassRoom with a specific size
 * @returns an array of 3 ClassRoom objects.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
