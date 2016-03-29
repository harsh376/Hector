import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import Filter from '../components/Filter/Filter';
import { filterEntries } from '../actions/action_creators';

export class IndexPage extends Component {
    render() {
        return (
            <Filter {...this.props} />
        );
    }
}

IndexPage.propTypes = {
    input: React.PropTypes.string,
    entries: React.PropTypes.instanceOf(List),
    filterEntries: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        input: state.get('input'),
        entries: state.get('filtered_text')
    };
}

export default connect(mapStateToProps, {
    filterEntries
})(IndexPage);
