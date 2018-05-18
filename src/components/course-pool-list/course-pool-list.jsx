import React, { Component } from 'react';

import CoursePool from '../../models/course-pool.js';
import ProgrammeModel from '../../models/programme-model.js';

import CourseItem from '../course-item/course-item.jsx';


export default class CoursePoolList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursePool: CoursePool
    };
  }

  // react methods definitions
  render() {
    return (
      <section>
        <h2>Course Pool</h2>
        <CourseItem></CourseItem>
        {
          this.state.coursePool.available.map((course) =>
            <CourseItem
              key={course.code}
              courseNumber={course.code}
              onClick={this.onItemClicked.bind(this, course)}
            ></CourseItem>
          )
        }
      </section>
    );
  }

  // event handlers
  onItemClicked(course) {
    ProgrammeModel.selectCourse(course);
    this.setState(this.state);
  }
}