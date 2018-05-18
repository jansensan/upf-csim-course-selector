// constants
import Courses from '../constants/courses.js';


// public api
let CoursesService = {
  getCourseByCourseNumber: getCourseByCourseNumber
};
export default CoursesService;


// public methods definitions
function getCourseByCourseNumber(courseNumber) {
  return _.find(
    Courses,
    function(c) {
      return c.code === courseNumber;
    }
  );
}