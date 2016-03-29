import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import {List} from 'immutable';

import ResultsList from './ResultsList';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass} = ReactTestUtils;

describe('ResultsList', () => {
    it('renders a list of items', () => {
        const list = List.of('Ross', 'Rachel', 'Chandler');
        const component = renderIntoDocument(
            <ResultsList list={list} />
        );
        const items = scryRenderedDOMComponentsWithClass(component, 'item');

        expect(items.length).to.equal(3);
        expect(items[0].textContent).to.equal('Ross');
    });
});
