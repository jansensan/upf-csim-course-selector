import React, { Component } from 'react';

import ProgrammeModel from '../../models/programme-model.js';
import CoursesService from '../../services/courses-service.js';

import FallCoursesList from '../trimesters-courses-list/fall-courses-list.jsx';
import WinterCoursesList from '../trimesters-courses-list/winter-courses-list.jsx';
import SummerCoursesList from '../trimesters-courses-list/summer-courses-list.jsx';


require('./selected-courses-list.scss');


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
      <section className="selected-courses-list">
        <h2>Selected Courses ({ProgrammeModel.getCreditsSum()}/40 ECTS)</h2>
        <ul>
          <li>Main Optional Pool (min. 3): {ProgrammeModel.getNumCoursesFromPool2()}/3</li>
          <li>Optional Expansion Pool (max. 1): {ProgrammeModel.getNumCoursesFromPool3()}/1</li>
        </ul>

        <FallCoursesList />
        <WinterCoursesList />
        <SummerCoursesList />

        <button
          type="button"
          className="save-btn"
          onClick={this.onSelectionSaved}
        >Save Course Selection</button>
      </section>
    )
  }


  // event handlers
  onProgrammeModelUpdated() {
    this.setState(this.state);
  }

  onSelectionSaved() {
    CoursesService.saveSelectedCourses()
      .then(
        function onSavedSuccessfully(response) {
          console.info("SelectedCoursesList#onSavedSuccessfully()");
        },
        function onFailedToSave(error) {
          console.info("SelectedCoursesList#onFailedToSave()");
          console.warn('Unable to save course selection');
          console.table(error);
        }
      );
  }
}
