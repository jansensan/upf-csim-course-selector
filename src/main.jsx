import _ from 'lodash';

import React from 'react';
import ReactDOM from 'react-dom';

// components
import CoursePoolList from './components/course-pool-list/course-pool-list.jsx';
import SelectedCoursesList from './components/selected-courses-list/selected-courses-list.jsx'


require('./csim-course-selector.scss');


ReactDOM.render(
  <div className="csim-course-selector">
    <div className="selected-courses-col">
      <SelectedCoursesList/>
    </div>
    <div className="courses-pool-col">
      <CoursePoolList/>
    </div>
  </div>
  ,
  document.getElementById('reactApp')
);