import React, { Component } from 'react';
import {List} from 'immutable';

import Item from '../Item/Item';

export default class ResultsList extends Component {
    render() {
        const itemNodes = this.props.list.map( item => 
            <Item value={item} key={item} />
        );
        return (
            <div>
                {itemNodes}
            </div>
        );
    }
}

ResultsList.propTypes = {
    list: React.PropTypes.instanceOf(List)
}
ResultsList.defaultProps = {
    list: List()
}
