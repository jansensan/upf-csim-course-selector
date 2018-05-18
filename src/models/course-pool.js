// constants
import Courses from '../constants/courses.js';

// services
import CoursesService from '../services/courses-service.js';


// public api
let CoursePool = {
  // properties
  available: [],
  selected: [],

  // methods
  deselect: deselect,
  select: select,
};
init();
export default CoursePool;


// methods definitions
function init() {
  _.forEach(
    Courses,
    function(course) {
      CoursePool.available.push(course);
    }
  );
}

function select(courseId) {
  let course = CoursesService.getCourseByCourseNumber(courseId);
  if (_.includes(CoursePool.selected, course)) {
    return;
  };
  
  CoursePool.available = _.pull(CoursePool.available, course);
  CoursePool.selected.push(course);
}

function deselect(courseId) {
  let course = CoursesService.getCourseByCourseNumber(courseId);
  if (_.includes(CoursePool.available, course)) {
    return;
  };

  CoursePool.selected = _.pull(CoursePool.selected, course);
  CoursePool.available.push(course);
}