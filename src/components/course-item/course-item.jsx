import React, { Component } from 'react';
import CoursesService from '../../services/courses-service.js';

require('./course-item.scss');


export default class CourseItem extends Component {
  constructor(props) {
    super(props);

    // set default state data
    this.state = {
      data: {}
    };

    if (this.props.courseNumber) {
      this.state.data = CoursesService.getCourseByCourseNumber(this.props.courseNumber);

    } else {
      this.state.data.title = "Course Title";
      this.state.data.trimester = "Trimester";
      this.state.data.pool = "Pool";
    }
  }

  // react methods definitions
  render() {
    return (
      <div className="course-item">
        <button
          className="course-btn"
          type="button"
          onClick={this.props.onClick}
        >
          <table>
            <tbody>
              <tr>
                <td className="title">{this.state.data.title}</td>
                <td className="trimester">{this.state.data.trimester}</td>
                <td className="pool">{this.state.data.pool}</td>
              </tr>
            </tbody>
          </table>
        </button>
      </div>
    );
  }
}