import React, { Component } from 'react';

import ProgrammeModel from '../../models/programme-model.js';

import CourseItemHeader from '../course-item/course-item-header.jsx';
import CourseItem from '../course-item/course-item.jsx';


export default class FallCoursesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programmeModel: ProgrammeModel,
    };

    ProgrammeModel.updated.add(this.onProgrammeModelUpdated, this);
  }


  // react methods definitions
  render() {
    return (
      <section className="fall-courses-list">
        <h3>Fall 2018 Trimester ({this.getNumCredits()} ECTS)</h3>
        <CourseItemHeader></CourseItemHeader>
        {
          this.getCourses().map((courseNumber, i) =>
            <CourseItem
              key={courseNumber}
              courseNumber={courseNumber}
              hasRemoveButton={true}
              onRemoveClicked={this.onCourseRemoved.bind(this, courseNumber)}
            ></CourseItem>
          )
        }
      </section>
    );
  }


  // methods definitions
  getCourses() {
    return this.state.programmeModel.fallModel.courses;
  }

  getNumCredits() {
    return this.state.programmeModel.fallModel.getNumCredits();
  }


  // event handlers
  onCourseRemoved(courseNumber) {
    ProgrammeModel.deselectCourse(courseNumber);
  }

  onProgrammeModelUpdated() {
    this.setState(this.state);
  }
}