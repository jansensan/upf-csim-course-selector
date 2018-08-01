// constants
import Courses from '../constants/courses.js';
import CourseCodes from '../constants/course-codes.js';

// models
import CoursePool from '../models/course-pool.js';


// public api
let CoursesService = {
  fetchSelectedCourses: fetchSelectedCourses,
  getCourseByCourseNumber: getCourseByCourseNumber,
  saveSelectedCourses: saveSelectedCourses,
};
export default CoursesService;


// public methods definitions
function fetchSelectedCourses() {
  console.info("CoursesService#fetchSelectedCourses()");

  let url = 'services/get-courses.php';

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(getSanitizedCourseCodeList(xhr.responseText));
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

function getCourseByCourseNumber(code) {
  return _.find(
    Courses,
    function(c) {
      return c.code === code;
    }
  );
}

function getSanitizedCourseCodeList(list) {
  list = JSON.parse(list);
  let validList = [];
  _.forEach(list, function(code) {
    if (_.includes(CourseCodes, code)) {
      validList.push(code);
    }
  });
  return validList;
}

function saveSelectedCourses() {
  console.info("CoursesService#saveSelectedCourses()");

  // prepare data to save
  let selectedCourseCodes = [];
  _.forEach(
    CoursePool.selected,
    function(course) {
      if (!course.isMandatory) {
        selectedCourseCodes.push(course.code);
      }
    }
  );

  // request save
  let json = JSON.stringify(selectedCourseCodes);
  let url = 'services/save-courses.php';
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(json);
  });
}