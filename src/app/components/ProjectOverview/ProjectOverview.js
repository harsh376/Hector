// @flow
import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import './ProjectOverview.scss';

type Props = {
  name: string,
  title: Object,
  description: Object,
  isExternalLink: boolean,
  externalLink?: string,
};

class ProjectOverview extends React.PureComponent {
  props: Props;

  render() {
    let linkedText = !this.props.isExternalLink
      ? <Link to={`/projects/${this.props.name}`}>
          <FormattedMessage {...this.props.title} />
        </Link>
      : <a href={this.props.externalLink} target="_blank">
          <FormattedMessage {...this.props.title} />
        </a>;

    return (
      <div className="project-container">
        <div className="project-header">
          {linkedText}
        </div>
        <div className="project-content">
          <div className="project-description">
            <FormattedMessage
              {...this.props.description}
              values={{ linkedText }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectOverview;
