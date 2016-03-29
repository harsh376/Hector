import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

import Item from './Item';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass} = ReactTestUtils;

describe('Item', () => {
    it('renders an item', () => {
        const item = 'Ross';
        const component = renderIntoDocument(
            <Item value={item} key={item} />
        );
        const p = scryRenderedDOMComponentsWithClass(component, 'item');
        expect(p.length).to.equal(1);
        expect(p[0].textContent).to.equal('Ross');
    });
});
