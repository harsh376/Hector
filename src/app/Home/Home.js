import React from 'react';
import {
  Grid,
  Row,
  Button,
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

import './stylesheets/Home.scss';
import imageUrl from './static/profile_pic.jpg';
import pdfUrl from './static/Resume_Harsh_Verma.pdf';

bootstrapUtils.addStyle(Row, 'top');
bootstrapUtils.addStyle(Row, 'custom');
bootstrapUtils.addStyle(Row, 'social');

/* eslint-disable max-len */
const aboutMe = 'Senior Year Computer Engineering, University of Toronto. Full-stack developer. Interested in frontend web technologies, crawlers. Love playing football.';
/* eslint-enable max-len */

const gridInstance = (
  <Grid>
    <Row bsStyle="top">
      <img
        src={imageUrl}
        className="image-profile-pic align-center"
        alt="Harsh Verma"
      />
    </Row>
    <Row bsStyle="social">

      <a
        className="social linkBlack"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.github.com/harsh376"
      >
        <i className="fa fa-github fa-3x" aria-hidden="true" />
      </a>

      <a
        className="social linkLinkedin"
        target="_blank"
        rel="noopener noreferrer"
        href="https://ca.linkedin.com/in/harsh376"
      >
        <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
      </a>

      <a
        className="social linkTwitter"
        target="_blank"
        rel="noopener noreferrer"
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
        <h4 className="intro-heading">{aboutMe}</h4>
      </div>
    </Row>

    <Row bsStyle="custom">
      <div>
        <form action={pdfUrl} method="GET" target="_blank">
          <Button type="submit" bsStyle="primary">Resume</Button>
        </form>
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
