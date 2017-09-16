// @flow
import React from 'react';

import './Work.scss';
import WorkEntry from './WorkEntry';

const tophatBody = () => (
  <div>
    <ul>
      <li>
        Working on improving the integration of the company's platform with
        external services.
      </li>
    </ul>
  </div>
);

const eventmobiBody = () => (
  <div>
    <ul>
      <li>
        Full-stack development of applications such as private chat (~5000
        users), discussions (&lt;= 25 channels), live polling (5000 users at a
        time) and digital signage
        <ul>
          <li>
            Worked with Angular, React and Node on the front-end. Used Redux for
            state management.
          </li>
          <li>
            Implemented RESTful backend data services using python, architected
            database relations and structure
          </li>
        </ul>
      </li>

      <li>
        Prototyped internationalization for the Live display (digital signage)
        application
      </li>
      <li>
        Created internal analytics dashboards for monitoring usage data using
        React and D3
      </li>
      <li>Deployed web services to production bi-weekly</li>
    </ul>
  </div>
);

class Work extends React.Component {
  static title: string = 'work';

  render() {
    return (
      <div>
        <WorkEntry
          heading="Top Hat"
          headingLink="https://tophat.com/"
          subheading="Software Engineer [July 2017 - Present]"
        >
          {tophatBody()}
        </WorkEntry>
        <WorkEntry
          heading="EventMobi"
          headingLink="https://www.eventmobi.com/"
          subheading="Software Engineer Intern [May 2015 - July 2016]"
        >
          {eventmobiBody()}
        </WorkEntry>
      </div>
    );
  }
}

export default Work;
