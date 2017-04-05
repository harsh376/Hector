// @flow
import React from 'react';

import './Work.scss';

class Work extends React.Component {
  static title: string = 'work';

  render() {
    return (
      <div className="work-container">
        <div className="work-header">
          <a href="http://www.eventmobi.com/" target="_blank">EventMobi</a>
          {' '}
        </div>
        <p><b>Software Engineer Intern [May 2015 - July 2016]</b></p>

        <div>
          <ul>
            <li>
              Full-stack development of applications such as private chat (~5000 users), discussions (&lt;= 25 channels), live polling (5000 users at a time) and digital signage
              <ul>
                <li>
                  Worked with Angular, React and Node on the front-end. Used Redux for state management.
                </li>
                <li>
                  Implemented RESTful backend data services using python, architected database relations and structure
                </li>
              </ul>
            </li>

            <li>
              Prototyped internationalization for the Live display (digital signage) application
            </li>
            <li>
              Created internal analytics dashboards for monitoring usage data using React and D3
            </li>
            <li>Deployed web services to production bi-weekly</li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Work;
