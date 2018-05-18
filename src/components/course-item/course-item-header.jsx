import React, { Component } from 'react';


require('./course-item.scss');


export default class CourseItem extends Component {
  constructor(props) {
    super(props);
  }

  // react methods definitions
  render() {
    return (
      <div className="course-item course-item-header">
        <table>
          <tbody>
            <tr>
              <td className="title">Course Title</td>
              <td className="trimester">Trimester</td>
              <td className="pool">Pool</td>
              <td className="add"></td>
              <td className="remove"></td>
              <td className="external-link"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}