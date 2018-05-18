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
        <table>
          <tbody>
            <tr>
              <td className="title">{this.state.data.title}</td>
              <td className="external-link">
                <a
                  className="action-btn"
                  href={this.state.data.url}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Icon - Go to Syllabus</title>
                    <path d="M402.286,301.714v91.429q0,34-24.143,58.143T320,475.429H82.286q-34,0-58.143-24.143T0,393.143V155.429q0-34,24.143-58.143T82.286,73.143H283.429a8.8,8.8,0,0,1,9.143,9.143v18.286a8.8,8.8,0,0,1-9.143,9.143H82.286A44.02,44.02,0,0,0,50,123.143a44.02,44.02,0,0,0-13.429,32.286V393.143A44.02,44.02,0,0,0,50,425.429a44.02,44.02,0,0,0,32.286,13.429H320a45.849,45.849,0,0,0,45.714-45.714V301.714a8.8,8.8,0,0,1,9.143-9.143h18.286a8.8,8.8,0,0,1,9.143,9.143ZM512,54.857V201.143A18.183,18.183,0,0,1,480.857,214l-50.286-50.286L244.286,350a8.986,8.986,0,0,1-13.143,0l-32.571-32.571a8.986,8.986,0,0,1,0-13.143L384.857,118,334.571,67.714a17.94,17.94,0,0,1,0-25.714,17.573,17.573,0,0,1,12.857-5.429H493.714A17.573,17.573,0,0,1,506.571,42,17.573,17.573,0,0,1,512,54.857Z"/>
                  </svg>
                </a>
              </td>
              <td className="trimester">{this.state.data.trimester}</td>
              <td className="pool">{this.state.data.pool}</td>

              {
                (this.props.hasAddButton) ?
                  <td className="add">
                    <button
                      type="button"
                      className="action-btn"
                      onClick={this.props.onAddClicked}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <title>Icon - Add Course</title>
                        <path d="M418.909,244.364v23.273a11.2,11.2,0,0,1-11.636,11.636h-128v128a11.2,11.2,0,0,1-11.636,11.636H244.364a11.2,11.2,0,0,1-11.636-11.636v-128h-128a11.2,11.2,0,0,1-11.636-11.636V244.364a11.2,11.2,0,0,1,11.636-11.636h128v-128a11.2,11.2,0,0,1,11.636-11.636h23.273a11.2,11.2,0,0,1,11.636,11.636v128h128a11.2,11.2,0,0,1,11.636,11.636Zm46.545,162.909V104.727q0-24-17.091-41.091T407.273,46.545H104.727q-24,0-41.091,17.091T46.545,104.727V407.273q0,24,17.091,41.091t41.091,17.091H407.273q24,0,41.091-17.091T465.455,407.273ZM512,104.727V407.273q0,43.273-30.727,74t-74,30.727H104.727q-43.273,0-74-30.727T0,407.273V104.727q0-43.273,30.727-74T104.727,0H407.273q43.273,0,74,30.727T512,104.727Z"/>
                      </svg>
                    </button>
                  </td>
                : null
              }

              {
                (this.hasRemoveButton()) ?
                  <td className="remove">
                    <button
                      type="button"
                      className="action-btn"
                      onClick={this.props.onRemoveClicked}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <title>Icon - Remove Course</title>
                        <path d="M192,202.667v192a10.27,10.27,0,0,1-10.667,10.667H160a10.27,10.27,0,0,1-10.667-10.667v-192A10.27,10.27,0,0,1,160,192h21.333A10.27,10.27,0,0,1,192,202.667Zm85.333,0v192a10.27,10.27,0,0,1-10.667,10.667H245.333a10.27,10.27,0,0,1-10.667-10.667v-192A10.27,10.27,0,0,1,245.333,192h21.333a10.27,10.27,0,0,1,10.667,10.667Zm85.333,0v192A10.27,10.27,0,0,1,352,405.333H330.667A10.27,10.27,0,0,1,320,394.667v-192A10.27,10.27,0,0,1,330.667,192H352a10.27,10.27,0,0,1,10.667,10.667ZM405.333,444V128H106.667V444A37.854,37.854,0,0,0,109,457.5a29.9,29.9,0,0,0,4.833,9q2.5,2.833,3.5,2.833H394.667q1,0,3.5-2.833a29.9,29.9,0,0,0,4.833-9A37.854,37.854,0,0,0,405.333,444Zm-224-358.667H330.667l-16-39A9.407,9.407,0,0,0,309,42.667H203.333a9.407,9.407,0,0,0-5.667,3.667ZM490.667,96v21.333A10.27,10.27,0,0,1,480,128H448V444q0,27.667-15.667,47.833T394.667,512H117.333q-22,0-37.667-19.5T64,445.333V128H32a10.27,10.27,0,0,1-10.667-10.667V96A10.27,10.27,0,0,1,32,85.333H135l23.333-55.667q5-12.333,18-21T202.667,0H309.333q13.333,0,26.333,8.667t18,21L377,85.333H480A10.27,10.27,0,0,1,490.667,96Z"/>
                      </svg>
                    </button>
                  </td>
                : null
              }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }


  // methods definitions
  hasRemoveButton() {
    return this.props.hasRemoveButton && !this.state.data.isMandatory;
  }
}