import React, { Component } from 'react';
import { List } from 'immutable';

import SearchBar from '../SearchBar/SearchBar';
import ResultsList from '../ResultsList/ResultsList';

export default class Filter extends Component {
    render() {
        const styles = {
            border: '1px solid',
            width: 400,
        };
        return (
            <div style={styles}>
                <SearchBar handleEnter={this.props.filterEntries} />
                <ResultsList list={this.props.entries} />
            </div>
        );
    }
}

Filter.propTypes = {
    entries: React.PropTypes.instanceOf(List),
    filterEntries: React.PropTypes.func.isRequired
}
Filter.defaultProps = {
    entries: List()
}
