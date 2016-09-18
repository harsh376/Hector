import React from 'react';
import {
  Grid,
  Row,
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Row, 'custom');

let imageUrl;

// TODO: Add loader to webpack config files
if (process.env.BROWSER || process.env.NODE_ENV === 'production') {
  imageUrl = require('file!../static/profile_pic.jpg');
}

/* eslint-disable max-len */
const intro = 'My name is Harsh. I am a Computer Engineering student at the University of Toronto. I recently finished a 15 month long internship as a Full-stack developer. Over the past few months, I\'ve picked up a number of technical skills and have been able to play around with a lot of exciting tech like React, Redux, Docker. I felt it would be a good idea to consolidate my learnings by integrating my knowledge of the different pieces of a web application into one.';
/* eslint-enable max-len */

const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <img
        src={imageUrl}
        className="image-profile-pic align-center"
        alt="Harsh Verma"
      />
    </Row>
    <Row bsStyle="custom">
      <div className="intro-text">
        <h3>Hi there!</h3>
        <p>{intro}</p>
      </div>
    </Row>
  </Grid>
);

function Home() {
  return (
    <div>{gridInstance}</div>
  );
}

export default Home;
