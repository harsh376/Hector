import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleEnter = this.handleEnter.bind(this);
    }
    handleEnter(e) {
        this.props.handleEnter(e.target.value);
    }
    render() {
        const styles = {
            flex: 1,
            textAlign: 'center',
        };
        const inputStyles = {
            height: 50,
            fontSize: 15,
            textAlign: 'center',
            width: '100%',
            border: 0,
        };
        return (
            <div style={styles}>
                <input
                    ref="searchInput"
                    type="text"
                    placeholder="Enter character name"
                    onChange={this.handleEnter}
                    style={inputStyles}
                />
            </div>
        );
    }
}

SearchBar.propTypes = {
    handleEnter: React.PropTypes.func.isRequired
}
