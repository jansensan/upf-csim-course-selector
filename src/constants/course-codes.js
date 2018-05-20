import Courses from './courses.js';


let CourseCodes = [];
_.forEach(
  Courses,
  function(course) {
    CourseCodes.push(course.code)
  }
);
export default CourseCodes;