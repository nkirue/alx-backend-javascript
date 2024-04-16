/**
 * Retrieves the sum of ids of a list of students.
 * @returns the sum of all the student ids.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (sum, student) => sum + student.id,
      0
    );
  }
  return 0;
}
