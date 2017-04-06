// @flow
import React from 'react';

type Props = {
  src: string,
  width: string,
  height: string,
};

class YoutubeVideo extends React.Component {
  props: Props;

  render() {
    return (
      <iframe
        width={this.props.width}
        height={this.props.height}
        src={this.props.src}
        frameBorder="0"
        allowFullScreen
      />
    );
  }
}

export default YoutubeVideo;
