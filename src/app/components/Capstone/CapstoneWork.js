// @flow
import React from 'react';
import { Link } from 'react-router';

class CapstoneWork extends React.Component {
  render() {
    return (
      <div>
        <h4>Work</h4>
        <p>
          As a team we broke down the project into three domains: sensor circuits, data processing and storage, and a frontend application. Two of my teammates who had more experience with circuitry took over the responsibility of building the sensor circuits and my third teammate took over the frontend application. I was in-charge of processing the raw data being spit out by the sensors to get actual (x, y) coordinates and storing them in a database. In addition to that I also had to integrate the microcontrollers, the database and the frontend application.
        </p>
        <p>
          We had two sets of sensors for the two axes. Each set of sensors had an Arduino microcontroller connected to them which would read the saturation levels experienced by the sensors constantly, and write them into a buffer over a serial connection. Two concurrent
          {' '}
          <a
            href="https://github.com/ArmaanButt/APS490_Backend/blob/master/raspi/read.py"
            target="_blank"
          >
            python scripts
          </a>
          {' '}
          running on a raspberry pi would read from the serial connection.
        </p>

        <p>
          With some
          {' '}
          <a
            href="https://github.com/ArmaanButt/APS490_Backend/blob/master/raspi/read.py#L73"
            target="_blank"
          >
            manipulation
          </a>
          {' '}
          I was able to convert the incoming data into an array of values representing the saturation levels experience at each of the pixels:
          <br />
          <br />
          <code>
            [1000, 1010, 1000, 600, 650, 700, 600, 990, 1000, 1020]
          </code>
          <br />
          <br />
          Values closer to 1000 represent saturation in terms of light intensity. Lower values represent a shadow being experienced at those pixels. If we look at the resulting array, now it pretty much becomes a clustering problem. I used a
          {' '}
          <a
            href="https://github.com/ArmaanButt/APS490_Backend/blob/master/raspi/read.py#L48"
            target="_blank"
          >
            basic clustering algorithm
          </a>
          {' '}
          to identify the cluster with low values. So the resulting algorithm would give us three clusters and the absolute coordinates of their mid-point:
          <br />
          <br />
          <code>
            ([1000, 1010, 1000], 2)
          </code>
          <br />
          <br />
          <code>
            ([600, 650, 700, 600], 5)
          </code>
          <br />
          <br />
          <code>
            ([990, 1000, 1020], 9)
          </code>
          <br />
          <br />
          Next step was to
          {' '}
          <a
            href="https://github.com/ArmaanButt/APS490_Backend/blob/master/raspi/read.py#L65"
            target="_blank"
          >
            filter out the clusters
          </a>
          {' '}
          that represented saturation to leave us with:
          <br />
          <br />
          <code>
            ([600, 650, 700, 600], 5)
          </code>
          <br />
          <br />
          This gives us that pixel #
          {' '}
          <code>5</code>
          {' '}
          experienced a shadow of length:
          {' '}
          <code>4</code>
          {' '}
          pixels. The final step involved simply mapping the pixel coordinate to the coordinates in centimeters.
        </p>
        <p>
          Having got the coordinates, the next step was to store them. We used a MYSQL database for storing any data that was part of the system. Since there were multiple producers and consumers of data in the form of the microcontrollers and the frontend application, I felt there was need for standardization when it came to interacting with data in the database. Accordingly, I wrote an
          {' '}
          <a
            href="https://github.com/ArmaanButt/APS490_Backend"
            target="_blank"
          >
            API layer
          </a>
          {' '}
          in Python which exposed HTTP endpoints to perform relevant database operations. To ensure inter-operability and ease of configuration across different machines, I containerized the entire backend API and database into a Docker container resulting in a single line command to boot the system. Yay!
        </p>
      </div>
    );
  }
}

export default CapstoneWork;
