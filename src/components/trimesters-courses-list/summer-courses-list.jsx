import React, { Component } from 'react';

import ProgrammeModel from '../../models/programme-model.js';

import CourseItemHeader from '../course-item/course-item-header.jsx';
import CourseItem from '../course-item/course-item.jsx';


export default class SummerCoursesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programmeModel: ProgrammeModel,
    };
    this.state.programmeModel.updated.add(this.onProgrammeModelUpdated, this);
  }


  // react methods definitions
  render() {
    return (
      <section className="summer-courses-list">
        <h3>Summer 2019 Trimester ({this.getNumCredits()} ECTS)</h3>
        <CourseItemHeader></CourseItemHeader>
        {
          this.getCourses().map((courseNumber, i) =>
            <CourseItem
              key={courseNumber}
              courseNumber={courseNumber}
              hasRemoveButton={true}
            ></CourseItem>
          )
        }
      </section>
    );
  }


  // methods definitions
  getCourses() {
    return this.state.programmeModel.summerModel.courses;
  }

  getNumCredits() {
    return this.state.programmeModel.summerModel.getNumCredits();
  }


  // event handlers
  onProgrammeModelUpdated() {
    this.setState(this.state);
  }
}