import React, { Component } from 'react';

import ProgrammeModel from '../../models/programme-model.js';
import CourseItem from '../course-item/course-item.jsx';


export default class WinterCoursesList extends Component {
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
      <section className="winter-courses-list">
        <h3>Winter 2019 Trimester ({this.getNumCredits()} ECTS)</h3>
        <CourseItem></CourseItem>
        {
          this.getCourses().map((courseNumber, i) =>
            <CourseItem
              key={courseNumber}
              courseNumber={courseNumber}
            ></CourseItem>
          )
        }
      </section>
    );
  }


  // methods definitions
  getCourses() {
    return this.state.programmeModel.winterModel.courses;
  }

  getNumCredits() {
    return this.state.programmeModel.winterModel.getNumCredits();
  }


  // event handlers
  onProgrammeModelUpdated() {
    this.setState(this.state);
  }
}