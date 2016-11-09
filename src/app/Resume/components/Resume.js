/* eslint-disable max-len */
import React from 'react';
import Button from 'react-bootstrap/lib/Button';

// TODO: Add tests

let pdfUrl = '../static/Resume_Harsh_Verma.pdf';
let wordUrl = '../static/Resume_Harsh_Verma.docx';
if (process.env.BROWSER) {
  pdfUrl = require('file?name=Resume_Harsh_Verma.pdf!../static/Resume_Harsh_Verma.pdf');
  wordUrl = require('file?name=Resume_Harsh_Verma.docx!../static/Resume_Harsh_Verma.docx');
}

function Resume() {
  return (
    <div className="resume">
      <div className="download-resume">
        <div className="download-option">
          <form action={pdfUrl} method="GET">
            <Button type="submit" bsStyle="primary">PDF</Button>
          </form>
        </div>
        <div className="download-option">
          <form action={wordUrl} method="GET">
            <Button type="submit" bsStyle="primary">Word</Button>
          </form>
        </div>
      </div>
      <div className="resume-section">
        <h5>EDUCATION</h5>
        <span className="resume-education">University of Toronto, St. George Campus</span>
        <span className="resume-education">Computer Engineering, Bachelors in Applied Science and Engineering</span>
        <span className="resume-education">Expected date of graduation: April, 2017</span>
      </div>

      <div className="resume-section">
        <h5>TECHNICAL KNOWLEDGE</h5>
        <ul className="resume-list">
          <li>RESTful backend microservices: Python, Flask, SQLAlchemy, MYSQL, Alembic</li>
          <li>Web development: Node/Express, Angular, React, Redux, PHP, HTML, CSS, Webpack, Gulp, Grunt, Npm</li>
          <li>DevOps: Docker, AWS, EC2, Elastic Beanstalk, RDS, ELB, Vagrant, Ansible, Splunk</li>
          <li>Relational Algebra, SQL, XML, XQuery/XPath</li>
          <li>Concepts: OOP, MapReduce, Unidirectional data flow, REST</li>
          <li>Other languages: C, C++, Assembly, Verilog</li>
          <li>Git</li>
        </ul>
      </div>

      <div className="resume-section">
        <h5>WORK EXPERIENCE</h5>
        <ul className="resume-list">
          <li><a target="_blank" href="http://www.eventmobi.com">EventMobi</a> - Software developer (May 2015 - August 2016)
            <ul className="resume-list">
              <li>Was part of the engineering team that was responsible for the real-time user engagement products of the company</li>
              <li>During my time there, delivered three new products: private chat, group discussions and live display(digital signage). Was also responsible for maintaining other products such as live polling, event surveys and gamification.</li>
              <li>Heavily involved in writing the front-end for these applications using Angular, React, Node and integrating with third party services such as SocketIO, Pusher</li>
              <li>Was responsible for writing RESTful backend services for the above mentioned products</li>
              <li>Configured the live display(digital signage) React application for internationalization</li>
              <li>Was on-call for the above services and was responsible for deploying the services to production</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="resume-section">
        <h5>PROJECTS</h5>
        <ul className="resume-list">
          <li>Web development
            <ul className="resume-list">
              <li><a target="_blank" href="https://github.com/harsh376/Hector">ReactJS application</a></li>
              <li>Used ExpressJS for serving the application, and python-flask for the <a target="_blank" href="https://github.com/harsh376/Ajax">API layer</a></li>
              <li>Continuously developing reusable React components (for e.g image uploader, drag-drop, location)</li>
              <li>Used Redux for maintaining, updating the state of the application in accordance with the concept of unidirectional data flow</li>
              <li>Used Docker in conjunction with Elastic Beanstalk to deploy the multi-containerized application</li>
            </ul>
          </li>
          <li><a target="_blank" href="https://github.com/harsh376/datasci">Data Analysis</a>
            <ul className="resume-list">
              <li>Twitter stream analysis: Sentiment score analysis, top ten hashtags</li>
              <li>Similarity matrix: Term-document vectors to determine similarity between documents by matrix multiplication</li>
              <li>Computed out-degrees of various nodes in the “billion triple dataset” (0.5 TB graph)</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
