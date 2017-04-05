// @flow
import React from 'react';

type Props = {
  src: string,
  width?: string,
  height?: string,
  alt?: string,
  label?: string,
};

const labelStyles = {
  marginTop: '10px',
  fontStyle: 'italic',
};

class CustomImage extends React.Component {
  props: Props;

  static defaultProps = {
    width: '300',
    height: '300',
    alt: '',
  };

  render() {
    return (
      <div>
        <img
          src={this.props.src}
          width={this.props.width}
          height={this.props.height}
          alt={this.props.alt}
        />

        {this.props.label && <p style={labelStyles}>{this.props.label}</p>}
      </div>
    );
  }
}

export default CustomImage;
