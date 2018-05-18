import React, { Component } from 'react';

import ProgrammeModel from '../../models/programme-model.js';

import FallCoursesList from '../trimesters-courses-list/fall-courses-list.jsx';
import WinterCoursesList from '../trimesters-courses-list/winter-courses-list.jsx';
import SummerCoursesList from '../trimesters-courses-list/summer-courses-list.jsx';


export default class SelectedCoursesList extends Component {
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
      <section className="selected-courses">
        <h2>Selected Courses ({ProgrammeModel.getCreditsSum()}/40 ECTS)</h2>
        <ul>
          <li>Main Optional Pool (min. 3): {ProgrammeModel.getNumCoursesFromPool2()}/3</li>
          <li>Optional Expansion Pool (max. 1): {ProgrammeModel.getNumCoursesFromPool3()}/1</li>
        </ul>

        <FallCoursesList />
        <WinterCoursesList />
        <SummerCoursesList />
      </section>
    )
  }


  // event handlers
  onProgrammeModelUpdated() {
    this.setState(this.state);
  }
}
