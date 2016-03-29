import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        const styles = {
            background: '#e5f0ff',
            borderBottom: '2px solid white',
            padding: '10 0 0 10',
        };
        return (
            <div style={styles} className="item">
                <p><i>{this.props.value}</i></p>
            </div>
        );
    }
}

Item.propTypes = {
    item: React.PropTypes.string,
    key: React.PropTypes.string
};
Item.defaultProps = {
    item: '',
    key: ''
};
