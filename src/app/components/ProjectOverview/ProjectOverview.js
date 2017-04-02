// @flow
import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import loader from '../../static/loader.gif';

import './ProjectOverview.scss';

type Props = {
  name: string,
  title: Object,
  description: Object,
};

class ProjectOverview extends React.PureComponent {
  props: Props;

  constructor(props) {
    super(props);
    this.state = { image: null };
  }

  componentDidMount() {
    import(`../../static/${this.props.name}.jpg`)
      .then(image => {
        this.setState({ image: image });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    const imageSrc = this.state.image ? this.state.image : loader;
    const linkedText = (
      <Link to="#"><FormattedMessage {...this.props.title} /></Link>
    );

    return (
      <div className="project-container">
        <div className="project-header">
          {linkedText}
        </div>
        <div className="project-content">
          <div className="project-image-container">
            <img className="project-image" src={imageSrc} />
          </div>
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
