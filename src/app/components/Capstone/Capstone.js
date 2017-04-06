// @flow
import React from 'react';

import YoutubeVideo from '../YoutubeVideo/YoutubeVideo';
import CustomImage from '../CustomImage/CustomImage';
import CapstoneBackground from './CapstoneBackground';
import CapstoneWork from './CapstoneWork';
import CapstoneOutcome from './CapstoneOutcome';

import './Capstone.scss';
import capstoneVertical from '../../static/capstone_frame_vertical.jpg';
import capstoneLoneDetection from '../../static/capstone_lone_detection.jpg';
import capstoneGroupPic from '../../static/capstone_group_pic.jpg';

class Capstone extends React.Component {
  static title: string = 'capstone';
  render() {
    return (
      <div className="capstone-container">

        <div className="capstone-left">
          <CapstoneBackground />
          <br />
          <CapstoneWork />
          <br />
          <CapstoneOutcome />
        </div>

        <div className="capstone-right">
          <CustomImage
            src={capstoneVertical}
            alt="Detection Frame"
            width="250"
            height="400"
            label="Detection Frame Prototype"
          />

          <br />
          <br />

          <YoutubeVideo
            src="https://www.youtube.com/embed/J-Gzdf0BYMU?rel=0"
            width="400"
            height="250"
          />

          <br />
          <br />

          <YoutubeVideo
            src="https://www.youtube.com/embed/RYZA9LHohvU?rel=0"
            width="400"
            height="250"
          />

          <br />
          <br />

          <CustomImage
            src={capstoneLoneDetection}
            alt="Lone detection"
            width="400"
            height="250"
            label="Lone point that was detected"
          />

          <br />
          <br />

          <CustomImage
            src={capstoneGroupPic}
            alt="Team photo"
            width="400"
            height="300"
            label="Team photo"
          />

        </div>
      </div>
    );
  }
}

export default Capstone;
