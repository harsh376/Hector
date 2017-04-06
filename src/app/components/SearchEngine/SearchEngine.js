// @flow
import React from 'react';

import './SearchEngine.scss';
import CustomImage from '../CustomImage/CustomImage';
import searchHome from '../../static/search_home.png';
import searchAutopredict from '../../static/search_autopredict.png';
import searchHistory from '../../static/search_history.png';
import searchSpellcheck from '../../static/search_spellcheck.png';
import searchSummary from '../../static/search_summary.png';

class SearchEngine extends React.Component {
  static title: string = 'searchEngine';
  render() {
    return (
      <div className="search-engine-container">

        <div className="search-engine-overview">
          <div>
            <CustomImage src={searchHome} width="500px" height="250px" />
          </div>
          <div>
            <h4>Overview</h4>
            <p>
              During fall of 2016, I took CSC326 (Programming languages). For my course project, I teamed up with Pushkar Bettadpur to create a basic search engine. We wrote the
              {' '}
              <a
                href="https://github.com/harsh376/search-engine-frontend"
                target="_blank"
              >
                frontend
              </a>
              {' '}
              in Bottle (A lightweight Python Web Framework). In order to build the data pipeline for the search engine, we wrote a
              {' '}
              <a href="https://github.com/harsh376/crawler" target="_blank">
                web crawler
              </a>
              {' '}
              in Python and used Google's Page rank algorithm to rank documents and store them in a SQLite database. We deployed the application using AWS by writing a
              {' '}
              <a
                href="https://github.com/harsh376/crawler/blob/master/deploy.py"
                target="_blank"
              >
                deploy script
              </a>
              {' '}
              that made use of
              {' '}
              <code>boto3</code>
              {' '}
              module. Here are some of the features that we implemented:
              {' '}
            </p>
          </div>
        </div>

        <br />

        <div className="search-engine-autopredict">
          <h5>Autopredict</h5>
          <div>
            <CustomImage src={searchAutopredict} width="300px" height="320px" />
          </div>
        </div>

        <br />
        <br />

        <div className="search-engine-history">
          <h5>Google sign-on and search history</h5>
          <div>
            <CustomImage src={searchHistory} width="500px" height="310px" />
          </div>
        </div>

        <br />
        <br />

        <div className="search-engine-spellcheck">
          <h5>Spell check</h5>
          <div>
            <CustomImage src={searchSpellcheck} width="600px" height="200px" />
          </div>
        </div>

        <br />
        <br />

        <div className="search-engine-summary">
          <h5>Summaries for each search result</h5>
          <div>
            <CustomImage src={searchSummary} width="600px" height="350px" />
          </div>
        </div>

        <br />
        <br />

        <div className="search-engine-takeaway">
          <h4>Takeaways</h4>
          <ul>
            <li>
              Learnt about the deployment process of an application by having to write
              {' '}
              <a
                href="https://github.com/harsh376/crawler/blob/master/deploy.py"
                target="_blank"
              >
                deploy
              </a>
              {' '}
              and
              {' '}
              <a
                href="https://github.com/harsh376/crawler/blob/master/terminate.py"
                target="_blank"
              >
                shutdown
              </a>
              {' '}
              scripts.
            </li>
            <li>
              Another takeaway was not making any assumptions about incoming data. While writing the crawler, a lot of the times there would be unexpected data and so it was important not to make any assumptions while parsing data.
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default SearchEngine;
