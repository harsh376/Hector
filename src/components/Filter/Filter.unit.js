import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { List } from 'immutable';

import Filter from './Filter';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass} = ReactTestUtils;

describe('Filter', () => {
    it('renders `ResultsList`', () => {
        const entries = List.of('Ross', 'Rachel', 'Chandler');
        const filterEntries = (v) => v;
        const component = renderIntoDocument(
            <Filter input="" entries={entries} filterEntries={filterEntries} />
        );
        const items = scryRenderedDOMComponentsWithClass(component, 'item');

        expect(items.length).to.equal(3);
        expect(items[0].textContent).to.equal('Ross');
        expect(items[1].textContent).to.equal('Rachel');
        expect(items[2].textContent).to.equal('Chandler');
    });
});
