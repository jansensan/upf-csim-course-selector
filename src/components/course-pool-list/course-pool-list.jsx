import React, { Component } from 'react';

import CoursePool from '../../models/course-pool.js';
import ProgrammeModel from '../../models/programme-model.js';

import CourseItemHeader from '../course-item/course-item-header.jsx';
import CourseItem from '../course-item/course-item.jsx';


export default class CoursePoolList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursePool: CoursePool
    };

    ProgrammeModel.updated.add(this.onProgrammeModelUpdated, this);
  }

  // react methods definitions
  render() {
    return (
      <section>
        <h2>Course Pool</h2>
        <CourseItemHeader></CourseItemHeader>
        {
          this.state.coursePool.available.map((course) =>
            <CourseItem
              key={course.code}
              courseNumber={course.code}
              hasAddButton={true}
              onAddClicked={this.onCourseAdded.bind(this, course)}
            ></CourseItem>
          )
        }
      </section>
    );
  }

  // event handlers
  onCourseAdded(course) {
    ProgrammeModel.selectCourse(course);
  }

  onProgrammeModelUpdated() {
    this.setState(this.state);
  }
}