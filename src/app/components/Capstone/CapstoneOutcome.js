import React from 'react';

class CapstoneOutcome extends React.Component {
  render() {
    return (
      <div>
        <h4>Outcome and learnings</h4>
        <p>
          On integrating the different parts of the system, this is what the prototype looked like. We weren’t able to get the high-speed circuitry finished in time and so had to revert to a low-speed circuit to ensure a working proof-of-concept which decreased the probability of a detection due to lower sampling rate. By sheer luck, the low-speed system sampling time instant and time at which the bullet passed the system matched and we were able to observe 1 detection. This gave us reason to believe that a high-speed circuit of sensors could very well detect bullets accurately and consistently. Here are my learnings from this project:
        </p>
        <ul>
          <li>
            <b>Automate</b> processes, setup, testing as much as you can.
          </li>
          <li>
            If there are multiple parts in a system, then
            {' '}
            <b>
              agree on a communication protocol/interfacing methods beforehand
            </b>
            . This allows for concurrent work and increases team velocity.
          </li>
          <li>
            Always leave some
            {' '}
            <b>extra time for integrating different parts</b>
            {' '}
            of the system. Anything that can go wrong will go wrong!
          </li>
        </ul>
      </div>
    );
  }
}

export default CapstoneOutcome;
