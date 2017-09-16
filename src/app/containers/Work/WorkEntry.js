// @flow
import React from 'react';

class WorkEntry extends React.Component {
  props: {
    heading: string,
    headingLink: string,
    subheading: string,
    children?: any,
  };

  render() {
    return (
      <div className="work-container">
        <div className="work-header">
          <a href={this.props.headingLink} target="_blank">
            {this.props.heading}
          </a>
        </div>
        <p>
          <b>{this.props.subheading}</b>
        </p>

        {this.props.children}
      </div>
    );
  }
}

export default WorkEntry;
