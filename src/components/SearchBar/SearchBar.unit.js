import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import SearchBar from './SearchBar';

const { renderIntoDocument, Simulate } = ReactTestUtils;

describe('SearchBar', () => {
    it('renders input field, and returns input value on enter', () => {
        let value;
        const handleEnter = (v) => value = v;

        const newValue = 'Ross';
        const component = renderIntoDocument(
            <SearchBar handleEnter={handleEnter} />
        );
        const node = ReactDOM.findDOMNode(component.refs.searchInput);
        node.value = newValue;
        Simulate.change(node);
        Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});

        expect(value).to.equal(newValue);
    });
});
