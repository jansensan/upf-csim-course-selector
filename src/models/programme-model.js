import signals from 'signals';

// constants
import Courses from '../constants/courses.js';
import Trimesters from '../constants/trimesters.js';

// models
import TrimesterModel from './trimester-model.js';
import CoursePool from './course-pool.js';


// public api
let ProgrammeModel = {
  updated: new signals.Signal(),

  // models
  fallModel: new TrimesterModel(Trimesters.FALL),
  winterModel: new TrimesterModel(Trimesters.WINTER),
  summerModel: new TrimesterModel(Trimesters.SUMMER),

  // methods
  deselectCourse: deselectCourse,
  getCreditsSum: getCreditsSum,
  getNumCoursesFromPool2: getNumCoursesFromPool2,
  getNumCoursesFromPool3: getNumCoursesFromPool3,
  selectCourse: selectCourse,
};
init();
export default ProgrammeModel;


// methods definitions
function init() {
  // get mandatory courses
  let mandatoryCourses = _.filter(
    CoursePool.available,
    function(course) {
      return course.isMandatory === true;
    }
  );

  // assign them to each trimester
  _.forEach(
    mandatoryCourses,
    function(course) {
      addCourseToTrimester(course);
      // update course pool
      CoursePool.select(course.code);
    }
  );
}

function addCourseToTrimester(course) {
  switch (course.trimester) {
    case Trimesters.FALL:
      ProgrammeModel.fallModel.courses.push(course.code);
      break;
    case Trimesters.WINTER:
      ProgrammeModel.winterModel.courses.push(course.code);
      break;
    case Trimesters.SUMMER:
      ProgrammeModel.summerModel.courses.push(course.code);
      break;
  }
}

function getCreditsSum() {
  return ProgrammeModel.fallModel.getNumCredits() +
    ProgrammeModel.winterModel.getNumCredits() +
    ProgrammeModel.summerModel.getNumCredits();
}

function getNumCoursesFromPool2() {
  let coursesFromPool2 = _.filter(
    CoursePool.selected,
    function(c) {
      return c.pool === 2
    }
  );
  return coursesFromPool2.length;
}

function getNumCoursesFromPool3() {
  let coursesFromPool3 = _.filter(
    CoursePool.selected,
    function(c) {
      return c.pool === 3
    }
  );
  return coursesFromPool3.length;
}

function selectCourse(course) {
  addCourseToTrimester(course);
  // update course pool
  CoursePool.select(course.code);
  ProgrammeModel.updated.dispatch();
}

function deselectCourse() {
  ProgrammeModel.updated.dispatch();
}