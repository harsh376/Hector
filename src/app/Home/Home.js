import React from 'react';
import {
  Grid,
  Row,
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Row, 'custom');
bootstrapUtils.addStyle(Row, 'social');

let imageUrl;

// TODO: Add loader to webpack config files
if (process.env.BROWSER || process.env.NODE_ENV === 'production') {
  imageUrl = require('file!./static/profile_pic.jpg');
}

/* eslint-disable max-len */
const intro1 = 'My name is Harsh. I am a 4th year Computer Engineering student at the University of Toronto. I recently finished a 15 month long internship as a full-stack software developer and am now seeking a full-time sofware developer position starting in summer 2017.';
const intro2 = 'My motivation behind creating this site was to use this as a playground for experimenting with technologies that I was interested in as well as to consolidate some of my learnings from my internship. Some of the tech/tooling used for creating this site: React, Redux, Express, Webpack, Docker.';
const intro3 = 'Feel free to contact me via mail or on any of the social networking platforms. Cheers!';
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
    <Row bsStyle="social">
      <a
        className="social linkFacebook"
        target="_blank"
        href="https://www.facebook.com/harsh376"
      >
          <i className="fa fa-facebook-official fa-3x" aria-hidden="true" />
      </a>

      <a
        className="social linkBlack"
        target="_blank"
        href="https://www.github.com/harsh376"
      >
        <i className="fa fa-github fa-3x" aria-hidden="true" />
      </a>

      <a
        className="social linkLinkedin"
        target="_blank"
        href="https://ca.linkedin.com/in/harsh376"
      >
        <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
      </a>

      <a
        className="social linkTwitter"
        target="_blank"
        href="https://www.twitter.com/harsh376"
      >
        <i className="fa fa-twitter-square fa-3x" aria-hidden="true" />
      </a>

      <a
        className="social linkBlack"
        href="mailto:harsh376@gmail.com"
      >
        <i className="fa fa-envelope fa-3x" aria-hidden="true" />
      </a>
    </Row>
    <Row bsStyle="custom">
      <div className="intro-text">
        <h4 className="intro-heading">Who am I?</h4>
        <p>{intro1}</p>
        <p>{intro2}</p>
        <p>{intro3}</p>
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
